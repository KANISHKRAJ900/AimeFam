import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import ReactGa from "react-ga";

function App() {
  const TRACKING_ID = "G-ZB1Y218Q5D";
  ReactGa.initialize(TRACKING_ID);
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
