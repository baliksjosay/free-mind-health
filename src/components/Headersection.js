import React from "react"
import '../assets/App.css';
import '../assets/responsive.css';
import Logo from '../assets/images/logo2.jpg'
const Headersection = ()=> {
	return (
		<header>
			{/* beginning of top section */}
			<div className="top-section">
				<a href="#" className="parent-company"> Powered by free mind therapy org</a>
				<a className="manager-signin" href="/signin">Staff Login</a>
			</div>
			{/* end of top section */}

			<div className="bottom-section" id="mytopnav">
				<span className="nametitle"><span className="logo"></span>Free-mind Therapy Uganda</span>
				{/* <img className="logo" src={Logo} /> */}
				<nav>
					<a href="#" className="menu-icon"></a>
					<a className="current" href="index.html">Home</a>
					<a href="/about">About</a>
					<a href="/services">Services</a>
					<a href="/services">Contact us</a>
					<a href="/news">Articles</a>
					<a href="/donate">Donate</a>
				</nav>  
			</div>
		</header>
	);
}

export default Headersection;