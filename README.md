# express-simple

Шаблон для начала express-проекта с pug/scss.

## Быстрый старт

Проще всего с [degit](https://github.com/Rich-Harris/degit) делать копию:

```shell
npx degit boleeluchshiy/express-simple <projectName>
```

...перейти в папку...

```shell
cd <projectName>
```

...установить зависимости...

```shell
npm i
```

...запустить hot-компиляцию css...

```shell
npm run watch-css
```

...во 2-м окне терминала запустить сервер

```shell
npm run server
```

## TODO

Подмести scss.

## css/scss

css компилируется из scss отдельно (чтобы избавиться от проблем с путями, которые возникают при использовании express-sass-middleware, например)
