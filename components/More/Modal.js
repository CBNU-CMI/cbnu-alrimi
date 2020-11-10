import React from 'react';
import '../../styles/More/modal.scss';

const Modal = ({ type, isOpen, close }) => {
  const modalData = [
    '',
    [['소프트웨어학과 조정제'], ['경영정보학과 노기진']],
    [['윤리교육과 천하임(우왕이 디자이너)']],
  ];
  return (
    <React.Fragment>
      {isOpen ? (
        <React.Fragment>
          <div className="Modal-overlay" onClick={close} />
          <div className="Modal">
            <div className="content">
              {modalData[type].map((data, index) => {
                {
                  return <p key={index}>{data}</p>;
                }
              })}
            </div>
            <div className="button-wrap">
              <button onClick={close}>Confirm</button>
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
