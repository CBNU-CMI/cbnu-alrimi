/* eslint-disable no-param-reassign */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */

import NoticeList from "../NoticeList"
import DialogLayout from "../../layout/Dialog"

const NoticeListDialog = () => {
  return (
    <div className="notice-list-dialog">
      <NoticeList />
    </div>
  )
}

export default DialogLayout(NoticeListDialog)
