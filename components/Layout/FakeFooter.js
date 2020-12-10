import { useContext } from 'react';
import '../../styles/Layout/fakefooter.scss';
import ThemeContext from '../../context/theme';

const FakeFooter = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className={theme === 'light' ? 'fakefooter light' : 'fakefooter dark'}
    />
  );
};

export default FakeFooter;
