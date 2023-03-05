"use client";

import Sidebar from "@/component/sidebar";
import { SidebarLeft } from "iconsax-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function AppLayout({ children }: { children: React.ReactNode }) {
	const [sidebarOpen, setSidebarOpen] = useState(false);

	useEffect(() => {
		const mediaQuery = window.matchMedia("(max-width: 1050px)");

		const handleMediaQueryChange = (event: MediaQueryListEvent) => {
			setSidebarOpen(!event.matches);
		};

		mediaQuery.addEventListener("change", handleMediaQueryChange);

		return () => mediaQuery.removeEventListener("change", handleMediaQueryChange);
	}, []);

	return (
		<div className="relative flex min-h-screen min-w-full overflow-hidden">
			<Sidebar isOpen={sidebarOpen} />

			<div className="flex flex-1 flex-col">
				<div className="flex items-center gap-4 py-6 px-4">
					<button
						className={`relative z-50 transition-all duration-500 ${
							!sidebarOpen ? " -rotate-180" : ""
						}`}
						onClick={() => {
							setSidebarOpen(!sidebarOpen);
						}}
					>
						<SidebarLeft size="20" color="#FFF" variant="Bold" />
					</button>

					<h1 className="text-sm font-medium text-content-60">
						<Link href="/bootcamp/@inosoft-bootcamp" className="hover:underline">
							@inosoftbootcamp
						</Link>
						&nbsp;&nbsp;/&nbsp;&nbsp;
						<span className="text-content-100">Batch#14</span>
					</h1>
				</div>

				<main
					className={`flex max-w-[100vw] flex-1 items-center justify-center bg-background p-4 max-default:rounded-tl-none ${
						sidebarOpen ? " rounded-tl-xl" : "rounded-tl-none"
					}`}
				>
					{children}
				</main>
			</div>
		</div>
	);
}
