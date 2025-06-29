import "./App.css";
import {Outlet} from "react-router-dom";
import {ToastContainer} from "react-toastify";
import  'react-toastify/dist/ReactToastify.css'
import Navigation from "./pages/Auth/Navigation";

function App() {
  const index = 0;
  const data = [];
  return (
    <>
  <ToastContainer/>
  <Navigation/>
  <main className="py-3">
    <Outlet/>
  </main>
    </>
  );
}

export default App;
