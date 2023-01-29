import React from 'react'
import './code.css'

export const Code = ({ value, onClick })=> {
  const style = value === "X" ? "code x" : "code o";
  return (
    <button className={style} onClick={onClick}> {value} </button>
  )
}