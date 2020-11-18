import { useSelector } from 'react-redux';
import mainLayout from '../layout/main';
import { NoticeSelector, NoticeListBySiteId } from '../components/Notice';
import Layout from '../Layout';

const Index = () => {
  const selected = useSelector((state) => {
    return state.noticeSelect;
  });

  return (
    <Layout>
      <div className="notice-page">
        <NoticeSelector />
        <div className="selector-height"></div>
        <NoticeListBySiteId siteId={selected} category />
      </div>
    </Layout>
  );
};

export default mainLayout(Index);
