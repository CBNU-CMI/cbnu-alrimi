import '../../styles/Restaurant/date.scss';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import React, { useCallback, useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { datePlusAction, dateMinusAction } from '../../reducers/restaurantDate';
import { dayList } from '../constants';
import ThemeContext from '../../context/theme';

const Day = () => {
  const { theme } = useContext(ThemeContext);

  const dispatch = useDispatch();
  const date = useSelector((state) => state.restaurantDate);

  const onClickPlus = useCallback(() => {
    dispatch(datePlusAction());
  }, []);

  const onClickMinus = useCallback(() => {
    dispatch(dateMinusAction());
  }, []);

  return (
    <div
      className={
        theme === 'light' ? 'restaurant-date light' : 'restaurant-date dark'
      }
    >
      <AiOutlineLeft className="AiOutline" onClick={onClickMinus} />
      <div className="date">
        {date.getFullYear()}년 {date.getMonth() + 1}월 {date.getDate()}일 (
        {dayList[date.getDay()]})
      </div>
      <AiOutlineRight className="AiOutline" onClick={onClickPlus} />
    </div>
  );
};

export default Day;
