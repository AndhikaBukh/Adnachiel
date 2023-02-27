"use client";

import { useEffect, useState } from "react";

export default function Debug() {
	const [isDragging, setIsDragging] = useState(false);
	const [position, setPosition] = useState(300);

	const handleMouseDown = (event: React.MouseEvent<HTMLButtonElement>) => {
		// Set isDragging to true and capture initial position of mouse
		setIsDragging(true);

		console.log("Mouse Down");
	};

	const handleMouseMove = (event: React.MouseEvent<HTMLButtonElement>) => {
		if (isDragging) {
			setPosition(event.clientX);

			console.log(position);
		}
	};

	const handleMouseUp = () => {
		if (!isDragging) return;

		// Set isDragging to false when user releases mouse button
		setIsDragging(false);

		console.log("Mouse Up");
	};

	useEffect(() => {
		window.addEventListener("mousemove", (event) => {
			console.log("Cursor Window Position: " + event.clientX);
		});

		return () => {
			window.removeEventListener("mousemove", (event) => {
				console.log("Cursor Window Position: " + event.clientX);
			});
		};
	}, []);

	return (
		<div className="relative flex min-h-screen min-w-full flex-col">
			<button
				className="absolute h-5 w-5 bg-red-600"
				style={{
					left: position,
				}}
				onMouseDown={handleMouseDown}
				onMouseMove={handleMouseMove}
				onMouseUp={handleMouseUp}
				onMouseLeave={handleMouseUp}
			></button>

			<button
				className="absolute h-5 w-2 bg-blue-600"
				style={{
					top: 100,
					left: position,
				}}
				onMouseDown={handleMouseDown}
				onMouseMove={handleMouseMove}
				onMouseUp={handleMouseUp}
			></button>
		</div>
	);
}
