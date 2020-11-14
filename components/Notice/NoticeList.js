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
    </>
  );
};

export default NoticeList;
