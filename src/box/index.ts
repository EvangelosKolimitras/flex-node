import { CreateNthNodes } from "../util";
import { Container } from "./Container/Container";
import { Item } from "./Item/Item";

export function FlexContainer(element: Node) {
    return Container({ element });
}

export function FlexItem(options: { container: Node, childNodeIndex: number }) {
    return Item({ ...options });
}

