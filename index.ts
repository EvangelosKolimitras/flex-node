import { FlexContainer, FlexItem } from './src/box/index';
import { CreateNumberOfNodes, NewNode } from './src/util';

const container = NewNode({ w: [50, '%'], h: [800, 'px'], bg: 'white' });
container.style.padding = '5px';
document.body.id = 'some id...';

const props = CreateNumberOfNodes(3);
for (let i = 0; i < props.length; i++) {
	const node = NewNode(props[i]);
	FlexContainer(node)?.AlignItems().JustifyContent();
	container.appendChild(node);
}
document.body.appendChild(container);

const flexBody = FlexContainer(document.body);
const flexedContainer = FlexContainer(container);

flexBody?.Direction().JustifyContent().AlignItems().Gap('20px');

flexedContainer?.Direction('row').JustifyContent().AlignItems().Gap('20px');

FlexItem({
	container,
	at: 1,
})?.Flex(1);
FlexItem({
	container,
	at: 3,
})?.Flex(4);
FlexItem({
	container,
	at: 2,
})?.Flex(1);
container.style.resize = 'horizontal';
container.style.overflow = 'auto';
