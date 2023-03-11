import React,{useState} from 'react'
import './ProductPage.css'
import { Star } from 'react-feather'
import { Heart,HelpCircle,Facebook,Twitter,Linkedin } from 'react-feather'
import payment from './images/payment.png'
import Rating from './Rating'
import ProductReviewCard from './ProductReviewCard'


const ProRight = ({data}) => {

  const [rate, setRate] = useState(data.rating);

  const [num,SetNum] = useState(0)

  let ActualPrice = data.variant_compare_at_price - data.variant_price

  

  return (
    <>
      

      <section>
      <div className="proRight-cont">
        <h3 className='proName'>{data.title}</h3>
        <p className='proPrice'>Rs. {data.variant_price}    <span>Rs. {data.variant_compare_at_price} </span>(Save Rs. {ActualPrice})</p>
        <p className='rating'>Rating: {data.rating} <Star /></p>
        <hr />
        <p className='proDetail'>{data.product_details}</p>
        <p className='inStock'>{data.is_in_stock}</p>
        <h4 className='proColor'>Color : <div className='color' style={{backgroundColor: `${data.dominant_color}`}} ></div></h4>
        <h4 className='proSize'>Size : <div className="size">{data.size}</div></h4>
        <Rating rating={rate} onClick={(i) => setRate(i+1)}/> 
        <button onClick={() => setRate(0)}>zero</button>
        <div className="Add-cart">
          <input type="number" onChange={(e) => (e.target.value < 0 ? e.target.value = 0 : e.target.value)} className="quantity-count" />
          {/* <input type="number" className="quantity-count" /> */}
          <button>Add to cart</button>
        </div>
        <button className='BuyNow'>Buy Now</button>
        <div className="other-options">
          <p><Heart /> Add to wishlist</p>
          <p><HelpCircle /> Ask a question</p>
        </div>
        <div className="payment">
          <img src={payment} alt="" />
        </div>
        <p className='sku'>SKU: <span>{data.variant_sku}</span></p>
        <p className='proCategories'>Categories: <span>{data.type}</span></p>
        <p className='proSocials'>Share: <span className="socials"><Facebook /> <Twitter /> <Linkedin /></span></p>
        
      </div>
        </section>
        
    </>
  )
}

export default ProRight