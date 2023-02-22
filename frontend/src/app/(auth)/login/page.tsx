import AppInput from "@/component/input";
import { ArrowRight2, EyeSlash } from "iconsax-react";
import Link from "next/link";

export default function Login() {
	return (
		<>
			<div className="flex flex-col gap-1">
				<h1 className="text-3xl font-semibold">Create an account</h1>
				<p className="text-sm text-content-80">
					Enter your email and create a password to get started with your account.
				</p>
			</div>

			<AppInput label="Email Address" type="email" />

			<AppInput label="Password" type="password" />

			<div className="flex gap-3 max-md:flex-col">
				<h2 className="flex-1 whitespace-nowrap text-sm font-medium text-content-80">
					Didn&apos;t have an account?&nbsp;
					<Link href="/register" className="text-active-100 hover:underline">
						Sign Up
					</Link>
				</h2>

				<button
					className="flex items-center justify-center gap-4 whitespace-nowrap rounded-lg bg-active-100 py-2 pr-6 pl-9 text-sm hover:outline-1 hover:outline-content-100 max-md:py-[10px]"
					type="submit"
				>
					Sign In
					<ArrowRight2 size="18" color="#FFF" variant="Bold" />
				</button>
			</div>
		</>
	);
}
