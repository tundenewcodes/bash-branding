import { Routes, Route, useParams } from "react-router-dom";
import "./App.css";
import { HOME, INDEX, singlecommunity, singlework } from "./routes/path";
import Home from "./pages/Home";
//import SingleWork from "./pages/SingleWork";
import SingleWork from "./components/Communities/SingleCommmunities/SingleCommunity";
import AOS from "aos";
import "aos/dist/aos.css";
import { WorkData } from "./utils/data";
import SingleCommunity from "./components/Communities/SingleCommmunities/SingleCommunity";
import { useEffect } from "react";

function App() {
  const workdata = WorkData();
  const { id } = useParams();
  const workdetails = workdata.find((work) => work.id === id);
  useEffect(() => {
    AOS.init({
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <Routes>
      <Route path={HOME} element={<Home />} />
      <Route path={INDEX} element={<Home />} />
      <Route
        path={singlework}
        element={<SingleWork workItem={workdetails} />}
      />
      <Route path={singlecommunity} element={<SingleCommunity />} />
    </Routes>
  );
}

export default App;

