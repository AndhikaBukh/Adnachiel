import Link from "next/link";

interface AppButtonProps {
	children: React.ReactNode;
	type?: "button" | "submit" | "reset";
	onClick?: () => void;
}

export default function AppButton({ children, type = "button", onClick }: AppButtonProps) {
	return (
		<button
			className="flex items-center justify-center gap-4 rounded-lg bg-active-100 py-2 pr-6 pl-9 text-sm max-md:py-[10px]"
			type={type}
			onClick={onClick}
		>
			{children}
		</button>
	);
}
