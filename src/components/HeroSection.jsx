import axios from "axios";
import { useEffect, useState } from "react";
import requests from "../Requests";
import HeroSkeleton from "./HeroSkeleton";

const HeroSection = () => {
  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState([]);

  const movie = movies[Math.floor(Math.random() * movies.length)];

  function cutSentence(str, num) {
    if (str?.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  }
  useEffect(() => {
    setLoading(true);
    axios
      .get(requests.requestPopular)
      .then((response) => setMovies(response.data.results))
      .finally(() => {
        setLoading(false);
      });
  }, []);
  if (loading) {
    return <HeroSkeleton />;
  }
  return (
    <div className="w-full h-[550px] text-white">
      <div className="w-full h-full">
        <div className="w-full h-[550px] bg-gradient-to-r from-black absolute"></div>
        <img
          className="w-full h-full object-cover"
          src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
          alt={movie?.title}
        />
      </div>
      <div className="absolute top-[20%] p-4 md:p-8">
        <h1 className="text-3xl md:text-5xl font-bold">{movie?.title}</h1>
        <div className="my-4">
          <button className="bg-white border-2 border-gray-300 text-black py-2 px-5">
            Play
          </button>
          <button className="border-2 border-gray-300 py-2 px-5 ml-4">
            Watch Later
          </button>
        </div>
        <p className="text-gray-400 text-sm">Released: {movie?.release_date}</p>
        <p className="w-full md:w-max-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200">
          {cutSentence(movie?.overview, 150)}
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
