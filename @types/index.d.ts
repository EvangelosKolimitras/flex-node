/// <reference types="node" />

declare module 'flexdomjs' {
	export interface Flexbox {
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

	export interface ItemOptions {
		container: Node;
		at: number | Array<number>;
	}

	export interface IOutOfBounds {
		len: number;
		at: number;
	}

	export interface ICenterOptions {
		position?: 'center' | 'left' | 'right' | 'bottom' | 'top';
		wrap?: FlexWrap;
		alignContent?: AlignContent;
	}

	export type FlexOptions = (`${number} ${number} ${string}` | `${number} ${number}` | `${number}`) | number;

	export type FlexDirection = keyof Pick<Flexbox, 'row' | 'column' | 'row-reverse' | 'column-reverse'>;
	export type FlexAlignment = keyof Pick<Flexbox, 'flex-end' | 'center' | 'flex-start' | 'stretch' | 'baseline'>;
	export type SelfAlignment = keyof Pick<Flexbox, 'flex-end' | 'center' | 'flex-start' | 'stretch' | 'baseline'>;
	export type FlexJustification = keyof Pick<Flexbox, 'flex-end' | 'center' | 'flex-start' | 'space-between' | 'space-around' | 'space-evenly'>;
	export type FlexWrap = keyof Pick<Flexbox, 'wrap' | 'no-wrap' | 'wrap-reverse'>;
	export type AlignContent = keyof Pick<Flexbox, 'flex-end' | 'center' | 'flex-start' | 'space-between' | 'space-around' | 'space-evenly' | 'stretch'>;
}
