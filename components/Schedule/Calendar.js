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

const Day = ({ date }) => {
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
