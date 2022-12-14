let isElementWrapped = false;

export const Container = (options: { node: Node }): FlexContainerReturnType => {
	const { node } = options;
	if (!(node instanceof HTMLElement)) throw Error('Element must be an HTMLElement');

	node.style.setProperty('display', 'flex');
	node.setAttribute('flexContainer', `flexContainerId-${node.id}`);

	for (let i = 0; i < node.childNodes.length; i++) {
		if (!(node.childNodes[i] instanceof HTMLElement)) continue;
		if ((<HTMLElement>node.childNodes[i]).tagName === 'SCRIPT' || (<HTMLElement>node.childNodes[i]).tagName === 'STYLE') continue;
		if (!(node.childNodes[i] instanceof HTMLElement)) continue;
		if ((<HTMLElement>node.childNodes[i]).parentElement?.getAttribute('flexContainer')) {
			(<HTMLElement>node.childNodes[i]).setAttribute('flexItem', `true`);
		}
	}

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
		Center(options?: ICenterOptions) {
			const { position = 'center', wrap = 'wrap', alignContent = 'center' } = options || {};

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
