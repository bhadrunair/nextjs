import { GetServerSideProps, GetServerSidePropsContext } from 'next'
import React from 'react'
import { PhotoType } from '../../photos'
import Link from 'next/link'
import DiffLayout from '../../../components/DiffLayout'

const index = ({photo}:{photo:PhotoType}) => {
    console.log(photo);
    return (
        <div>
            <Link href='/photos'>Go back to photos</Link>
            <details>
                <summary>{photo.title}</summary>
                <img src={photo.url} />
            </details>
        </div>
    )
}

export default index

export const getServerSideProps : GetServerSideProps = async ({query:{id}}) => {
    const res = await fetch(`http://jsonplaceholder.typicode.com/photos/${id}`);
    const data = await res.json();

    return{
        props:{
            photo: data
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


