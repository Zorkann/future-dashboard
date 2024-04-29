import { forwardRef, useEffect, useImperativeHandle } from "react";
import { useOnClickOutside } from "@hooks/useOnClickOutside";
import { createPortal } from "react-dom";
import { ThemeSwitch } from "./ThemeSwitch";

// import { CheckboxButton } from "@components/Button";

export type DrawerProps = {
	onClose: (event: MouseEvent | TouchEvent | React.MouseEvent) => void;
	children?: React.ReactNode;
	title?: string;
	open: boolean;
	style?: React.CSSProperties;
};

export const BaseDrawer = forwardRef<HTMLDivElement, DrawerProps>(
	function BaseDrawer(props, ref) {
		const { onClose, children, title = "Settings", open, style } = props;

		const drawerRef = useOnClickOutside<HTMLDivElement>(onClose);

		// PASS DRAWER REF TO PARENT //
		useImperativeHandle(ref, () => drawerRef.current as HTMLDivElement, [
			drawerRef,
		]);

		useEffect(() => {
			if (!open) return;

			document.body.style.overflow = "hidden";
			document.body.style.paddingRight = "15px";
			return () => {
				document.body.style.overflow = "unset";
				document.body.style.paddingRight = "unset";
			};
		}, [open]);

		return createPortal(
			<div role="presentation" className="fixed inset-0 z-20">
				{open && (
					<div
						aria-hidden="true"
						className="fixed flex items-center justify-center inset-0 bg-black/50 z-[-1]"
					/>
				)}
				<div
					className="fixed w-[80%] max-w-[400px] h-full right-0 bg-background"
					ref={drawerRef}
					style={style}
				>
					<div className="flex items-center justify-between border-b border-default p-4">
						<span className="font-bold">{title}</span>
						<button className="p-2" onClick={onClose}>
							X
						</button>
					</div>
					<div className="p-4">
						<ThemeSwitch />

						{children}
					</div>
				</div>
			</div>,
			document.body
		);
	}
);
