import React from 'react'
import './header.css'

export const Header = () => {

    function refreshbutton() {
        window.location.reload(false);
      }

  return (
    <div className='header'>
        <div className='row'>
            <div className='col-1'>
                <h3>Tic Tac Toe</h3>
            </div>
            <div className='col-2'>
                <button className='reset-button' onClick={refreshbutton}>Reset</button>
            </div>
        </div>
    </div>
  )
}