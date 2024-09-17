import {useEffect, useState} from "react" ;
import { Link, useParams } from "react-router-dom";
import Sidebar from "./Sidebar";
import parse from 'html-react-parser';

function Home() {
  const pram = useParams()
  console.log(pram.id)   

const [products , setProducts] = useState([]);


   
  useEffect(()=>{

    const requestOptions = {
      method: "GET",
      redirect: "follow"
    };
    
    fetch("https://xbellstore.com/itsharks24/blog/api/getposts.php", requestOptions)
      .then((response) => response.json())
      .then((result) => setProducts(result))
      .catch((error) => console.error(error));

},[])


   
   



    return ( 
      <section className="container mt-5">
      <div className="wrapper clear">
        <div className="clear"></div>
        <Sidebar />
        <div className="contentLeft">
          <div className="blogPostListWrap">
            {products.map((product)=>{
         return(
          <div className="blogPostListItem clear" key={product.id}>
          <Link to={`/single/${product.category}/${product.id}`} className="blogPostListImg">
           <img src={`https://xbellstore.com/itsharks24/blog/admin/${product.image}`} alt="Francoise img"/>
          </Link>
          <div className="blogPostListText">
            <div className="blogPostListTime">{product.date}</div>
            <h3><a href="single.html">{product.title}</a></h3>
            <p>{parse(product.description)}</p>
          </div>
        </div>
         )
            })}
            

          </div>
          <div className="postPagination">
            <ul className="clear">
              <li className="newPosts"><a href="#">New posts</a></li>
              <li className="olderPosts"><a href="#">Older posts</a></li>
            </ul>
          </div>
        </div>
           
      </div>
      
      
      <div className="clear"></div>
      
    </section>


     );
}

export default Home;