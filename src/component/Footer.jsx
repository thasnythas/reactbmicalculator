import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faFacebookMessenger, faWhatsapp,faInstagram } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <footer className="d-flex bg-warning p-4">
      <div className="row w-100">
        {/* About Us Section */}
        <div className="col-md-3">
          <h5>About Us</h5>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
            repellat voluptatibus incidunt! Provident, porro tenetur. Laborum totam vitae aliquid
            architecto placeat molestiae labore,
            ad, deserunt accusamus quasi aspernatur ratione est!
          </p>
        </div>

        {/* Contact Section */}
        <div className="col-md-3">
          <h5>Contact</h5>
          <p>Email: rawother.rawo@example.com</p>
        </div>

        {/* Follow Us Section */}
        <div className="col-md-3">
          <h5>Follow Us</h5>
          <ul className="list-unstyled">
            <li><a href="https://twitter.com">Twitter</a></li>
            <li><a href="https://facebook.com">Facebook</a></li>
            <li><a href="https://wa.me">WhatsApp</a></li>
            <li><a href="https://telegram.org">Telegram</a></li>
          </ul>
        </div>
        <div className="col-md-3 d-flex  align-items-center  ">
        <img src="https://img.freepik.com/premium-vector/weight-loss-concept-body-mass-index-man-before-after-diet-fitness_162329-336.jpg?ga=GA1.1.285740525.1725534793&semt=ais_hybrid"
          alt="" style={{ marginRight:"90px",height:"150px",weight:"25px"}}/></div>
        

        {/* Social Media Icons Section */}
        <div className="col-md-3 d-flex justify-content-center align-items-center  ">
          <FontAwesomeIcon icon={faFacebook} size="2x" className="text-dark"  style={{ marginLeft:"130px"}}/>
          <FontAwesomeIcon icon={faFacebookMessenger} size="2x" className="text-dark"  style={{ marginLeft:"140px"}}  />
          <FontAwesomeIcon icon={faWhatsapp} size="2x" className="text-dark" style={{ marginLeft:"150px"}} />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <FontAwesomeIcon icon={faInstagram} size="2x" className="text-dark" style={{ marginleft:"200px"}}/>
                 </div>
      </div>
    </footer>
  );
}

export default Footer;
