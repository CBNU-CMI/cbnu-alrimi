/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectTypeAction } from '../../reducers/noticeSelect';
import { ConfigDialog } from '../Dialog';
import { AiOutlinePlus } from 'react-icons/ai';

const Selector = () => {
  const dispatch = useDispatch();
  const selected = useSelector((state) => state.noticeSelect);
  const [scrolling, setScrolling] = useState(false);

  const onClickSelect = useCallback((select) => {
    dispatch(selectTypeAction(select));
  }, []);

  const configDialogRef = useRef();
  function openConfigDialog() {
    configDialogRef.current.openDialog();
  }
  function scroll() {
    if (window.scrollY == 0) {
      setScrolling(false);
      return;
    }
    setScrolling(true);
  }

  useEffect(() => {
    window.addEventListener('scroll', scroll);
  });

  const data = [
    {
      id: 130101,
      name: '소프트웨어학과',
    },
    {
      id: 130201,
      name: '전기공학부',
    },
    {
      id: 130301,
      name: '전자공학부',
    },
    {
      id: 130401,
      name: '정보통신공학부',
    },
  ];

  return (
    <>
      <div className={'notice-selector ' + (scrolling ? 'border' : '')}>
        {data.map((d) => (
          <div
            className={selected == d.id ? 'selected' : ''}
            key={d.id}
            onClick={() => onClickSelect(d.id)}
          >
            {d.name}
          </div>
        ))}
        <div className="config" onClick={openConfigDialog}>
          <AiOutlinePlus />
        </div>
      </div>
      <ConfigDialog ref={configDialogRef} />
    </>
  );
};

export default Selector;
