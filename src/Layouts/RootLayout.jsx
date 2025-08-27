import React from 'react'
import { Link, Outlet } from 'react-router'

function RootLayout() {
    return (
        <>
            <div>
                <Link to="/classes">Classes</Link> |
                <Link to="/students">Students</Link> |
                <Link to="/about">About</Link>
            </div>

            <Outlet />
        </>
    )
}

export default RootLayout