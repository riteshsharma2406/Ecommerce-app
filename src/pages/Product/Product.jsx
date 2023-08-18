import React, { useState } from 'react'
import "./Product.scss"
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import BalanceIcon from '@mui/icons-material/Balance';
import { FavoriteOutlined } from '@mui/icons-material';

const Product = () => {

  const [selectedImg, setSelectedImg] = useState(0);
  const [quantity,setQuantity] = useState(1);


  const images = [
    "https://images.pexels.com/photos/1043473/pexels-photo-1043473.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
  ];

  return (
    <div className='product'>
      <div className="left">
        <div className="images">
          <img src={images[0]} alt="" onClick={e=>setSelectedImg(0)}/>
          <img src={images[1]} alt="" onClick={e=>setSelectedImg(1)}/>
        </div>
        <div className="mainImg">
          <img src={images[selectedImg]} alt="" />
        </div>
      </div>
      <div className="right">
        <h1>Title</h1>
        <span className='price'>Rs. 500</span>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, sunt iure! Autem vel repellat fuga commodi praesentium enim temporibus voluptate quibusdam adipisci? Deleniti repudiandae eligendi, quam hic sunt est porro?
        </p>
        <div className="quantity">
          <button onClick={()=>setQuantity(prev=>prev ===1 ? 1: prev-1)}>-</button>
          {quantity}
          <button onClick={()=>setQuantity(prev=>prev+1)}>+</button>
        </div>
        <button className="add">
        <AddShoppingCartIcon/> ADD TO CART  
        </button>
        <div className="links ">
          <div className="item">
            <FavoriteOutlined/> ADD TO WISH LIST
          </div>
          <div className="item">
            <BalanceIcon/> ADD TO COMPARE
          </div>
        </div>
        <div className="info">
          <span>Vendor : Polo</span>
          <span>Product Type: Suit</span>
          <span>Tag: T-shirt, Women, Top</span>
        </div>
        <hr />
        <div className="info">
          <span>DESCRIPTION</span>
          <hr />
          <span>ADDITIONAL INFORMATION</span>
          <hr />
          <span>FAQ</span>
        </div>

        
      </div>
    </div>
  )
}

export default Product
