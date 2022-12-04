import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import ReactGA from "react-ga";

function App() {
  const TRACKING_ID = "G-JTFFVY6J7L";
  ReactGA.initialize(TRACKING_ID);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
