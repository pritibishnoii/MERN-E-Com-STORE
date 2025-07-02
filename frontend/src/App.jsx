import "./App.css";
import { Outlet } from "react-router-dom";
import { ToastContainer, Flip } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navigation from "./pages/Auth/Navigation";

function App() {
  const index = 0;
  const data = [];
  return (
    <>
      <ToastContainer
        position="top-center"
        transition={Flip}
        theme="dark"
        autoClose={800}
        closeOnClick
        hideProgressBar
      />
      <Navigation />
      <main className="py-3">
        <Outlet />
      </main>
    </>
  );
}

export default App;
