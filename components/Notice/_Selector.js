/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectTypeAction } from '../../reducers/noticeSelect'

const Selector = () => {
  const dispatch = useDispatch()
  const selected = useSelector((state) => state.noticeSelect)

  const onClickSelect = useCallback((select) => {
    dispatch(selectTypeAction(select))
  }, [])

  return (
    <div className="notice-selector">
      <div
        onClick={() => onClickSelect('전공')}
        className={selected === '전공' ? 'selected' : ''}
      >
        전공
      </div>
      <div
        onClick={() => onClickSelect('공통')}
        className={selected === '공통' ? 'selected' : ''}
      >
        공통
      </div>
      <div
        onClick={() => onClickSelect('스크랩')}
        className={selected === '스크랩' ? 'selected' : ''}
      >
        스크랩
      </div>
    </div>
  )
}

export default Selector
