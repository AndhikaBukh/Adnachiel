import { Box, ClipboardText, Notepad2, RepeatCircle, UserOctagon, Warning2 } from 'iconsax-react';
import Link from 'next/link';

interface exampleActivity {
	id: number;
	severity: 'warning' | 'info' | 'finished' | 'critical' | 'meeting' | 'ongoing';
	type: 'meeting' | 'issue' | 'task' | 'maintenance' | 'testing' | 'deployment';
	author: string;
	title: string;
	description: string;
	date: string;
}

const exampleData: exampleActivity[] = [
	{
		id: 1,
		severity: 'critical',
		type: 'issue',
		author: 'AndhikaBukh',
		title: 'Alert Critical Issue',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium quas iste voluptatum officiis iusto blanditiis. Qui id excepturi repudiandae ducimus.',
		date: '2021-08-01',
	},
	{
		id: 2,
		severity: 'warning',
		type: 'maintenance',
		author: 'JohnDoe',
		title: 'Scheduled Maintenance',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium quas iste voluptatum officiis iusto blanditiis. Qui id excepturi repudiandae ducimus.',
		date: '2021-08-02',
	},
	{
		id: 3,
		severity: 'finished',
		type: 'deployment',
		author: 'JaneDoe',
		title: 'Successful Deployment',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium quas iste voluptatum officiis iusto blanditiis. Qui id excepturi repudiandae ducimus.',
		date: '2021-08-03',
	},
	{
		id: 4,
		severity: 'meeting',
		type: 'meeting',
		author: 'JackSmith',
		title: 'Team Meeting',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium quas iste voluptatum officiis iusto blanditiis. Qui id excepturi repudiandae ducimus.',
		date: '2021-08-04',
	},
	{
		id: 5,
		severity: 'warning',
		type: 'task',
		author: 'JohnDoe',
		title: 'Task Reminder',
		description:
			'Reminder to complete the task assigned on the project. Please finish it before the deadline.',
		date: '2021-09-15',
	},
	{
		id: 6,
		severity: 'info',
		type: 'maintenance',
		author: 'JaneDoe',
		title: 'Scheduled Maintenance',
		description:
			'System maintenance will be conducted on the next weekend. The system will be down for several hours.',
		date: '2021-10-30',
	},
	{
		id: 7,
		severity: 'finished',
		type: 'testing',
		author: 'BobSmith',
		title: 'Testing Completed',
		description:
			'The testing phase for the project has been completed. No major issues were found.',
		date: '2021-11-20',
	},
	{
		id: 8,
		severity: 'meeting',
		type: 'meeting',
		author: 'EmilyJohnson',
		title: 'Team Meeting',
		description:
			'A team meeting has been scheduled for next Friday at 2 PM. Please make sure to attend.',
		date: '2021-12-10',
	},
	{
		id: 9,
		severity: 'finished',
		type: 'testing',
		author: 'BobSmith',
		title: 'Testing Completed',
		description:
			'The testing phase for the project has been completed. No major issues were found.',
		date: '2021-11-20',
	},
	{
		id: 10,
		severity: 'meeting',
		type: 'meeting',
		author: 'EmilyJohnson',
		title: 'Team Meeting',
		description:
			'A team meeting has been scheduled for next Friday at 2 PM. Please make sure to attend.',
		date: '2021-12-10',
	},
];

const decideTypeColor = {
	warning: 'bg-warning-50',
	info: 'bg-blue',
	finished: 'bg-success-50',
	critical: 'bg-error-50',
	meeting: 'bg-purple',
	ongoing: 'bg-tangerine',
};

const decideSeverityIcon = {
	meeting: <UserOctagon size="23" color="#FFF" variant="Bold" />,
	issue: <Warning2 size="23" color="#FFF" variant="Bold" />,
	task: <Notepad2 size="23" color="#FFF" variant="Bold" />,
	maintenance: <RepeatCircle size="23" color="#FFF" variant="Bold" />,
	testing: <ClipboardText size="23" color="#FFF" variant="Bold" />,
	deployment: <Box size="23" color="#FFF" variant="Bold" />,
};

const decideTypeMessage = {
	meeting: 'Scheduled',
	issue: 'Issued',
	task: 'Assigned',
	maintenance: 'Scheduled',
	testing: 'Tested',
	deployment: 'Deployed',
};

export default function Activity() {
	return (
		<div className="flex flex-1 flex-col gap-3 rounded-lg bg-white py-4 drop-shadow-default">
			<div className="flex px-4">
				<h1 className="text-base font-bold">Latest Activity</h1>
			</div>

			<div className="flex flex-col gap-3 overflow-auto px-4">
				{exampleData.map((activity: exampleActivity) => (
					<Link
						key={activity.id}
						href={`/activity/${activity.id}`}
						className="flex items-center gap-3 rounded-lg border-2 border-neutral-40 p-3 hover:bg-neutral-10"
					>
						<div className={`rounded-full ${decideTypeColor[activity.severity]} p-2`}>
							{decideSeverityIcon[activity.type]}
						</div>

						<div className="flex flex-1 flex-col gap-[2px] overflow-hidden text-ellipsis">
							<h1 className="text-base font-bold">{activity.title}</h1>
							<p className="text-xs font-semibold text-neutral-80">
								{new Date(activity.date).toLocaleDateString('en-GB', {
									year: 'numeric',
									month: 'long',
									day: '2-digit',
								})}
								&nbsp;&nbsp;—&nbsp;&nbsp;
								{activity.severity !== 'finished'
									? decideTypeMessage[activity.type]
									: 'Completed'}
								&nbsp;by&nbsp;
								<Link
									href={`/user/${activity.author}`}
									className="text-blue hover:underline"
								>
									{activity.author}
								</Link>
							</p>
						</div>
					</Link>
				))}
			</div>
		</div>
	);
}
