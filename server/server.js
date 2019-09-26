const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const favicon = require('serve-favicon')

const port = process.env.PORT || 3001

const app = express()
app.use(cookieParser())
app.use(favicon(path.join(__dirname, '/../public/img/favicon.ico')))
app.set('view engine', 'ejs')

app.use(express.static(path.join(__dirname, '/../public')))
app.use('/static', express.static(path.join(__dirname, '/../public')))
app.use('/static', express.static(path.join(__dirname, '/../public/storybook/static')))

app.use('/storybook', (_, res, next) =>
  process.env.ALLOW_STORYBOOK
    ? res.sendFile(path.join(__dirname, '/../public/storybook/index.html'))
    : next()

app.use('/iframe.html', (_, res, next) =>
  process.env.ALLOW_STORYBOOK
    ? res.sendFile(path.join(__dirname, '/../public/storybook/iframe.html'))
    : next()

app.use('*', (_, res) => res.render('pages/index'))

app.get('*', (_, res) => {
  res.sendFile('/../public/index.html')
})

app.listen(port, () => {
  process.env.NODE_ENV !== 'production' &&
    console.log(`View http://localhost:${port} to check it out!`)
})
