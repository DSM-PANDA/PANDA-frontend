import MainPage from "./Components/MainPage";
import LoginPage from "./Components/LoginPage";
import SignUpPage from "./Components/SignUpPage";
import MyPage from "./Components/Mypage";
import UsersPage from "./Components/UsersPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Page/Home";

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
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
