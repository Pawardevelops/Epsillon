import React from 'react'
import './Shop_content.css'
// import {Data} from './Data'
import { useNavigate } from 'react-router-dom';
import {DummyData} from './DataSets/DummyData'

const ShopContent = (props) => {

  const {fil} = props;
  let navigate = useNavigate();

  const toProduct = (e) => {
    localStorage.setItem('currentItem',JSON.stringify(e))
    navigate("/product")
  }

  return (
    <>
        <div className="content">
          {/* {Data.filter((ele) => {
            return ele.color.toLowerCase().includes(fil.toLowerCase());
          })
          .map((elem,index) => {
            return(
              <div className="card-cont" onClick={(e) => toProduct(elem)}>
                <img className='shop-content-img' src={elem.imgURL} alt="" />
                <p>color : {elem.color}</p>
              </div>
            )
          })} */}
          {DummyData.filter((ele) => {
            return ele.product_type.toLowerCase().includes("kurta");
          }).map((elem,index) => {
            console.log(elem)
            return(
              <div className="card-cont" key={index} onClick={(e) => toProduct(elem)}>
                <img src={elem.images} alt="" />
                <p>{elem.title}</p>
              </div>
            )
          })}
        </div>
    </>
  )
}

export default ShopContent