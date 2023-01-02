// void

/**
 * Example
const div1 = document.createElement('div');
div1.style.width = '200px';
div1.style.height = '200px';
div1.style.backgroundColor = 'red';
document.body.appendChild(div1);

const div2 = document.createElement('div');
div2.style.width = '200px';
div2.style.height = '200px';
div2.style.backgroundColor = 'green';
document.body.appendChild(div2);

const div3 = document.createElement('div');
div3.style.width = '200px';
div3.style.height = '200px';
div3.style.backgroundColor = 'blue';
document.body.appendChild(div3);

document.body.style.height = '100vh';
const flexedWrapperDiv = FlexContainer({ node: document.body });
flexedWrapperDiv.AlignItems('center').JustifyContent('center');
FlexItem({
	container: flexedWrapperDiv.node,
	at: 0,
}).AlignSelf('flex-end');
 */
