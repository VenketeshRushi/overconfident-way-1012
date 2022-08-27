import { Routes, Route } from "react-router-dom";
import Campaign from "../Pages/Campaign";
import Home from "../Pages/Home";
import Top10 from "../Pages/Top10";
import Whatwedo from "../Pages/Whatwedo";
function AllRoute() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/whatwedo" element={<Whatwedo />}></Route>
      <Route path="/campaign" element={<Campaign />}></Route>
      <Route path="/top-10" element={<Top10 />}></Route>
      {/* <Route path="/campaign" element={<Campaign />}></Route> */}
    </Routes>
  );
}
export default AllRoute;
