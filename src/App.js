import './App.css';
import React, { Component } from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
// import { BrowserRouter, Routes, Route } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <div>
        {/* <BrowserRouter> */}
          <Navbar/>
          <News/>
          {/* <Routes>
            <Route exact path="/" >abc</Route>
          </Routes> */}
        {/* </BrowserRouter>     */}
      </div>
    );
  }
}
