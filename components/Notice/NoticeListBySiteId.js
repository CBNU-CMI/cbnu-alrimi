/* eslint-disable import/no-cycle */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import '../../styles/Notice/notice.scss';
import { useState, useEffect } from 'react';
import NoticeList from './NoticeList';
import {
  getNoticeListBySite,
  getNoticeListByCategory,
  getNoticeListByScrap,
} from '../../api';
import { getScrap, isEmptyScrap } from '../../common/scrap';

const NoticeListById = ({ siteId, category = false }) => {
  const [notices, setNotices] = useState([]);
  const [noticeOffset, setNoticeOffset] = useState(1);
  let [hitBottom, sethitBottom] = useState(false);
  const [isEnd, setEnd] = useState(false);
  const ID_SCRAP = 12345;

  const infiniteScroll = (event) => {
    const target = event.target;
    if (target == window.document) {
      if (
        window.innerHeight + window.scrollY + 100 >=
        document.body.offsetHeight
      ) {
        sethitBottom(true);
      }
    } else {
      const { scrollHeight, scrollTop, clientHeight } = target;

      if (scrollTop + clientHeight + 100 >= scrollHeight) {
        sethitBottom(true);
      }
    }
  };

  useEffect(() => {
    var target = window.document;
    if (!category) {
      target = document.querySelectorAll('.dialog')[
        document.querySelectorAll('.dialog').length - 1
      ];
      target.addEventListener('scroll', infiniteScroll);
    } else {
      window.addEventListener('scroll', infiniteScroll);
    }

    infiniteScroll({ target });

    setNotices([]);
    setNoticeOffset(1);
    return () => {
      if (target == window.document) return;
      target.removeEventListener('scroll', infiniteScroll);
    };
  }, []);

  useEffect(() => {
    setNotices([]);
    setEnd(false);
    setNoticeOffset(1);
    sethitBottom(true);
  }, [siteId]);

  useEffect(() => {
    if (category) {
      if (siteId == ID_SCRAP) {
        hitBottom = false;
        sethitBottom(hitBottom);
        if (isEmptyScrap()) {
          setEnd(true);
        } else {
          getNoticeListByScrap(getScrap()).then((res) => {
            setNotices(notices.concat(res.data));
            setEnd(true);
          });
        }
        return;
      }
      getNoticeListByCategory({ siteId, offset: noticeOffset }).then((res) => {
        hitBottom = false;
        sethitBottom(hitBottom);

        setNoticeOffset(noticeOffset + 1);
        if (res.data.length == 0) setEnd(true);
        setNotices(notices.concat(res.data));
      });
    } else {
      getNoticeListBySite({ siteId, offset: noticeOffset }).then((res) => {
        hitBottom = false;
        sethitBottom(hitBottom);

        setNoticeOffset(noticeOffset + 1);
        if (res.data.length == 0) setEnd(true);
        setNotices(notices.concat(res.data));
      });
    }
  }, [hitBottom]);

  return (
    <>
      <NoticeList notices={notices} />
      {isEnd ? '' : <div className="loading">불러오는중...</div>}
    </>
  );
};

export default NoticeListById;
