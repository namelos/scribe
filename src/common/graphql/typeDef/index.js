export default `
  # the Todo type with an id and a text 
  type Todo {
    id: Int                     
    text: String
  }
  type Query {
    # Find a Todo with id
    todo(id: Int): Todo         
    # Find All todos
    todos: [Todo]               
  }
  type Mutation {
    # Add a new Todo with a content text
    addTodo(text: String): Boolean
    # Delete a todo with id
    deleteTodo(id: Int): Boolean
  } 
  # A Todo app with GraphQL and Apollo 
  schema {
    query: Query
    mutation: Mutation
  }
`
