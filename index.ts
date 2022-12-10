import { FlexContainer } from "./src/box/index";
import { CreateNumberOfNodes, NewNode } from "./src/util";

let container = NewNode({ w: [800, 'px'], h: [800, 'px'], bg: "white" });
container.style.padding = "5px";

CreateNumberOfNodes(9)
    .forEach((props) => {
        let node = NewNode(props);
        container.appendChild(node);
    });

FlexContainer(container)
    .Direction("row")
    .Wrap("wrap")
    .AlignItems()
    .JustifyContent()
    .AlignContent()
    .Gap("10px");

document.body.id = "14sdsa"
document.body.appendChild(container);
FlexContainer(document.body).Center()
