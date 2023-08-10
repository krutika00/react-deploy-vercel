import React from 'react'
import { Link } from 'react-router-dom'

function login() {
  return (
    <div>
         <div>
            <label>username</label>
            <input type='text'></input>
            <br />
            <label>password</label>
            <input type='text'></input>
            <br />
            <button>Click me</button>
            <li>
              <Link to ='/login/registation'>Registation</Link>
            </li>
        </div>
    </div>
  )
}

export default login