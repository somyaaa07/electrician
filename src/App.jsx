import React from 'react'
import './App.css'
import Banner from './pages/home/HeroSection'
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import FooterShowcase from './components/Footer.jsx'
import About from './pages/home/About.jsx'
import Service from './pages/home/Services.jsx'
import Stats from './pages/home/Stats.jsx'
import WhyChooseUs from './pages/home/WhyChooseUs.jsx'
import Process from './pages/home/Process.jsx'
import GetInTouch from './pages/home/GetInTouch.jsx'
import Testimonal from './pages/home/Testimonal.jsx'
import Gallery from './pages/home/Gallery.jsx'
import Contact from './pages/contact/Contact.jsx'
import BlogList from "./pages/blog/Blog";
import BlogDetail from "./pages/blog/BlogDetails";
import About1 from './pages/about/About.jsx' 
import Steps from './pages/about/Steps.jsx'
function App() {
 

  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<div>
          <Banner/>
          <About/>
          <WhyChooseUs/>
          <Stats/>
           <Process/>
        
         
          <GetInTouch/>
            <Service/>
          <Gallery/>
          <Testimonal/>
          </div>}/>

        <Route path='/contact' element={<Contact/>}/>

        
                   <Route path="/blog" element={<BlogList />} />
          <Route path="/blog/:id" element={<BlogDetail />} />  

        <Route path='/about' element={
          <div>
            <About1/>
            <Steps/>
          </div>}/>
      </Routes>
      <FooterShowcase/>
    </Router>
    
    </>
  )
}

export default App
