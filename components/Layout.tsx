import React from 'react'
import Link from 'next/link'
import layoutStyle from '../styles/Layout.module.css'

const Layout = ({children}:{children:React.ReactElement}) => {
    return (
        <div>
            <ul className={layoutStyle.navi}>
                <li><Link href='/about'>About</Link></li>
                <li><Link href='/'>Home</Link></li>
            </ul>
            {/* <p>This is Layout.</p> */}
            {children}
        </div>
    )
}

export default Layout
