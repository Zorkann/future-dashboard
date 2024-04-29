import React from "react";

type CheckboxProps = {
	checked: boolean;
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export function CheckboxButton({ checked, onChange }: CheckboxProps) {
	return (
		<div>
			<input type="checkbox" checked={checked} onChange={onChange} />
		</div>
	);
}
