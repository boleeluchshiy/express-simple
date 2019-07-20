const config = require('config')

const connectDB = require('./config/db')
connectDB()

const express = require('express')
const server = express()
// const path = require('path')

// middleware
server.use(express.json({ extended: false }))
server.use(express.urlencoded({ extended: false }))

// engines
server.set('view engine', 'pug')

// static
server.use(express.static('public'))

//    routes
server.get('/', (req, res) => {
   return res.render('index', {
      title: 'Node simple',
   })
})
// api

const PORT = process.env.PORT || config.get('PORT')
server.listen(PORT, () => {
   return console.log(
      '\n',
      `🙋  > Сервер запущен: http://localhost:${PORT}`,
   )
})
