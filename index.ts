import { FlexContainer } from './src/box/index';
import { CreateNumberOfNodes, NewNode } from './src/util';

const container = NewNode({ w: [50, '%'], h: [800, 'px'] });
container.style.padding = '5px';
document.body.id = 'some id...';

const props = CreateNumberOfNodes(3);

for (let i = 0; i < props.length; i++) {
	const node = NewNode(props[i]);
	if (i === 0) node.textContent = 'L';
	if (i === 1) node.textContent = 'B';
	if (i === 2) node.textContent = 'S';
	FlexContainer(node)?.AlignItems().JustifyContent();
	container.appendChild(node);
}

document.body.appendChild(container);

FlexContainer(document.body)?.Direction().JustifyContent().AlignItems().Gap('20px');
FlexContainer(container)?.Direction('row').JustifyContent().AlignItems().Gap('20px');
