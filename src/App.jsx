import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Start from "./Pages/Start";
import Play from "./Pages/Play";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Start />} />
          <Route path="/play" element={<Play />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
