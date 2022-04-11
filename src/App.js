import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar.jsx";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Arsenal from "./pages/Arsenal";
import Aboutme from "./pages/Aboutme";
import Aboutpage from "./pages/Aboutpage";
import Notfound from "./pages/Notfound";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <Router>
      {/* h-screen means it will take the entire height */}
      <div className='flex flex-col justify-between h-screen'>
        <Navbar />
        <main className='container mx-auto px-3 pb-12'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/arsenal' element={<Arsenal />} />
            <Route path='/about' exact element={<Aboutme />} />
            <Route path='/aboutpage' element={<Aboutpage />} />
            {/* create a catch all page, if user slash something doesn't exist */}
            <Route path='/*' element={<Notfound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
