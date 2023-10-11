import { Link } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const NavBar = () => {
  const { user, logOut } = UserAuth();

  async function handleLogout() {
    try {
      logOut();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="text-white flex items-center justify-between p-4 z-[100] absolute w-full ">
      <Link to="/">
        <h1 className="text-red-600 cursor-pointer text-4xl">NETFLIX</h1>
      </Link>

      {user?.email ? (
        <div>
          <Link to="/account">
            <button className="cursor-pointer pr-4">Account</button>
          </Link>

          <button
            onClick={handleLogout}
            className="bg-red-600 py-2 px-6 rounded cursor-pointer"
          >
            Logout
          </button>
        </div>
      ) : (
        <div>
          <Link to="/login">
            <button className="cursor-pointer pr-4"> Sign In</button>
          </Link>
          <Link to="/signup">
            <button className="bg-red-600 py-2 px-6 rounded cursor-pointer">
              Sign Up
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default NavBar;
