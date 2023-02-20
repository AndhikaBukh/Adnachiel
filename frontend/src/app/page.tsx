import Link from "next/link";

export default function Home() {
	return (
		<div className="flex min-h-screen min-w-full flex-col items-center justify-center">
			<h1 className="text-2xl">Hello World</h1>

			<div className="mt-4">
				<Link href="/login" className="text-active-100 hover:underline">
					Login
				</Link>
				<span className="mx-2">|</span>
				<Link href="/register" className="text-active-100 hover:underline">
					Register
				</Link>
			</div>
		</div>
	);
}
