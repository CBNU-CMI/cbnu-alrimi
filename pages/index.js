import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import mainLayout from '../layout/main';
import { inToken, setToken } from '../common/token';
import { NoticeSelector, NoticeListBySiteId } from '../components/Notice';
import Layout from '../Layout';
import { addUser, getSiteListCategory } from '../api';
import { UangEmpty } from '../components/Uang';

const Index = () => {
  const router = useRouter();
  const [isEmpty, setIsEmpty] = useState(false);
  const [update, setUpdate] = useState(0);

  const changeConfig = useSelector((state) => {
    return state.changeConfig;
  });

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

  useEffect(() => {
    getSiteListCategory().then((result) => {
      setIsEmpty(!result.data.length);
    });
  }, [update]);

  useEffect(() => {
    setUpdate(update + 1);
  }, [changeConfig]);

  return (
    <Layout>
      <div className="notice-page">
        <NoticeSelector />
        <div className="selector-height"></div>
        {isEmpty ? (
          <UangEmpty />
        ) : (
          <NoticeListBySiteId key={update} siteId={selected} category />
        )}
      </div>
    </Layout>
  );
};

export default mainLayout(Index);
