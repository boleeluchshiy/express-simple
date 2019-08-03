const config = require('./default')
const db = config.mongoURI
const mongoose = require('mongoose')

module.exports = () => {
   mongoose.connect(db, { useNewUrlParser: true }, err => {
      if (err) {
         console.log(`\n🐶  > Не могу подключиться к MongoDB: ${err.message}`)
         process.exit(1)
      }

      return console.log('\n', `🙋  > MongoDB подключена.`)
   })
}
