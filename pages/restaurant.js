import { useContext } from 'react';
import mainLayout from '../layout/main';
import '../styles/Restaurant/restaurant.scss';
import Layout from '../Layout';
import ThemeContext from '../context/theme';
import Day from '../components/Restaurant/Day';
import Select from '../components/Restaurant/Select';
import Menu from '../components/Restaurant/Menu';

const Restaurant = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Layout>
      <div
        className={theme === 'light' ? 'restaurant light' : 'restaurant dark'}
      >
        <Day className="date" />
        <Select className="select" />
        <Menu className="menu" />
      </div>
    </Layout>
  );
};

export default mainLayout(Restaurant);
