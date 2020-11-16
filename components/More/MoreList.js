import { useState, Fragment, useRef } from 'react';
import { AiOutlineRight } from 'react-icons/ai';
import Modal from './Modal';
import { VersionNoteDialog, OpenSourceDialog } from '../Dialog';

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
  const versionNoteDialogRef = useRef();
  const openSourceDialogRef = useRef();

  const modalData = [
    { idx: 1, data: [['소프트웨어학과 조정제'], ['경영정보학과 노기진']] },
    { idx: 2, data: [['윤리교육과 천하임(우왕이 디자이너)']] },
  ];

  function open() {
    if (contactType) {
      window.open('https://open.kakao.com/o/gmUkYJ4b');
      return;
    }
    if (reviewType) {
      window.open(
        'https://play.google.com/store/apps/details?id=com.jaryapp.cmi',
      );
      return;
    }
    if (props.idx == 5) {
      openSourceDialogRef.current.openDialog();
      return;
    }
    if (props.idx == 6) {
      versionNoteDialogRef.current.openDialog();
      return;
    }
    setModal({ isModalOpen: true });
    setLink({ isLinkOpen: true });
  }

  function closeModal() {
    setModal({ isModalOpen: false });
  }

  return (
    <Fragment>
      <span>
        <VersionNoteDialog ref={versionNoteDialogRef} />
        <OpenSourceDialog ref={openSourceDialogRef} />
      </span>
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
    </Fragment>
  );
};

export default MoreList;
