interface AppButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	children: React.ReactNode;
	type?: "button" | "submit" | "reset";
	variant?: "default" | "fade" | "outline";
	center?: boolean;
	fill?: boolean;
	onClick?: () => void;
}

export default function AppButton({
	children,
	type = "button",
	variant = "default",
	center = true,
	fill = false,
	...rest
}: AppButtonProps) {
	return (
		<button
			className={`flex items-center gap-3 truncate rounded-md text-sm font-medium py-2${
				variant === "default"
					? " bg-active-100 pr-6 pl-9"
					: variant === "fade"
					? " bg-transparent px-[14px] hover:bg-foreground-light "
					: " border border-borderLine-30 px-[14px]  hover:bg-foreground-light"
			}${center ? " justify-center" : ""} ${fill ? "w-full" : ""} max-[420px]:text-xs`}
			type={type}
			{...rest}
		>
			{children}
		</button>
	);
}
