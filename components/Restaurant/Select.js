/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import '../../styles/Restaurant/select.scss'

import React, { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { placeChangeAction } from '../../reducers/restaurantPlace'

const Select = () => {
  const dispatch = useDispatch()
  const place = useSelector((state) => state.restaurantPlace)

  const onClickPlace = useCallback((index) => {
    dispatch(placeChangeAction(index))
  }, [])

  const restaurantList = [
    '본관',
    '양성재',
    '양진재',
    '한빛식당',
    '별빛식당',
    '은하수식당',
  ]

  return (
    <div className="restaurant-select">
      {restaurantList.map((restaurant, i) => {
        return i === place ? (
          <div
            key={restaurant}
            className="real-select-box"
            onClick={() => onClickPlace(i)}
          >
            {restaurant}
          </div>
        ) : (
          <div
            key={restaurant}
            className="select-box"
            onClick={() => onClickPlace(i)}
          >
            {restaurant}
          </div>
        )
      })}
    </div>
  )
}

export default Select
