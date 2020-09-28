import mainLayout from '../layout/main'
import '../styles/Restaurant/restaurant.scss'

import Title from '../components/Restaurant/Title'
import Date from '../components/Restaurant/Date'

const Restaurant = () => {
  return (
    <div className="restaurant">
      <Title className="title" />
      <Date className="date" />
    </div>
  )
}

export default mainLayout(Restaurant)
