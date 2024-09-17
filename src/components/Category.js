import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Sidebar from "./Sidebar";
import parse from 'html-react-parser';
function Category() {
const pram = useParams();
console.log(pram.category)
 const [getpostsbycategory,setpostsbycategory]=useState([])





useEffect(()=>{
    const formdata = new FormData();

const requestOptions = {
    
  method: "GET",

  redirect: "follow"
};

fetch(`https://xbellstore.com/itsharks24/blog/api/getpostsbycategory.php?category=${pram.category}`, requestOptions)
  .then((response) => response.json())
  .then((result) => setpostsbycategory(result))
  
},[pram.category])







    return ( 

        <section className="container">
		<div className="wrapper clear">
			<div className="contentLeft">
				<div className="archivePageTitle"><span>Lifestyle</span></div>
				<div className="archivePostWrap">
                    {getpostsbycategory.map((postcategory)=>{
                        return(<div className="archivePostItem">
                            <div className="archivePostTime">{postcategory.date}</div>
                            <h3 className="archivePostTitle"><a href="#">{postcategory.title}</a></h3>
                            <Link to={`/single/${postcategory.category}/${postcategory.id}`} className="archivePostCategory">{postcategory.id}</Link>
                            <Link to={`/single/${postcategory.category}/${postcategory.id}`} className="archivePostImg">
                                <img src={`https://xbellstore.com/itsharks24/blog/admin/${postcategory.image}`}  alt="Francoise img"/>
                            </Link>
                            <p>{parse(postcategory.description)}</p>
                            <div className="archivePostItemMeta">
                                <a href="#" className="archivePostItemComments">124 Comments</a>
                                <div className="archivePostItemShareLinks">
                                    <a href="#"><i className="fa fa-facebook"></i></a>
                                    <a href="#"><i className="fa fa-twitter"></i></a>
                                    <a href="#"><i className="fa fa-pinterest"></i></a>
                                </div>
                                <Link to={`/single/${postcategory.category}/${postcategory.id}`} className="archivePostReadMore">Read More</Link>
                            </div>
                        </div>)
                    })}
					

				</div>
				<div className="postPagination">
					<ul className="clear">
						<li className="newPosts"><a href="#">New posts</a></li>
						<li className="olderPosts"><a href="#">Older posts</a></li>
					</ul>
				</div>
			</div>
			<Sidebar />
		</div>
		<div className="clear"></div>
		
	</section>




     );
}

export default Category;