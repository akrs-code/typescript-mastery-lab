import { useAppStore } from "../state/zustand/appStore";

export function Header() {
	const theme = useAppStore((s) => s.theme);
	const toggleTheme = useAppStore((s) => s.toggleTheme);

	return (
		<header>
			<h1>Movie Explorer</h1>
			<button onClick={toggleTheme}>Theme: {theme}</button>
		</header>
	);
}
