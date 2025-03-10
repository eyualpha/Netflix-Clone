import {
  createContext,
  FC,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { Movie } from "../types/Movies";

interface FavoritesContextType {
  favorites: Movie[];
  addFavorite: (movie: Movie) => void;
  removeFavorite: (id: number) => void;
  isFavorite: (id: number) => boolean;
}

export const FavoriteContext = createContext<FavoritesContextType | undefined>(
  undefined,
);

export const FavorietsProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [favorites, setFavorites] = useState<Movie[]>(() => {
    const saved = localStorage.getItem("favorites");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const addFavorite = (movie: Movie) => {
    setFavorites((prev) => [...prev, movie]);
  };

  const removeFavorite = (id: number) => {
    setFavorites((prev) => prev.filter((movie) => movie.id !== id));
  };

  return (
    <FavoriteContext.Provider
      value={{
        favorites,
        addFavorite: () => {},
        removeFavorite: () => {},
        isFavorite: () => false,
      }}
    >
      {children}
    </FavoriteContext.Provider>
  );
};

// favorites custom hook
export const useFavorites = () => {
  const context = useContext(FavoriteContext);
  if (!context) {
    throw new Error("useFavorites must be used within a FavoritesProvider");
  }
  return context;
};
