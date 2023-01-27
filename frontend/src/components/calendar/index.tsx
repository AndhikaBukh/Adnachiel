'use client';

import { ArrowLeft2, ArrowRight2 } from 'iconsax-react';
import React, { useState, useEffect } from 'react';

interface Day {
	date: Date;
	overflow: boolean;
	isToday?: boolean;
	isSelected?: boolean;
}

const dayStyle = 'grid min-h-[30px] min-w-[30px] place-items-center rounded-md';

const Calendar: React.FC = () => {
	const [currentDate, setCurrentDate] = useState(new Date());
	const [selectedDate, setSelectedDate] = useState(new Date());
	const [days, setDays] = useState<Day[]>([]);

	const updateDates = () => {
		const prevMonthDays = new Date(
			currentDate.getFullYear(),
			currentDate.getMonth(),
			0
		).getDate();

		const firstDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();
		const daysInMonth = new Date(
			currentDate.getFullYear(),
			currentDate.getMonth() + 1,
			0
		).getDate();

		const daysArray: Day[] = [];

		for (let i = prevMonthDays - firstDay + 1; i <= prevMonthDays; i++) {
			const date = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, i);
			const isToday = date.toDateString() === new Date().toDateString();
			const isSelected = date.toDateString() === selectedDate.toDateString();
			daysArray.push({ date, overflow: true, isToday, isSelected });
		}

		for (let i = 1; i <= daysInMonth; i++) {
			const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), i);
			const isToday = date.toDateString() === new Date().toDateString();
			const isSelected = date.toDateString() === selectedDate.toDateString();
			daysArray.push({ date, overflow: false, isToday, isSelected });
		}

		const lastDay = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDay();

		for (let i = 1; i <= 7 - lastDay; i++) {
			const date = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, i);
			const isToday = date.toDateString() === new Date().toDateString();
			const isSelected = date.toDateString() === selectedDate.toDateString();
			daysArray.push({ date, overflow: true, isToday, isSelected });
		}
		setDays(daysArray);
	};

	const RenderDate: React.FC<{ day: Day }> = ({ day }) => {
		return (
			<button
				className={`${dayStyle} hover:bg-neutral-10${
					day.overflow ? ' text-neutral-70' : ''
				}${day.isToday ? ' !bg-blue text-white' : ''}${
					day.isSelected && day.isToday !== true
						? ' border-2 border-solid border-blue !bg-white'
						: ''
				}`}
				onClick={() => setSelectedDate(day.date)}
			>
				{day.date.getDate()}
			</button>
		);
	};

	useEffect(() => {
		updateDates();
	}, []);

	useEffect(() => {
		updateDates();
	}, [currentDate, selectedDate]);

	return (
		<div className="flex flex-col overflow-hidden rounded-lg bg-white drop-shadow-default">
			<div className="flex bg-blue px-5 py-3">
				<h1 className="text-base font-semibold text-white">
					{new Date().toLocaleString('en-GB', {
						weekday: 'long',
						day: 'numeric',
						month: 'long',
						year: 'numeric',
					})}
				</h1>
			</div>

			<div className="flex flex-col gap-3 py-4 px-5">
				<div className="flex items-center justify-between">
					<h1 className="text-base font-bold">
						{currentDate.toLocaleString('en-GB', {
							month: 'long',
							year: 'numeric',
						})}
					</h1>

					<div className="flex gap-2">
						<button
							onClick={() =>
								setCurrentDate(
									new Date(currentDate.setMonth(currentDate.getMonth() - 1))
								)
							}
						>
							<ArrowLeft2 size={22} color="#383838" variant="Linear" />
						</button>

						<button
							onClick={() =>
								setCurrentDate(
									new Date(currentDate.setMonth(currentDate.getMonth() + 1))
								)
							}
						>
							<ArrowRight2 size={22} color="#383838" variant="Linear" />
						</button>
					</div>
				</div>

				<div className="flex flex-col gap-3 py-2">
					<div className="flex gap-5 text-sm font-bold">
						<div className={dayStyle}>Mo</div>
						<div className={dayStyle}>Tu</div>
						<div className={dayStyle}>We</div>
						<div className={dayStyle}>Th</div>
						<div className={dayStyle}>Fr</div>
						<div className={dayStyle}>Sa</div>
						<div className={dayStyle}>Su</div>
					</div>

					<div className="flex gap-5 font-bold">
						{days.slice(0, 7).map((day, index) => {
							return <RenderDate key={index} day={day} />;
						})}
					</div>

					<div className="flex gap-5 font-bold">
						{days.slice(7, 14).map((day, index) => {
							return <RenderDate key={index} day={day} />;
						})}
					</div>

					<div className="flex gap-5 font-bold">
						{days.slice(14, 21).map((day, index) => {
							return <RenderDate key={index} day={day} />;
						})}
					</div>

					<div className="flex gap-5 font-bold">
						{days.slice(21, 28).map((day, index) => {
							return <RenderDate key={index} day={day} />;
						})}
					</div>

					<div className="flex gap-5 font-bold">
						{days.slice(28, 35).map((day, index) => {
							return <RenderDate key={index} day={day} />;
						})}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Calendar;
