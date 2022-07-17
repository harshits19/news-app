import "./App.css";
import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export default class App extends Component {
  pageNo = 5;
  apiKey = "ba64c7646bd6465f9f2582a2efd5e7b2";
  render() {
    return (
      <>
        <Router>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<News key="general" pageSize={this.pageNo} country="in" category="general" apiKey={this.apiKey} />} />
            <Route exact path="/health" element={<News key="health" pageSize={this.pageNo} country="in" category="health" apiKey={this.apiKey} />} />
            <Route exact path="/technology" element={<News key="technology" pageSize={this.pageNo} country="in" category="technology" apiKey={this.apiKey} />} />
            <Route exact path="/sports" element={<News key="sports" pageSize={this.pageNo} country="in" category="sports" apiKey={this.apiKey} />} />
            <Route exact path="/science" element={<News key="science" pageSize={this.pageNo} country="in" category="science" apiKey={this.apiKey} />} />
            <Route exact path="/entertainment" element={<News key="entertainment" pageSize={this.pageNo} country="in" category="entertainment" apiKey={this.apiKey} />} />
            <Route exact path="/business" element={<News key="business" pageSize={this.pageNo} country="in" category="business" apiKey={this.apiKey} />} />
          </Routes>
        </Router>
      </>
    );
  }
}
