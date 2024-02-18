
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import FeaturedProduct from "./Featured-Products";
import { productData, responsive } from "./Featured-Data";
import Heading from "../../common/Heading"
import "./Featured-Property.css";

export default function FeaturedProperty() {
  const product = productData.map((item) => (
    <FeaturedProduct
      name={item.name}
      url={item.imageurl}
      // price={item.price}
      description={item.description}
    />
  ));

  return (
    <div className="AboutusCarouselAppConntainer">
        <Heading title='Featured Property Types' subtitle='Find All Type of Property.' />
      <Carousel showDots={true} responsive={responsive} className="CarouselApp">
        {product}
      </Carousel>
    </div>
  );
}
