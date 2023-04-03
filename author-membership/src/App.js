import logo from './logo.svg';
import './App.css';
import React from "react";
import Homepage from './Authentication/homepage';
import Login from './Authentication/login';
import NavbarComponent from './Authentication/Navbar';
import Signup from './Authentication/registration'
import BookList from './Book/BookList'
import BlogPostList from './Blog/bloglist';
import VideoList from './Videos/videolist';
// We use Route in order to define the different routes of our application
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <NavbarComponent></NavbarComponent>
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/login" element={<Login />} /> 
        <Route exact path="/works" element={<BookList />} />
        <Route exact path="/blog" element={<BlogPostList />} />
        <Route exact path="/videos" element={<VideoList />} />
      </Routes>
    </Router>
  );
}

export default App;
