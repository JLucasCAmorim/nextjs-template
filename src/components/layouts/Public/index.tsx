import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import { Container } from 'reactstrap'

const PublicLayout: React.FC = ({ children }) => {
  return (
    <>
      <Header />
      <div className="layout-container">
        <main className="cover">
          <Container>{children}</Container>
        </main>
      </div>
      <Footer />
    </>
  )
}

export default PublicLayout
