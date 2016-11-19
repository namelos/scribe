import React from 'react'

export const Todos = ({ todos, ...props }) => <ul>
  { todos && todos.map((todo, i) => <li key={i}>
    <Todo {...todo} {...props} />
  </li>) }
</ul>

const Todo = ({ id, text, deleteTodo }) => <div>
  <span>{id}: {text}</span>
  <button onClick={_ => deleteTodo({ variables: {id} })}>x</button>
</div>
