import '../../styles/Schedule/academic.scss'
import axios from 'axios'
import React, { useState, useEffect } from 'react'
import Label from './Label'

const Academic = ({ date }) => {
  const [timeLineData, setTimeLineData] = useState([])

  useEffect(() => {
    axios
      .get(`http://192.168.0.149:3000/schedule?date=${date.getMonth() + 1}`)
      .then((res) => {
        setTimeLineData(res.data)
      })
  }, [date])

  return (
    <div className="academic">
      <div className="title">학사일정</div>
      {timeLineData.map((data) => {
        return (
          <Label
            key={data.content}
            startDate={data.start_date}
            endDate={data.end_date}
            content={data.content}
          />
        )
      })}
    </div>
  )
}

export default Academic
