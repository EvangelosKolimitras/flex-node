let isElementWrapped = false;
export const Container = (options: { node: Node }) => {
	const { node } = options;
	if (!(node instanceof HTMLElement)) throw Error('Element must be an HTMLElement');

	const id = node.id;
	if (!id) throw Error('No id specified');

	node.style.setProperty('display', 'flex');
	node.setAttribute('flexContainer', `flexContainerId-${node.id}`);

	return {
		node,
		Direction(direction: FlexDirection = 'column') {
			if (!(node instanceof HTMLElement)) throw Error('Element must be an HTMLElement');
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
			if (!id) throw Error('No id specified');
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
		Center(wrap: FlexWrap = 'wrap', alignContent: AlignContent = 'center') {
			this.AlignItems();
			this.JustifyContent();
			if (wrap) this.Wrap(wrap);
			this.AlignContent(alignContent);
			return this;
		},
		CenterLeft(wrap: FlexWrap = 'no-wrap', alignContent: AlignContent = 'center') {
			this.AlignItems();
			this.JustifyContent('flex-start');
			if (wrap) this.Wrap(wrap);
			if (wrap !== 'no-wrap') this.AlignContent(alignContent);
			return this;
		},
		CenterRight(wrap: FlexWrap = 'no-wrap', alignContent: AlignContent = 'center') {
			this.AlignItems();
			this.JustifyContent('flex-end');
			if (wrap) this.Wrap(wrap);
			if (wrap !== 'no-wrap') this.AlignContent(alignContent);
			return this;
		},
		CenterTop(wrap: FlexWrap = 'no-wrap', alignContent: AlignContent = 'center') {
			this.AlignItems('flex-start');
			this.JustifyContent();
			if (wrap) this.Wrap(wrap);
			if (wrap !== 'no-wrap') this.AlignContent(alignContent);
			return this;
		},
		CenterBottom(wrap: FlexWrap = 'no-wrap', alignContent: AlignContent = 'center') {
			this.AlignItems('flex-end');
			this.JustifyContent();
			if (wrap) this.Wrap(wrap);
			if (wrap !== 'no-wrap') this.AlignContent(alignContent);
			return this;
		},
	};
};
