import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick"
import CardProduct from "./CardProduct";
import { Link } from "react-router-dom";

const SlickCarrusel = ({ products }) => {
  
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1
    };

     console.log(products)
    return (
      <div>
        <h2> Single Item</h2>
        <Slider {...settings}>
          {
            products.map(product => (
              <Link key={product.id} to={`/productDetail/${product.id}`}>
                <CardProduct  product={product}/>
              </Link>
            ))
          }
        </Slider>
      </div>
    );
}

  

export default SlickCarrusel