/** @format */

import babelTransform from './api/v1/babeltransform'
import testCookies from './api/v1/testcookies'

const Koa = require('koa')
const app = new Koa()
const route = require('koa-route')

const mainEnter = ctx => {
    ctx.body = 'hello efox'
}

// response
app.use(route.get('/', mainEnter))
app.use(route.get('/babeltransform', babelTransform))
app.use(route.get('/testCookies', testCookies))

app.listen(3888)
