import { useEffect, useState } from "react";
import { Link} from "react-router-dom";



function Header() {


  const [category,setCategory]=useState([])


  const formdata = new FormData();

  const requestOptions = {
	method: "GET",
	redirect: "follow"
  };
  
  fetch("https://xbellstore.com/itsharks24/blog/api/getcategory.php", requestOptions)
	.then((response) => response.json())
	.then((response) => setCategory(response))


	




    return ( 
    	<header id="header">
		<div className="siteHeader">
			<div className="wrapper clear">
				<Link to="/" className="mobile-logo">
				</Link>
				<ul className="mainMenu clear">
					<li>
						<Link to="/">home</Link>
					</li>
					<li>
						<a href="#">Category</a>
						<ul>
						{category.map((category)=>{

								return(<li><Link to={`/${category.name}`}>{category.name}</Link></li>)
							})}

						</ul>
					</li>
					
				</ul>
				<div className="pull-right clear">
					<div className="headerSocialLinks clear">
						<a href="#"><i className="fa fa-instagram"></i></a>
						<a href="#"><i className="fa fa-facebook"></i></a>
						<a href="#"><i className="fa fa-twitter"></i></a>
						<a href="#"><i className="fa fa-heart"></i></a>
						<a href="#"><i className="fa fa-pinterest"></i></a>
						<a href="#"><i className="fa fa-google-plus"></i></a>
					</div>
					<div className="searchIcon"></div>
				</div>
				<span className="showMobileMenu">
					<span></span>
					<span></span>
					<span></span>
					<span></span>
				</span>
			</div>	
		</div>
		<a href="#" className="logo">IT SHARKS 33</a>
	</header>
);
}

export default Header;