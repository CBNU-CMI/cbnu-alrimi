import { useSelector } from 'react-redux'
import mainLayout from '../layout/main'
import Date from '../components/Schedule/Date'
import Calendar from '../components/Schedule/Calendar'
import Academic from '../components/Schedule/Academic'

const Schedule = () => {
  const date = useSelector((state) => state.scheduleMonth)

  return (
    <div className="schedule">
      <Date className="date" date={date} />
      <Calendar className="calendar" date={date} />
      <Academic className="academic" />
    </div>
  )
}

export default mainLayout(Schedule)
