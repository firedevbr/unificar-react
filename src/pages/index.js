import Layout from '~/components/layout'
import { ProtectRoute } from '../context/auth'

function Index() {
  return <Layout />
}

export default ProtectRoute(Index)
