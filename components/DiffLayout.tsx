import React from 'react'
import Link from 'next/link'
import diffStyles from '../styles/DiffLayout.module.css'

const DiffLayout = ({children}:{children:React.ReactElement}) => {
    return (
        <div>
            <ul className={diffStyles.navi}>
                <li><Link href='/'>Home</Link></li>
                <li><Link href='/about'>About</Link></li>
            </ul>
            {/* <p>This is DiffLayout.</p> */}
            {children}
        </div>
    )
}

export default DiffLayout
