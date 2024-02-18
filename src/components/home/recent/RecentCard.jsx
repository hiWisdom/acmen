import React from "react"
import { list } from "../../data/Data"

const RecentCard = (props) => {

  // return (
  //   <>

  //     <div className='content grid3 mtop'>

  //       {list.map((val, index) => {

  //         const { cover, category, location, name, price, type } = val

  //         return (

  //           <div className='box shadow' key={index}>
  //             <div className='img'>
  //               <img src={cover} alt='' />
  //             </div>
  //             <div className='text'>
  //               <div className='category flex'>
  //                 <span style={{ background: category === "For Sale" ? "#25b5791a" : "#ff98001a", color: category === "For Sale" ? "#25b579" : "#ff9800" }}>{category}</span>
  //                 <i className='fa fa-heart'></i>
  //               </div>
  //               <h4>{name}</h4>
  //               <p>
  //                 <i className='fa fa-location-dot'></i> {location}
  //               </p>
  //             </div>
  //             <div className='button flex'>
  //               <div>
  //                 <button className='btn2'>{price}</button> <label htmlFor=''>/sqft</label>
  //               </div>
  //               <span>{type}</span>
  //             </div>
  //           </div>
  //         )
  //       })}

  //     </div>

  //   </>
  // )

  return (
    <div className="card">
      <img className="product-image" src={props.url} alt="product image"/>
      <h2 className="name">{props.name}</h2>
      <p className="price">{props.price}</p>
      {/* <p className="description">{props.description}</p> */}
      <p>
        {/* <button>Read more</button> */}
      </p>
    </div>
  );

}

export default RecentCard
