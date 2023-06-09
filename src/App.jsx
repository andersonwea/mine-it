import { BrowserRouter, Route, Routes } from "react-router-dom";
import Start from "./Pages/Start";
import Play from "./Pages/Play";
import { UserStorage } from "./storage/UserContext";

function App() {
  return (
    <div>
      <BrowserRouter>
        <UserStorage>
          <Routes>
            <Route exact={true} path="/mine-it" element={<Start />} />
            <Route path="/mine-it/play/*" element={<Play />} />
          </Routes>
        </UserStorage>
      </BrowserRouter>
    </div>
  );
}

export default App;
