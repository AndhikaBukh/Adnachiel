"use client";

import { Eye, EyeSlash } from "iconsax-react";
import { useEffect, useRef, useState } from "react";

interface AppInputProps {
	label?: string;
	type?: string;
}

export default function AppInput({ label, type }: AppInputProps) {
	const [changeType, setChangeType] = useState<string>(type || "text");
	const [changeIcon, setChangeIcon] = useState<React.ReactNode>(undefined);
	const getInput = useRef<HTMLInputElement>(null);

	const usePassword = () => {
		if (changeType === "password") {
			setChangeType("text");
			setChangeIcon(<EyeSlash size="18" color="#FFF" variant="Bold" />);

			console.log("Changed to TEXT");
		} else {
			setChangeType("password");
			setChangeIcon(<Eye size="18" color="#FFF" variant="Bold" />);

			console.log("Changed to PASSWORD");
		}

		console.log(changeType);
	};

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

			<div className="flex items-center rounded-md border-2 border-borderLine-30 !bg-foreground2 py-2 px-4 focus-within:border-active-100">
				<input
					className="bg flex-1 bg-transparent text-sm font-medium outline-none"
					type={changeType}
					name={type}
					id={type}
					ref={getInput}
				/>

				{type === "password" && (
					<button type="button" onClick={usePassword}>
						{changeIcon}
					</button>
				)}
			</div>
		</div>
	);
}
