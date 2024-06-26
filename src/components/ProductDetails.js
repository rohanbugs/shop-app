import React, { useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProduct, selectedProduct } from '../redux/actions/productActions';


export default function ProductDetails() {
    const product=useSelector((state)=>state.product)
    const {title,price,category,image,description,rating={}}=product
    const dispatch=useDispatch()
    const {productid}=useParams()
    console.log(productid)

    // const loadProduct=async()=>{
    //     const response=await axios.get(`https://fakestoreapi.com/products/${productid}`)
    //     dispatch(selectedProduct(response.data))
    //     console.log('rating',rating)
        
    // }

    useEffect(()=>{
        // loadProduct()
        console.log("productid:",productid)
        dispatch(fetchProduct(productid))
    },[])
  return (
    <div className="ui grid container">
            <div className="ui placeholder segment">
                <div className="ui two column stackable center aligned grid">
                    <div className="ui vertical divider">AND</div>
                    <div className="middle aligned row">
                        <div className="column lp">
                            <img className="ui fluid image"
                                src={image}/>
                        </div>
                        <div className="column rp">
                            <h1>{title}</h1>
                            <h2>
                                <a className="ui teal tag label">${price}</a>
                            </h2>
                            <h3 className="ui brown block header">
                                {category}</h3>
                            <p>{description}</p>
                            <div className="ui vertical animated button" tabIndex="0">
                                <div className="hidden content">
                                    <i className="shop icon"></i>
                                </div>
                                <div className="visible content">Add To Cart</div>
                            </div>
                            <h3 className="ui brown block header">
                                {rating.rate} * ({rating.count})</h3>
                            

                        </div>


                    </div>


                </div>

            </div>

        </div>
  );
}
