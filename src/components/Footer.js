import React from "react"
import '../assets/App.css';
import {FaFacebookSquare, FaWhatsapp,FaEnvelope, FaTwitterSquare, FaPhoneSquare, FaHorseHead, FaCopyright} from 'react-icons/fa';
import '../assets/responsive.css';
// import { Footer} from 'react-bootstrap/';
import {Col,Row,} from 'reactstrap';

const FooterSection = ()=> {
	return (
		<Row className ="footer sticky" >
      <Row style={{width: "100%"}} >
      <Col xl="3" lg="3" md="3" sm="6" xs="6" className="aboutlinks" >{/*className="about-navi-container" */}
        <p>< h6>Free-mind</ h6></p>
           <hr />             
        <p><a href="#"> Home </a></p>
        <p><a href="#"> FAQs  </a></p>
        <p><a href="#"> Contact Us</a></p>
        <p><a href="#"> Request Help </a></p>
        <p><a href="#"> Donate  </a></p>
      </Col>
  
      <Col xl="3" lg="3" md="3" sm="6" xs="6" className="sitenavigation" >
        <p>< h6>Quick Links</ h6></p>
           <hr />
        <p><a href="#">Projects </a></p>
        <p><a href="#">blog  </a></p>
        <p><a href="#">Payments</a></p>
        <p><a href="#">Roadmap </a></p>
        <p><a href="#">Year Plan</a></p>
      </Col>
  
      <Col xl="3" lg="3" md="3" sm="6" xs="6" className="latestarticles" >
        <p>< h6>Latest Articles</ h6></p>
           <hr />
        <p><a href="#">Lorem ipsum do</a></p>
        <p><a href="#">Lorem ipsum do</a></p>
        <p><a href="#">Lorem ipsum do</a></p>
        <p><a href="#">Lorem ipsum do</a></p>
        <p><a href="#">Lorem ipsum do</a></p>  
      </Col>

      <Col xl="3" lg="3" md="3" sm="6" xs="6" className="sociallinks" >
        <p>< h6>Social Links</ h6></p>
           <hr />
        <p><a href="#" className="facebooktwitter"><FaFacebookSquare style={{color:"dodgerblue"}}/>/@FreeMindTherapyUganda</a></p>
        <p><a href="#" className="mail"><FaEnvelope />info@freemindtherapy.com </a></p>
        <p><a href="mailto:" className="facebooktwitter"><FaTwitterSquare style={{color:"dodgerblue"}}/>@FreeMindtherapy</a></p>
        <p><a href="https://wa.me/+256784964807" className="whatsapp"><FaWhatsapp style={{color:"#25D366"}}/>Whatsapp  </a></p>
        <p><a href="tel:+256784964807"><FaPhoneSquare />+256 784 964 807</a></p>
      </Col>
    </Row>

    <Row style={{ color:"#fff", width:"100%"}}>
      <Col xl="1" lg="2" md="2" sm="12" xs="12"></Col>      
      <Col xl="10" lg="8" md="8" sm="12" xs="12">
        <small className="copyright" > Powered by <b> Baliks, </b>  <FaCopyright /> 2020 All Rights Reserved. </small>
      </Col>
      <Col xl="1" lg="2" md="2" sm="12" xs="12"></Col>      
    </Row>

    </Row>
	);
}

export default FooterSection;