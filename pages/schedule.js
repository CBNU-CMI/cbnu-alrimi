import mainLayout from '../layout/main'

import Date from '../components/Schedule/Date'
import Calendar from '../components/Schedule/Calendar'

const Schedule = () => {
  return (
    <div className="schedule">
      <Date className="date" />
      <Calendar className="calendar" />
    </div>
  )
}

export default mainLayout(Schedule)
