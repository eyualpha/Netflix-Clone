import { Link } from 'react-router-dom'
import { Movie } from '../types/Movies'
import { getImageUrl } from '../utils/api'


interface MovieCardProps {
  movie: Movie;
  width?: string;
}

const MovieCard = ({ movie, width = "w-[200px]" }: MovieCardProps) => {
    // const releaseYear = movie.release_date? new Date(movie.release_date).getFullYear().toString(): "N/A";



  return (
    <Link to={`/movies/${movie.id}`} className={`${width} transition-transform duration-200 hover:scale-105`}>
        <div className="relative aspect-[2/3] rounded-md overflow-hidden">
        <img src={getImageUrl(movie.poster_path)} alt={movie.title} className='w-full h-full object-cover' loading='lazy'/>
        <div className=" absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 hover:opacity-100">
        <div className=" absolute bottom-0 p-4">
            <h3 className='text-sm font-semibold line-clamp-2'>{movie.title}</h3>
            {/* <p>{releaseYear}</p> */}
        </div>
        </div>
        </div>
    </Link>
  )
}

export default MovieCard 