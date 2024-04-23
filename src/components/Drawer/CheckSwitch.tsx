// import { useState } from "react";
import { CheckButton } from "@components/Button";
import { useState } from "react";

export function CheckSwitch() {
	const [isChecked, setIsChecked] = useState(Array(12).fill(false));

	const handleCheckboxChange = (index: number) => {
		const updatedChecked = [...isChecked];
		updatedChecked[index] = !updatedChecked[index];
		setIsChecked(updatedChecked);
	};

	return (
		<div className="p-4">
			{isChecked.map((checked, index) => (
				<CheckButton
					key={index}
					checked={checked}
					onChange={() => handleCheckboxChange(index)}
					index={index}
				>
					Graph {index + 1}
				</CheckButton>
			))}
		</div>
	);
}
