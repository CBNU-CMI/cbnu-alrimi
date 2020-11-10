import React from 'react';
import '../../styles/More/modal.scss';

const Modal = ({ datas, isOpen, close }) => {
  const modalData = datas[0]['data'];
  return (
    <React.Fragment>
      {isOpen ? (
        <React.Fragment>
          <div className="Modal-overlay" onClick={close} />
          <div className="Modal">
            <div className="content">
              {modalData.map((data, index) => {
                {
                  return <p key={index}>{data}</p>;
                }
              })}
            </div>
            <div className="button-wrap">
              <button onClick={close}>확인</button>
            </div>
          </div>
        </React.Fragment>
      ) : (
        ''
      )}
    </React.Fragment>
  );
};
export default Modal;
