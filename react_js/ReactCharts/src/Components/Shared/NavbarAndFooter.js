import React from 'react';
import './custom_style.css';

class Navbar extends React.Component{
	render(){
		const boxShadowColor="rgba(124, 146, 169, 0.5)";
		const headerStyles={
			navbar:{
				boxShadow: `0 1px 11px ${boxShadowColor}`,
			},
			logo:{
				margin:0,
			},
			logo_link:{
				display:`block`,
			},
			logo_image:{
				verticalAlign:`bottom`,
			},
			navbar_search_container:{
				textAlign:`right`,
			},
			navbar_search:{
				width: `125px`,
				height: `10px`,
				margin: `2px`,
			    transition: "width 0.4s ease-in-out",
			},
		};
		return(
			<header>
				<div className="navbar" style={headerStyles.navbar}>
					<nav className="nav__mobile"></nav>
					<div className="container">
						<div className="navbar__inner">
							<div className="navbar__logo" style={headerStyles.logo}>
								<a className="navbar__logo" href="https://finception.in" style={headerStyles.logo_link}><img src="https://finception.in/static/images/nav_logo.svg" alt="" style={headerStyles.logo_image} /></a>
							</div>
							<input type="text" style={headerStyles.navbar_search} name="search" placeholder="Search.." />
							<nav className="navbar__menu">
								<ul>
									<li><a href="https://finception.in/">Home</a></li>
									<li><a href="https://finception.in/stocks/">Stock Stories</a></li>
									<li><a href="https://finception.in/ipo/">IPO Cafe</a></li>
									<li><a href="https://finception.in/about/">About Us</a></li>
								</ul>
							</nav>
							<div className="navbar__menu-mob">
								<button href="" id='toggle'>
									<svg role="img" xmlns="https://www.w3.org/2000/svg" viewBox="0 0 448 512">
										<path fill="#000" d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z" className=""></path>
									</svg>
								</button>
							</div>
						</div>
					</div>
				</div>
			</header>
		);
	}
}

class Footer extends React.Component{
	render(){
		const footerStyles={
			footer_container:{
				fontFamily:'Quicksand',
			},
			footer_row_1:{
				marginBottom:`0px`,
			},
			footer_row_2:{
				margin:`0px`,
			},
		};
		return(
			<div className="footer footer--dark" style={footerStyles.footer_container}>
				<div className="container">
					<div className="footer__inner">
						<a href="https://finception.in/" className="footer__textLogo">Finception</a>
						<div className="footer__data">
							<div className="footer__data__item">
								<div className="footer__row">Our Address</div>
								<div className="footer__row">
									<p style={footerStyles.footer_row_1}>Finception, Ideapad, CIIE</p>
									<p style={footerStyles.footer_row_2}>IIM Ahmedabad, Vastrapur 380015</p>
									<a href="mailto:support@finception.in" data-type="mail"> support@finception.in</a><br />
								</div>
							</div>
							<div className="footer__data__item">
								<div className="footer__row">
									<p>CIIE, IIM Ahmedabad</p>
								</div>
								<p> &#169; 2018 by Finception Inc.</p>
							</div>

							{/* Contact us*/}

							<div className="footer__data__item">
								<div className="footer__row">
									<strong>Contact Us</strong>
								</div>
								<div className="footer__row">
									<a href="http://fb.com/finceptionIndia" target="_blank" rel="noopener noreferrer"><img src="https://finception.in/static/images/fb.svg" alt="facebook" /></a>
									<a href="https://twitter.com/FInception__" target="_blank" rel="noopener noreferrer"><img src="https://finception.in/static/images/tw.svg" alt="twitter" /></a>
									<a href="https://www.linkedin.com/company/finception-in?originalSubdomain=in" target="_blank" rel="noopener noreferrer"><img src="https://finception.in/static/images/li.svg" alt="linkedin" /></a>
									<a href="https://medium.com/finception" target="_blank" rel="noopener noreferrer"><img src="https://finception.in/static/images/medium.svg" alt="medium" /></a><br />
									<a className="footer__link" href="tel:+918980594439">+91 8980594439</a> <br />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export {Navbar, Footer};