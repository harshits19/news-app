import "./App.css";
import React from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  const pageNo = 5;
  const apiKey = process.env.REACT_APP_CUSTOM_API_KEY;
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<News key="general" pageSize={pageNo} country="in" category="general" apiKey={apiKey} />} />
          <Route exact path="/health" element={<News key="health" pageSize={pageNo} country="in" category="health" apiKey={apiKey} />} />
          <Route exact path="/technology" element={<News key="technology" pageSize={pageNo} country="in" category="technology" apiKey={apiKey} />} />
          <Route exact path="/sports" element={<News key="sports" pageSize={pageNo} country="in" category="sports" apiKey={apiKey} />} />
          <Route exact path="/science" element={<News key="science" pageSize={pageNo} country="in" category="science" apiKey={apiKey} />} />
          <Route exact path="/entertainment" element={<News key="entertainment" pageSize={pageNo} country="in" category="entertainment" apiKey={apiKey} />} />
          <Route exact path="/business" element={<News key="business" pageSize={pageNo} country="in" category="business" apiKey={apiKey} />} />
        </Routes>
      </Router>
    </>
  );
}
export default App;
