/** @format */
const babel = require('@babel/core')
const fs = require('fs')
const filename = './tsdir/temp.ts'

const enterCode2 = `function getAppVersion(sdk: string, params: string, callback: string): void {
    sdk?.base?.getAppVersion()
    .then((obj) => {
      console.log('获取hago客户端版本', obj)
      callback(obj.appVersion || '')
    })
    .catch((err) => {
      console.log('获取hago客户端版本错误', err)
    })
  }`

const babelTransform = ctx => {
    fs.writeFileSync(filename, enterCode2)
    const result = babel.transform(enterCode2, {
        filename: filename,
        presets: ['@babel/preset-typescript'],
    })
    ctx.body = result.code
}

export default babelTransform
