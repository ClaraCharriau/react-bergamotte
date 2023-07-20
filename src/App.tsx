import "./App.css";
import Header from "components/common/header/Header";
import Footer from "components/common/footer/Footer";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
