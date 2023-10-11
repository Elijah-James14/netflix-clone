import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";
import { AuthContextProvider } from "./context/AuthContext";

function App() {
  return (
    <AuthContextProvider>
      <NavBar />
      <div>
        <Outlet />
      </div>
    </AuthContextProvider>
  );
}

export default App;
