import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import HomePage from "../Pages/Home-page";
import HomeRopaPage from "../Pages/Home-ropa-page";
import ViewProductsPage from "../Pages/View-products-page";

export default function Root() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} exact />
          <Route path="/categorys/ropa" element={<HomeRopaPage />} exact />
          <Route path="/categorys/ropa/:name" element={<ViewProductsPage />} exact />
        </Routes>
      </Router>
    </>
  );
}