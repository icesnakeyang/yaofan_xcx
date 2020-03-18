import baseApi from './httpBase.js'

const host = 'http://localhost:8089'

/**
 * 用户注册
 */
function apiRegister(params) {
  let url = `${host}/api/user/register`
  return new Promise((resolve, reject) => {
    baseApi.post(url, params).then((res) => {
      resolve(res)
    }).catch((error) => {
      reject(error)
    })
  })
}

//用户登录
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

/**
 * 通过token登录
 */
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

/**
 * 修改用户姓名
 */
function apiUpdateUsername(params) {
  console.log('update')
  let url = `${host}/api/user/updateUsername`
  return new Promise((resolve, reject) => {
    baseApi.postToken(url, params).then((res) => {
      resolve(res)
    }).catch((error) => {
      reject(error)
    })
  })
}

function apiCreateTask(params) {
  let url = `${host}/api/task/createTask`
  return new Promise((resolve, reject) => {
    baseApi.postToken(url, params).then((res) => {
      resolve(res)
    }).catch((error) => {
      reject(error)
    })
  })
}

function apiListMyTasks(params) {
  let url = `${host}/api/task/listMyTasks`
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
  apiLoginByToken,
  apiRegister,
  apiUpdateUsername,
  apiCreateTask,
  apiListMyTasks
}