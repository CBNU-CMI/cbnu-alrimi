/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import '../../styles/Notice/notice.scss'
import { useState, useEffect } from 'react'
import axios from 'axios'
import NoticeList from './NoticeList'

const NoticeListById = ({ site_id }) => {
  const [notices, setNotices] = useState([])

  useEffect(() => {
    axios.get(`http://192.168.0.22:3000/notice/site/${site_id}`).then((res) => {
      setNotices(res.data)
    })
  })

  return <NoticeList notices={notices} />
}

export default NoticeListById
