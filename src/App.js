import Header from "./Header";
import Body from "./body/Body";
import Footer from "./footer/Footer";
import { Routes, Route } from "react-router-dom";
import TopHeader from "./top-header/TopHeader";
import Shop from "./shop/Shop";
import Home from "./Home";
import OurWork from "./our-work/OurWork";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<TopHeader />}>
          <Route index element={<Home />} />
          <Route path="/shop" element={<Shop />}></Route>
          <Route path="/our-work" element={<OurWork />}></Route>
        </Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
