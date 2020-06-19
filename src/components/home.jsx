import React from 'react';
import Pizza1 from '../images/arugulaProsciutto.webp';
import Pizza2 from '../images/figGoatCheese.webp';
import Pizza3 from '../images/arugulaCheese.webp';
import Man from '../images/manSmiling.webp';
import Woman from '../images/womanSmiling.webp';

const Home =()=>{
 
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
                <div className="gallery-box">
                    <p>De Niro Prosciutto</p>
                    <img src={Pizza1} alt="leftPizza"/>
                    <p>Originally created for a special guest, and instantly became a classic.</p>
                </div>
                <div className="gallery-box">
                    <p>Figaro</p>
                    <img src={Pizza2} alt="leftPizza"/>
                    <p>Delightfully sweet, yet not overpowering.</p>
                </div>
                <div className="gallery-box" id="optional-gallery-box">
                    <p>Verde Minimalista</p>
                    <img src={Pizza3} alt="leftPizza"/>
                    <p>Light on ingredients, but delivers a powerful burst of flavour.</p>
                </div>
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