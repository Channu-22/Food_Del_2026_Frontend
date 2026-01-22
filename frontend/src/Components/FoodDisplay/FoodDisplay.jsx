import React, { useContext } from 'react'
import "./FoodDisplay.css"
import StoreContextProvider, { StoreContext } from '../../Context/StoreContext'
import FoodItem from '../FoodItem/FoodItem'

function FoodDisplay({category, setCategory}) {

  const {food_list} = useContext(StoreContext)

  return (
    <div className="food-display mt-[30px]" id="food-display">
      <h1 className="text-[max(2vw,24px)] font-semibold">Top dishes near you</h1>
      <div className="food-display-list grid grid-cols-[repeat(auto-fill,minmax(240px,1fr))] mt-[30px] gap-x-[30px] gap-y-[50px]">
        {
          food_list.map((item, index) => {
            if(category === "All"  || category === item.category){
              return <FoodItem key={index} id={item._id} name={item.name} price={item.price} description={item.description} image={item.image}/>
            }      
          })
        }

      </div>
    </div>
  )
}

export default FoodDisplay