import '../../styles/Schedule/calendar.scss'
import testMonth from './testMonth.json'

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

const Calendar = () => {
  return (
    <div className="calendar">
      {testMonth.weeks.map((week) => {
        return <Week week={week} key={week} />
      })}
    </div>
  )
}

export default Calendar
