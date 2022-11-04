import "./App.css";
import Navbar from "./component/navbar/Navbar";
import SearchProject from "./pages/searchProject/SearchProject";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PostProject from "./pages/postProject/PostProject";
import ProfilePage from "./pages/profilePage/ProfilePage";
// import Footer from "./component/footer/Footer";
// import Modal from "./pages/searchProject/Modal";
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
        <Route  path="/"  element={<PostProject/>} />
        <Route  path="/searchProject"  element={<SearchProject/>} />
        <Route  path="/profilePage"  element={<ProfilePage/>} />
        {/* <Route  path="/modal"  element={<Modal/>} /> */}

        </Routes>
        
      </BrowserRouter>
    </>
  );
}

export default App;
