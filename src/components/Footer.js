import React from "react"
import '../assets/App.css';
import '../assets/responsive.css';
const FooterSection = ()=> {
	return (
		<footer>
          {/* <!--footer navigation links container begins--> */}
          <div className="footer-link-section">
            <div className="about-navi-container">
              <ul>
                <li><h3>Free-mind</h3></li>
                <p>__________</p>             
                <li><a href="#"> Home </a></li>
                <li><a href="#"> FAQs  </a></li>
                <li><a href="#"> Contact Us</a></li>
                <li><a href="#"> Request Help </a></li>
                <li><a href="#"> Donate  </a></li>
              </ul>
            </div>
          </div>
          <div className="footer-link-section">
            <div className="residents-navi-container">
              <ul>
                <li><h3>Site Navigation</h3></li>
                <p>__________</p>
                <li><a href="#">Projects </a></li>
                <li><a href="#">blog  </a></li>
                <li><a href="#">Payments</a></li>
                <li><a href="#">Roadmap </a></li>
                <li><a href="#">Year Plan</a></li>
              </ul>            
            </div>
          </div>
          <div className="footer-link-section">
            <div className="property-manager-navi-container">
              <ul>
                <li><h3>Latest Articles</h3></li>
                <p>__________</p>
                <li><a href="#">Lorem ipsum do</a></li>
                <li><a href="#">Lorem ipsum do</a></li>
                <li><a href="#">Lorem ipsum do</a></li>
                <li><a href="#">Lorem ipsum do</a></li>
                <li><a href="#">Lorem ipsum do</a></li>  
              </ul>
            </div>
          </div>
          {/* <div className="footer-link-section">
            <div className="landlord-navi-container">
              <ul>
                <li><h3>Old Articles</h3></li>
                <p>__________</p>
                <li><a href="#">Lorem ipsum do</a></li>
                <li><a href="#">Lorem ipsum do</a></li>
                <li><a href="#">Lorem ipsum do</a></li>
                <li><a href="#">Lorem ipsum do</a></li>
                <li><a href="#">Lorem ipsum do</a></li>
              </ul>
            </div>
          </div> */}
          <div className="footer-link-section">
            <div className="gdexperts-navi-container">
              <ul>
                <li><h3>Social links</h3></li>
                <p>__________</p>
                <li><a href="#">Facebook</a></li>
                <li><a href="#">Email </a></li>
                <li><a href="#">Twitter</a></li>
                <li><a href="#">Whatsapp  </a></li>
                <li><a href="#">Tel</a></li>
              </ul>       
            </div>
          </div>
          {/* <!--bottom footer layout begins--> */}
          {/* <div className="footer-container">
            <div className="bottom-footer">
              {/* <!--add footer logo--> */}
              {/* <img className="logo" src={logo} /> */}
              {/* <span className="copyright"> Powered by <b>GDExperts</b>. All Rights Reserved Copyright 2019. </span> */}
            {/* </div>
          </div> * */}
        </footer>
	);
}

export default FooterSection;