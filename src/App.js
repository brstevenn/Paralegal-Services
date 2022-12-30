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
        <Route exact path="/" element={<Home />} />
        <Route path="/aboutus" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/servicedeclaration" element={<ServiceDeclaration />} />
        <Route path="/servicewriter" element={<ServiceWriter />} />
        <Route path="/prices" element={<Prices />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contactus" element={<Contact />} />
        <Route path="/form" element={<Form />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
