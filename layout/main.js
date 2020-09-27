import Head from "next/head";
import BottomMenu from "../components/BottomMenu";
import "../styles/reset.scss";
import "../styles/global.scss";

const mainLayout = (Page) => {
  const style = {
    background: "#fafafa",
  };

  return () => (
    <div>
      <Head>
        <title>충림이</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <script src="/flutter.js" />
      </Head>
      <Page stlye={style} />
      <BottomMenu />
    </div>
  );
};

export default mainLayout;
