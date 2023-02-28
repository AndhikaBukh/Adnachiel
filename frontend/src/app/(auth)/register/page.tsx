"use client";

import AppButton from "@/component/button";
import AppInput, { AppInputRef } from "@/component/input";
import useAuth from "@/utils/auth";
import { ArrowRight2 } from "iconsax-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";

export default function Register() {
	const router = useRouter();
	const auth = useAuth();

	const getEmail = useRef<AppInputRef>(null);

	useEffect(() => {
		if (auth.verifyEmail()) getEmail.current?.setValue(auth.getUser().email || "");
	}, []);

	return (
		<>
			<div className="flex flex-col gap-1">
				<h1 className="text-3xl font-semibold">Create an account</h1>
				<p className="text-sm text-content-80">
					Enter your email address and verify to continue creating new account.
				</p>
			</div>

			<AppInput label="Email Address" type="email" ref={getEmail} />

			<div className="flex gap-3 max-md:flex-col">
				<h2 className="flex-1 whitespace-nowrap text-sm font-medium text-content-80">
					Already have an account?&nbsp;
					<Link href="/login" className="text-active-100 hover:underline">
						Sign In
					</Link>
				</h2>

				<AppButton
					type="submit"
					onClick={() => {
						if (getEmail.current?.value !== undefined) {
							auth.buildEmail(getEmail.current?.value())
								.then(() => {
									console.log(auth.getUser());
									router.push("/register/verify");
								})
								.catch((err) => {
									console.log(err);
								});
						}
					}}
				>
					Send Verification
					<ArrowRight2 size="18" color="#FFF" variant="Bold" />
				</AppButton>
			</div>
		</>
	);
}
