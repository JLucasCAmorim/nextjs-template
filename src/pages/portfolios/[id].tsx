import { GetServerSideProps } from 'next'
import React from 'react'

interface IPost {
  userId: number
  id: number
  title: string
  body: string
}

interface PortfolioProps {
  post: IPost
}

const Portfolio: React.FC<PortfolioProps> = ({ post }: PortfolioProps) => {
  return (
    <>
      <h1>Title: {post.title}</h1>
      <p>Body: {post.body}</p>
    </>
  )
}

export const getServerSideProps: GetServerSideProps<PortfolioProps> = async ({
  params,
}) => {
  const response = await fetch(
    `http://jsonplaceholder.typicode.com/posts/${params.id}`
  )
  const post = await response.json()
  return {
    props: {
      post,
    },
  }
}

export default Portfolio
