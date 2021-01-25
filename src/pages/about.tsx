import React from 'react'
import Head from 'next/head'

import { Container } from '../styles/pages/Portifolios'

const About: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>About</title>
      </Head>

      <h1>Im About page</h1>
    </Container>
  )
}

export default About
