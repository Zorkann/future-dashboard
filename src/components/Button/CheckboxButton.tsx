// Checkbox.tsx

import React from "react";

type CheckboxProps = {
	label: string;
	checked: boolean;
	onChange: (checked: boolean) => void;
};

export function CheckboxButton({ label, checked, onChange }: CheckboxProps) {
	const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		onChange(event.target.checked);
	};

	return (
		<label>
			{label}:
			<input
				type="checkbox"
				checked={checked}
				onChange={handleCheckboxChange}
			/>
		</label>
	);
}
