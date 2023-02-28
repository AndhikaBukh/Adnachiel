"use client";

import AppButton from "@/component/button";
import AppInput from "@/component/input";
import useAuth from "@/utils/auth";
import { ArrowRight2 } from "iconsax-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Authentication() {
	const router = useRouter();
	const auth = useAuth();

	useEffect(() => {
		console.log(auth.getUser().email);

		if (!auth.verifyEmail()) router.push("/register");
	}, []);

	return (
		<>
			<div className="flex flex-col gap-1">
				<h1 className="text-3xl font-semibold">Verification Code Sent!</h1>
				<p className="text-sm text-content-80">
					Your verification code was sent to your email.
				</p>
			</div>

			<AppInput label="Verification Code" type="number" />

			<div className="flex gap-3 max-md:flex-col">
				<AppButton type="submit" onClick={() => router.push("/register/")}>
					Verify
					<ArrowRight2 size="18" color="#FFF" variant="Bold" />
				</AppButton>
			</div>
		</>
	);
}
