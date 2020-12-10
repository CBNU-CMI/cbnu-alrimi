import { useContext } from 'react';
import { useSelector } from 'react-redux';
import mainLayout from '../layout/main';
import Date from '../components/Schedule/Date';
import Calendar from '../components/Schedule/Calendar';
import Academic from '../components/Schedule/Academic';
import Layout from '../Layout';
import '../styles/Schedule/schedule.scss';
import ThemeContext from '../context/theme';

const Schedule = () => {
  const date = useSelector((state) => state.scheduleMonth);
  const { theme } = useContext(ThemeContext);

  return (
    <Layout>
      <div className={theme === 'light' ? 'schedule light' : 'schedule dark'}>
        <Date className="date" date={date} />
        <Calendar className="calendar" date={date} />
        <Academic className="academic" date={date} />
      </div>
    </Layout>
  );
};

export default mainLayout(Schedule);
