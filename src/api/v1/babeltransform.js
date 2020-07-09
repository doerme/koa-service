/** @format */
const babel = require('@babel/core')
const fs = require('fs')
const filename = './tsdir/temp.ts'

const dealCodeenterCode2 = `function getAppVersion(sdk: string, params: string, callback: string): void {
    sdk?.base?.getAppVersion()
    .then((obj) => {
      console.log('获取hago客户端版本', obj)
      callback(obj.appVersion || '')
    })
    .catch((err) => {
      console.log('获取hago客户端版本错误', err)
    })
  }`

const babelTransform = async ctx => {
    console.log('##2## ctx postData', ctx.request.body)
    if (ctx.request.body.transformdata) {
        const dealCode = ctx.request.body.transformdata
        fs.writeFileSync(filename, dealCode)
        const result = babel.transform(dealCode, {
            filename: filename,
            presets: ['@babel/preset-typescript'],
        })
        ctx.body = {
            code: 0,
            data: {
                code: result.code,
            },
        }
    }
}

export default babelTransform
