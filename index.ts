import { CreateNthNodes, registry } from "./src/util";
let container = CreateNthNodes(1);
for (let key in registry)
    console.log(registry[key]);

document.body.appendChild(container);