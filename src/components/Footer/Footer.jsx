import React from 'react'
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div className="item">
          <h1>Categories</h1>
          <span>Women</span>
          <span>Men</span>
          <span>Children</span>
          <span>Accessories</span>
          <span>New Arrivals</span>
        </div>
        <div className="item">
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Career</span>
          <span>Cookies</span>
        </div>
        <div className="item">
          <h1>About</h1>
          <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic obcaecati aspernatur dolorum. Facere, recusandae porro cum ab voluptatibus perspiciatis reprehenderit sunt nostrum similique nam eveniet mollitia repudiandae, sit rerum aperiam reiciendis assumenda beatae.</span>
        </div>

        <div className="item">
          <h1>Contact</h1>
          <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos id eligendi hic labore quia magni illo, animi quam maiores veniam corrupti laborum praesentium pariatur a.</span>
        </div>
      </div>

      <div className="bottom">
        <div className="left">
          <span className='logo'>DRIP</span>
          <span className='copyright'>
          © Copyright 2023. All Rights Reserved
          </span>
        </div>
        <div className="right">
          <img src="/img/payment.png" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Footer
