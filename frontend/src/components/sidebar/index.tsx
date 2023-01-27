'use client';

import {
	ArrowRight2,
	Buildings,
	Calendar2,
	Element,
	Flash,
	NoteText,
	Setting,
	Setting2,
	UserOctagon,
} from 'iconsax-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const generalLink = [
	{
		title: 'Dashboard',
		link: '/',
		icon: (color: string) => <Element size="26" color={color} variant="Bold" />,
	},
	{
		title: 'Teams',
		link: '/teams',
		icon: (color: string) => <UserOctagon size="26" color={color} variant="Bold" />,
	},
	{
		title: 'Activity',
		link: '/activity',
		iconColor: '#383838',
		icon: (color: string) => <Flash size="26" color={color} variant="Bold" />,
	},
	{
		title: 'History',
		link: '/history',
		iconColor: '#383838',
		icon: (color: string) => <Calendar2 size="26" color={color} variant="Bold" />,
	},
];

const adminLink = [
	{
		title: 'Assignments',
		link: '/assignment',
		icon: (color: string) => <NoteText size="26" color={color} variant="Bold" />,
	},
	{
		title: 'Moderation',
		link: '/moderation',
		icon: (color: string) => <Setting size="26" color={color} variant="Bold" />,
	},
];

const userData = {
	name: 'Rafli Andhika Al-Bukhari',
	role: 'Admin',
	avatar: 'https://cdn.discordapp.com/avatars/890118920982388766/7129125a48e6ce53a273ab158ea9a87d.webp?size=512',
	company: 'PT. Alief Mitra Karya Indonesia',
};

const Sidebar = () => {
	const pathname = usePathname();
	const [active, setActive] = useState(window.location.pathname);

	useEffect(() => {
		setActive(pathname || '/');
	}, [pathname]);

	return (
		<nav className="flex min-w-[360px] flex-col items-center gap-3 border-r-2 border-[#E6E6E6] bg-white p-5">
			<Link href="/" className="min-w-[65%] max-w-full">
				<figure className="relative aspect-video overflow-hidden">
					<Image src="/logo.svg" alt={'Build with Next deployed on Vercel'} fill />
				</figure>
			</Link>

			<section className="flex flex-1 flex-col gap-28 self-stretch">
				<div className="flex flex-col gap-3">
					{generalLink.map((item, index) => (
						<Link
							key={index}
							href={item?.link || '/'}
							className={`flex items-center justify-between gap-3 self-stretch rounded-xl p-4 ${
								active === item?.link ? 'bg-blue' : 'hover:bg-neutral-10'
							}`}
						>
							{item?.icon && (
								<span className="min-h-24 min-w-24">
									{item?.icon(active === item?.link ? '#fff' : '#383838')}
								</span>
							)}

							<h1
								className={`flex-1 text-base font-semibold ${
									item?.link === active && 'text-white'
								}`}
							>
								{item?.title}
							</h1>

							{item?.link === window.location.pathname && (
								<span className="min-h-24 min-w-24">
									<ArrowRight2 size="22" color="#fff" variant="Bold" />
								</span>
							)}
						</Link>
					))}
				</div>

				<div className="flex flex-col gap-3">
					<h2 className="px-4 font-semibold text-neutral-60">Admin</h2>

					{adminLink.map((item, index) => (
						<Link
							key={index}
							href={item?.link || '/'}
							className={`flex items-center justify-between gap-3 self-stretch rounded-xl p-4 ${
								active === item?.link ? 'bg-blue' : 'hover:bg-neutral-10'
							}`}
						>
							{item?.icon && (
								<span className="min-h-24 min-w-24">
									{item?.icon(active === item?.link ? '#fff' : '#383838')}
								</span>
							)}

							<h1
								className={`flex-1 text-base font-semibold ${
									item?.link === active && 'text-white'
								}`}
							>
								{item?.title}
							</h1>

							{item?.link === window.location.pathname && (
								<span className="min-h-24 min-w-24">
									<ArrowRight2 size="22" color="#fff" variant="Bold" />
								</span>
							)}
						</Link>
					))}
				</div>
			</section>

			<Link
				href="/account"
				className="flex items-center gap-1 self-stretch rounded-lg px-3 py-2 hover:bg-neutral-10"
			>
				<figure className="overflow-hidden rounded-full">
					<Image src={userData?.avatar} alt={userData?.name} height={40} width={40} />
				</figure>

				<div className="flex flex-1 flex-col gap-1 p-1">
					<h1 className="text-ellipsis text-sm font-bold">{userData?.name}</h1>

					<div className="flex items-center gap-1">
						<span className="aspect-square rounded-sm bg-[#5A6F7D] p-[2px]">
							<Buildings size="12" color="#FFF" variant="Bold" />
						</span>

						<h2 className="text-ellipsis text-xs font-semibold">{userData?.company}</h2>
					</div>
				</div>

				<Setting2 size="22" color="#383838" variant="Bold" />
			</Link>
		</nav>
	);
};

export default Sidebar;
