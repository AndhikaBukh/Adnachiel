"use client";

import { ArrowRight2, Chart2, Element2, Flash, Teacher, UserOctagon } from "iconsax-react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const dataSidebarLink = [
	{
		title: "Dashboard",
		icon: <Element2 size="20" color="#FFF" variant="Bold" />,
		href: "/dashboard",
	},
	{
		title: "Activities",
		icon: <Flash size="20" color="#FFF" variant="Bold" />,
		href: "/activities",
	},
	{
		title: "Projects",
		icon: <Chart2 size="20" color="#FFF" variant="Bold" />,
		href: "/projects",
	},
	{
		title: "Teams",
		icon: <UserOctagon size="20" color="#FFF" variant="Bold" />,
		href: "/teams",
	},
];

const dataSidebarWorkspace = {
	name: "Inosoft Bootcamp - Batch #14",
	handle: "@inosoft-bootcamp",
	type: "Bootcamp",
};

const dataSidebarUser = {
	name: "Andhika Bukhari",
	handle: "@andhikabukh",
};

export default function Sidebar() {
	const pathname = usePathname();

	const [isOpen, setIsOpen] = useState(true);

	const renderSidebarLink = (title: string, icon: any, href: string, key?: number) => (
		<Link
			href={href}
			className={`flex items-center gap-2 rounded-md px-[14px] py-2 ${
				pathname === href ? "bg-active-100" : "hover:bg-foreground-light"
			}`}
			key={key}
		>
			{icon}

			<h1 className="flex-1 text-sm font-medium">{title}</h1>

			{pathname === href && <ArrowRight2 size="18" color="#FFF" variant="Bold" />}
		</Link>
	);

	useEffect(() => {
		const mediaQuery = window.matchMedia("(max-width: 1050px)");

		const handleMediaQueryChange = (event: MediaQueryListEvent) => {
			setIsOpen(!event.matches);
		};

		mediaQuery.addEventListener("change", handleMediaQueryChange);

		return () => mediaQuery.removeEventListener("change", handleMediaQueryChange);
	}, []);

	return (
		<nav
			className={`flex w-[300px] flex-col gap-5 self-stretch bg-foreground py-4 px-6 transition-[margin] duration-500 ${
				isOpen ? "!ml-[0px]" : "ml-[-300px]"
			}`}
		>
			<button
				className="flex items-center gap-3 rounded-md border-[1.5px] border-borderLine-30 py-[5px] px-3 hover:bg-foreground-light"
				onClick={() => setIsOpen(!isOpen)}
			>
				<div className="grid place-items-center rounded bg-background-light p-[5px]">
					<Teacher size="16" color="#FFF" variant="Bold" />
				</div>

				<h1 className="flex-1 text-ellipsis whitespace-nowrap text-left text-xs font-medium">
					{dataSidebarWorkspace.name}
				</h1>
			</button>

			<div className="flex flex-1 flex-col gap-2">
				{dataSidebarLink.map((item, index) =>
					renderSidebarLink(item.title, item.icon, item.href, index)
				)}

				<button className="mt-auto flex items-center gap-3 rounded-md border-[1.5px] border-borderLine-30 py-[6px] px-3 hover:bg-foreground-light">
					<figure className="relative h-[40px] w-[40px] overflow-hidden rounded-full">
						<Image
							src="https://cdn.discordapp.com/attachments/1068449445013889055/1068449916017463416/Important_1.png"
							alt="User Profile Picture"
							fill
						/>
					</figure>

					<div className="gap flex flex-col">
						<h1 className="text-ellipsis whitespace-nowrap text-left text-sm font-semibold">
							{dataSidebarUser.name}
						</h1>

						<h2 className="text-ellipsis whitespace-nowrap text-left text-xs font-medium text-content-80">
							{dataSidebarUser.handle}
						</h2>
					</div>
				</button>
			</div>
		</nav>
	);
}
