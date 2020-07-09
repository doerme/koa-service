"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/** @format */
const testCookies = ctx => {
  const n = Number(ctx.cookies.get('view') || 0) + 1;
  ctx.cookies.set('view', n);
  ctx.body = `${n}views`;
};

var _default = testCookies;
exports.default = _default;