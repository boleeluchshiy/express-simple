//    db
const connectDB = require('./config/connectDB')()

const path = require('path')
const config = require('./config/default')
const express = require('express')
const server = express()

//    Middleware functions
server.use(express.json())
server.use(express.urlencoded({ extended: false }))

// session
const session = require('express-session')
server.use(session(config.session))

// flash
const flash = require('connect-flash')
server.use(flash())

// root
// const ROOT = config.ROOT || __dirname

// static
// const STATIC_DIR = config.STATIC_DIR
//    ? path.join(ROOT, config.STATIC_DIR)
//    : path.join(ROOT, 'public')
// server.use(express.static(STATIC_DIR))
server.use(express.static(path.join(__dirname, 'public')))

//    Template engine
server.set('view engine', 'pug')
//Т.к. перенесли globals в /mw
config.VIEWS_DIR = path.join(__dirname, 'views')

//    Globals
server.use(require('./mw/globals'))

//    expressServer
const PORT = process.env.PORT || config.PORT
const expressServer = server.listen(PORT, () =>
   console.log(`\n🙋  > http://localhost:${PORT}/`),
)

//    socket.io

//    urls
server.use(require('./router'))
