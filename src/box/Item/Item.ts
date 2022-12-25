import { FlexCSS } from '../CSSClasses';
export interface ItemOptions {
	container: Node;
	at: number | Array<number>;
}
const atIsANumber = (at: ItemOptions['at']): at is number => typeof at === 'number';
export const Item = (options: ItemOptions) => {
	const { container, at } = options;

	const childNodes = <Array<HTMLElement>>Array.from(container.childNodes);
	const len = childNodes.length;
	let element: HTMLElement | null = null;
	let elements: Array<HTMLElement> | null = null;

	if (atIsANumber(at)) {
		if (at < 1 || at > len) throw Error(`Index out of bounds. Child count length: ${len}, Index passed: ${at}`);
		element = childNodes[at - 1];
		element.classList.add(FlexCSS['flex_item']);
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
		AlignSelf(alignement: SelfAlignment = 'center') {
			const a: { [key: string]: string } = {
				center: FlexCSS['flex_align-self--center'],
				'flex-start': FlexCSS['flex_align-self--flex-start'],
				'flex-end': FlexCSS['flex_align-self--flex-end'],
				stretch: FlexCSS['flex_align-self--stretch'],
				baseline: FlexCSS['flex_align-self--baseline'],
			};

			if (elements === null)
				for (const key in a) {
					if (element) element.classList.remove(a[key]);
				}
			else for (const el of elements) for (const key in a) el.classList.remove(a[key]);

			if (elements === null) {
				if (element) element.classList.add(a[alignement] || a['center']);
			} else for (const el of elements) el.classList.add(a[alignement] || a['center']);

			return this;
		},
		Order(order = 0) {
			if (element) {
				if (!element.id) throw Error('No id specified');
				if (!element.classList.contains('flex')) throw Error('Parent is not flexed');
				element.style.order = `${order}`;
			}
			return this;
		},

		Flex(flex: { grow?: number; shrink?: number; basis?: { value: number; unit: 'px' | '%' } }) {
			if (!element) return;
			if (!element.id) throw Error('No id specified');
			if (!element.classList.contains('flex')) throw Error('Parent is not flexed');

			const { grow, shrink, basis } = flex;

			function growHandler(grow: number) {
				if (!element) return;
				element.classList.add('flex-item--flex-grow');
				element.style.setProperty('--flex-grow', grow.toString());
			}

			function shrinkHandler(shrink: number) {
				if (!element) return;
				element.classList.add('flex-item--flex-shrink');
				element.style.setProperty('--flex-shrink', shrink.toString());
			}

			function basisHandler(options: { value: number; unit: 'px' | '%' }) {
				if (!element) return;
				const { value, unit } = options;
				element.classList.add('flex-item--flex-basis');
				element.style.setProperty('--flex-basis', unit ? value.toString().concat(unit) : value.toString());
			}

			if (grow) growHandler(grow);
			if (shrink) shrinkHandler(shrink);
			if (basis) basisHandler(basis);
		},
	};
};
