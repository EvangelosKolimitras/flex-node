export const registry: { [key: HTMLElement["id"]]: Node } = {};

export const NewNode = (options: { w?: [number, 'px' | '%'], h?: [number, 'px' | '%'], bg?: string, c?: string, txt?: string }) => {
    let { w, h, bg, c, txt } = options;
    let div = document.createElement("div");
    const uuid = () => Math.random() * 10e10;
    div.id = `${uuid()}`;
    div.style.width = `${w?.[0]}${w?.[1]}`
    div.style.height = `${h?.[0]}${h?.[1]}`;
    div.style.backgroundColor = bg ? bg : "black";
    div.style.color = c ? c : "white";
    div.style.border = "2px solid " + (c ? c : bg);
    div.style.borderRadius = "5px";
    if (txt)
        div.textContent = txt;
    if (registry[div.id])
        registry[div.id] = div;
    return div;
}

export const CreateNumberOfNodes = (n: number) => {
    let colors = ["#fafafa", "lightblue"];
    let props: { w?: [number, 'px' | '%'], h?: [number, 'px' | '%'], bg?: string, c?: string, txt?: string }[] = [];
    for (let i = 1; i <= n; i++) {
        let bg = colors[i % 2 === 0 ? 0 : 1];
        let color = colors[i % 2 === 0 ? 1 : 0];
        props.push({ w: [200, 'px'], h: [200, 'px'], bg, c: color, txt: `${i}` });
    }
    return props;
}