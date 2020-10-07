import '../../styles/Schedule/label.scss'
import dateFormat from '../../common/dateForamt'

const Label = ({ startDate, endDate, content }) => {
  return (
    <div className="label">
      <div className="content">{content}</div>
      {!endDate ? (
        <div className="term">{dateFormat(startDate)}</div>
      ) : (
        <div className="term">
          {dateFormat(startDate)}~{dateFormat(endDate)}
        </div>
      )}
    </div>
  )
}

export default Label
