import Link from "next/link";
import "../styles/bottom-menu.scss";
import { useRouter } from "next/router";
import { AiOutlineNotification, AiOutlineCalendar } from "react-icons/ai";
import { BiRestaurant } from "react-icons/bi";
import { FiMoreHorizontal } from "react-icons/fi";

const BottomMenu = () => {
  const router = useRouter();

  return (
    <div className="bottom-menu">
      <div className="menu">
        <Link href="/notice">
          <div className={router.pathname === "/notice" ? "active" : null}>
            <div className="icon">
              <AiOutlineNotification />
            </div>
            <div className="title">공지사항</div>
          </div>
        </Link>
      </div>

      <div className="menu">
        <Link href="/schedule">
          <div className={router.pathname === "/schedule" ? "active" : null}>
            <div className="icon">
              <AiOutlineCalendar />
            </div>
            <div className="title">학사일정</div>
          </div>
        </Link>
      </div>
      <div className="menu">
        <Link href="/restaurant">
          <div className={router.pathname === "/restaurant" ? "active" : null}>
            <div className="icon">
              <BiRestaurant />
            </div>
            <div className="title">식당</div>
          </div>
        </Link>
      </div>
      <div className="menu">
        <Link href="/more">
          <div className={router.pathname === "/more" ? "active" : null}>
            <div className="icon">
              <FiMoreHorizontal />
            </div>
            <div className="title">더보기</div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default BottomMenu;
