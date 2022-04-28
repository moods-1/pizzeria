import React from "react";
import "./About.scss";

const About=()=> {
    return (
      <div className="about-main-container">
        <div className="about-story">
          <div className="about-story-map">
            <h1>Our Story</h1>
            <div id="story-box">
              <p>
                Pizzeria Moodi started with a desire to enhance our community
                with a place that felt like a home away from home. Quality and
                consistency are the cornerstones of our business. All our pies
                are handmade the traditional way and baked in a wood burning
                oven. Our ingredients are sourced locally from organic
                producers.
              </p>
            </div>
            <div className="map-box">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d46035.800562912766!2d-79.56016971656939!3d43.850905103300725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b29035d80589d%3A0xe9c39e17ba1ddefd!2sMaple%2C%20Vaughan%2C%20ON!5e0!3m2!1sen!2sca!4v1592489013074!5m2!1sen!2sca"
                title="moodi"
                width="800"
                height="400"
                frameBorder="0"
                style={{ border: 0 }}
                allowFullScreen=""
                aria-hidden="false"
                tabIndex="0"
              />
            </div>
          </div>
          <div className="address-box" style={{ textAlign: "center" }}>
            <h3>Pizzeria Moodi</h3>
            <p>888 Traditional Way</p>
            <p>Maple, ON L6G 4U8</p>
            <h4>905-867-5309</h4>
          </div>
        </div>
      </div>
    );
}
 export default About