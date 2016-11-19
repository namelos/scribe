import React from 'react'
import { graphql } from 'react-apollo'
import { compose } from 'redux'
import { InputWithButton } from './InputWithButton'
import { Todos } from './Todos'
import { todos, addTodo, deleteTodo } from '../query'

const App = ({ data, addTodo, deleteTodo }) => {
  const refetch = mutation => param => mutation(param)
    .then(data.refetch)

  addTodo = refetch(addTodo)
  deleteTodo = refetch(deleteTodo)

  return <div>
    <p>Todos:</p>
    <Todos todos={data.todos} deleteTodo={deleteTodo} />
    <InputWithButton onClick={text => addTodo({ variables: {text} })}>
      AddTodo
    </InputWithButton>
  </div>
}

export default compose(
  graphql(todos),
  graphql(addTodo, { name: 'addTodo' }),
  graphql(deleteTodo, { name: 'deleteTodo' })
)(App)
