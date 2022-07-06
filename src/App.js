import Header from "./components/Header";
import Footer from "./components/Footer";
import { HashRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import LatestPhotos from "./components/LatestPhotos";
import About from "./components/pages/About";
import Disclaimer from "./components/pages/Disclaimer";
import Credits from "./components/pages/Credits";
import Photo from "./components/Photo";
import { TabTitle } from "./lib/generalFunction";

function App() {
  TabTitle("PhotoBD | Home");
  return (
    <HashRouter>
      <div className="App">
        <Header />
        <div className="content-block">
          <div className="container">
            <Routes>
              <Route path="/" element={<LatestPhotos />} />
              <Route path="/about" element={<About />} />
              <Route path="/disclaimer" element={<Disclaimer />} />
              <Route path="/credits" element={<Credits />} />
              <Route path="/photo" element={<Photo />} />
            </Routes>
          </div>
        </div>
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;
