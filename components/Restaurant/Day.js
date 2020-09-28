import '../../styles/Restaurant/date.scss'

import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'

const Day = () => {
  const year = new Date().getFullYear() // 년도
  const month = new Date().getMonth() + 1 // 월
  const date = new Date().getDate() // 날짜
  const day = new Date().getDay() // 요일
  const dayList = ['일', '월', '화', '수', '목', '금', '토']

  return (
    <div className="restaurant-date">
      <AiOutlineLeft className="AiOutline" />
      <div className="date">
        {year}년 {month}월 {date}일 ({dayList[day]})
      </div>
      <AiOutlineRight className="AiOutline" />
    </div>
  )
}

export default Day
