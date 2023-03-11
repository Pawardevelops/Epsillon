import React from 'react'
import './ProductPage.css'
import sample from '../components/images/image4.jpg'
import { useState } from 'react'

const ProLeft = ({data}) => {

  const [image,SetImage] = useState(data.images)

  console.log(data.images)
  return (
    <>
      <div className="proLeft-cont">
        <div className="proLeft-img">
            <img src={image} alt="" className="main-img" />
            <div className="browse-img">
                <img src={data.images} alt="images" onClick={(e) => SetImage(e.target.src)} />
                <img src={sample} alt="images" onClick={(e) => SetImage(e.target.src)} />
                <img src={data.images} alt="images" onClick={(e) => SetImage(e.target.src)} />
                <img src={data.images} alt="images" onClick={(e) => SetImage(e.target.src)} />
            </div>
          </div> 
      </div>
    </>
  )
}

export default ProLeft;