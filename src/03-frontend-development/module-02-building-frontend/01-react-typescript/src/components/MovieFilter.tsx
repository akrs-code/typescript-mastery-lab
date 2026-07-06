import { useAtom } from "jotai";
import { searchAtom, genreAtom, sortByAtom } from "../state/jotai/movie";

export function MovieFilters() {
	const [search, setSearch] = useAtom(searchAtom);
	const [genre, setGenre] = useAtom(genreAtom);
	const [sortBy, setSortBy] = useAtom(sortByAtom);

	return (
		<div>
			<input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search..." />
			<select value={genre} onChange={(e) => setGenre(e.target.value)}>
				<option>All</option>
				<option>Action</option>
				<option>Sci-Fi</option>
				<option>Drama</option>
			</select>
			<select value={sortBy} onChange={(e) => setSortBy(e.target.value as any)}>
				<option value="rating">Rating</option>
				<option value="year">Year</option>
				<option value="title">Title</option>
			</select>
		</div>
	);
}
