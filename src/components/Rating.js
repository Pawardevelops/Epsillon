import React from 'react'
import {Star} from 'react-feather'
import {AiFillStar, AiOutlineStar } from 'react-icons/ai'
import './ProductPage.css'

const Rating = ({rating, onClick}) => {
  return (
    <div className='custom-rating'>
      {[...Array(5)].map((_,i) => (
        <span className='proRatingStar' key={i} onClick={() => onClick(i)}>
          {rating > i ? (
            <AiFillStar size={25} color={"#B9B7BD"} />
           ) : (
            <AiOutlineStar size={25} color={"#B9B7BD"}/>
        )}
        </span>
      ))}
    </div>
  )
}

export default Rating