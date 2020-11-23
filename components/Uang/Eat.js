import className from 'classnames/bind';
import styles from '../../styles/Uang/uang.module.scss';

const cx = className.bind(styles);

export default function Empty() {
  return (
    <div className={cx('empty')}>
      <img src="/img/uang_eat.png" className={cx('empty-img')}></img>
      <div className={cx('info')}>
        <div>오늘은 메뉴가 없어요</div>
      </div>
    </div>
  );
}
