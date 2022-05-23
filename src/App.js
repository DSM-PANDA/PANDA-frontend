import MainPage from "./Components/MainPage";
import LoginPage from "./Components/LoginPage";
import SignUpPage from "./Components/SignUpPage";
import MyPage from "./Components/Mypage";
import UsersPage from "./Components/UserPage/UsersPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ChoiceMemo from "./Components/UserPage/ChoiceMemo";
import WhiteMemo from "./Components/MemoPage/WhiteMemo";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/SignUp" element={<SignUpPage />} />
          <Route path="/MyBamboo" element={<MyPage />} />
          <Route path="/UsersBamboo" element={<UsersPage />} />
          <Route path="/ChoiceMemo" element={<ChoiceMemo />} />
          <Route path="/WriteMemo" element={<WhiteMemo />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
