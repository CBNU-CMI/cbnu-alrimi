import mainLayout from '../layout/main';
import '../styles/Restaurant/restaurant.scss';
import Layout from '../Layout';

import Day from '../components/Restaurant/Day';
import Select from '../components/Restaurant/Select';
import Menu from '../components/Restaurant/Menu';

const Restaurant = () => {
  return (
    <Layout>
      <div className="restaurant">
        <Day className="date" />
        <Select className="select" />
        <Menu className="menu" />
      </div>
    </Layout>
  );
};

export default mainLayout(Restaurant);
