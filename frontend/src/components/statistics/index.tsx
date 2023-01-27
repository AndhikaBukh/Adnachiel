import { People, Verify, Warning2 } from 'iconsax-react';

export default function Statitics() {
	return (
		<div className="flex flex-col gap-6 rounded-lg bg-white p-4 drop-shadow-default">
			<div className="flex items-center justify-between gap-14">
				<h1 className="text-base font-bold">Teams Statistics</h1>

				<div className="flex gap-3 rounded-md bg-background py-[6px] px-4">
					<button className="flex rounded-md bg-white py-[6px] px-6 text-xs font-bold text-blue drop-shadow-[2px_2px_4px_rgba(0,0,0,0.05)]">
						Monthly
					</button>

					<button className="flex rounded-md py-[6px] px-6 text-xs font-bold drop-shadow-[2px_2px_4px_rgba(0,0,0,0.05)]">
						Yearly
					</button>
				</div>
			</div>

			<div className="flex gap-12 py-[6px] px-[12px]">
				<div className="flex flex-col">
					<div className="flex items-start gap-1">
						<h1 className="text-2xl font-bold">12</h1>

						<span className="self-start rounded-sm bg-[#5A6F7D] p-[2px]">
							<People size="14" color="#FFF" variant="Bold" />
						</span>
					</div>

					<h1 className="text-xs font-semibold text-neutral-60">Active Teams</h1>
				</div>

				<div className="flex flex-col">
					<div className="flex items-start gap-1">
						<h1 className="text-2xl font-bold">1,832</h1>

						<span className="self-start rounded-sm">
							<Verify size="18" color="#01A2E6" variant="Bold" />
						</span>
					</div>

					<h1 className="text-xs font-semibold text-neutral-60">Issues Resolved</h1>
				</div>

				<div className="flex flex-col">
					<div className="flex items-start gap-1">
						<h1 className="text-2xl font-bold">46</h1>

						<span className="self-start rounded-sm">
							<Warning2 size="18" color="#FF9C09" variant="Bold" />
						</span>
					</div>

					<h1 className="text-xs font-semibold text-neutral-60">Active Issues</h1>
				</div>
			</div>
		</div>
	);
}
