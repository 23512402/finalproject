import { useEffect, useState } from "react";
import { useParams ,Link } from "react-router-dom";
import Sidebar from "./Sidebar";
import parse from 'html-react-parser';

function Single() {
const pram = useParams()
const [single,setSingle]=useState([])


useEffect(()=>{

	const requestOptions = {
		method: "GET",
		redirect: "follow"
	  };
	  
	  fetch(`https://xbellstore.com/itsharks24/blog/api/singlepost.php?id=${pram.id}`, requestOptions)
		.then((response) => response.json())
		.then((result) => {setSingle(result)
		})
	



},[pram.id])




const [related,setRelated]=useState([])




useEffect(()=>{
	const requestOptions = {
		method: "GET",
		redirect: "follow"
	  };
	  
	  fetch(`https://xbellstore.com/itsharks24/blog/api/getrelated.php?category=${pram.category}&id=1`, requestOptions)
		.then((response) => response.json())
		.then((result) => setRelated(result))
		.catch((error) => console.error(error));

},[])



    return ( 

<section className="container">
		<div className="wrapper clear">
			<div className="contentLeft">
			{single.map((buy)=>{
						return(
							<>
							<div className="singlePostMeta" key={buy.id}>
					
					<div className="singlePostTime">{buy.category}</div>
					<h1>{buy.title}</h1>
					<a href="#" className="singlePostCategory">{buy.title}</a>
				</div>
				<div className="singlePostWrap">
				<div className="singlePostImg">
					<img src={`https://xbellstore.com/itsharks24/blog/admin/${buy.image}`} alt="Francoise img"/>
				</div>
				<p>{parse(buy.description)}</p>
				
			</div></>
						)
					})}
				

				
				<div className="pageSocial">
					<div className="pageSocialWrapper">
						<a href="#"><i className="fa fa-facebook"></i></a>
						<a href="#"><i className="fa fa-twitter"></i></a>
						<a href="#"><i className="fa fa-pinterest"></i></a>
					</div>
				</div>
				
		    	<div className="relatedPostsBox">
					<h3>related posts</h3>
					<div className="relatedPostsWrap clear">
						{related.map((rel)=>{
							return(
							<Link to={`/single/${rel.category}/${rel.id}`} className="relatedPostItem" key={rel.id}>
								<img src={`https://xbellstore.com/itsharks24/blog/admin/${rel.image}`} alt="Francoise img"/>
								<div className="overlayBox">
									<div className="relatedPostDesc">
										<div className="postTime">{rel.date}</div>
										<h4>{parse(rel.description)}</h4>
									</div>
								</div>
							</Link>)	
						})}
						
{/* ////// */}
					</div>
				</div>
				
			</div>
			<Sidebar />
		</div>
		<div className="clear"></div>
		<div className="ourInstagram">
			<div id="sb_instagram">
				<div className="sb_instagram_header">
					<a href="#" className="sbi_header_link">Follow on instagram</a>
				</div>
				<div id="sbi_images">
					<div className="sbi_item sbi_type_image">
						<div className="sbi_photo_wrap">
							<a href="#" className="sbi_photo">
								<img src="/finaltask/images/singleimages/inst.jpg" alt="Francoise img"/>
							</a>
						</div>
					</div>
					<div className="sbi_item sbi_type_image">
						<div className="sbi_photo_wrap">
							<a href="#" className="sbi_photo">
								<img src="/finaltask/images/singleimages/inst2.jpg" alt="Francoise img"/>
							</a>
						</div>
					</div>
					<div className="sbi_item sbi_type_image">
						<div className="sbi_photo_wrap">
							<a href="#" className="sbi_photo">
								<img src="/finaltask/images/singleimages/inst3.jpg" alt="Francoise img"/>
							</a>
						</div>
					</div>
					<div className="sbi_item sbi_type_image">
						<div className="sbi_photo_wrap">
							<a href="#" className="sbi_photo">
								<img src="/finaltask/images/singleimages/inst4.jpg" alt="Francoise img"/>
							</a>
						</div>
					</div>
					<div className="sbi_item sbi_type_image">
						<div className="sbi_photo_wrap">
							<a href="#" className="sbi_photo">
								<img src="/finaltask/images/singleimages/inst5.jpg" alt="Francoise img"/>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

     );
}

export default Single;