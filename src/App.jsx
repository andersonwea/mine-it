import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Start from "./Pages/Start";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Start />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
