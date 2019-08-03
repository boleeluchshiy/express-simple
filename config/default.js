module.exports = {
   ROOT: '', //корень проекта
   VIEWS_DIR: '', //папка шаблонов
   //server
   PORT: 5000,
   //db
   mongoURI:
      'mongodb+srv://bl:bl123@devconnector-xoxlp.mongodb.net/test?retryWrites=true&w=majority',
   //mw
   session: {
      secret: 'keyboard kitten',
      resave: true,
      saveUninitialized: true,
   },
   //user
}
