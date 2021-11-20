import React from 'react'
import Layout from '../components/Layout'

const about = () => {
    return (
        <div>
            <p>This is the about page.</p>
        </div>
    )
}

about.getLayout = (about:React.ReactElement) => {
    return(
    <Layout>
        {about}
    </Layout>
    )
}

export default about
