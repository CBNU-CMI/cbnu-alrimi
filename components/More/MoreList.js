import { AiOutlineRight } from 'react-icons/ai';

const MoreList = (props) => {
  const listDataEng = [
    'alram',
    'developer',
    'helper',
    'contact',
    'opensource',
    'version',
  ];
  return (
    <div className={listDataEng[props.idx]}>
      {props.name}
      <AiOutlineRight />
    </div>
  );
};

export default MoreList;
