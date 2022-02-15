import React from 'react'

const Categories = ({filterItems,cat}) => {
  return (
    <div className='buttonss'>
     {cat.map(item=>{
         return( <button  onClick={()=>{filterItems(item)}} >{item}</button>)
     })}
    </div>
  )
}

export default Categories
