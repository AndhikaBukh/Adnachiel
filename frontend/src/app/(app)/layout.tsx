"use client";

import Sidebar from "@/component/sidebar";
import { SidebarLeft } from "iconsax-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function AppLayout({ children }: { children: React.ReactNode }) {
	const pathname = usePathname();

	const [sidebarOpen, setSidebarOpen] = useState(true);

	useEffect(() => {
		const mediaQuery = window.matchMedia("(max-width: 1050px)");

		const handleMediaQueryChange = (event: MediaQueryListEvent) => {
			if (event.matches) return setSidebarOpen(true);

			setSidebarOpen(!event.matches);
		};

		mediaQuery.addEventListener("change", handleMediaQueryChange);

		return () => mediaQuery.removeEventListener("change", handleMediaQueryChange);
	}, []);

	useEffect(() => {
		if (window.matchMedia("(max-width: 1050px)").matches) return setSidebarOpen(true);
	}, [pathname]);

	return (
		<div className="relative flex min-h-screen min-w-full overflow-hidden">
			<Sidebar isOpen={sidebarOpen} />

			<div className="flex flex-1 flex-col">
				<div className="flex items-center gap-4 py-6 px-4">
					{/* This button reverts its functionallity and appearance in mobile devices, Why? Checkout Sidebar Component */}
					<button
						className={`relative z-50 transition-all duration-500 max-default:rotate-0 ${
							!sidebarOpen ? "-rotate-180" : "max-default:!-rotate-180"
						}`}
						onClick={() => {
							setSidebarOpen(!sidebarOpen);
						}}
					>
						<SidebarLeft size="22" color="#FFF" variant="Bold" />
					</button>

					<h1 className="text-sm font-medium text-content-60">
						@inosoftbootcamp&nbsp;&nbsp;/&nbsp;&nbsp;
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
