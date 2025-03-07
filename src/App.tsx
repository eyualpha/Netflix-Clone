import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import SearchPage from "./Pages/SearchPage";
import MovieDetailsPage from "./Pages/MovieDetailsPage";
import FavoritesPage from "./Pages/FavoritesPage";
import Navbar from "./components/Navbar";
import { FavorietsProvider } from "./context/FavoritesContext";

const App = () => {
  return (
    <Router>
      <FavorietsProvider>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movie/:id" element={<MovieDetailsPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
      </Routes>
      </FavorietsProvider>
    </Router>
  );
};

export default App;
