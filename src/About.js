import React from 'react'

import { Link } from 'react-router-dom'

function About() {
  return (
    <div>
      <ul>
        <li >
            <Link to ='/about/abouthistory'>About History</Link>
        </li>
        <li>
        <Link to ='/about/aboutteam'>aboutteam</Link>
        </li>
        <li>
        <Link to ='/about/aboutapplication'>About application</Link>
        </li>
      </ul>
    </div>
  )
}

export default About