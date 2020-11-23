/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AiFillStar } from 'react-icons/ai';
import { selectTypeAction } from '../../reducers/noticeSelect';
import { ConfigDialog } from '../Dialog';
import { getSiteListCategory } from '../../api';
import FloatingButton from './FloatingButton';
import { getSelector, setSelector } from '../../common/selector';

const Selector = () => {
  const dispatch = useDispatch();
  const selected = useSelector((state) => state.noticeSelect);
  const changeConfig = useSelector((state) => state.changeConfig);

  const [scrolling, setScrolling] = useState(false);
  var bfrScroll = 0;
  const [data, setData] = useState([]);
  const ID_SCRAP = 12345;

  const onClickSelect = useCallback((select) => {
    setSelector('notice', select);
    dispatch(selectTypeAction(select));
  }, []);

  const configDialogRef = useRef();
  function openConfigDialog() {
    configDialogRef.current.openDialog();
  }

  const scroll = () => {
    bfrScroll = window.scrollY;
    setScrolling(true);
  };

  useEffect(() => {
    window.addEventListener('scroll', scroll);
    getSiteListCategory().then((result) => {
      setData(result.data);
    });
    setInterval(() => {
      if (bfrScroll == window.scrollY) {
        setScrolling(false);
      }
    }, 2500);
    dispatch(selectTypeAction(getSelector('notice')));
  }, [changeConfig]);

  return (
    <>
      {/* <div className={'notice-selector ' + (scrolling ? 'hide' : '')}> */}
      <div className={'notice-selector '}>
        <div
          className={
            selected == ID_SCRAP ? 'cateogry scrap selected' : 'cateogry scrap'
          }
          onClick={() => onClickSelect(ID_SCRAP)}
        >
          <AiFillStar />
        </div>
        {data.map((d) => (
          <div
            className={selected == d.id ? 'cateogry selected' : 'cateogry'}
            key={d.id}
            onClick={() => onClickSelect(d.id)}
          >
            {d.name}
          </div>
        ))}
        <div className="free"></div>
      </div>
      <ConfigDialog ref={configDialogRef} />
      <FloatingButton hide={scrolling} onClick={openConfigDialog} />
    </>
  );
};

export default Selector;
