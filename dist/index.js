"use strict";

var _koa = _interopRequireDefault(require("koa"));

var _koaRoute = _interopRequireDefault(require("koa-route"));

var _babeltransform = _interopRequireDefault(require("./api/v1/babeltransform"));

var _testcookies = _interopRequireDefault(require("./api/v1/testcookies"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** @format */
var bodyParser = require('koa-bodyparser');

const app = new _koa.default();
app.use(bodyParser());

const mainEnter = ctx => {
  ctx.body = 'hello efox';
}; // response


app.use(_koaRoute.default.get('/', mainEnter));
app.use(_koaRoute.default.post('/babeltransform', _babeltransform.default));
app.use(_koaRoute.default.get('/babeltransform', _babeltransform.default));
app.use(_koaRoute.default.get('/testCookies', _testcookies.default));
app.listen(3888);