import { useEffect, useState } from 'react'
import axios from 'axios'
import dateFormat from '../../common/dateFormat'
import '../../styles/Notice/notice.scss'

const NoticeDetail = ({ noticeId }) => {
  const [notice, setNotice] = useState({})
  useEffect(() => {
    axios
      .get(`http://${window.location.hostname}:3000/notice`, {
        params: { noticeId },
      })
      .then((res) => {
        setNotice(res.data)
      })
  }, [])
  return (
    <div className="notice-detail">
      <div className="title">
        <div>{notice.title}</div>
      </div>
      <div className="date">
        <div>{dateFormat(notice.date)}</div>
      </div>
      <div
        className="contents"
        dangerouslySetInnerHTML={{ __html: notice.contents }}
      />
      <div>자세한 내용 및 첨부파일은 본문확인</div>
    </div>
  )
}

export default NoticeDetail
