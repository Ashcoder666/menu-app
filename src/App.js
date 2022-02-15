import React,{useState} from 'react'
import Categories from './Categories'
import MenuList from './MenuList'
import foodItems from './data'
import './app.css'

const App = () => {
  const [list,setList] = useState(foodItems)
  return (
    <div>
        <h1 style={{textAlign:'center'}}>Menu</h1>
        <Categories />
        <MenuList list={list}/>
    </div>
  )  
}

export default App
