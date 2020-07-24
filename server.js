const express = require('express')
const nunjucks = require('nunjucks')
const methodOverride = require('method-override')
const routes = require('./routes')
const { urlencoded } = require('express')

const server = express()

server.use(urlencoded({
    extended: true
}))
server.use(methodOverride('_method'))
server.use(express.static('public'))
server.use(routes)

server.set('view engine', 'njk')

nunjucks.configure('views', {
    express: server,
    autoescape: false,
    noCache: true,
})

server.listen(5000)