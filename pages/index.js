import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import mainLayout from '../layout/main';
import { inToken, setToken } from '../common/token';
import { NoticeSelector, NoticeListBySiteId } from '../components/Notice';
import Layout from '../Layout';
import { addUser } from '../api';

const Index = () => {
  const router = useRouter();

  const selected = useSelector((state) => {
    return state.noticeSelect;
  });

  useEffect(() => {
    if (!inToken()) {
      if (router.query.token) {
        const token = router.query.token;
        setToken(token);
        addUser(router.query.type);
        location.reload();
      }
    }
  }, [router.query.token]);

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
