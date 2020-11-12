import { useState, useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { BsGearFill } from 'react-icons/bs';
import { ConfigDialog } from '../components/Dialog';
import mainLayout from '../layout/main';
import {
  NoticeList,
  NoticeSelector,
  NoticeListBySiteId,
} from '../components/Notice';
import { getNoticeSiteList } from '../api';

const Index = () => {
  const [notices, setNotices] = useState([]);
  const [noticeOffset, setNoticeOffset] = useState(1);
  const selected = useSelector((state) => {
    return state.noticeSelect;
  });

  // useEffect(() => {
  //   setNotices([]);
  //   setNoticeOffset(1);
  // }, [selected]);


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
      <div className="selector-height"></div>
      <NoticeListBySiteId siteId={selected} category />
      <ConfigDialog ref={configDialogRef} />
    </div>
  );
};

export default mainLayout(Index);
