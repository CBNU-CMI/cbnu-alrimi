/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import '../../styles/Notice/notice.scss'
import dateForamt from '../../common/dateFormat'

const NoticeCard = ({ title, department, type, date, onClick }) => {
  return (
    <div className="notice-card" onClick={onClick}>
      <div className="title">{title}</div>
      <div className="info">
        <div className="department">{department}</div>
        <div className="div-bar" />
        <div className="type">{type}</div>
        <div className="date">{dateForamt(date)}</div>
      </div>
    </div>
  )
}

export default NoticeCard
