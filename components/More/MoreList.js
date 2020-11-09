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
      <AiOutlineRight
        style={{
          color: 'lightgray',
          float: 'right',
        }}
      />
    </div>
  );
};

export default MoreList;
