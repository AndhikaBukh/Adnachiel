import Calendar from '@/components/calendar';
import Graph from '@/components/graph';
import Overview from '@/components/overview';
import Schedule from '@/components/schedule';
import Search from '@/components/search';
import Statitics from '@/components/statistics';
import Activity from '@/components/activity';

export default function Home() {
	return (
		<>
			<div className="flex flex-1 flex-col gap-3">
				<Search />

				<div className="flex max-h-[calc(100%-0.75rem-46px)] flex-1 gap-3">
					<div className="flex max-h-full flex-col gap-3">
						<Statitics />

						<Activity />
					</div>

					<div className="flex flex-1 flex-col gap-3">
						<Graph />

						<Overview />
					</div>
				</div>
			</div>

			<div className="flex flex-col gap-3">
				<Calendar />

				<Schedule />
			</div>
		</>
	);
}
