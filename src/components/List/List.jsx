import React from 'react'
import "./List.scss"
import Card from "../FeaturedProducts/Card/Card"
const List = () => {
    const data = [

        {

            id: 1,
            img: "https://images.pexels.com/photos/6076066/pexels-photo-6076066.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            img2:"https://images.pexels.com/photos/6076065/pexels-photo-6076065.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title:"White crop top and short",
            isNew:true,
            oldPrice:3999,
            newPrice:2999,
        },

        {
            id: 2,
            img: "https://images.pexels.com/photos/1103828/pexels-photo-1103828.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title:"Crew-neck shirt and short",
            isNew:true,
            oldPrice:3999,
            newPrice:2999 
        },

        {
            id: 3,
            img: "https://images.pexels.com/photos/1007018/pexels-photo-1007018.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title:"White Long-sleeved Shirt and Blue Skirt",
            oldPrice:3999,
            newPrice:2999 
        },

        {
            id: 4,
            img: "https://images.pexels.com/photos/11049240/pexels-photo-11049240.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title:"Long Sleeve Hoodie",
            oldPrice:3999,
            newPrice:2999
        },

    ];
  return (
    <div className='list'>{data?.map(item=>(
        <Card item={item} key={item.id}/>
    ))}</div>
  )
}

export default List
