"use client";

import Image from "next/image";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
	return (
		<div className="flex min-h-screen min-w-full">
			<div className="flex flex-1 flex-col gap-8 px-8 py-12 max-md:px-4">
				<figure className="relative">
					<Image src="/adna_text.svg" alt="Adnachiel Logo" height={32} width={160} />
				</figure>

				<form
					className="flex min-w-[520px] flex-1 flex-col justify-center gap-6 px-12 max-md:min-w-0 max-md:px-3"
					autoComplete="off"
					onSubmit={(e) => e.preventDefault()}
				>
					{children}
				</form>
			</div>

			<div className="flex-[1.85] p-5 max-lg:hidden">
				<figure className="relative grid min-h-full place-items-center overflow-hidden rounded-lg">
					<Image
						src="/auth_image.png"
						alt="Adnachiel App Preview"
						className="aspect-square min-w-[1000px]"
						fill
					/>
				</figure>
			</div>
		</div>
	);
}
