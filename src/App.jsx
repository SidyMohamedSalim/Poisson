import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Categories from "./pages/Categories";
import Contact from "./pages/Contact";
import Featured from "./pages/Featured";
import NewArrivals from "./pages/NewArrival";
import Promo from "./pages/Promo";

const App = () => {
  return 
  (
  <div>
   <BrowserRouter>
   <Router>
    <Route path="/" element={<Categories/>} />
   </Router>
   </BrowserRouter>
  </div>)
}
 
export default App;