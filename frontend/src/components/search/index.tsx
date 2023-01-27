import { Filter, SearchStatus } from 'iconsax-react';

export default function Search() {
	return (
		<div className="flex gap-3">
			<div className="flex flex-1 items-center gap-3 rounded-lg bg-white px-3 py-2 drop-shadow-default">
				<SearchStatus size="22" color="#383838" variant="Bold" />

				<input type="text" className="flex flex-1 items-center text-base font-bold" />
			</div>

			<button className="rounded-lg bg-white p-3 drop-shadow-default">
				<Filter size="22" color="#383838" variant="Bold" />
			</button>
		</div>
	);
}
