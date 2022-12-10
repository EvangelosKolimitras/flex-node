import { FlexContainer, FlexItem } from "./src/box/index";
import { CreateNthNodes } from "./src/util";

let container = CreateNthNodes(9);
FlexContainer(container);

FlexItem({ container, at: [4, 6] }).AlignSelf('center');

document.body.appendChild(container);