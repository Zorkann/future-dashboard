// Checkbox.tsx
import { useState } from "react";

type CheckboxProps = {
	onChange: (isChecked: boolean) => void;
};

export function CheckboxButton({ onChange }: CheckboxProps) {
	const [isChecked, setIsChecked] = useState(false);

	const handleCheckboxChange = () => {
		setIsChecked(!isChecked);
		onChange(!isChecked);
	};

	return (
		<input
			type="checkbox"
			checked={isChecked}
			onChange={handleCheckboxChange}
		/>
	);
}
