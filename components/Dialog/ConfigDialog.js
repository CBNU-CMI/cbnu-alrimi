/* eslint-disable no-param-reassign */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { useState, useRef } from 'react'
import { BsBell, BsBellFill } from 'react-icons/bs'
import list from './list'
import DialogLayout from '../../layout/Dialog'
import NoticeListDialog from './NoticeListDialog'

const ConfigDialog = () => {
  const [trace, setTrace] = useState([list])
  const [options, setOptions] = useState(trace[trace.length - 1].children)
  const noticeListDialogRef = useRef()

  function allow(option) {
    option.allow = true
    setOptions(Object.assign([], options))
  }

  function disallow(option) {
    option.allow = false
    setOptions(Object.assign([], options))
  }

  function select(option) {
    if (option.bell) {
      noticeListDialogRef.current.openDialog()
      return
    }
    setOptions(option.children)
    setTrace(trace.concat(option))
  }

  function moveTrace(index) {
    const updateTrace = trace.filter((option, i) => i <= index)
    setTrace(updateTrace)
    setOptions(updateTrace[updateTrace.length - 1].children)
  }

  return (
    <>
      <div className="notice-config">
        <div className="trace-list">
          {trace.map((option, i) => (
            <div
              key={option.text}
              className="trace"
              onClick={() => moveTrace(i)}
            >
              {option.text}
            </div>
          ))}
        </div>
        <div className="select-box">
          {options.map((option) => (
            <div key={option.text} className="option">
              {option.bell ? (
                <div className="bell">
                  {option.allow ? (
                    <BsBellFill onClick={() => disallow(option)} />
                  ) : (
                    <BsBell onClick={() => allow(option)} />
                  )}
                </div>
              ) : (
                ''
              )}
              <div onClick={() => select(option)}>{option.text}</div>
            </div>
          ))}
        </div>
      </div>
      <NoticeListDialog ref={noticeListDialogRef} />
    </>
  )
}

export default DialogLayout(ConfigDialog)
