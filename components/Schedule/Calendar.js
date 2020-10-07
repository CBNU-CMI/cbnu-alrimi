import '../../styles/Schedule/calendar.scss'
import getWeeks from './getWeeks'

const Week = ({ week }) => {
  return (
    <div key={week} className="week">
      {week.map((date) => {
        return <Day date={date} key={date} />
      })}
    </div>
  )
}

// eslint-disable-next-line consistent-return
const Day = ({ date }) => {
  if (new Date().getDate() === date.getDate()) {
    return (
      <div className="date">
        {new Date(date).getDate()}
        <div className="today" />
      </div>
    )
  }
  if (date.getDay() === 6) {
    return <div className="satday-date">{new Date(date).getDate()}</div>
  }
  if (date.getDay() === 0) {
    return <div className="sunday-date">{new Date(date).getDate()}</div>
  }
  return <div className="date">{new Date(date).getDate()}</div>
}

const Calendar = ({ date }) => {
  const Weeks = getWeeks(date.getFullYear(), date.getMonth() + 1)
  return (
    <div className="calendar">
      {Weeks.map((week) => {
        return <Week week={week} key={week} />
      })}
    </div>
  )
}

export default Calendar
