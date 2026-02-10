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
import FounderSection from './pages/about/Founder.jsx'
import WhatWeDo from './pages/about/WhatWeDo.jsx'
import Mission from './pages/about/Mission.jsx'
import Products from './pages/products/APHFc-AHF-Panel/page.jsx'
import Products2 from './pages/products/Draw-Out-MCC-Panel/page.jsx'
import Products3 from './pages/products/Integrated-EHouse/page.jsx'
import Products4 from './pages/products/MV-Drive-Panel/page.jsx'
import Products5 from './pages/products/MCC-PCC-Panel/page.jsx'
import Products6 from './pages/products/PLC-Panel-Servo-Drive/page.jsx'
import Products7 from './pages/products/UPS-Panel/page.jsx'
import Products8 from './pages/products/VCB-Panel/page.jsx'
import Products9 from './pages/products/VFD-Panel/page.jsx'
import Services from './pages/services/Service.jsx'

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
              <Mission/>
            <FounderSection/>
          
            <WhatWeDo/>
          </div>}/>

          <Route path='/products/apfc-ahf-panel' element={
            <Products/>
          }/>
              <Route path='/products/draw-out-mcc-panel' element={
            <Products2/>
          }/>


        <Route path='/products/integrated-ehouse-solutions' element={
            <Products3/>
          }/>
                  <Route path='/products/mcc-pcc-panel' element={
               <Products5/>
          }/>

        <Route path='/products/abb-mv-drive-panel' element={
      
               <Products4/>
          }/>


        <Route path='/products/plc-servo-drive-panel' element={
            <Products6/>
          }/>

        <Route path='/products/ups-panel' element={
            <Products7/>
          }/>

        <Route path='/products/abb-vcb-panel' element={
            <Products8/>
          }/>
                  <Route path='/products/abb-vfd-panel' element={
            <Products9/>
          }/>




       <Route path='/services' element={
        <Services/>
       }/>



      </Routes>
      <FooterShowcase/>
    </Router>
    
    </>
  )
}

export default App
