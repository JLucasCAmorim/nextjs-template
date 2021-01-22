import React from 'react'
import Head from 'next/head'

import { Container } from '../styles/pages/Portifolios'
import BaseLayout from '../components/layouts'

const About: React.FC = () => {
  return (
    <BaseLayout>
      <Container>
        <Head>
          <title>About</title>
        </Head>

        <h1>Im About page</h1>
      </Container>
    </BaseLayout>
  )
}

export default About
