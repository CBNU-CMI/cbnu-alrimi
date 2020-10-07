import '../../styles/Schedule/calendar.scss'
import getWeeks from './getWeeks'

const Week = ({ selectmonth, week }) => {
  return (
    <div selectmonth={selectmonth} key={week} className="week">
      {week.map((date) => {
        return <Day selectmonth={selectmonth} date={date} key={date} />
      })}
    </div>
  )
}

// eslint-disable-next-line consistent-return
const Day = ({ selectmonth, date }) => {
  const now = new Date()
  now.setHours(0, 0, 0, 0)
  date.setHours(0, 0, 0, 0)
  const dayclass = [
    'sunday-date',
    'date',
    'date',
    'date',
    'date',
    'date',
    'satday-date',
  ]
  if (selectmonth !== date.getMonth() + 1) {
    return <div className="not-date">{new Date(date).getDate()}</div>
  }
  return (
    <div className={dayclass[date.getDay()]}>
      {new Date(date).getDate()}
      {now.getTime() === date.getTime() ? <div className="today" /> : ''}
    </div>
  )
}

const Calendar = ({ date }) => {
  const Weeks = getWeeks(date.getFullYear(), date.getMonth() + 1)
  return (
    <div className="calendar">
      {Weeks.map((week) => {
        return <Week selectmonth={date.getMonth() + 1} week={week} key={week} />
      })}
    </div>
  )
}

export default Calendar
