import { FC } from 'react';
import './globals.css';

interface NavbarProps {
	title: string;
}

const NavbarItems: FC<NavbarProps> = ({ title }) => {
	return (
		<div className="gap flex items-center justify-between gap-3 p-3">
			<span className="min-h-24 min-w-24"></span>

			<h1 className="flex-1">{title}</h1>

			<div className="flex gap-3" aria-hidden>
				<a href="/login" className="text-blue-500">
					Login
				</a>
				<a href="/register" className="text-blue-500">
					Register
				</a>
			</div>
		</div>
	);
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en-GB">
			<head />

			<body>
				<div className="flex min-h-screen bg-blue-50">
					<div className="flex flex-col items-center p-5">
						{NavbarItems({ title: 'INOSOFT HRD' })}
					</div>
					{children}
				</div>
			</body>
		</html>
	);
}
