import React from 'react'
import { useState } from 'react'
import './ProductPage.css'
import ProLeft from './ProLeft'
import ProRight from './ProRight'
import ProductReviewCard from './ProductReviewCard'

const ProductPage = (e) => {

  const [proData,SetProData] = useState(() => {
    return JSON.parse(localStorage.getItem('currentItem'))
  })

  // console.log(proData);

  return (
    <>
    <section className="pro-cont">
      <ProLeft data={proData} />
      <ProRight data={proData} />
      {/* <div className="img-cont">
      <img src={proData.images} alt="" />
      <h2>{proData.title}</h2>
      </div> */}
    </section>
    <hr className='product-page-main-hr' />
    <section>
          <ProductReviewCard data={proData}/>
    </section>
    
    </>
  )
}

export default ProductPage