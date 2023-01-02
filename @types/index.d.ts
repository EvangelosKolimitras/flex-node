/// <reference types="node" />

declare module 'flexdomjs' {
	export function FlexContainer(node: Node): FlexContainerReturnType;
	export function FlexItem(options: { container: Node; at: number | Array<number> }): FlexItemReturnType;
}

interface Flexbox {
	baseline: 'baseline';
	center: 'center';
	'column-reverse': 'column-reverse';
	column: 'column';
	'flex-end': 'flex-end';
	'flex-start': 'flex-start';
	'no-wrap': 'no-wrap';
	'row-reverse': 'row-reverse';
	row: 'row';
	'space-around': 'space-around';
	'space-between': 'space-between';
	'space-evenly': 'space-evenly';
	stretch: 'stretch';
	'wrap-reverse': 'wrap-reverse';
	wrap: 'wrap';
}
interface ItemOptions {
	container: Node;
	at: number | Array<number>;
}

interface IOutOfBounds {
	len: number;
	at: number;
}
interface ICenterOptions {
	position?: 'center' | 'left' | 'right' | 'bottom' | 'top';
	wrap?: FlexWrap;
	alignContent?: AlignContent;
}

interface FlexContainerReturnType {
	node: Node;
	Direction(direction?: FlexDirection): FlexContainerReturnType;
	AlignItems(alignement?: FlexAlignment): FlexContainerReturnType;
	JustifyContent(justification?: FlexJustification): FlexContainerReturnType;
	Wrap(wrap?: FlexWrap): FlexContainerReturnType;
	Flow(flow?: { direction?: FlexDirection; wrap?: FlexWrap }): FlexContainerReturnType;
	Gap(gap?: `${string} ${string}` | string): FlexContainerReturnType;
	AlignContent(alignement?: AlignContent): FlexContainerReturnType;
	Center(options?: ICenterOptions): FlexContainerReturnType;
}

interface FlexItemReturnType {
	node: Node | Array<Node> | null;
	AlignSelf(alignement?: SelfAlignment): FlexItemReturnType;
	Order(order?: number): FlexItemReturnType;
	Flex(flex?: FlexOptions): FlexItemReturnType;
}

type FlexOptions = (`${number} ${number} ${string}` | `${number} ${number}` | `${number}`) | number;
type FlexDirection = keyof Pick<Flexbox, 'row' | 'column' | 'row-reverse' | 'column-reverse'>;
type FlexAlignment = keyof Pick<Flexbox, 'flex-end' | 'center' | 'flex-start' | 'stretch' | 'baseline'>;
type SelfAlignment = keyof Pick<Flexbox, 'flex-end' | 'center' | 'flex-start' | 'stretch' | 'baseline'>;
type FlexJustification = keyof Pick<Flexbox, 'flex-end' | 'center' | 'flex-start' | 'space-between' | 'space-around' | 'space-evenly'>;
type FlexWrap = keyof Pick<Flexbox, 'wrap' | 'no-wrap' | 'wrap-reverse'>;
type AlignContent = keyof Pick<Flexbox, 'flex-end' | 'center' | 'flex-start' | 'space-between' | 'space-around' | 'space-evenly' | 'stretch'>;
