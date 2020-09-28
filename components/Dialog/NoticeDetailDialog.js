/* eslint-disable no-param-reassign */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint import/no-cycle: [2, { maxDepth: 1 }] */

import { NoticeDetail } from '../Notice'
import DialogLayout from '../../layout/Dialog'

const NoticeDetailDialog = () => {
  return (
    <div className="notice-detail-dialog">
      <NoticeDetail />
    </div>
  )
}

export default DialogLayout(NoticeDetailDialog)
