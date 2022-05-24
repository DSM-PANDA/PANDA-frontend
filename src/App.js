import MainPage from "./Components/MainPage";
import LoginPage from "./Components/LoginPage";
import SignUpPage from "./Components/SignUpPage";
import MyPage from "./Components/Mypage";
import UsersPage from "./Components/UserPage/UsersPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ChoiceMemo from "./Components/UserPage/ChoiceMemo";
import WhiteMemo from "./Components/MemoPage/WhiteMemo";
import RedMemo from "./Components/MemoPage/RedMemo";
import OrangeMemo from "./Components/MemoPage/OrangeMemo";
import YellowMemo from "./Components/MemoPage/YellowMemo";
import BlueMemo from "./Components/MemoPage/BlueMemo";
import PurpleMemo from "./Components/MemoPage/PurpleMemo";
import NameInput from "./Components/UserPage/NameInput";

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
          <Route path="/WhiteMemo" element={<WhiteMemo />} />
          <Route path="/RedMemo" element={<RedMemo />} />
          <Route path="/OrangeMemo" element={<OrangeMemo />} />
          <Route path="/YellowMemo" element={<YellowMemo />} />
          <Route path="/BlueMemo" element={<BlueMemo />} />
          <Route path="/PurpleMemo" element={<PurpleMemo />} />
          <Route path="/NameInput" element={<NameInput />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
