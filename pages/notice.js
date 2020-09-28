import { useRef } from 'react'
import { BsGearFill } from 'react-icons/bs'
import { ConfigDialog } from '../components/Dialog'
import mainLayout from '../layout/main'
import { NoticeList } from '../components/Notice'

const Index = () => {
  const configDialogRef = useRef()
  function openConfigDialog() {
    configDialogRef.current.openDialog()
  }
  return (
    <div className="notice-page">
      <div className="config">
        <BsGearFill onClick={openConfigDialog} />
      </div>
      <NoticeList />
      <ConfigDialog ref={configDialogRef} />
    </div>
  )
}

export default mainLayout(Index)
