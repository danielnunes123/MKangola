import React from 'react'

export default function Conteiner(props) {
  return (
    <div id='container'>
      {props.children}
    </div>
  )
}