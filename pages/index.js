import { useSelector } from 'react-redux';
import mainLayout from '../layout/main';
import { NoticeSelector, NoticeListBySiteId } from '../components/Notice';

const Index = () => {
  const selected = useSelector((state) => {
    return state.noticeSelect;
  });

  return (
    <div className="notice-page">
      <NoticeSelector />
      <div className="selector-height"></div>
      <NoticeListBySiteId siteId={selected} category />
    </div>
  );
};

export default mainLayout(Index);
