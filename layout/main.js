import BottomMenu from "../components/BottomMenu";
import "../styles/reset.scss";
import "../styles/global.scss";

const mainLayout = (Page) => {
  return () => (
    <div>
      <Page />
      <BottomMenu />
    </div>
  );
};

export default mainLayout;
