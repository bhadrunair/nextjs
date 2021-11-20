import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import DiffLayout from '../components/DiffLayout'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export interface PostType {
  userId: number;
  id:     number;
  title:  string;
  body:   string;
}

interface Postboi{
  posts: PostType[]
}


const Home = ({posts}:Postboi) => {
  console.log(posts);
  return (
    <div className={styles.container}>
      <p>This is the home page.</p>
      <p><Link href='/photos'>Photos</Link></p>
      <p><Link href='/todos'>Todos</Link></p>
      {posts.map((post, index) => {
        return <div key={index}>
        <h1>{post.title}</h1>
        <p>{post.body}</p>
        <Link href={`/posts/${post.id}`}>Go to the post</Link>
        </div>
      })}
    </div>
  )
}

Home.getLayout = (Home:React.ReactElement) => {
  return(
  <DiffLayout>
    {Home}
  </DiffLayout>
  )
}

export default Home

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch('http://jsonplaceholder.typicode.com/posts?_limit=5');
  const data = await res.json();

  return{
    props:{
      posts:data
    }
  }
}


