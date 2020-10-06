import '../../styles/Schedule/date.scss'
import React, { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import { monthPlusAction, monthMinusAction } from '../../reducers/scheduleMonth'

const Date = () => {
  const dispatch = useDispatch()
  const date = useSelector((state) => state.scheduleMonth)
  const onClickPlus = useCallback(() => {
    dispatch(monthPlusAction())
  }, [])

  const onClickMinus = useCallback(() => {
    dispatch(monthMinusAction())
  }, [])

  return (
    <div className="schedule-date">
      <IoIosArrowBack className="IoIosArrow" onClick={onClickMinus} />
      <div className="date">
        {date.getFullYear()}년 {date.getMonth() + 1}월
      </div>
      <IoIosArrowForward className="IoIosArrow" onClick={onClickPlus} />
    </div>
  )
}

export default Date
