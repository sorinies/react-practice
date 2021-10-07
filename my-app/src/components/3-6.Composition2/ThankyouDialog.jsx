import React from 'react'
import Dialog from './Dialog'

export default function ThankyouDialog() {
  return (
    <Dialog 
    title={<h1 style={{color: 'red'}}>THANK YOU!!!</h1>} 
    msg="AWESOME!" 
    btnMsg={<button>NONO</button>}/>
  )
}
