import AppButton from "@/component/button";
import { Calendar2, Messages1, Setting2, Teacher } from "iconsax-react";
import Link from "next/link";

export default function Dashboard() {
	const RenderWorkspace = () => (
		<div className="flex flex-col gap-3 rounded-md bg-foreground py-4 shadow-default">
			<div className="flex items-center justify-between px-4">
				<h1 className="truncate text-sm font-semibold">Bootcamp Participants</h1>

				<button className="flex items-center gap-3 rounded border border-borderLine-30 bg-background py-1 px-3 text-[10px] font-medium shadow-sm">
					Settings
					<Setting2 size="14" color="#FFF" variant="Bold" />
				</button>
			</div>

			<div className="flex items-center gap-3 px-4">
				<div className="grid place-items-center rounded-lg bg-background-light p-3">
					<Teacher size="22" color="#FFF" variant="Bold" />
				</div>
				<div className="flex flex-col">
					<h1 className="truncate text-sm font-medium">Inosoft Bootcamp - Batch #14</h1>
					<h2 className="truncate text-xs font-semibold text-content-60">
						<Link href="/bootcamp/inosoftbootcamp" className="hover:underline">
							@inosoftbootcamp
						</Link>
						&nbsp;&nbsp;/&nbsp;&nbsp; Batch-14
					</h2>
				</div>
			</div>

			<span className="w-full border border-borderLine-30" />

			<div className="flex flex-col gap-2 px-4">
				<AppButton variant="fade" center={false}>
					<Calendar2 size="18" color="#FFF" variant="Bold" />
					View Scheduled Meetings
				</AppButton>
				<AppButton variant="fade" center={false}>
					<Messages1 size="18" color="#FFF" variant="Bold" />
					Request An User Support
				</AppButton>
				<AppButton variant="outline">View Bootcamp Profile</AppButton>
			</div>
		</div>
	);

	const renderProfile = () => (
		<div className="flex flex-col gap-3 rounded-md bg-foreground py-4 shadow-lg">
			<div className="flex items-center justify-between px-4">
				<h1 className="truncate text-sm font-semibold">Bootcamp Participants</h1>

				<button className="flex items-center gap-3 rounded border border-borderLine-30 bg-background py-1 px-3 text-[10px] font-medium shadow-sm">
					Settings
					<Setting2 size="14" color="#FFF" variant="Bold" />
				</button>
			</div>

			<div className="flex items-center gap-3 px-4">
				<div className="grid place-items-center rounded-lg bg-background-light p-3">
					<Teacher size="22" color="#FFF" variant="Bold" />
				</div>
				<div className="flex flex-col">
					<h1 className="truncate text-xs font-medium min-[1050px]:text-base">
						Inosoft Bootcamp - Batch #14
					</h1>
					<h2 className="truncate text-[10px] font-semibold text-content-60 min-[1050px]:text-xs">
						<Link href="/bootcamp/inosoftbootcamp" className="hover:underline">
							@inosoftbootcamp
						</Link>
						&nbsp;&nbsp;/&nbsp;&nbsp; Batch-14
					</h2>
				</div>
			</div>

			<span className="w-full border border-borderLine-30" />

			<div className="flex flex-col gap-2 px-4">
				<AppButton variant="fade" center={false}>
					<Calendar2 size="18" color="#FFF" variant="Bold" />
					View Scheduled Meetings
				</AppButton>
				<AppButton variant="fade" center={false}>
					<Messages1 size="18" color="#FFF" variant="Bold" />
					Request An User Support
				</AppButton>
				<AppButton variant="outline">View Bootcamp Profile</AppButton>
			</div>
		</div>
	);

	return (
		<div className="flex-1 self-stretch">
			<div className="flex flex-1 flex-col">
				<div className="flex flex-col">{RenderWorkspace()}</div>
			</div>
		</div>
	);
}
