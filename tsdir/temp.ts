function getAppVersion(sdk: string, params: string, callback: string): void {
    sdk?.base?.getAppVersion()
    .then((obj) => {
      console.log('获取hago客户端版本', obj)
      callback(obj.appVersion || '')
    })
    .catch((err) => {
      console.log('获取hago客户端版本错误', err)
    })
  }