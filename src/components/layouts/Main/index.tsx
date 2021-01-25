import React, { useRef } from 'react'
import { useRouter } from 'next/router'
import { Container } from 'reactstrap'

import routes from '~/utils/routes'
import Sidebar from './components/Sidebar'
import NavBar from './components/Nav'
import Footer from './components/Footer'

const MainLayout: React.FC = props => {
  // used for checking current route
  const router = useRouter()

  const mainContentRef = useRef(null)
  React.useEffect(() => {
    document.documentElement.scrollTop = 0
    document.scrollingElement.scrollTop = 0
    mainContentRef.current.scrollTop = 0
  }, [])

  const getBrandText = () => {
    for (let i = 0; i < routes.length; i++) {
      if (router.route.indexOf(routes[i].layout + routes[i].path) !== -1) {
        return routes[i].name
      }
    }
    return 'Brand'
  }
  return (
    <>
      <Sidebar
        {...props}
        routes={routes}
        logo={{
          innerLink: '/admin/dashboard',
          imgSrc: '/images/nextjs_argon_black.png',
          imgAlt: '...',
        }}
      />
      <div className="main-content" ref={mainContentRef}>
        <NavBar {...props} brandText={getBrandText()} />
        {props.children}
        <Container fluid>
          <Footer />
        </Container>
      </div>
    </>
  )
}

export default MainLayout
