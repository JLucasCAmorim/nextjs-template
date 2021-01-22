import React from 'react'
import Head from 'next/head'

import { Container } from '../styles/pages/Portifolios'
import BaseLayout from '../components/layouts'
import { GetServerSideProps } from 'next'
import Link from 'next/link'

interface IPost {
  userId: number
  id: number
  title: string
  body: string
}

interface PortfoliosProps {
  posts: IPost[]
}

const Portfolios: React.FC<PortfoliosProps> = ({ posts }: PortfoliosProps) => {
  const renderPosts = (posts: IPost[]) => {
    return posts.map(post => (
      <li key={post.id}>
        <Link href={`/portfolios/${post.id}`}>
          <a>{post.title}</a>
        </Link>
      </li>
    ))
  }

  return (
    <BaseLayout>
      <Container>
        <Head>
          <title>Portifolio</title>
        </Head>

        <h1>Im Portifolio page</h1>

        <ul>{renderPosts(posts)}</ul>
      </Container>
    </BaseLayout>
  )
}

export const getServerSideProps: GetServerSideProps<PortfoliosProps> = async () => {
  const response = await fetch('http://jsonplaceholder.typicode.com/posts')
  const posts = await response.json()
  return {
    props: {
      posts: posts.slice(0, 10),
    },
  }
}

export default Portfolios
