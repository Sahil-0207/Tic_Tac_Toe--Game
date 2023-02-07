import React from 'react'
import { Code } from './code'
import './board.css'

export const Board = ({ board, onClick }) => {
  function refreshbutton() {
    window.location.reload(false);
  }
  return (<>
    <div className='board'>
      {board.map((value, idx) => {
        return <Code value={value} onClick={() => value === null && onClick(idx)} />
      })}
    </div>
    <div className='button'>
    <button className='reset-button' onClick={refreshbutton}>Reset</button>
  </div></>
  )
} 