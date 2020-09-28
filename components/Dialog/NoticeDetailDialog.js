/* eslint-disable no-param-reassign */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */

import NoticeDetail from '../../pages/notice/detail'
import DialogLayout from '../../layout/Dialog'

const NoticeDetailDialog = () => {
  return (
    <div className="notice-detail-dialog">
      <NoticeDetail />
    </div>
  )
}

export default DialogLayout(NoticeDetailDialog)
