/* eslint-disable no-param-reassign */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint import/no-cycle: [2, { maxDepth: 1 }] */

import { NoticeListBySiteId } from '../Notice'
import DialogLayout from '../../layout/Dialog'

const Header = ({ site }) => {
  return <>{site.text}</>
}

const NoticeListDialog = ({ siteId }) => {
  // console.log(props)
  return (
    <div className="notice-list-dialog">
      <NoticeListBySiteId siteId={siteId} />
    </div>
  )
}

export default DialogLayout({ Page: NoticeListDialog, Header })
