export const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 2000, min: 1124 },
      items: 4,
      slidesToSlide: 1,
    },
    desktop: {
      breakpoint: { max: 1024, min: 800 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 800, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };
  
  export const productData = [
    {
      id: 1,
      imageurl:
        "https://i.ytimg.com/vi/P0jmKnSO1RA/hqdefault.jpg",
      name: "House & Villa",
      price: "$120,009.99",
      description: "",
    },
    {
      id: 2,
      imageurl:
        "https://assets.onepropertee.com/1200x1200/crop/listing_images/amber-duplex-in-anila-park.gkPS6ghJAzcspNsZo.jpg",
      name: "Family House",
      price: "$210,001.99",
      description: "Some text about the product..",
    },
    {
      id: 3,
      imageurl:
        "https://media-mp-live.lamudi.com/static/media/bm9uZS9ub25l/100000x100000/e6107f1fe56f44.jpg?country=mp&environment=live&domain=lamudi.com",
      name: "Country Apartment",
      price: "$199,009.99",
      description: "Some text about the product..",
    },
    {
      id: 4,
      imageurl:
        "https://static-ph.lamudi.com/static/media/bm9uZS9ub25l/1000x620/f9a11a26ae0c4b.jpg",
      name: "Villa & Condo",
      price: "$100,000.99",
      description: "Some text about the product..",
    },
  ];
  
/**featured link items */
export const featured = [
    {
      cover: "https://i.ytimg.com/vi/P0jmKnSO1RA/hqdefault.jpg",
      name: "Family House",
      total: "122 Property",
    },
    {
      cover: "https://assets.onepropertee.com/1200x1200/crop/listing_images/amber-duplex-in-anila-park.gkPS6ghJAzcspNsZo.jpg",
      name: "House & Villa",
      total: "155 Property",
    },
    {
      cover: "https://th.bing.com/th/id/R.3732f9138033244158a3db6f0bad40f8?rik=P04yqyuSLMI%2bLA&pid=ImgRaw&r=0",
      name: "Apartment",
      total: "300 Property",
    },
    {
      cover: "../images/hero/h4.png",
      name: "Office & Studio",
      total: "80 Property",
    },
    {
      cover: "../images/hero/h6.png",
      name: "Villa & Condo",
      total: "80 Property",
    },
  ]