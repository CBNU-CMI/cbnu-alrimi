import { AiOutlineNotification } from 'react-icons/ai';

const FloatingButton = ({ hide, onClick }) => {
  return (
    <div
      className={'floating-button ' + (hide ? 'hide' : '')}
      onClick={onClick}
    >
      <AiOutlineNotification />
    </div>
  );
};

export default FloatingButton;
