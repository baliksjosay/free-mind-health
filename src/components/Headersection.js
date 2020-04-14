import React, {useState, useEffect, useHistory}from "react"
import {withRouter} from 'react-router';
import '../assets/App.css';
import '../assets/responsive.css';
import Logo from '../assets/images/logo2.jpg'
import {
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
	NavLink,
	UncontrolledDropdown,
	DropdownToggle,
	DropdownMenu,
	DropdownItem,
	NavbarText
  } from 'reactstrap';

function Headersection(props) {
	// let history = useHistory;
	// const [isMenuOpen, setIsMenuOpen] = useState(false);
    // useEffect(() => props.history.u(() => {
    //     setIsMenuOpen(false);
	// }));
	
	return (
		<header>
			{/* <div> */}
		{/* <Navbar color="light" light expand="md">
		  <NavbarBrand href="/">reactstrap</NavbarBrand>
		  <NavbarToggler onClick={toggle} />
		  <Collapse isOpen={isOpen} navbar>
			<Nav className="mr-auto" navbar></Nav> */}
			{/* beginning of top section */}
			<div className="top-section">
				{/* <a href="#" className="parent-company"> Powered by free mind therapy org</a> */}
				<a className="manager-signin" href="/signin">Staff Login</a>
			</div>

			<div className="bottom-section" >
				<span className="nametitle">Free-mind Therapy Uganda</span>
					<span >
						<a href="#" className="menuicon" ></a>
						<a className="current" href="index.html">Home</a>
						<a href="/about">About</a>
						<a href="/services">Services</a>
						<a href="/services">Contact us</a>
						<a href="/news">Articles</a>
						<a href="/donate">Donate</a>
					</span> 
			</div>
		</header>
	);
}

export default Headersection;
