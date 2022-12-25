import { Container } from './Container/Container';
import { Item } from './Item/Item';

let algorithm: 'flexer' | 'grider' = 'flexer';
let flexContainerIsActive = false;

export function useAlgorithm(algo: 'flexer' | 'grider') {
	algorithm = algo;
}

export function FlexContainer(node: Node) {
	if (algorithm !== 'flexer' && algorithm !== 'grider') throw new Error('No algorithm set');
	if (algorithm === 'grider') throw new Error('Grider algorithm does not support FlexContainer');
	if (algorithm === 'flexer') {
		flexContainerIsActive = true;
		return Container({ node });
	}
}

export function FlexItem(options: { container: Node; at: number | Array<number> }) {
	if (algorithm !== 'flexer' && algorithm !== 'grider') throw new Error('No algorithm set');
	if (algorithm === 'grider') throw new Error('Grider algorithm does not support FlexItem');
	if (algorithm === 'flexer' && !flexContainerIsActive) throw new Error('FlexItem must be called after FlexContainer');
	if (algorithm === 'flexer' && flexContainerIsActive) return Item({ ...options });
}
