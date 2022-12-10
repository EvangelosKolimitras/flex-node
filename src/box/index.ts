import { Container } from "./Container/Container";
import { Item } from "./Item/Item";

export function FlexContainer(node: Node) {
    return Container({ node });
}

export function FlexItem(options: { container: Node, at: number | Array<number> }) {
    return Item({ ...options });
}

