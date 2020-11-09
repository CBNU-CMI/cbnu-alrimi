import mainLayout from '../layout/main';
import MoreList from '../components/More/MoreList';
import '../styles/More/more.scss';

const More = () => {
  const listData = [
    '나의 알림',
    '만든이',
    '도움주신분',
    '연락처',
    '오픈소스',
    '비전',
  ];
  let list = listData.map((value, idx) => <MoreList name={value} idx={idx} key={idx} />);

  return <div className="more">{list}</div>;
};

export default mainLayout(More);
