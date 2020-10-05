import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import axios from 'axios'
import restaurantList from './constants'
import '../../styles/Restaurant/menu.scss'

const Menu = () => {
  function dateParsing(date) {
    return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
  }
  const [menuData, setMenuData] = useState([])
  const place = useSelector((state) => {
    return state.restaurantPlace
  })
  const date = useSelector((state) => {
    return dateParsing(state.restaurantDate)
  })

  useEffect(() => {
    axios
      .get(
        `http://localhost:3000/restaurant?date=${date}&place=${restaurantList[place]}`
      )
      .then((res) => {
        setMenuData(res.data)
      })
  }, [place, date])

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
