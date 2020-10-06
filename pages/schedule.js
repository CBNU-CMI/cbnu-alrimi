import mainLayout from '../layout/main'

import Date from '../components/Schedule/Date'
import Calendar from '../components/Schedule/Calendar'
import Academic from '../components/Schedule/Academic'

const Schedule = () => {
  return (
    <div className="schedule">
      <Date className="date" />
      <Calendar className="calendar" />
      <Academic className="academic" />
    </div>
  )
}

export default mainLayout(Schedule)
