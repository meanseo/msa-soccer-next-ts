import { Layout } from "common"
import {wrapper} from '../redux/store'

const App = ({Component, pageProps}) => {
  return (
    <Layout>
      <Component {...pageProps}/>
    </Layout>)
}
export default wrapper.withRedux(App)
// 깃 브랜치