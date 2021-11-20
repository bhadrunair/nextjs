import { GetStaticPaths, GetStaticProps } from 'next'
import React from 'react'
import { PostType } from '../..'
import Link from 'next/link'
import Layout from '../../../components/Layout'

const index = ({post}:{post:PostType}) => {
    return (
        <div>
            <details>
                <summary>{post.title}</summary>
                <p>{post.body}</p>
            </details>
            <Link href='/'>Go back to Home</Link>
        </div>
    )
}

export const getStaticProps: GetStaticProps = async ({params}) => {
    const {id} = params!;
    const res = await fetch(`http://jsonplaceholder.typicode.com/posts/${id}`);
    const data = await res.json();

    return{
        props:{
            post: data
        }
    }
}

export const getStaticPaths: GetStaticPaths = async () => {
    const res = await fetch('http://jsonplaceholder.typicode.com/posts');
    const data = await res.json();

    const paths = data.map((datapoint:PostType) => {
        return {params:{id:String(datapoint.id)}};
    })

    return{
        paths,
        fallback: false
    }

}

index.getLayout = (index:React.ReactElement) => {
    return(
        <Layout>
            {index}
        </Layout>
    )
}

export default index
