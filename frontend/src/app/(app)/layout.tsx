import Sidebar from "@/component/sidebar";

export default function App({ children }: { children: React.ReactNode }) {
	return (
		<div className="flex min-h-full min-w-full">
			<Sidebar />

			<div className="flex flex-1 flex-col">
				<div className="py-6 px-5">
					<h1 className="font-medium text-content-60">
						Bootcamp&nbsp;&nbsp;/&nbsp;&nbsp;inosoft-bootcamp&nbsp;&nbsp;/&nbsp;&nbsp;
						<span className="text-content-100">Batch#14</span>
					</h1>
				</div>

				<main className="flex flex-1 items-center justify-center rounded-tl-xl bg-background max-[1050px]:rounded-tl-none">
					{children}
				</main>
			</div>
		</div>
	);
}
