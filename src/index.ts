import { Container } from './box/Container/Container';
import { Item } from './box/Item/Item';

export const FlexContainer = (options: { node: Node }): FlexContainerReturnType => {
	return Container(options);
};

export const FlexItem = (options: ItemOptions): FlexItemReturnType => {
	return Item(options);
};
