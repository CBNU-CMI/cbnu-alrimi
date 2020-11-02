import { useState, useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { BsGearFill } from 'react-icons/bs';
import { ConfigDialog } from '../components/Dialog';
import mainLayout from '../layout/main';
import { NoticeList, NoticeSelector } from '../components/Notice';
import { getNoticeSiteList } from '../api';

const Index = () => {
  const [notices, setNotices] = useState([]);
  const [noticeOffset, setNoticeOffset] = useState(1);
  const selected = useSelector((state) => {
    return state.noticeSelect;
  });

  useEffect(() => {
    setNotices([]);
    setNoticeOffset(1);
  }, [selected]);

  const infiniteScroll = () => {
    if (
      window.innerHeight + window.scrollY + 40 >=
      document.body.offsetHeight
    ) {
      setNoticeOffset(noticeOffset + 1);
    }
  };

  const types = { 전공: 'major', 공통: 'common' };
  useEffect(() => {
    window.addEventListener('scroll', infiniteScroll, { passive: true });

    getNoticeSiteList({ type: types[selected], offset: noticeOffset }).then(
      (res) => {
        setNotices(notices.concat(res.data));
      },
    );

    return () => {
      window.removeEventListener('scroll', infiniteScroll);
    };
  }, [selected, noticeOffset]);

  const configDialogRef = useRef();
  function openConfigDialog() {
    configDialogRef.current.openDialog();
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
  );
};

export default mainLayout(Index);
