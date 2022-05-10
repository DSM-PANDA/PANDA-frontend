import MainPage from "./Components/MainPage";
import LoginPage from "./Components/LoginPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Page/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
