/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import '../../styles/Restaurant/select.scss';

import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import restaurantList from '../constants';
import { placeChangeAction } from '../../reducers/restaurantPlace';
import { getSelector, setSelector } from '../../common/selector';

const Select = () => {
  const dispatch = useDispatch();
  const place = useSelector((state) => state.restaurantPlace);

  const onClickPlace = useCallback((index) => {
    setSelector('place', index);
    dispatch(placeChangeAction(index));
  }, []);

  useEffect(() => {
    dispatch(placeChangeAction(getSelector('place')));
  }, []);

  return (
    <div className="restaurant-select">
      {restaurantList.map((restaurant, i) => {
        return i == place ? (
          <div
            key={restaurant}
            className="real-select-box"
            onClick={() => onClickPlace(i)}
          >
            {restaurant}
          </div>
        ) : (
          <div
            key={restaurant}
            className="select-box"
            onClick={() => onClickPlace(i)}
          >
            {restaurant}
          </div>
        );
      })}
      <div className="fake-select" />
    </div>
  );
};

export default Select;
