import './globals.css';

import Sidebar from '@/components/sidebar';

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en-GB">
			<head>
				<meta charSet="UTF-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<link rel="icon" href="/favicon.ico" />
			</head>

			<body className="flex bg-background font-sans">
				<Sidebar />

				<main className="flex h-[100vh] flex-1 gap-3 self-stretch p-5">{children}</main>
			</body>
		</html>
	);
}
