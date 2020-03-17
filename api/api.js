import baseApi from './httpBase.js'

const host = 'http://localhost:8089'

//请求服务端的登录接口
function apiLogin(params) {
    let url = `${host}/api/user/login`
    return new Promise((resolve, reject) => {
        baseApi.postToken(url, params).then((res) => {
            resolve(res)
        }).catch((error) => {
            reject(error)
        })
    })
}

function apiLoginByToken(params) {
    let url = `${host}/api/user/loginByToken`
    return new Promise((resolve, reject) => {
        baseApi.postToken(url, params).then((res) => {
            resolve(res)
        }).catch((error) => {
            reject(error)
        })
    })
}

module.exports = {
    apiLogin,
    apiLoginByToken
}