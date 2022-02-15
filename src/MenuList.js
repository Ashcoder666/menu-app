import React from 'react'

const MenuList = ({list}) => {
  return (
    <div className='flex-box'>
     {list.map(item=>{
         const {title,image,desc,price,id} = item;
         return(
            
             <div key={id} className='food-card'>
                 <h1>{title}</h1>
                 <img src={image} alt={title} />
                 <p>{desc}</p>
                 <h3>{price}</h3>

             </div>
         )
     })}
    </div>
  )
}

export default MenuList
