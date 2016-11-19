const genId = (_ => {
  let id = 0
  return _ => ++id
})()

import {todoRepository} from '../../../server/db/todo'

export default {
  Query: {
    todos: _ => todoRepository.then(collection =>
      new Promise((res, rej) =>
        collection.find({}).toArray((err, todos) => {
          if (err) rej(err)
          else res(todos)
        }))
    ),
    todo: (_, {id}) => todoRepository.then(collection =>
      new Promise((res, rej) =>
        collection.find({id}, (err, todo) => {
            if (err) rej(err)
            else res(todo)
        })
      ))
  },
  Mutation: {
    addTodo: (_, {text}) => todoRepository.then(collection =>
      collection.insert({id: genId(), text})),
    deleteTodo: (_, {id}) => todoRepository.then(collection =>
      collection.remove({id}))
  }
}
