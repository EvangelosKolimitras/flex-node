/// <reference types="node" />

declare module 'flexdomjs' {
	/**
	 * # FlexContainer
	 *
	 * ```ts
	 * const wrapperDiv = document.createElement('div');
	 * ```
	 *
	 * ```ts
	 * const flexedWrapperDiv = FlexContainer(wrapperDiv);
	 * ```
	 *
	 * `By wrapping the container node in the FlexContainer function, you can use the returned methods to handle the container's properties and children items.`
	 *
	 * ```ts
	 * flexedWrapperDiv.Direction();
	 * flexedWrapperDiv.AlignItems();
	 * flexedWrapperDiv.JustifyContent();
	 * ```
	 *`Chaining the methods is also possible.`
	 * ```ts
	 * flexedWrapperDiv
	 * 		.Direction()
	 * 		.AlignItems()
	 * 		.JustifyContent();
	 * ```
	 */
	export function FlexContainer(options: { node: Node }): FlexContainerReturnType;
	export function FlexItem(options: { container: Node; at: number | Array<number> }): FlexItemReturnType;
}

interface FlexboxProps {
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
	/**
	 * The position of the container node
	 * @example
	 * center | left | right | bottom | top
	 * @default center
	 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
	 */
	position?: 'center' | 'left' | 'right' | 'bottom' | 'top';
	/**
	 * The flex-direction property of the container node
	 * @example
	 * row | column | row-reverse | column-reverse
	 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/flex-direction
	 */
	wrap?: FlexWrap;
	/**
	 * The align-content property of the container node
	 * @example
	 * align-content: flex-start | flex-end | center | space-between | space-around | space-evenly | stretch;
	 */
	alignContent?: AlignContent;
}

interface FlexContainerReturnType {
	node: Node;
	/**
	 * Handles the flex-direction property of the container node and returns the container node
	 * @param direction
	 * @example
	 * row | column | row-reverse | column-reverse
	 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/flex-direction
	 */
	Direction(direction?: FlexDirection): FlexContainerReturnType;

	/**
	 * Handles the align-items property of the container node and returns the container node
	 * @param alignement
	 * @example
	 * flex-start | flex-end | center | stretch | baseline
	 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/align-items
	 */
	AlignItems(alignement?: FlexAlignment): FlexContainerReturnType;

	/**
	 * Handles the justify-content property of the container node and returns the container node
	 * @param justification
	 * @example
	 * flex-start | flex-end | center | space-between | space-around | space-evenly
	 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content
	 */
	JustifyContent(justification?: FlexJustification): FlexContainerReturnType;

	/**
	 * Handles the flex-wrap property of the container node and returns the container node
	 * @param wrap
	 * @example
	 * wrap | nowrap | wrap-reverse
	 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/flex-wrap
	 */
	Wrap(wrap?: FlexWrap): FlexContainerReturnType;

	/**
	 * Handles the flex-flow property of the container node and returns the container node
	 * @param flow
	 * @example
	 * row wrap
	 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/flex-flow
	 */
	Flow(flow?: { direction?: FlexDirection; wrap?: FlexWrap }): FlexContainerReturnType;

	/**
	 * Handles the gap property of the container node and returns the container node
	 * @param gap
	 * @example
	 * 10px 20px
	 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/gap
	 */
	Gap(gap?: `${string} ${string}` | string): FlexContainerReturnType;

	/**
	 * Handles the align-content property of the container node and returns the container node
	 * @param alignement
	 * @example
	 * align-content: flex-start | flex-end | center | space-between | space-around | space-evenly | stretch;
	 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/align-content
	 */
	AlignContent(alignement?: AlignContent): FlexContainerReturnType;

	/**
	 * Handles the flex property of the container node and returns the container node
	 * @param options
	 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/flex
	 */
	Center(options?: ICenterOptions): FlexContainerReturnType;
}

interface FlexItemReturnType {
	/**
	 * The node to be added to the container node
	 */
	node: Node | Array<Node> | null;
	AlignSelf(alignement?: SelfAlignment): FlexItemReturnType;
	Order(order?: number): FlexItemReturnType;
	Flex(flex?: FlexOptions): FlexItemReturnType | undefined;
}

/**
 * The flex property of the container node
 * @example
 * 1 1 100px
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/flex
 */
type FlexOptions = (`${number} ${number} ${string}` | `${number} ${number}` | `${number}`) | number;
/**
 * The flex-direction property of the container node
 * @example
 * row | column | row-reverse | column-reverse
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/flex-direction
 */
type FlexDirection = keyof Pick<FlexboxProps, 'row' | 'column' | 'row-reverse' | 'column-reverse'>;
/**
 * The align-items property of the container node
 * @example
 * flex-start | flex-end | center | stretch | baseline
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/align-items
 */
type FlexAlignment = keyof Pick<FlexboxProps, 'flex-end' | 'center' | 'flex-start' | 'stretch' | 'baseline'>;
/**
 * The align-self property of the container node
 * @example
 * flex-start | flex-end | center | stretch | baseline
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/align-self
 */
type SelfAlignment = keyof Pick<FlexboxProps, 'flex-end' | 'center' | 'flex-start' | 'stretch' | 'baseline'>;
/**
 * The justify-content property of the container node
 * @example
 * flex-start | flex-end | center | space-between | space-around | space-evenly
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content
 */
type FlexJustification = keyof Pick<FlexboxProps, 'flex-end' | 'center' | 'flex-start' | 'space-between' | 'space-around' | 'space-evenly'>;
/**
 * The flex-wrap property of the container node
 * @example
 * wrap | nowrap | wrap-reverse
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/flex-wrap
 */
type FlexWrap = keyof Pick<FlexboxProps, 'wrap' | 'no-wrap' | 'wrap-reverse'>;
/**
 * The align-content property of the container node
 * @example
 * flex-start | flex-end | center | stretch | space-between | space-around | space-evenly
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/align-content
 */
type AlignContent = keyof Pick<FlexboxProps, 'flex-end' | 'center' | 'flex-start' | 'space-between' | 'space-around' | 'space-evenly' | 'stretch'>;
