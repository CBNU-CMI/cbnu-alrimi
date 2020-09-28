import { useRef } from 'react'
import NoticeCard from './NoticeCard'
import NoticeDetailDialog from './Dialog/NoticeDetailDialog'

const NoticeList = () => {
  const noticeDetailDialogRef = useRef()
  function openNoticeDetailDialog() {
    noticeDetailDialogRef.current.openDialog()
  }

  const notices = [
    {
      id: 1,
      title: '2020학년도 학사(일정)변경안내',
      department: '소프트웨어학과',
      type: '공지사항',
      date: '2020-09-18',
    },
    {
      id: 2,
      title: '2020학년도 학사(일정)변경안내',
      department: '소프트웨어학과',
      type: '공지사항',
      date: '2020-09-18',
    },
  ]

  return (
    <>
      {notices.map((notice) => (
        <NoticeCard
          key={notice.id}
          title={notice.title}
          department={notice.department}
          type={notice.type}
          date={notice.date}
          onClick={openNoticeDetailDialog}
        />
      ))}
      <NoticeDetailDialog ref={noticeDetailDialogRef} />
    </>
  )
}

export default NoticeList
