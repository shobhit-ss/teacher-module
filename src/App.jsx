import React from "react";
// import { Navbar } from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CreatePost from "./component/teacher module/CreatePost";
import Posts from "./component/teacher module/Posts";
import Navbar from "./component/Navbar/Navbar";
import Home from "./component/home/Home";
import Footer from "./component/home/Footer";
import LoginAs from "./component/home/LoginAs";
import ScreatePost from "./component/StudentModule/ScreatePost";
// import { Footer } from './component/home/Footer';
// import EditPost from './component/teacher module/EditPost';
// import LoginPost from "./component/teacher module/LoginPost"

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginAs />} />
        <Route path="/logintrainer" element={<CreatePost />} />
        <Route path="/loginstudent" element={<ScreatePost/>}/>
        <Route path="/register" element={<Posts />} />
        
      </Routes>

      <Footer />

      {/* <EditPost/> */}
    </Router>
  );
};

export default App;
