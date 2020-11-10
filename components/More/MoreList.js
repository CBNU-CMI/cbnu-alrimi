import { useState, Fragment } from 'react';
import { AiOutlineRight } from 'react-icons/ai';
import Modal from './Modal';

const MoreList = (props) => {
  const [modal, setModal] = useState({ isModalOpen: false });
  const type = props.idx === 1 || props.idx === 2 ? true : false;
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

  function openModal() {
    setModal({ isModalOpen: true });
  }

  function closeModal() {
    setModal({ isModalOpen: false });
  }

  return (
    <Fragment>
      <div className={listDataEng[props.idx]} onClick={openModal}>
        {props.name}
        <AiOutlineRight
          style={{
            color: 'lightgray',
            float: 'right',
          }}
        />
      </div>
      {modal.isModalOpen && type ? (
        <Modal
          datas={modalData.filter((data) => data.idx === props.idx)}
          isOpen={modal.isModalOpen}
          close={closeModal}
        />
      ) : (
        ''
      )}
    </Fragment>
  );
};

export default MoreList;
