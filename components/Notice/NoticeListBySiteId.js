/* eslint-disable import/no-cycle */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import '../../styles/Notice/notice.scss'
import { useState, useEffect } from 'react'
import axios from 'axios'
import NoticeList from './NoticeList'

const NoticeListById = ({ siteId }) => {
  const [dialog, setDialog] = useState()
  const [notices, setNotices] = useState([])
  const [noticeOffset, setNoticeOffset] = useState(1)

  const infiniteScroll = () => {
    const { scrollHeight, scrollTop, clientHeight } = dialog

    if (scrollTop + clientHeight >= scrollHeight) {
      // console.log(noticeOffset)
      setNoticeOffset(noticeOffset + 1)
    }
  }

  useEffect(() => {
    const currentDialog = document.querySelectorAll('.dialog')[
      document.querySelectorAll('.dialog').length - 1
    ]
    setDialog(currentDialog)
    setNotices([])
    setNoticeOffset(4)
  }, [siteId])

  useEffect(() => {
    if (dialog)
      dialog.addEventListener('scroll', infiniteScroll, { passive: true })

    return () => {
      if (dialog) dialog.removeEventListener('scroll', infiniteScroll)
    }
  }, [dialog])

  useEffect(() => {
    console.log(noticeOffset)
    axios
      .get(
        `http://192.168.0.22:3000/notice/site/${siteId}?offset=${noticeOffset}`
      )
      .then((res) => {
        setNotices(notices.concat(res.data))
      })
  }, [siteId, noticeOffset])

  return <NoticeList notices={notices} />
}

export default NoticeListById
