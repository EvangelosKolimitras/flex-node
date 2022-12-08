import { FlexContainer, FlexItem } from "./src/box/index";
import { CreateNthNodes, registry } from "./src/util";
let container = CreateNthNodes(1);
FlexContainer(container).Wrap("wrap-reverse").Direction("row").AlignContent().JustifyContent("center").AlignItems("center");

for (let key in registry)
    console.log(registry[key]);

document.body.appendChild(container);