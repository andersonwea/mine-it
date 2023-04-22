import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Start from "./Pages/Start";
import Play from "./Pages/Play";
import { UserStorage } from "./storage/UserContext";

function App() {
  return (
    <div>
      <BrowserRouter>
        <UserStorage>
          <Routes>
            <Route path="/" element={<Start />} />
            <Route path="/play" element={<Play />} />
          </Routes>
        </UserStorage>
      </BrowserRouter>
    </div>
  );
}

export default App;
