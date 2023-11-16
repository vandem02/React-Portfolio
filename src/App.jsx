import { Outlet } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Nav />
      <div className="container mt-2">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default App;
