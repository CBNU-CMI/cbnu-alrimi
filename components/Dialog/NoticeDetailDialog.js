/* eslint-disable no-param-reassign */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint import/no-cycle: [2, { maxDepth: 1 }] */

import { BiWorld } from 'react-icons/bi';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { useState } from 'react';
import { NoticeDetail } from '../Notice';
import DialogLayout from '../../layout/Dialog';
import { isScrap, insertScrap, removeScrap } from '../../common/scrap';

const Header = ({ notice }) => {
  const [update, setUpdate] = useState(false);

  const openLink = () => {
    window.open(notice.url);
  };

  return (
    <>
      {notice.category2} | {notice.category3}
      <div className="menu">
        {isScrap(notice.id) ? (
          <AiFillStar
            className="scrap"
            onClick={() => {
              removeScrap(notice.id);
              setUpdate(!update);
            }}
          />
        ) : (
          <AiOutlineStar
            className="scrap"
            onClick={() => {
              insertScrap(notice.id);
              setUpdate(!update);
            }}
          />
        )}
        <BiWorld onClick={openLink} />
      </div>
    </>
  );
};

const NoticeDetailDialog = ({ noticeId }) => {
  return (
    <div className="notice-detail-dialog">
      <NoticeDetail noticeId={noticeId} />
    </div>
  );
};

export default DialogLayout({
  Page: NoticeDetailDialog,
  Header,
  HeaderClass: 'header back',
});
