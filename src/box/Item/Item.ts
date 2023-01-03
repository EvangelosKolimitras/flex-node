import { ErrorReport } from '../../ErrorReport/ErrorReport';

const atIsANumber = (at: ItemOptions['at']): at is number => typeof at === 'number';
export const Item = (options: ItemOptions): FlexItemReturnType => {
	const { container, at } = options;

	const childNodes = <Array<HTMLElement>>Array.from(container.childNodes)
		.filter((node) => node.nodeType === 1)
		.filter((node) => {
			if (!(<HTMLElement>node).getAttribute('flexItem')) return false;
			return true;
		});
	const len = childNodes.length;
	let element: HTMLElement | null = null;
	let elements: Array<HTMLElement> | null = null;

	if (atIsANumber(at)) {
		if (at < 1 || at > len) ErrorReport.outOfBounds({ len, at });
		element = childNodes[at - 1];
		element.style.setProperty('flex', '0 1 auto');
		elements = null;
	} else {
		let [start, end] = at;
		if (at.length === 1) {
			start = at[0];
			end = at[0];
		}
		if (start > end) throw Error('Start index must be less than end index');
		if (start < 1 || end < 1) throw Error('Array index must be greater than 0');
		if (start > len || end > len) throw Error('Array index must be less than child count length');
		element = null;
		elements = childNodes.slice(start - 1, end);
	}

	return {
		node: element || elements,
		AlignSelf(alignement: SelfAlignment = 'center') {
			if (element) element.style.setProperty('align-self', alignement);
			else if (elements) for (const el of elements) el.style.setProperty('align-self', alignement);
			return this;
		},
		Order(order = 0) {
			if (element) {
				if (!(<HTMLElement>element.parentElement).getAttribute('flexContainer')) throw Error('Parent is not flexed');
				element.style.setProperty('order', `${order}`);
			}
			return this;
		},

		Flex(flex: FlexOptions = 0) {
			const elementFlexHandler = (element: HTMLElement) => {
				if (!(<HTMLElement>element.parentElement).getAttribute('flexContainer')) throw Error('Parent is not flexed');
				if (typeof flex === 'number') {
					element.style.setProperty('flex', `${flex} 1 auto`);
					let tokens = flex.toString().split(' ');
					if (tokens.length === 1) {
						tokens = [tokens[0], '1', 'auto'];
					} else if (tokens.length === 2) {
						tokens = [tokens[0], tokens[1], 'auto'];
					} else if (tokens.length === 3) {
						tokens = [tokens[0], tokens[1], tokens[2]];
					} else {
						throw Error('Invalid flex property');
					}
					element.style.setProperty('flex', tokens.join(' '));
					return this;
				}
			};
			if (element) return elementFlexHandler(element);
			if (elements) for (const element of elements) return elementFlexHandler(element);
		},
	};
};
