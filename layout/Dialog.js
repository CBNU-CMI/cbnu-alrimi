/* eslint-disable react/jsx-props-no-spreading */
import { useState, forwardRef, useImperativeHandle, useContext } from 'react';
import { CgClose } from 'react-icons/cg';
import { BiArrowBack } from 'react-icons/bi';
import '../styles/Dialog/dialog.scss';
import { CSSTransition } from 'react-transition-group';
import ThemeContext from '../context/theme';

const DialogLayout = ({ Page, Header, HeaderClass = 'header' }) => {
  return forwardRef((props, ref) => {
    const [open, setOpen] = useState(false);
    const { theme } = useContext(ThemeContext);

    useImperativeHandle(ref, () => ({
      openDialog() {
        if (!window.dialog) window.dialog = [];
        window.dialog.push(ref);
        document.querySelector('html').style.overflow = 'hidden';
        setOpen(true);
      },
      closeDialog() {
        window.dialog.pop();
        if (window.dialog.length === 0) {
          document.querySelector('html').style.overflow = 'auto';
        }
        setOpen(false);
      },
    }));

    function closeDialog() {
      window.dialog.pop();
      if (window.dialog.length === 0) {
        document.querySelector('html').style.overflow = 'auto';
      }
      setOpen(false);
    }

    return (
      <CSSTransition in={open} timeout={200} classNames="alert" unmountOnExit>
        <div className="dialog">
          <div
            className={
              theme === 'light' ? `${HeaderClass} light` : `${HeaderClass} dark`
            }
          >
            {Header ? (
              <>
                <BiArrowBack className="close" onClick={closeDialog} />
                <Header {...props} />
              </>
            ) : (
              <CgClose className="close" onClick={closeDialog} />
            )}
          </div>
          <div className="content">
            <Page {...props} />
          </div>
        </div>
      </CSSTransition>
    );
  });
};

export default DialogLayout;
