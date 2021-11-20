import { GetServerSideProps } from 'next'
import React from 'react'
import Link from 'next/link'
import DiffLayout from '../components/DiffLayout'
import server from '../server'

export interface TodoType {
    userId:    number;
    id:        number;
    title:     string;
    completed: boolean;
}

interface Todoboi{
    todos: TodoType[]
}

const todos = ({todos}:Todoboi) => {
    return (
        <div>
            {todos.map((todo, index) => {
                return(<div key={index}>
                <p>{todo.title}</p>
                <Link href={`/todos/${todo.id}`}>Check out the Todo</Link>
                </div>)
            })}
        </div>
    )
}

export default todos

export const getServerSideProps : GetServerSideProps = async () => {
    const res = await fetch(`${server}/api/todos`);
    const data = await res.json();

    return{
        props:{
            todos: data
        }
    }
}

todos.getLayout = (todos:React.ReactElement) => {
    return(
        <DiffLayout>
            {todos}
        </DiffLayout>
    )
}
