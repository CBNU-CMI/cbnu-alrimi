/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { useContext } from 'react';
import '../../styles/Notice/notice.scss';
import dateForamt from '../../common/dateFormat';
import ThemeContext from '../../context/theme';

const NoticeCard = ({ title, department, type, date, onClick }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={theme === 'light' ? 'notice-card light' : 'notice-card dark'}
      onClick={onClick}
    >
      <div className="title">{title}</div>
      <div className="info">
        <div className="department">{department}</div>
        <div className="div-bar" />
        <div className="type">{type}</div>
        <div className="date">{dateForamt(date)}</div>
      </div>
    </div>
  );
};

export default NoticeCard;
