"use client";

import { ArrowRight2 } from "iconsax-react";
import { useRouter } from "next/navigation";
import AppButton from "@/component/button";
import AppInput from "@/component/input";
import Link from "next/link";

export default function Register() {
	const router = useRouter();

	return (
		<form
			className="flex flex-1 flex-col justify-center gap-8 px-12 max-md:px-6"
			autoComplete="off"
			onSubmit={(e) => e.preventDefault()}
		>
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
					Already have an account?&nbsp;
					<Link href="/login" className="text-active-100 hover:underline">
						Sign In
					</Link>
				</h2>

				<AppButton type="submit" onClick={() => router.push("/dashboard")}>
					Continue
					<ArrowRight2 size="18" color="#FFF" variant="Bold" />
				</AppButton>
			</div>
		</form>
	);
}
