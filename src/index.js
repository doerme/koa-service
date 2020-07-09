/** @format */
import Koa from 'koa'
import route from 'koa-route'
import babelTransform from './api/v1/babeltransform'
import testCookies from './api/v1/testcookies'
var bodyParser = require('koa-bodyparser')

const app = new Koa()
app.use(bodyParser())
const mainEnter = ctx => {
    ctx.body = 'hello efox'
}

// response
app.use(route.get('/', mainEnter))
app.use(route.post('/babeltransform', babelTransform))
app.use(route.get('/babeltransform', babelTransform))
app.use(route.get('/testCookies', testCookies))

app.listen(3888)
