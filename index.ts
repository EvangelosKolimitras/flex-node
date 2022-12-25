import { FlexContainer, FlexItem } from './src/box/index';
import { CreateNumberOfNodes, NewNode } from './src/util';

const container = NewNode({ w: [800, 'px'], h: [800, 'px'], bg: 'white' });

const h1 = document.createElement('h1');
h1.innerText = 'Smart Nodes';
container.style.padding = '5px';
document.body.id = 'some id...';

CreateNumberOfNodes(9).forEach((props, index) => {
	const node = NewNode(props);
	FlexContainer(node).AlignItems().JustifyContent();
	if (index === 4) {
		node.textContent = '';
		CreateNumberOfNodes(3).forEach((_n, i) => {
			const subNode = NewNode({ w: [50, 'px'], h: [50, 'px'], bg: '#fff', c: '#9f9f9f', txt: `${index}.${i}` });
			const subNode$ = FlexContainer(subNode).Wrap().Center().Gap('10px');
			node.appendChild(subNode$.node);
		});

		FlexItem({ container: node, at: [3] }).AlignSelf('flex-start');
	}
	container.appendChild(node);
});

document.body.appendChild(h1);
document.body.appendChild(container);

const flexBody = FlexContainer(document.body);
const flexedContainer = FlexContainer(container);

flexBody.Direction().JustifyContent().AlignItems().Gap('20px');

flexedContainer.Direction().Wrap().JustifyContent().AlignItems().Gap('20px').AlignContent();
