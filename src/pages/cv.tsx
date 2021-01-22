import React from 'react'
import Head from 'next/head'

import { Container } from '../styles/pages/Portifolios'
import BaseLayout from '../components/layouts'

const Cv: React.FC = () => {
  return (
    <BaseLayout>
      <Container>
        <Head>
          <title>Cv</title>
        </Head>

        <h1>Im Cv page</h1>
      </Container>
    </BaseLayout>
  )
}

export default Cv
