import React from 'react'
import Rating from './Rating'
import styled from 'styled-components'
import { useState } from 'react';
import { ArrowLeft,ArrowRight } from 'react-feather';
// import './Carousel.css'
import './ProReview.css'

export default function ProductReviewCard({data}) {

    const stylecard=styled.div`
        background-color:black;    
    `;

    const[slideCount, setSlideCount] = useState(0)

    const nextSlide = () => {
        setSlideCount(slideCount === 2 ? 0 : slideCount+1)
        console.log(slideCount * 100);
    }

    const prevSlide = () => {
        setSlideCount(slideCount === 0 ? 2 : slideCount-1)
        console.log(slideCount);
    }

  return (
    <div>
        

<div className="proReview-cont-carousel">
        <div className="proReview-container" style={{transform: `translateX(-${slideCount * 100}vw)`}}>
            
        </div>
            
        
        {/* <button onClick={() => nextSlide()}>prev</button>
        <button onClick={() => prevSlide()}>next</button> */}
        <button className='btn-left btn-car' onClick={prevSlide}><ArrowLeft /></button>
        <button className='btn-right btn-car' onClick={nextSlide}><ArrowRight /></button>
    </div>
    </div>
  )
}


// {[...Array(5)].map((_,i) => (
//     <div className="proReview-carousel-item">
//     <div className='product-review-card'>
// <div className='product-review-card-head'>
//     <img className='product-review-card-image' src='https://via.placeholder.com/150x150' alt='' />
//     <div>
//     <h2 className='produc-review-card-username'>alpha</h2>
//     <p className='produc-review-card-date'>2019-01-01</p>
//     </div>
//     <Rating rating={data.rating}/>

// </div>
// <div className='product-review-card-head-content'>
//     <p className='produc-review-card-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
//     eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
//     quis nostrud exercitation 
//     ullamco laboris nisi ut aliquip ex ea commodo consequat. 
//     Duis aute irure dolor in reprehenderit in voluptate velit</p>
// </div>
// </div>
// </div>
// ))}