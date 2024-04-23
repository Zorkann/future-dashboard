import { Button } from "./Button";
import React from "react"; // Dodaj import React

type CheckButtonProps = {
	children: React.ReactNode;
	checked: boolean;
	onChange: (checked: boolean) => void;
	index: number;
};

export function CheckButton({
	children,
	checked,
	onChange,
	index,
}: CheckButtonProps) {
	const handleCheckboxChange = () => {
		onChange(!checked);
		console.log(`Checkbox ${index + 1} clicked flag: ${!checked}`);
	};

	return (
		<Button onClick={handleCheckboxChange}>
			<input type="checkbox" checked={checked} onChange={() => {}} />
			<span className="text-secondary">{children}</span>
		</Button>
	);
}
