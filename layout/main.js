import "../styles/reset.scss";
import "../styles/global.scss";

const mainLayout = (Page) => {
  return () => (
    <div>
      <Page />
    </div>
  );
};

export default mainLayout;
