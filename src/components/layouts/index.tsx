import React from 'react'
import MainLayout from './Main'

const Layouts = {
  main: MainLayout,
}

const BaseLayout: React.FC = ({ children }): JSX.Element => {
  // Layout Rendering
  const getLayout = () => {
    return 'main'
  }
  const Container = Layouts[getLayout()]
  const renderLayout = () => {
    // in other case render previously set layout
    return <Container>{children}</Container>
  }
  return renderLayout()
}

export default BaseLayout
