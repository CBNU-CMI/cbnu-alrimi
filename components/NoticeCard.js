import "../styles/notice.scss";

const NoticeCard = ({ title, department, type, date }) => {
  return (
    <div className="notice-card">
      <div className="title">{title}</div>
      <div className="info">
        <div className="department">{department}</div>
        <div className="div-bar" />
        <div className="type">{type}</div>
        <div className="date">{date}</div>
      </div>
    </div>
  );
};

export default NoticeCard;
