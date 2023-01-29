import React from 'react'
import {Code} from './code'
import './board.css'

export const Board = ({board, onClick}) => {
  return (
    <div className='board'>
        {board.map((value, idx) => { 
            return <Code value={value} onClick={() =>  value === null && onClick(idx)} />
        })}
    </div>
  )
}