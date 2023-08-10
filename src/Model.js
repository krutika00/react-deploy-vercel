
import React, { Children } from 'react'
import ReactDOM from 'react-dom'
import './Modal.css'

function Modal({children}) {
  const modalRoot = document.getElementById('modal-root');

  return ReactDOM.createPortal(
    <div className='modal-overlay'>
        <div className='modal'>
            <div className='modal-content'>
                {children}
            </div>
        </div>
    </div>
  , modalRoot ,
  )
}


export default Modal