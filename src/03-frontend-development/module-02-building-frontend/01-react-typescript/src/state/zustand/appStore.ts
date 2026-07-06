import { create } from "zustand";
import type { Movie } from "../../types/movie";

export type Theme = "light" | "dark";

interface Session {
	userId: string | null;
	token: string | null;
}

interface AppState {
	theme: Theme;
	session: Session;
	favorites: Record<string, Movie>;

	toggleTheme: () => void;
	signIn: (userId: string, token: string) => void;
	signOut: () => void;
	addFavorite: (movie: Movie) => void;
	removeFavorite: (id: string) => void;
	isFavorite: (id: string) => boolean;
}

export const useAppStore = create<AppState>((set, get) => ({
	theme: "light",
	session: { userId: null, token: null },
	favorites: {},

	toggleTheme: () => set((s) => ({ theme: s.theme === "light" ? "dark" : "light" })),
	signIn: (userId, token) => set({ session: { userId, token } }),
	signOut: () => set({ session: { userId: null, token: null }, favorites: {} }),

	addFavorite: (movie) => set((s) => ({ favorites: { ...s.favorites, [movie.id]: movie } })),
	removeFavorite: (id) => {
		const next = { ...get().favorites };
		delete next[id];
		set({ favorites: next });
	},
	isFavorite: (id) => Boolean(get().favorites[id]),
}));
