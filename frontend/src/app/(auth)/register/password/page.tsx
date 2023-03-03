"use client";

import AppButton from "@/component/button";
import AppInput, { AppInputRef } from "@/component/input";
import useAuth from "@/utils/auth";
import { ArrowRight2 } from "iconsax-react";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export default function Password() {
	const router = useRouter();
	const auth = useAuth();

	const [error, setError] = useState<string>();

	const getPassword = useRef<AppInputRef>(null);
	const getConfirmPassword = useRef<AppInputRef>(null);

	useEffect(() => {
		if (!auth.verifyEmail()) router.push("/register");
	}, []);

	return (
		<>
			<div className="flex flex-col gap-1">
				<h1 className="text-3xl font-semibold">Create a password</h1>
				<p className="text-sm text-content-80">
					We recommend to use strong password while easy to remmeber.
				</p>
			</div>

			<AppInput label="Password" type="password" error={error} ref={getPassword} autoFocus />

			<AppInput
				label="Confirm Password"
				type="password"
				error={error}
				ref={getConfirmPassword}
			/>

			<div className="flex justify-end max-md:flex-col">
				<AppButton
					type="submit"
					onClick={() => {
						if (
							getPassword.current?.value !== undefined &&
							getConfirmPassword.current?.value !== undefined
						) {
							auth.buildPassword(
								getPassword.current?.value(),
								getConfirmPassword.current?.value()
							)
								.then(() => {
									console.log("User Build Successful!");
									console.log("Logged in as", auth.getUser());
									router.push("/dashboard");
								})
								.catch((err) => {
									setError(err);
									getPassword.current?.setError(true);
									getConfirmPassword.current?.setError(true);
								});
						}
					}}
				>
					Confirm
					<ArrowRight2 size="18" color="#FFF" variant="Bold" />
				</AppButton>
			</div>
		</>
	);
}
