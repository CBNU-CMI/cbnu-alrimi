import { useState, forwardRef, useImperativeHandle } from 'react'
import { CgClose } from 'react-icons/cg'
import '../styles/Dialog/dialog.scss'
import { CSSTransition } from 'react-transition-group'

const DialogLayout = (Page) => {
  return forwardRef((props, ref) => {
    const [open, setOpen] = useState(false)

    useImperativeHandle(ref, () => ({
      openDialog() {
        if (!window.dialog) window.dialog = []
        window.dialog.push(ref)
        setOpen(true)
      },
      closeDialog() {
        window.dialog.pop()
        setOpen(false)
      },
    }))

    function closeDialog() {
      window.dialog.pop()
      setOpen(false)
    }

    return (
      <CSSTransition in={open} timeout={200} classNames="alert" unmountOnExit>
        <div className="dialog">
          <div className="header">
            <CgClose className="close" onClick={closeDialog} />
          </div>
          <Page />
        </div>
      </CSSTransition>
    )
  })
}

export default DialogLayout
