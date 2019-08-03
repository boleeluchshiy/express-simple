const config = require('../config/default')

module.exports = (req, res, next) => {
   // flash
   res.locals.success_msg = req.flash('success_msg')
   res.locals.error_msg = req.flash('error_msg')

   // passport
   res.locals.error = req.flash('error')
   res.locals.user = req.user || null

   // pug
   res.locals.basedir = config.VIEWS_DIR
   res.locals.url = req.url // где сейчас находимся (для ссылок в навигации)

   // other
   req.session.tmp = 'Тестовая штучка'

   next()
}
