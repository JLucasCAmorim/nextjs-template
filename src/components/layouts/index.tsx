import { useRouter } from 'next/router'
import React from 'react'
import PublicLayout from './Public'
import MainLayout from './Main'

const Layouts = {
  public: PublicLayout,
  main: MainLayout,
}

const BaseLayout: React.FC = ({ children }): JSX.Element => {
  const router = useRouter()
  // Layout Rendering
  const getLayout = () => {
    if (router.pathname === '/') {
      return 'public'
    }
    return 'main'
  }
  const Layout = Layouts[getLayout()]
  const renderLayout = () => {
    if (router.pathname === '/login') {
      return <>{children}</>
    }
    // in other case render previously set layout
    return <Layout>{children}</Layout>
  }
  return renderLayout()
}

export default BaseLayout
