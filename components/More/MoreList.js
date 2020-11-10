import { useState, Fragment } from 'react';
import { AiOutlineRight } from 'react-icons/ai';
import Modal from './Modal';

const MoreList = (props) => {
  console.log(props);
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
        <Modal type={props.idx} isOpen={modal.isModalOpen} close={closeModal} />
      ) : (
        ''
      )}
    </Fragment>
  );
};

export default MoreList;
