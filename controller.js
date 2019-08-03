exports.index = async (req, res) => {
   content = { title: 'Привет, express-simple!' }

   res.render('index', content)
}

exports.samplePage = async (req, res) => {
   content = { title: 'Пример-страница' }
   res.render('sample', content)
   // res.send('sample')
}
