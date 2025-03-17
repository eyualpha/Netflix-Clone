import { useState, useEffect } from "react";
import { Movie } from "../types/Movies";
import MovieCard from "../components/MovieCaed";

interface movieShape{
  trending: Movie[];
  topRated: Movie[];
  upcoming: Movie[];
  popular: Movie[];
}
const HomePage = () => {
  const [movies, setMovies] = useState<movieShape>(
  {
      trending: [],
      topRated: [],
      upcoming: [],
      popular: []
}
  )

  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);


  useEffect(()=>{
    const loadMovies = async()=>{
      setLoading(true);

    }
  })

  
  return <div>
    <MovieCard movie={movies.trending[0]}/>
  </div>;
};

export default HomePage;
