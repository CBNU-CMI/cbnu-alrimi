import React, { useState, useEffect } from 'react'
import '../../styles/Restaurant/menu.scss'
import axios from 'axios'

const Menu = () => {
  const [menuData, setMenuData] = useState([])

  useEffect(() => {
    axios.get('http://localhost:3000/restaurant?day=%EC%9B%94').then((res) => {
      setMenuData(res.data)
    })
  }, [])

  const timeList = ['아침', '점심', '저녁']
  return (
    <div className="restaurant-menu">
      {menuData.map((d) => {
        return (
          <div className="restaurant-time" key={d.food_name}>
            {timeList[d.time - 1]}
            <div className="restaurant-text">
              <div className="content">{d.food_name}</div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
export default Menu
