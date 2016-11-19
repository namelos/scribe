const client = require('mongodb').MongoClient

const url = 'mongodb://localhost:27017/myproject'

client.connect(url, (err, db) => {
  if (err) {
    console.log(err)
  } {
    console.log('succ')
    db.close()
  }
})