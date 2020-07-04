import React,{useEffect} from 'react';
import Man from '../images/manSmiling.jpg';
import Woman from '../images/womanSmiling.jpg';
import data from '../backend/data';
import {Link} from 'react-router-dom';
import '../styles/main.css';

const Home =()=>{
    
    useEffect(()=>document.querySelector('.home-gallery').lastChild.classList.add('optional-gallery-box'));
   
    return(
        <div className="home-main-container">
            <div className="home-showcase">
                <div className="artisan-box">
                    <p id="artisan"> Artisan pizza
                        <span id="creation"> creation</span>
                    </p>
                </div>
            </div>
            <div className="home-gallery">
                <h1>Favourites</h1>
                {data.products.slice(0,3).map(product =>                    
                    <div key={product.id} className="gallery-box">
                        <p id="gallery-box-title">{product.name}</p>
                        <Link to="/menu">
                            <img src={product.image} alt="pizza" />
                        </Link>
                        <p>{product.story}</p>
                    </div>                   
                )}
            </div>
            <div className="profile-gallery">
                <h1>Testimonials</h1>
                <div className="profile-box">
                    <img src={Woman} alt="woman" />
                    <p>
                        After my first Moodi's experience, I became a loyal customer for life!
                    </p><br />
                    <span>- Susie Q.</span>
                
                </div>
               
                    <div className="profile-box">
                        <img src={Man} alt="man" />
                        <p>
                            The pizza quality is superb, and the staff treat you like family! 
                        </p><br />
                        <span>- Dan J.</span>
                    </div>
            </div>
        </div>
    );  
}
export default Home