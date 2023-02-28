"use client";

export default function RegisterLayout({ children }: { children: React.ReactNode }) {
	return (
		<form
			className="flex flex-1 flex-col justify-center gap-6 px-12 max-md:px-3"
			autoComplete="off"
			onSubmit={(e) => e.preventDefault()}
		>
			{children}
		</form>
	);
}
