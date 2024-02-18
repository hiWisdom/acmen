
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import FeaturedProduct from "./Featured-Products";
import { productData, responsive } from "./Featured-Data";
import Heading from "../../common/Heading"
import "./Featured-Property.css";

const Recent = () => {

  const product = productData.map((item) => (
    <FeaturedProduct
      name={item.name}
      url={item.imageurl}
      // price={item.price}
      description={item.description}
    />
  ));


  return (
    <>
      <section className='recent padding'>
        <div className='container'>
          <Heading title='Recent Property Listed' subtitle='Discover the best way to embark on your real estate journey. Browse through thousands of properties for Sale and for Rent with each listing filled with detailed information, maps and photos.' />

          <Carousel showDots={true} responsive={responsive} className="CarouselApp">
            {product}
          </Carousel>
          
        </div>
      </section>
    </>
  )
}

export default Recent
