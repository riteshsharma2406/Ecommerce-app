import React from 'react'
import "./Categories.scss";
import { Link } from 'react-router-dom';

const Categories = () => {
  return (
    <div className='categories'>
        <div className="col">
            <div className="row">
                <img src="https://images.pexels.com/photos/6311387/pexels-photo-6311387.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                <button>
                    <Link className='link' to="/product/1">Sale</Link>
                </button>
            </div>
            <div className="row">
                <img src="https://images.pexels.com/photos/1721944/pexels-photo-1721944.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                <button>
                    <Link className='link' to="/product/1">Women</Link>
                </button>
            </div>
        </div>
        <div className="col">
            <div className="row">
            <div className="row">
                <img src="https://images.pexels.com/photos/6314978/pexels-photo-6314978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                <button>
                    <Link className='link' to="/product/1">New Season</Link>
                </button>
            </div>
            </div>
        </div>
        <div className="col col-l">
            <div className="row">
                <div className="col">
                    <div className="row">
                    <img src="https://images.pexels.com/photos/15654407/pexels-photo-15654407/free-photo-of-elegant-man-in-a-suit-walking-by-a-sports-car.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                    <button>
                        <Link className='link' to="/product/1">Men</Link>
                    </button>
                    </div>
                </div>
                <div className="col">
                    <div className="row">
                        <img src="https://images.pexels.com/photos/11054161/pexels-photo-11054161.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                        <button>
                            <Link className='link' to="/product/1">Accessories</Link>
                        </button>
                    </div>
                </div>
            </div>
            <div className="row">
                <img src="https://images.pexels.com/photos/1503009/pexels-photo-1503009.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                <button>
                    <Link className='link' to="/product/1">Shoes</Link>
                </button>
            </div>
        </div>
    </div>
  )
}

export default Categories
