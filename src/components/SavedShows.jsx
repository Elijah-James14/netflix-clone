import { useState, useEffect } from "react";
import { UserAuth } from "../context/AuthContext";
import { db } from "../firebase";
import { updateDoc, doc, onSnapshot } from "firebase/firestore";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { AiOutlineClose } from "react-icons/ai";

const SavedShows = () => {
  const [movies, setMovies] = useState([]);
  const { user } = UserAuth();
  useEffect(() => {
    onSnapshot(doc(db, "users", `${user?.email}`), (doc) => {
      setMovies(doc.data()?.savedMovies);
    });
  }, [user?.email]);

  const slideLeft = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const slideRight = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  const movieRef = doc(db, "users", `${user?.email}`);

  async function deleteMovie(passedID) {
    try {
      const result = movies.filter((movie) => movie.id !== passedID);
      await updateDoc(movieRef, {
        savedMovies: result,
      });
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      <h2 className="text-white font-bold md:text-xl p-4">My Movies</h2>
      <div className="relative flex items-center group">
        <MdChevronLeft
          onClick={slideLeft}
          size={40}
          className="bg-white cursor-pointer rounded-full opacity-50 hover:opacity-100 z-10 hidden group-hover:block absolute left-0"
        />
        <div
          id={"slider"}
          className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative"
        >
          {movies?.map((movie, id) => (
            <div
              key={id}
              className="w-[160px] sm:w-[200px] md:[240px] lg:[280px] inline-block cursor-pointer relative p-2"
            >
              <img
                className="w-full h-auto block"
                src={`https://image.tmdb.org/t/p/w500/${movie?.image}`}
                alt={movie?.title}
              />
              <div className="absolute hover:bg-black/80 hover:opacity-100 top-0 left-0 h-full w-full opacity-0 text-white">
                <p className="whitespace-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center">
                  {movie?.title}
                </p>
                <p onClick={() => deleteMovie(movie.id)}>
                  <AiOutlineClose className="absolute text-gray-300 top-4 right-4 cursor-pointer" />
                </p>
              </div>
            </div>
          ))}
        </div>
        <MdChevronRight
          onClick={slideRight}
          size={40}
          className="bg-white cursor-pointer rounded-full opacity-50 hover:opacity-100 z-10 hidden group-hover:block absolute right-0"
        />
      </div>
    </>
  );
};

export default SavedShows;
