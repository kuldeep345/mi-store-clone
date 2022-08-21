import React from 'react'
import './App.css'
import PreNavbar from './components/PreNavbar';
import {BrowserRouter as Router, Routes,Route, Link} from "react-router-dom"
import Slider from './components/Slider';
import media from '../src/data/data.json'
import Offers from './components/Offers';
import Heading from './components/Heading';
import StarProduct from './components/StarProduct';
import HotAccesseriesMenu from './components/HotAccesseriesMenu';
import HotAccesseries from './components/HotAccesseries';
import ProductReviews from './components/ProductReviews';
import Videos from './components/Videos'
import Banner from './components/Banner'
import Features from './components/Features';
import Contact from './components/Contact';
import Footer from './components/Footer';
function App() {
  const {banner} = media
  const {footer} = media
  
  return (
  <>
  <Router>

 <PreNavbar/>
 <Slider start={banner.start}/>
 <Offers  offers={media.offer}/>
 <Heading text="STAR PRODUCTS"/>
 <StarProduct starProduct={media.starProduct}/>
 <Heading text="HOT ACCESSORIES"/>
 <HotAccesseriesMenu/>
 
  <Routes>
   <Route exact path="/" element={ <HotAccesseries music={media.hotAccessories.music} musicCover={media.hotAccessoriesCover.music}/>}/>
   <Route exact path="/smartDevices" element={ <HotAccesseries music={media.hotAccessories.smartDevice} musicCover={media.hotAccessoriesCover.smartDevice}/>}/>
   <Route exact path="/home" element={ <HotAccesseries music={media.hotAccessories.home} musicCover={media.hotAccessoriesCover.home}/>}/>
   <Route exact path="/lifestyle" element={ <HotAccesseries music={media.hotAccessories.lifeStyle} musicCover={media.hotAccessoriesCover.lifeStyle}/>}/>
   <Route exact path="/mobileAccessories" element={ <HotAccesseries music={media.hotAccessories.mobileAccessories} musicCover={media.hotAccessoriesCover.mobileAccessories}/>}/>
   </Routes>

   <Heading text="PRODUCT REVIEWS"/>
   <ProductReviews reviews={media.productReviews} />
   <Heading text="VIDEOS"/>
    <Videos  videos={media.videos}/>
   <Heading text="IN THE PRESS"/>
   <Banner  end={banner.end}/>
   <Features/>
   <Contact/>
   <Footer support={footer.support}  shop={footer.shopAndLearn} store={footer.retailStore} about={footer.aboutUS} contact={footer.contactUs}/>
 </Router>
   </>
  );
}

export default App;
