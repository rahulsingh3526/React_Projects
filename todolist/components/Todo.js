import React from 'react'

export default function Todo(props) {
  return (
    <div>
        <ul>
            { props.todo.map(item => <li>{item}</li>)}
        </ul>
    </div>
  )
}
