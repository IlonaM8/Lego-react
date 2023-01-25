import { Route, Routes } from "react-router-dom";
import Decorator from "./Decorator";
import Header from "./Header";
import Home from "./Home";
import ProductsList from "./Products/DataProducts";
import Venduti from "./Venduti";

const App = () => {
  return (
    <div>
      <Header />
      <ProductsList />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Venduti" element={<Venduti />} />
        <Route path="/Decorator" element={<Decorator />} />
      </Routes>
    </div>
  );
};

export default App;
