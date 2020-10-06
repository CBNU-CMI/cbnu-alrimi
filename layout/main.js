import Head from 'next/head'
import BottomMenu from '../components/Layout/BottomMenu'
import FakeFooter from '../components/Layout/FakeFooter'

import '../styles/Layout/reset.scss'
import '../styles/Layout/global.scss'

const mainLayout = (Page) => {
  const style = {
    background: '#fafafa',
  }

  return () => (
    <div>
      <Head>
        <title>충림이</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <script src="/flutter.js" />
      </Head>
      <Page stlye={style} />
      <FakeFooter />
      <BottomMenu />
    </div>
  )
}

export default mainLayout
