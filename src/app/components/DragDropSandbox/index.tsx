import React, {useState} from 'react';
import Item from '../Item';

interface ProductItem {
	name: String;
	type: String
	caffeine?: Number;
	halfLife?: Number;
};

const Coffee: ProductItem = {
	name: 'Coffee',
	type: 'drink',
	caffeine: 60,
	halfLife: 6,
};

const Tea: ProductItem = {
	name: 'Tea',
	type: 'drink',
	caffeine: 20,
	halfLife: 5,
};

const Choco: ProductItem = {
	name: 'Choco',
	type: 'drink',
	caffeine: 15,
	halfLife: 8,
};

export default function DragDropSandbox() {
	const [selected, setSelected] = useState(Choco);
	return (
		<div>
			<div style={{ overflow: 'hidden', clear: 'both' }}>
				<Item value={Choco} isSelected={selected == Choco} onClick={() => setSelected(Choco)}/>
				<Item value={Tea} isSelected={selected == Tea} onClick={() => setSelected(Tea)}/>
				<Item value={Coffee} isSelected={selected == Coffee} onClick={() => setSelected(Coffee)}/>
			</div>
		</div>
	);
}
