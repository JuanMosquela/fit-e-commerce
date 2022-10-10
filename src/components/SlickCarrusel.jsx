import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick"
import CardProduct from "./CardProduct";
import { Link } from "react-router-dom";
import Title from "./Title";

const SlickCarrusel = ({ products }) => {
  
  const settings = {
    dots: false,
    initialSlide:0,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

   
    return (
      <div className="carrusel-container">
        <Title title="Our recomended products for you" />
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