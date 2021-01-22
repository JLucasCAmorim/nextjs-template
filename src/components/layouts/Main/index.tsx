import React from 'react'
import Header from '../../shared/Header'

const MainLayout: React.FC = ({ children }) => {
  return (
    <div className="layout-container">
      <Header />
      <main className="cover">
        <div className="wrapper">{children}</div>
      </main>
    </div>
  )
}

export default MainLayout
