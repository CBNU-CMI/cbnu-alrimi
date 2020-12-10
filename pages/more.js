import { useContext } from 'react';
import mainLayout from '../layout/main';
import MoreList from '../components/More/MoreList';
import '../styles/More/more.scss';
import Layout from '../Layout';
import ThemeContext from '../context/theme';

const More = () => {
  const { theme } = useContext(ThemeContext);

  const listData = [
    '나의 알림',
    '만든이',
    '도움주신분',
    'Contact',
    'Review',
    '오픈소스',
    '버전',
  ];
  let list = listData.map((value, idx) => (
    <MoreList name={value} idx={idx} key={idx} />
  ));

  return (
    <Layout>
      <div className={theme === 'light' ? 'more-page light' : 'more-page dark'}>
        <div className="title">더보기</div>
        <div className="more">{list}</div>
      </div>
    </Layout>
  );
};

export default mainLayout(More);
