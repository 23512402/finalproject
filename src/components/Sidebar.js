import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
function Sidebar() {
    
  
  const [fixsidebar,setfixsidebar]=useState([])
  
  useEffect(()=>{
    const requestOptions = {
      method: "GET",
      redirect: "follow"
    };
    
    fetch("https://xbellstore.com/itsharks24/blog/api/getrecentpost.php", requestOptions)
      .then((response) => response.json())
      .then((result) => {setfixsidebar(result)})
      
  })
  
  
  return (    
        








        <div className="sidebarRight">
        <div className="sidebar-widget">

          <h3>About us</h3>
          <div className="aboutMeWidget">
            <img src="/finaltask/images/ourlogo.png" alt="Francoise img"/>
            <p>A training company specialized in teaching programming languages, networking and computer science href ensure that you get practical experience in the field of software.</p>
          </div>
        </div>
        <div className="sidebar-widget">
          <h3>follow me</h3>
          <div className="foll
          
          
          owMeSocialas">
            <a href="#"><i className="fa fa-instagram"></i></a>
            <span></span>
            <a href="#"><i className="fa fa-facebook"></i></a>
            <span></span>
            <a href="#"><i className="fa fa-twitter"></i></a>
            <span></span>
            <a href="#"><i className="fa fa-heart"></i></a>
            <span></span>
            <a href="#"><i className="fa fa-pinterest"></i></a>
            <span></span>
            <a href="#"><i className="fa fa-google-plus"></i></a>
          </div>
        </div>
        
        <div className="sidebar-widget">
          <h3>Recent post</h3>
          <div className="popularPostsWidget">
            {fixsidebar.map((fixed)=>{
              return(<div className="popularPostsWidgetItem">
              <Link to={`/single/${fixed.category}/${fixed.id}`}  className="popularPostsItemImg"><img src={`https://xbellstore.com/itsharks24/blog/admin/${fixed.image}`}  alt="Francoise img"/></Link>
              <time dateTime="2015-05-15">{fixed.date}</time>
              <h4><Link href="#">{fixed.writer}</Link></h4>
            </div>)
            })}
            
            
          </div>
        </div>
        
        
      </div> );
}

export default Sidebar;