import React from 'react';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import "./Cart.scss"

const Cart = () => {

    const data= [
        {

            id: 1,
            img: "https://images.pexels.com/photos/6076066/pexels-photo-6076066.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            img2:"https://images.pexels.com/photos/6076065/pexels-photo-6076065.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title:"White crop top and short",
            isNew:true,
            desc: "Lorem ipsum dolor sit amet consectetur",
            oldPrice:3999,
            newPrice:2999,
        },
        {
            id: 2,
            img: "https://images.pexels.com/photos/1103828/pexels-photo-1103828.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title:"Crew-neck shirt and short",
            desc: "Lorem ipsum dolor sit amet consectetur",
            isNew:true,
            oldPrice:3999,
            newPrice:2999 
        },
    ];
  return (
    <div className='cart'>
      <h1>Product in your cart</h1>
      {data?.map((item)=>(
        <div className="item" key={item.id}>
            <img src={item.img} alt="" />
            <div className="detail">
                <h1>{item.title}</h1>
                <p>{item.desc.substring(0,100)}</p>
                <div className="price">1 x {item.newPrice}</div>
            </div>
            <DeleteOutlineIcon className='delete'/>
        </div>
      ))}
      <div className="total">
        <span>SUBTOTAL</span>
        <span>Rs. 500</span>
      </div>
      <button>PROCEED TO CHECKOUT</button>
      <div className="reset">Reset Cart</div>
    </div>
  )
}

export default Cart
