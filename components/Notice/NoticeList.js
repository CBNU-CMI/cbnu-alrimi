/* eslint import/no-cycle: [2, { maxDepth: 1 }] */
import { useRef, useState } from 'react';
import NoticeCard from './NoticeCard';
import { NoticeDetailDialog } from '../Dialog';

const NoticeList = ({ notices }) => {
  const [selectedNotice, setSelectedNotice] = useState({});
  const noticeDetailDialogRef = useRef();
  function openNoticeDetailDialog(notice) {
    setSelectedNotice(notice);
    noticeDetailDialogRef.current.openDialog();
  }

  // const notices = [
  //   {
  //     id: 1,
  //     title: '2020학년도 학사(일정)변경안내',
  //     category2: '소프트웨어학과',
  //     type: '공지사항',
  //     date: '2020-09-18',
  //   },
  //   {
  //     id: 2,
  //     title: '2020학년도 학사(일정)변경안내',
  //     category2: '소프트웨어학과',
  //     type: '공지사항',
  //     date: '2020-09-18',
  //   },
  // ]

  return (
    <>
      {notices.map((notice) => (
        <NoticeCard
          key={notice.id}
          title={notice.title}
          department={notice.category2}
          type={notice.category3}
          date={notice.date}
          onClick={() => openNoticeDetailDialog(notice)}
        />
      ))}
      <NoticeDetailDialog
        ref={noticeDetailDialogRef}
        noticeId={selectedNotice.id}
        notice={selectedNotice}
      />
      <div className="loading">불러오는중...</div>
    </>
  );
};

export default NoticeList;
