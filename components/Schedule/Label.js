import '../../styles/Schedule/label.scss'
import { dayList } from '../constants'

const Label = ({ startDate, endDate, content }) => {
  const sDate = new Date(startDate)
  const eDate = new Date(endDate)
  return (
    <div className="label">
      <div className="content">{content}</div>
      {!endDate ? (
        <div className="term">
          {sDate.getMonth() + 1}.{sDate.getDate()}({dayList[sDate.getDay()]})
        </div>
      ) : (
        <div className="term">
          {sDate.getMonth() + 1}.{sDate.getDate()}({dayList[sDate.getDay()]})~
          {eDate.getMonth() + 1}.{eDate.getDate()}({dayList[sDate.getDay()]})
        </div>
      )}
    </div>
  )
}

export default Label
