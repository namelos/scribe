let todos = []

const genId = (_ => {
  let id = 0
  return _ => ++id
})()

export default {
  Query: {
    todo: (_, {id}) => todos.find(todo => todo.id === id),
    todos: _ => todos
  },
  Mutation: {
    addTodo: (_, {text}) => (todos.push({id: genId(), text}), true),
    deleteTodo: (_, {id}) => (todos = todos.filter(todo => todo.id !== id), true)
  }
}

