import React, { useContext } from 'react';
import '../../styles/Dialog/toast.scss';
import ThemeContext from '../../context/theme';

function Toast({message }) {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className={
        theme === 'light'
          ? `toast light`
          : `toast dark`
      }
    >
      {message}
    </div>
  );
}

export default Toast;
