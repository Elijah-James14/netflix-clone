import SavedShows from "../components/SavedShows";

const Account = () => {
  return (
    <>
      <div className="w-full text-white">
        <img
          src="https://wallpapercave.com/wp/wp1917135.jpg"
          alt="/"
          className="w-full h-[400px] object-cover"
        />
        <div className="bg-black/60 fixed top-0 left-0 w-full h-[550px]"></div>
        <div className="absolute top-[20%] p-4 md:p-8">
          <h1 className="text-3xl md:text-5xl font-bold">My Movies</h1>
        </div>
      </div>
      <SavedShows />
    </>
  );
};

export default Account;
