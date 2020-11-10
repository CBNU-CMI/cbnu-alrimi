import { useState, Fragment } from 'react';
import { AiOutlineRight } from 'react-icons/ai';
import Modal from './Modal';

const MoreList = (props) => {
  const [modal, setModal] = useState({ isModalOpen: false });
  const [link, setLink] = useState({ isLinkOpen: false });
  const modalType = props.idx === 1 || props.idx === 2 ? true : false;
  const contactType = props.idx === 3 ? true : false;
  const reviewType = props.idx === 4 ? true : false;
  const listDataEng = [
    'alram',
    'developer',
    'helper',
    'contact',
    'review',
    'opensource',
    'version',
  ];

  const modalData = [
    { idx: 1, data: [['소프트웨어학과 조정제'], ['경영정보학과 노기진']] },
    { idx: 2, data: [['윤리교육과 천하임(우왕이 디자이너)']] },
  ];

  function open() {
    setModal({ isModalOpen: true });
    setLink({ isLinkOpen: true });
  }

  function closeModal() {
    setModal({ isModalOpen: false });
  }

  return (
    <Fragment>
      <div className={listDataEng[props.idx]} onClick={open}>
        {props.name}
        <AiOutlineRight
          style={{
            color: 'lightgray',
            float: 'right',
          }}
        />
      </div>
      {modal.isModalOpen && modalType ? (
        <Modal
          datas={modalData.filter((data) => data.idx === props.idx)}
          isOpen={modal.isModalOpen}
          close={closeModal}
        />
      ) : (
        ''
      )}
      {link.isLinkOpen && contactType
        ? window.open('https://open.kakao.com/o/gmUkYJ4b', 'CNN_WindowName')
        : ''}

      {link.isLinkOpen && reviewType
        ? window.open(
            'https://play.google.com/store/apps/details?id=com.jaryapp.cmi',
            'CNN_WindowName',
          )
        : ''}
    </Fragment>
  );
};

export default MoreList;
