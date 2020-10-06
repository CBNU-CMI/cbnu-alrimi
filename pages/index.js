import { useState, useRef, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { BsGearFill } from 'react-icons/bs'
import axios from 'axios'
import { ConfigDialog } from '../components/Dialog'
import mainLayout from '../layout/main'
import { NoticeList, NoticeSelector } from '../components/Notice'

const Index = () => {
  const [notices, setNotices] = useState([])

  const selected = useSelector((state) => {
    return state.noticeSelect
  })

  const token = `fyhhpHxmc4I:APA91bEXCyw_TUvx3M-yKxyaKc72Xv0a7c2MVFbrDtTZfkqpZKIajyTi1Us0TAFHliQtq02Fy3Y_xTyBnmC8k1ea3qCLBQVh1aNFYs-ei2ZxMwvS4oFtnzPugaA2N9DQx2R63INnU9Pv`
  const types = { 전공: 'major', 공통: 'common' }
  useEffect(() => {
    axios
      .get(`http://192.168.0.22:3000/notice/site/list/${types[selected]}`, {
        headers: {
          token,
        },
      })
      .then((res) => {
        setNotices(res.data)
      })
  }, [selected])

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
