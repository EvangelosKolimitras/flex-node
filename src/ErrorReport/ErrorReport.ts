export const ErrorReport = {
	outOfBounds({ len, at }: IOutOfBounds) {
		throw Error(`Index out of bounds. Child count length: ${len}, Index passed: ${at}`);
	},
};
