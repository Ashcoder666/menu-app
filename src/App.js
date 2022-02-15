import React,{useState} from 'react'
import Categories from './Categories'
import MenuList from './MenuList'
import foodItems from './data'
import './app.css'

const allcat = new Set (foodItems.map(item=>item.category))


const App = () => {
  const [list,setList] = useState(foodItems);
  const [cat,setCat] = useState(["all",...allcat])
 

  const filterItems =(category)=>{
    if(category=== 'all'){
      setList(foodItems)
      return;
    }
    const newList = foodItems.filter((item)=>item.category===category)
    setList(newList)
  }
  return (
    <div>
        <h1 style={{textAlign:'center'}}>Menu</h1>
        <Categories filterItems={filterItems} cat={cat}/>
        <MenuList list={list}/>
    </div>
  )  
}

export default App
