import React from 'react'

export const InputWithButton = ({ onClick, children }) => {
  let text
  return <div>
    <input type="text" onChange={e => text = e.target.value}/>
    <button onClick={_ => onClick(text)}>{children}</button>
  </div>
}
