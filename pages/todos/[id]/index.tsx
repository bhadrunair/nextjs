import { GetServerSideProps } from 'next'
import React from 'react'
import { TodoType } from '../../todos'
import server from '../../../server'
import DiffLayout from '../../../components/DiffLayout'
import Link from 'next/link'

const index = ({todo}:{todo:TodoType}) => {
    console.log(todo);
    return (
        <div>
            <Link href='/todos'>Go Back</Link>
            <p>{todo.title}</p>
            <p>Has it been completed?</p>
            <p>{todo.completed ? 'Yes' : 'No'}</p>
        </div>
    )
}

export default index

export const getServerSideProps : GetServerSideProps = async ({query:{id}}) => {
    
    const res = await fetch(`${server}/api/todos/${id}`);
    const data = await res.json();

    return{
        props:{
            todo: data
        }
    }
}

index.getLayout = (index:React.ReactElement) => {
    return(
        <DiffLayout>
            {index}
        </DiffLayout>
    )
}
