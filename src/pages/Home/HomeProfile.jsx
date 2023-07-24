import React from 'react'
import Man from '../../images/manSmiling.jpg';
import Woman from '../../images/womanSmiling.jpg';

const HomeProfile = () => {
    return (  
        <div className="profile-gallery">
                <h1>TESTIMONIALS</h1>
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
    );
}
 
export default HomeProfile;