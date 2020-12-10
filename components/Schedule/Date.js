import '../../styles/Schedule/date.scss';
import React, { useCallback, useContext } from 'react';
import { useDispatch } from 'react-redux';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import {
  monthPlusAction,
  monthMinusAction,
} from '../../reducers/scheduleMonth';
import { dayList } from '../constants';
import ThemeContext from '../../context/theme';

const Date = ({ date }) => {
  const { theme } = useContext(ThemeContext);
  const dispatch = useDispatch();
  const onClickPlus = useCallback(() => {
    dispatch(monthPlusAction());
  }, []);

  const onClickMinus = useCallback(() => {
    dispatch(monthMinusAction());
  }, []);

  return (
    <div
      className={
        theme === 'light' ? 'schedule-date light' : 'schedule-date dark'
      }
    >
      <div className="date">
        <IoIosArrowBack className="IoIosArrowBack" onClick={onClickMinus} />
        {date.getFullYear()}년 {date.getMonth() + 1}월
        <IoIosArrowForward
          className="IoIosArrowForward"
          onClick={onClickPlus}
        />
      </div>

      <div className="day">
        {dayList.map((day) => {
          return (
            <span key={day} className="day">
              {day}
            </span>
          );
        })}
      </div>

      <div className="line" />
    </div>
  );
};

export default Date;
