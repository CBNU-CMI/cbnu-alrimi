import mainLayout from '../layout/main'
import '../styles/Restaurant/restaurant.scss'

import Day from '../components/Restaurant/Day'
import Select from '../components/Restaurant/Select'
import Menu from '../components/Restaurant/Menu'

const Restaurant = () => {
  return (
    <div className="restaurant">
      <Day className="date" />
      <Select className="select" />
      <Menu className="menu" />
    </div>
  )
}

export default mainLayout(Restaurant)
