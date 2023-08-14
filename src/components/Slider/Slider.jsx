import React, { useState } from 'react';
import "./Slider.scss";
import WestOutlinedIcon from '@mui/icons-material/WestOutlined';
import EastOutlinedIcon from '@mui/icons-material/EastOutlined';

const Slider = () => {


    const [currentSlide, setCurrentSlide] = useState(0);

    const data =[
        "https://images.unsplash.com/photo-1439158771502-46975f6e44e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=compress&cs=tinyrgb&w=1600",
        "https://images.unsplash.com/photo-1626466368754-f1c67d680345?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=compress&cs=tinyrgb&w=1600",
        "https://images.unsplash.com/photo-1511556532299-8f662fc26c06?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=compress&cs=tinyrgb&w=1600",
        "https://images.unsplash.com/photo-1572250802606-70d7bac06e62?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=compress&cs=tinyrgb&w=1600",

    ];


    const prevSlide =() => {
        setCurrentSlide(currentSlide === 0 ? 3 : (prev)=>prev - 1);
    };
    const nextSlide =() => {
        setCurrentSlide(currentSlide === 3 ? 0 : (prev)=>prev + 1);
    };

  return (
    <div className='slider'>
      <div className="container" style={{transform:`translateX(-${currentSlide * 100}vw)`}}>
        <img src={data[0]} alt="" />
        <img src={data[1]} alt="" />
        <img src={data[2]} alt="" />
        <img src={data[3]} alt="" />
      </div>

      <div className="icons">
        <div className="icon" onClick={prevSlide}>
            <WestOutlinedIcon/>
        </div>
        <div className="icon" onClick={nextSlide}>
            <EastOutlinedIcon/>
        </div>
      </div>
    </div>
  )
}

export default Slider
