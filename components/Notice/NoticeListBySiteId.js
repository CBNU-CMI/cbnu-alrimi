/* eslint-disable import/no-cycle */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import '../../styles/Notice/notice.scss';
import { useState, useEffect } from 'react';
import NoticeList from './NoticeList';
import { getNoticeSite } from '../../api';

const NoticeListById = ({ siteId }) => {
  // const [dialog, setDialog] = useState()
  const [notices, setNotices] = useState([]);
  const [noticeOffset, setNoticeOffset] = useState(1);
  let [hitBottom, sethitBottom] = useState(false);

  const infiniteScroll = (event) => {
    const dialog = event.target;

    const { scrollHeight, scrollTop, clientHeight } = dialog;

    if (scrollTop + clientHeight + 60 >= scrollHeight) {
      sethitBottom(true);
    }
  };

  useEffect(() => {
    const currentDialog = document.querySelectorAll('.dialog')[
      document.querySelectorAll('.dialog').length - 1
    ];
    currentDialog.addEventListener('scroll', infiniteScroll);
    infiniteScroll({ target: currentDialog });

    setNotices([]);
    setNoticeOffset(1);
    return () => {
      currentDialog.removeEventListener('scroll', infiniteScroll);
    };
  }, []);

  useEffect(() => {
    getNoticeSite({ siteId, offset: noticeOffset }).then((res) => {
      // noticeOffset++
      hitBottom = false;
      sethitBottom(hitBottom);

      setNoticeOffset(noticeOffset + 1);
      setNotices(notices.concat(res.data));
    });
  }, [hitBottom]);

  return <NoticeList notices={notices} />;
};

export default NoticeListById;
