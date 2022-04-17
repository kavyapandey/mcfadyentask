import "./App.css";

import { Navbar } from "./Navbar";
import { CustomCarousel } from "./CustomCarousel";
import { Footer } from "./Footer";
import { LeftPage } from "./LeftPage";
import { CenterPage } from "./CenterPage";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col-sm-3">
            <LeftPage />
          </div>
          <div className="col-sm-6 desktop-image-view">
            <CenterPage />
          </div>
          <div className="col-sm-3">
            <CustomCarousel />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
export default App;
