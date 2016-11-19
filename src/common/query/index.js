import gql from 'graphql-tag'

export const todos = gql`
  query {
    todos {
      id
      text
    }
  }
`

export const addTodo = gql`
  mutation addTodo($text: String) {
    addTodo(text: $text)
  }
`

export const deleteTodo = gql`
  mutation deleteTodo($id: Int) {
    deleteTodo(id: $id)
  }
`
