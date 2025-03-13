import { Route, Routes } from "react-router";

import Home from "../pages/Home";
import Movies from "../pages/Movies";
import Series from "../pages/Series";
import LayoutHeader from "../Layout/DefaultLayout";
import Details from "@/pages/Details";

function Router() {
  return (
    <Routes>
      <Route element={<LayoutHeader/>}>
        <Route path="/" element={<Home />} />
        <Route path="/filmes" element={<Movies />} />
        <Route path="/series" element={<Series />} />
        <Route path="/detalhe/:id" element={<Details />} />
      </Route>
    </Routes>
  );
}


export default Router;


//e4553f1eb0af7c766ac5a0237ec8baeb