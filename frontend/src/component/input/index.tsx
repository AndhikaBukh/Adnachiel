"use client";

import { Eye, EyeSlash } from "iconsax-react";
import { useEffect, useRef, useState, useImperativeHandle, forwardRef } from "react";

interface AppInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
	label?: string;
	type?: string;
}

export interface AppInputRef {
	focus: () => void;
	value: () => string;
	setValue: (value: string) => void;
}

function AppInput({ label, type, ...rest }: AppInputProps, ref: React.Ref<AppInputRef>) {
	const [changeType, setChangeType] = useState<string>(type || "text");
	const [changeIcon, setChangeIcon] = useState<React.ReactNode | undefined>(undefined);
	const getInput = useRef<HTMLInputElement>(null);

	const usePassword = () => {
		if (changeType === "password") {
			setChangeType("text");
			setChangeIcon(<Eye size="18" color="#FFF" variant="Bold" />);
		} else {
			setChangeType("password");
			setChangeIcon(<EyeSlash size="18" color="#FFF" variant="Bold" />);
		}
	};

	useImperativeHandle(ref, () => ({
		focus: () => {
			if (getInput.current) getInput.current.focus();
		},
		value: () => {
			if (getInput.current) return getInput.current.value;
			return "";
		},
		setValue: (value: string) => {
			if (getInput.current) getInput.current.value = value;
		},
	}));

	useEffect(() => {
		if (type === "password") setChangeIcon(<EyeSlash size="18" color="#FFF" variant="Bold" />);
	}, []);

	return (
		<div
			className="flex flex-col gap-2 self-stretch"
			onClick={() => {
				if (getInput.current) getInput.current.focus();
			}}
		>
			{label !== undefined && (
				<label className="text-sm text-content-80" htmlFor={type}>
					{label}
				</label>
			)}

			<div className="flex items-center overflow-hidden rounded-md border-2 border-borderLine-30 bg-foreground-light transition-[border] duration-300 focus-within:border-active-100">
				<input
					className="flex-1 bg-transparent py-2 px-4 text-sm font-medium outline-none"
					type={changeType}
					name={type}
					id={type}
					ref={getInput}
					{...rest}
				/>

				{changeIcon !== undefined && (
					<button className="self-stretch px-[10px]" type="button" onClick={usePassword}>
						{changeIcon}
					</button>
				)}
			</div>
		</div>
	);
}

export default forwardRef(AppInput);
