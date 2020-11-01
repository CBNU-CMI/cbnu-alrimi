/* eslint-disable no-param-reassign */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint import/no-cycle: [2, { maxDepth: 1 }] */

import { BiStar, BiWorld } from 'react-icons/bi'
import { NoticeDetail } from '../Notice'
import DialogLayout from '../../layout/Dialog'

const Header = ({ notice }) => {
  const openLink = () => {
    window.open(notice.url)
  }

  return (
    <>
      {notice.category2} | {notice.category3}
      <div className="menu">
        <BiStar />
        <BiWorld onClick={openLink} />
      </div>
    </>
  )
}

const NoticeDetailDialog = ({ noticeId }) => {
  return (
    <div className="notice-detail-dialog">
      <NoticeDetail noticeId={noticeId} />
    </div>
  )
}

export default DialogLayout({
  Page: NoticeDetailDialog,
  Header,
  HeaderClass: 'header back',
})
