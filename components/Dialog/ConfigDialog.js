/* eslint-disable no-param-reassign */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint import/no-cycle: [2, { maxDepth: 1 }] */

import { useState, useRef, useEffect, useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import parser from './list';
import DialogLayout from '../../layout/Dialog';
import NoticeListDialog from './NoticeListDialog';
import { getAllowSiteList, setAllowSite, unsetAllowSite } from '../../api';
import Modal from '../More/Modal';
import { changeConfigAction } from '../../reducers/changeConfig';
import { BsBell, BsBellFill } from 'react-icons/bs';
import ThemeContext from '../../context/theme';

const ConfigDialog = () => {
  const dispatch = useDispatch();
  const [modal, setModal] = useState({ isModalOpen: false });
  const [modalData, setModalData] = useState([{ data: [] }]);
  const [trace, setTrace] = useState([]);
  const [options, setOptions] = useState([]);
  const [selectedSite, setSelectedSite] = useState({ id: undefined });
  const noticeListDialogRef = useRef();
  const changeConfig = useSelector((state) => state.changeConfig);
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    getAllowSiteList().then((result) => {
      const parsedData = parser(result.data);
      setTrace([parsedData]);
      setOptions(parsedData.children);
    });
  }, []);

  function allow(option) {
    option.allow = true;
    setAllowSite(option.id);
    setOptions(Object.assign([], options));
    setModalData([
      {
        data: [
          `${trace[trace.length - 1].text} > ${option.text}`,
          '알림이 설정되었습니다.',
        ],
      },
    ]);
    setModal({ isModalOpen: true });
  }

  function disallow(option) {
    option.allow = false;
    unsetAllowSite(option.id);
    setOptions(Object.assign([], options));
    setModalData([
      {
        data: [
          `${trace[trace.length - 1].text} > ${option.text}`,
          '알림이 해제되었습니다.',
        ],
      },
    ]);
    setModal({ isModalOpen: true });
  }

  function select(option) {
    if (option.bell) {
      setSelectedSite(option);
      noticeListDialogRef.current.openDialog();
      return;
    }
    setOptions(option.children);
    setTrace(trace.concat(option));
  }

  function moveTrace(index) {
    const updateTrace = trace.filter((option, i) => i <= index);
    setTrace(updateTrace);
    setOptions(updateTrace[updateTrace.length - 1].children);
  }

  function closeModal() {
    dispatch(changeConfigAction(!changeConfig));
    setModal({ isModalOpen: false });
  }

  return (
    <>
      <div className="notice-config">
        <div className="trace-list">
          {trace.map((option, i) => (
            <div
              key={option.text}
              className="trace"
              onClick={() => moveTrace(i)}
            >
              {option.text}
            </div>
          ))}
        </div>
        <div className="select-box">
          {options.map((option) => (
            <div key={option.text} className="option">
              {option.bell ? (
                <div className={theme === 'light' ? 'bell light' : 'bell dark'}>
                  {option.allow ? (
                    <BsBellFill
                      className="BsBellFill"
                      onClick={() => disallow(option)}
                    />
                  ) : (
                    <BsBell className="BsBell" onClick={() => allow(option)} />
                  )}
                </div>
              ) : (
                ''
              )}
              <div onClick={() => select(option)}>{option.text}</div>
            </div>
          ))}
        </div>
      </div>
      <NoticeListDialog
        ref={noticeListDialogRef}
        siteId={selectedSite.id}
        site={selectedSite}
      />
      <Modal datas={modalData} isOpen={modal.isModalOpen} close={closeModal} />
    </>
  );
};

export default DialogLayout({ Page: ConfigDialog });
