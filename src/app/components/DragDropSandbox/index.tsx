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
	const [selected, setSelected] = useState(0);
	return (
		<div>
			<div style={{ overflow: 'hidden', clear: 'both' }}>
				<Item value={Choco} isSelected={selected === 1} onClick={() => setSelected(1)}/>
				<Item value={Tea} isSelected={selected === 2} onClick={() => setSelected(2)}/>
				<Item value={Coffee} isSelected={selected === 3} onClick={() => setSelected(3)}/>
			</div>
		</div>
	);
}
