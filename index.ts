export const ErrorReport = {
	outOfBounds({ len, at }: IOutOfBounds) {
		throw Error(`Index out of bounds. Child count length: ${len}, Index passed: ${at}`);
	},
};

let isElementWrapped = false;

export const FlexContainer = (options: { node: Node }): FlexContainerReturnType => {
	const { node } = options;
	if (!(node instanceof HTMLElement)) throw Error('Element must be an HTMLElement');

	node.style.setProperty('display', 'flex');
	node.setAttribute('flexContainer', `flexContainerId-${node.id}`);

	return {
		node,
		Direction(direction: FlexDirection = 'column') {
			if (!(node instanceof HTMLElement)) throw Error('Element must be an HTMLElement');
			node.style.removeProperty('flex-direction');
			node.style.setProperty('flex-direction', direction);
			return this;
		},
		AlignItems(alignement: FlexAlignment = 'center') {
			if (!(node instanceof HTMLElement)) throw Error('Element must be an HTMLElement');
			node.style.removeProperty('align-items');
			node.style.setProperty('align-items', alignement);
			return this;
		},
		JustifyContent(justification: FlexJustification = 'center') {
			if (!(node instanceof HTMLElement)) throw Error('Element must be an HTMLElement');
			node.style.removeProperty('justify-content');
			node.style.setProperty('justify-content', justification);
			return this;
		},
		Wrap(wrap: FlexWrap = 'wrap') {
			if (!(node instanceof HTMLElement)) throw Error('Element must be an HTMLElement');
			node.style.removeProperty('flex-wrap');
			node.style.setProperty('flex-wrap', wrap);
			isElementWrapped = true;
			return this;
		},
		Flow(
			flow: { direction?: FlexDirection; wrap?: FlexWrap } = {
				direction: 'row',
				wrap: 'wrap',
			}
		) {
			if (flow.wrap) this.Wrap(flow.wrap);
			if (flow.direction) this.Direction(flow.direction);
			return this;
		},
		Gap(gap?: `${string} ${string}` | string) {
			if (!(node instanceof HTMLElement)) throw Error('Element must be an HTMLElement');
			node.style.removeProperty('gap');
			node.style.setProperty('gap', gap || '0px');
			return this;
		},
		AlignContent(alignement: AlignContent = 'center') {
			if (!(node instanceof HTMLElement)) throw Error('Element must be an HTMLElement');
			if (!isElementWrapped || node.style.getPropertyValue('flex-wrap') === 'no-wrap')
				throw Error(
					`[${alignement} - ${node.style.getPropertyValue('flex-wrap')}]
					Element should have flex-wrap: wrap or wrap-reverse in order to use align-content.
					* use Wrap() to set wrap or wrap-reverse to element before using AlignContent() or 
					* use Flow() to set both direction and wrap at once.`
				);
			node.style.removeProperty('align-content');
			node.style.setProperty('align-content', alignement);
			return this;
		},
		Center({ position, wrap = 'wrap', alignContent = 'center' }: ICenterOptions) {
			const CenterCase = () => {
				this.AlignItems();
				this.JustifyContent();
				if (wrap) this.Wrap(wrap);
				this.AlignContent(alignContent);
				return this;
			};
			switch (position) {
				case 'center':
					return CenterCase();
				case 'left':
					this.AlignItems();
					this.JustifyContent('flex-start');
					if (wrap) this.Wrap(wrap);
					if (wrap !== 'no-wrap') this.AlignContent(alignContent);
					return this;
				case 'right':
					this.AlignItems();
					this.JustifyContent('flex-end');
					if (wrap) this.Wrap(wrap);
					if (wrap !== 'no-wrap') this.AlignContent(alignContent);
					return this;
				case 'top':
					this.AlignItems('flex-start');
					this.JustifyContent();
					if (wrap) this.Wrap(wrap);
					if (wrap !== 'no-wrap') this.AlignContent(alignContent);
					return this;
				case 'bottom':
					this.AlignItems('flex-end');
					this.JustifyContent();
					if (wrap) this.Wrap(wrap);
					if (wrap !== 'no-wrap') this.AlignContent(alignContent);
					return this;
				default:
					return CenterCase();
			}
		},
	};
};

const atIsANumber = (at: ItemOptions['at']): at is number => typeof at === 'number';
export const FlexItem = (options: ItemOptions): FlexItemReturnType => {
	const { container, at } = options;

	const childNodes = <Array<HTMLElement>>Array.from(container.childNodes);
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
				if (!element.id) throw Error('No id specified');
				if (element.style.getPropertyValue('display') !== 'flex') throw Error('Parent is not flexed');
				element.style.setProperty('order', `${order}`);
			}
			return this;
		},

		Flex(flex: FlexOptions = 0) {
			if (!element) return;
			if (!element.id) throw Error('No id specified');
			if (element.style.getPropertyValue('display') !== 'flex') throw Error('Parent is not flexed');

			if (typeof flex === 'number') {
				element.style.setProperty('flex', `${flex} 1 auto`);
				return this;
			}

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
		},
	};
};
