import React from "react";
import { Routes, Route } from "react-router-dom";
import './App.css';

import Home from './components/Home'
import About from './components/About'
import Services from './components/Services'
import Prices from './components/Prices'
import Blog from './components/Blog'
import Contact from './components/Contact'
import Form from './components/Form'
import NotFound from './components/NotFound'
import ServiceDeclaration from './components/ServiceDeclaration'
import ServiceWriter from './components/ServiceWriter'


function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/Paralegal-Services/" element={<Home />} />
        <Route exact path="/Paralegal-Services/aboutus" element={<About />} />
        <Route exact path="/Paralegal-Services/services" element={<Services />} />
        <Route exact path="/Paralegal-Services/servicedeclaration" element={<ServiceDeclaration />} />
        <Route exact path="/Paralegal-Services/servicewriter" element={<ServiceWriter />} />
        <Route exact path="/Paralegal-Services/prices" element={<Prices />} />
        <Route exact path="/Paralegal-Services/blog" element={<Blog />} />
        <Route exact path="/Paralegal-Services/contactus" element={<Contact />} />
        <Route exact path="/Paralegal-Services/form" element={<Form />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
