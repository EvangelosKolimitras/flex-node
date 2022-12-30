declare interface Flexbox {
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
declare type FlexDirection = keyof Pick<Flexbox, 'row' | 'column' | 'row-reverse' | 'column-reverse'>;
declare type FlexAlignment = keyof Pick<Flexbox, 'flex-end' | 'center' | 'flex-start' | 'stretch' | 'baseline'>;
declare type SelfAlignment = keyof Pick<Flexbox, 'flex-end' | 'center' | 'flex-start' | 'stretch' | 'baseline'>;
declare type FlexJustification = keyof Pick<Flexbox, 'flex-end' | 'center' | 'flex-start' | 'space-between' | 'space-around' | 'space-evenly'>;
declare type FlexWrap = keyof Pick<Flexbox, 'wrap' | 'no-wrap' | 'wrap-reverse'>;
declare type AlignContent = keyof Pick<Flexbox, 'flex-end' | 'center' | 'flex-start' | 'space-between' | 'space-around' | 'space-evenly' | 'stretch'>;
