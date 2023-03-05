"use client";

import { ArrowRight2, Chart2, Element2, Flash, Teacher, UserOctagon } from "iconsax-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

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

interface SidebarProps {
	isOpen: boolean;
}

export default function Sidebar({ isOpen }: SidebarProps) {
	const pathname = usePathname();

	const renderSidebarLink = (title: string, icon: any, href: string, key?: number) => (
		<Link
			href={href}
			className={`flex items-center gap-2 rounded-md px-[14px] py-2 ${
				pathname === href ? "bg-active-100" : "hover:bg-foreground-light"
			}`}
			replace
			key={key}
		>
			{icon}

			<h1 className="flex-1 text-sm font-medium">{title}</h1>

			{pathname === href && <ArrowRight2 size="18" color="#FFF" variant="Bold" />}
		</Link>
	);

	return (
		<nav
			className={`z-50 flex min-h-screen w-[300px] flex-col gap-5 self-stretch bg-foreground py-4 px-4 transition-[margin,padding] duration-500 max-default:absolute max-default:left-0 max-default:border-r-2 max-default:border-foreground-light max-default:pt-[72px] max-[300px]:w-[100vw] ${
				isOpen ? "!ml-[0px]" : "ml-[-300px]"
			}`}
		>
			<button className="flex items-center gap-3 rounded-md border-[1.5px] border-borderLine-30 py-[5px] px-3 hover:bg-foreground-light">
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
