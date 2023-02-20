import Image from "next/image";

export default function Auth({ children }: { children: React.ReactNode }) {
	return (
		<div className="flex min-h-screen min-w-full">
			<div className="flex flex-1 flex-col gap-8 px-8 py-12 max-md:px-4 max-md:py-8">
				<figure className="relative">
					<Image src="/adna_text.svg" alt="Adnachiel Logo" height={52} width={200} />
				</figure>

				<form
					className="flex flex-1 flex-col justify-center gap-8 px-12 max-md:px-6"
					autoComplete="off"
				>
					{children}
				</form>
			</div>

			<div className="flex-[1.8] p-5 max-lg:hidden">
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
