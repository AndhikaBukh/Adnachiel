"use client";

import { useEffect } from "react";
import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
	useEffect(() => {
		console.log(window.matchMedia("(prefers-color-scheme: dark)"));
	}, []);

	return (
		<html lang="en">
			{/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
			<head />
			<body className="bg-background font-inter text-content-100">{children}</body>
		</html>
	);
}
