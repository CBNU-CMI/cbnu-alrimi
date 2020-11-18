import { useSelector } from 'react-redux';
import mainLayout from '../layout/main';
import Date from '../components/Schedule/Date';
import Calendar from '../components/Schedule/Calendar';
import Academic from '../components/Schedule/Academic';
import Layout from '../Layout';

const Schedule = () => {
  const date = useSelector((state) => state.scheduleMonth);

  return (
    <Layout>
      <div className="schedule">
        <Date className="date" date={date} />
        <Calendar className="calendar" date={date} />
        <Academic className="academic" date={date} />
      </div>
    </Layout>
  );
};

export default mainLayout(Schedule);
