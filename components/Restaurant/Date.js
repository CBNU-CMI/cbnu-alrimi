import '../../styles/Restaurant/date.scss'

import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'

const Date = () => {
  return (
    <div>
      <AiOutlineLeft className="AiOutline" />
      <div className="date">2020년 09월 09일 (목) </div>
      <AiOutlineRight className="AiOutline" />
    </div>
  )
}

export default Date
