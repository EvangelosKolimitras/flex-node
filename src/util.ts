export const registry: { [key: HTMLElement['id']]: Node } = {};

export const NewNode = (options: { w?: [number, 'px' | '%']; h?: [number, 'px' | '%']; bg?: string; c?: string; txt?: string }) => {
	const { w, h, bg, c, txt } = options;
	const div = document.createElement('div');
	const uuid = () =>
		[
			crypto.getRandomValues(new Uint32Array(1))[0].toString(36),
			crypto.getRandomValues(new Uint32Array(1))[0].toString(36),
			crypto.getRandomValues(new Uint32Array(1))[0].toString(36),
			crypto.getRandomValues(new Uint32Array(1))[0].toString(36),
		].join('-');

	div.id = `${uuid()}`;
	div.style.width = `${w?.[0]}${w?.[1]}`;
	div.style.height = `${h?.[0]}${h?.[1]}`;
	div.style.backgroundColor = bg || 'black';
	div.style.color = c || 'white';
	div.style.boxShadow = '0 0 5px 0 ' + (c || bg);
	div.style.borderRadius = '5px';
	div.style.fontSize = '2rem';
	if (txt) {
		div.textContent = txt;
	}
	if (registry[div.id]) {
		registry[div.id] = div;
	}
	return div;
};

export const CreateNumberOfNodes = (n: number) => {
	const colors = ['#fafafa', 'lightblue'];
	const props: {
		w?: [number, 'px' | '%'];
		h?: [number, 'px' | '%'];
		bg?: string;
		c?: string;
		txt?: string;
	}[] = [];
	for (let i = 1; i <= n; i++) {
		const bg = colors[i % 2 === 0 ? 0 : 1];
		const color = colors[i % 2 === 0 ? 1 : 0];
		props.push({
			w: [200, 'px'],
			h: [200, 'px'],
			bg,
			c: color,
			txt: `${i}`,
		});
	}
	return props;
};
