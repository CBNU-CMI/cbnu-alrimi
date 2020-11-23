import className from 'classnames/bind';
import styles from '../../styles/Uang/uang.module.scss';

const cx = className.bind(styles);

export default function Empty() {
  return (
    <div className={cx('empty')}>
      <img src="/img/uang_empty.png" className={cx('empty-img')}></img>
      <div className={cx('info')}>
        <div>등록된 공지사항이 없습니다!</div>
        <div>우측 하단 빨간버튼을 클릭하여 공지사항을 등록해주세요</div>
      </div>
    </div>
  );
}
