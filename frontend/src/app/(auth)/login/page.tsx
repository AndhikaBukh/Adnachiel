import { ArrowRight2, EyeSlash } from "iconsax-react";
import Link from "next/link";

export default function Register() {
	return (
		<>
			<div className="flex flex-col gap-1">
				<h1 className="text-3xl font-semibold">Create an account</h1>
				<p className="text-sm text-content-80">
					Enter your email and create a password to get started with your account.
				</p>
			</div>

			<div className="flex flex-col gap-2 self-stretch">
				<label className="text-sm text-content-80" htmlFor="email">
					Email Address
				</label>

				<div className="flex items-center rounded-md border-2 border-borderLine-30 !bg-foreground2 py-2 px-4 focus-within:border-active-100">
					<input
						className="bg flex-1 bg-transparent font-medium outline-none"
						type="email"
						name="email"
						id="email"
					/>
				</div>
			</div>

			<div className="flex flex-col gap-2 self-stretch">
				<label className="text-sm text-content-80" htmlFor="password">
					Password
				</label>

				<div className="flex items-center rounded-md border-2 border-borderLine-30 !bg-foreground2 py-2 px-4 focus-within:border-active-100">
					<input
						className="bg flex-1 bg-transparent font-medium outline-none"
						type="password"
						name="password"
						id="password"
					/>

					<button className="">
						<EyeSlash size="18" color="#FFF" variant="Bold" />
					</button>
				</div>
			</div>

			<div className="flex gap-3 max-md:flex-col">
				<h2 className="flex-1 whitespace-nowrap text-sm font-medium text-content-80">
					Didn&apos;t have an account?&nbsp;
					<Link href="/login" className="text-active-100 hover:underline">
						Sign Up
					</Link>
				</h2>

				<button className="flex items-center justify-center gap-4 whitespace-nowrap rounded-lg bg-active-100 py-2 pr-6 pl-9 text-sm hover:outline-1 hover:outline-content-100 max-md:py-3">
					Sign In
					<ArrowRight2 size="18" color="#FFF" variant="Bold" />
				</button>
			</div>
		</>
	);
}
