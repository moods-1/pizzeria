import React,{useEffect} from 'react';
import data from '../../backend/data';
import HomeGallery from './homeGallery';
import HomeProfile from './homeProfile';
import HomeShowcase from './homeShowcase';
import '../../styles/main.css';

const Home =()=>{
    
    useEffect(()=>document.querySelector('.home-gallery').lastChild.classList.add('optional-gallery-box'));
   
    return(
        <div className="home-main-container">
            <HomeShowcase />
            <HomeGallery products={data.products} />    
            <HomeProfile />            
        </div>
    );  
}
export default Home