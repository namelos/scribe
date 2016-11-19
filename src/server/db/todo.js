import {MongoClient} from 'mongodb'

const url = 'mongodb://localhost:27017/myproject'

export const todoRepository = new Promise((res, rej) =>
  MongoClient.connect(url, (err, db) => {
    if (err) rej(err)
    else res(db)
  })).then(db => db.collection('todo'))

