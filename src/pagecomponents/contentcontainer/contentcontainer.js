// import {Accordian} from "./index";
import { Accordion } from "../../components/accordion/accordion";
import { Route, Link, NavLink, Routes } from "react-router-dom";

export const Contentcontainer = () => {
  return (
    <Routes>
      <Route path="/accordion/basic" element={<Accordion></Accordion>} />
    </Routes>
  );
};
