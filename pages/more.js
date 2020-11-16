import mainLayout from '../layout/main';
import MoreList from '../components/More/MoreList';
import '../styles/More/more.scss';

const More = () => {
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
    <div className="more-page">
      <div className="title">더보기</div>
      <div className="more">{list}</div>
    </div>
  );
};

export default mainLayout(More);
