import '../../styles/Restaurant/date.scss'
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'

import React, { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { datePlusAction, dateMinusAction } from '../../reducers/restaurantDate'

const Day = () => {
  const dispatch = useDispatch() // dispatch를 사용하기 쉽게 하는 hook
  const date = useSelector((state) => state.restaurantDate) // store의 state를 불러오는 hook   store의 state 중에서 count의 state를 불러온다.

  // console.log(date)
  const onClickPlus = useCallback(() => {
    // useCallback은 최적화를 위한 hook이다 이 앱에선 굳이 사용 안 해도 되는데 습관이 들면 좋기에 사용.
    dispatch(datePlusAction())
  }, [])

  const onClickMinus = useCallback(() => {
    dispatch(dateMinusAction())
  }, [])

  const dayList = ['일', '월', '화', '수', '목', '금', '토']

  return (
    <div className="restaurant-date">
      <AiOutlineLeft className="AiOutline" onClick={onClickMinus} />
      <div className="date">
        {/* {date} */}
        {date.getFullYear()}년 {date.getMonth() + 1}월 {date.getDate()}일 (
        {dayList[date.getDay()]})
      </div>
      <AiOutlineRight className="AiOutline" onClick={onClickPlus} />
    </div>
  )
}

export default Day
