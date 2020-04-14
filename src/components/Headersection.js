import React from "react"
// import {withRouter} from 'react-router-dom';
import '../assets/App.css';
import '../assets/responsive.css';

function Headersection(props) {
	return (
		<header>
			<div className="top-section">
			<a href="/home" className="mobiletitle" >Free-mind Therapy Uganda</a>				
			<a className="manager-signin" href="/signin">Staff Login</a>
			</div>

			<div className="bottom-section" >
				<span className="nametitle">Free-mind Therapy Uganda </span>
					{/* <span > */}
						<a href="/home">Home</a>
						<a href="/about">About</a>
						<a href="/services">Services</a>
						{/* <a href="/services">Contact us</a> */}
						<a href="/news">Articles</a>
						<a href="/donate">Donate</a>
					{/* </span>  */}
			</div>
		</header>
	);
}

export default Headersection;
