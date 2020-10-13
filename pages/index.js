import { useState, useRef, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { BsGearFill } from 'react-icons/bs'
import axios from 'axios'
import { ConfigDialog } from '../components/Dialog'
import mainLayout from '../layout/main'
import { NoticeList, NoticeSelector } from '../components/Notice'

const Index = () => {
  const [notices, setNotices] = useState([])
  const [noticeOffset, setNoticeOffset] = useState(1)
  const selected = useSelector((state) => {
    return state.noticeSelect
  })

  useEffect(() => {
    setNotices([])
    setNoticeOffset(1)
  }, [selected])

  console.log(noticeOffset)

  const infiniteScroll = () => {
    const scrollHeight = Math.max(
      document.documentElement.scrollHeight,
      document.body.scrollHeight
    )
    // const scrollHeight = document.querySelector('html').=
    const scrollTop = Math.max(
      document.documentElement.scrollTop,
      document.body.scrollTop
    )
    const { clientHeight } = document.documentElement

    // alert(scrollHeight)

    // if (scrollTop + clientHeight === scrollHeight) {
    //   setNoticeOffset(noticeOffset + 1)
    // }

    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      setNoticeOffset(noticeOffset + 1)
    }
  }

  const token = `fyhhpHxmc4I:APA91bEXCyw_TUvx3M-yKxyaKc72Xv0a7c2MVFbrDtTZfkqpZKIajyTi1Us0TAFHliQtq02Fy3Y_xTyBnmC8k1ea3qCLBQVh1aNFYs-ei2ZxMwvS4oFtnzPugaA2N9DQx2R63INnU9Pv`
  const types = { 전공: 'major', 공통: 'common' }
  useEffect(() => {
    window.addEventListener('scroll', infiniteScroll, { passive: true })
    axios
      .get(
        `http://${window.location.hostname}:3000/notice/site/list/${types[selected]}?offset=${noticeOffset}`,
        {
          headers: {
            token,
          },
        }
      )
      .then((res) => {
        // console.log(res.data)
        setNotices(notices.concat(res.data))
      })
    return () => {
      window.removeEventListener('scroll', infiniteScroll)
    }
  }, [selected, noticeOffset])

  const configDialogRef = useRef()
  function openConfigDialog() {
    configDialogRef.current.openDialog()
  }
  return (
    <div className="notice-page">
      <div className="config">
        <BsGearFill onClick={openConfigDialog} />
      </div>
      <NoticeSelector />
      <NoticeList notices={notices} />
      <ConfigDialog ref={configDialogRef} />
    </div>
  )
}

export default mainLayout(Index)
