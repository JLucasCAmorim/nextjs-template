import React from 'react'
import Head from 'next/head'

import { Container } from '../styles/pages/Portifolios'
import BaseLayout from '../components/layouts'

const Blogs: React.FC = () => {
  return (
    <BaseLayout>
      <Container>
        <Head>
          <title>Blogs</title>
        </Head>

        <h1>Im Blogs page</h1>
      </Container>
    </BaseLayout>
  )
}

export default Blogs
