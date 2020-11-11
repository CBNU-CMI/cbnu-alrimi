/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectTypeAction } from '../../reducers/noticeSelect';
import { ConfigDialog } from '../Dialog';
import { AiOutlinePlus } from 'react-icons/ai';
import { getSiteListCategory } from '../../api';

const Selector = () => {
  const dispatch = useDispatch();
  const selected = useSelector((state) => state.noticeSelect);
  const [scrolling, setScrolling] = useState(false);
  const [data, setData] = useState([]);

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
    getSiteListCategory().then((result) => {
      console.log(result);
      setData(result.data);
    });
  }, []);

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
