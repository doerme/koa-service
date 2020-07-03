/** @format */

const testCookies = ctx => {
    const n = Number(ctx.cookies.get('view') || 0) + 1
    ctx.cookies.set('view', n)
    ctx.body = `${n}views`
}

export default testCookies
