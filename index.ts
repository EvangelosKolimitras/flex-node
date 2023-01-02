/** void */

/**
 * This is an expirimental library to help with flexbox layouts in the browser.
 */
import { FlexContainer } from './src/box/index';

const divs = Array.from({ length: 4 }, () => document.createElement('div'));
divs.forEach((div) => {
	const color = Math.floor(Math.random() * 16777215).toString(16);
	div.style.backgroundColor = `#${color}`;
	div.innerText = `#${color}`;
	div.style.width = '200px';
	div.style.height = '200px';
	div.id = color;
	div.style.color = `#${(16777215 - parseInt(color, 16)).toString(16)}`;
	FlexContainer(div);
});
divs.forEach((div) => document.body.appendChild(div));

// create a wrapper div and pull all above divs into it as children
const wrapper = document.createElement('div');
divs.forEach((div) => wrapper.appendChild(div));

wrapper.id = 'wrapper';
document.body.appendChild(wrapper);
wrapper.style.height = '100vh';
wrapper.style.backgroundColor = 'lightgray';
