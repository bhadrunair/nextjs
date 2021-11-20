import { GetServerSideProps } from 'next'
import React from 'react'
import DiffLayout from '../components/DiffLayout'
import Link from 'next/link'

export interface PhotoType {
    albumId:      number;
    id:           number;
    title:        string;
    url:          string;
    thumbnailUrl: string;
}

interface PhotoBoi{
    photos: PhotoType[]
}

const photos = ({photos}:PhotoBoi) => {
    return (
        <div>
            {photos.map((photo,index) => {
                return (<details key={index}>
                    <summary>{photo.title}</summary>
                    <Link href={`/photos/${photo.id}`}>
                        <img src={photo.thumbnailUrl}/>
                    </Link>
                </details>
                )
            }
            )}
        </div>
    )
}

export const getServerSideProps: GetServerSideProps = async () => {
    const res = await fetch('http://jsonplaceholder.typicode.com/photos?_limit=5');
    const data = await res.json();

    return{
        props:{
            photos: data
        }
    }
}

photos.getLayout = (photos: React.ReactElement) => {
    return(
        <DiffLayout>
            {photos}
        </DiffLayout>
    )
}

export default photos
