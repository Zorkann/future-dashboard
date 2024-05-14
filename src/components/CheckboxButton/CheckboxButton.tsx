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
		<label className="border rounded-lg p-2 border-secondary text-secondary ">
			{label}:
			<input
				type="checkbox"
				checked={checked}
				onChange={handleCheckboxChange}
				className="accent-secondary-800"
			/>
		</label>
	);
}
