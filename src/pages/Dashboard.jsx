import React from 'react'
import { Link } from 'react-router'

function Dashboard() {
  return (
    <>
      <div className="bg-green-400 h-svh flex justify-center ">
        <div className="text-9xl text-white font-bold mt-40">
          <Link to="#">Nothing's Free</Link> <br />
          <Link to="#">Take Time</Link> <br />
          <Link to="#">No Shortcut</Link>
        </div>
      </div>
    </>
  )
}

export default Dashboard