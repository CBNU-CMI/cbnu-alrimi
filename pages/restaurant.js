import mainLayout from '../layout/main'
import '../styles/Restaurant/restaurant.scss'

import Title from '../components/Restaurant/Title'
import Day from '../components/Restaurant/Day'
import Select from '../components/Restaurant/Select'
import Menu from '../components/Restaurant/Menu'
import FakeFooter from '../components/Restaurant/FakeFooter'

const Restaurant = () => {
  return (
    <div className="restaurant">
      <Title className="title" />
      <Day className="date" />
      <Select className="select" />
      <Menu className="menu" />
      <FakeFooter className="fakefooter" />
    </div>
  )
}

export default mainLayout(Restaurant)
