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
  let url = `${host}/api/task/listMyTasksDetail`
  return new Promise((resolve, reject) => {
    baseApi.postToken(url, params).then((res) => {
      resolve(res)
    }).catch((error) => {
      reject(error)
    })
  })
}

function apiGetTaskByTaskId(params) {
  let url = `${host}/api/task/getTaskByTaskId`
  return new Promise((resolve, reject) => {
    baseApi.postToken(url, params).then((res) => {
      resolve(res)
    }).catch((error) => {
      reject(error)
    })
  })
}

function apiGrab(params) {
  let url = `${host}/api/task/grab`
  return new Promise((resolve, reject) => {
    baseApi.postToken(url, params).then((res) => {
      resolve(res)
    }).catch((error) => {
      reject(error)
    })
  })
}

function apiCreateTeam(params) {
  let url = `${host}/api/team/createTeam`
  return new Promise((resolve, reject) => {
    baseApi.postToken(url, params).then((res) => {
      resolve(res)
    }).catch((error) => {
      reject(error)
    })
  })
}

function apiListMyTeam(params) {
  let url = `${host}/api/team/listMyTeam`
  return new Promise((resolve, reject) => {
    baseApi.postToken(url, params).then((res) => {
      resolve(res)
    }).catch((error) => {
      reject(error)
    })
  })
}

function apiGetTeamByTeamId(params) {
  let url = `${host}/api/team/getTeamByTeamId`
  return new Promise((resolve, reject) => {
    baseApi.postToken(url, params).then((res) => {
      resolve(res)
    }).catch((error) => {
      reject(error)
    })
  })
}

function apiUpdateMyTeam(params) {
  let url = `${host}/api/team/updateMyTeam`
  return new Promise((resolve, reject) => {
    baseApi.postToken(url, params).then((res) => {
      resolve(res)
    }).catch((error) => {
      reject(error)
    })
  })
}

function apiDeleteMyTeam(params) {
  let url = `${host}/api/team/deleteMyTeam`
  return new Promise((resolve, reject) => {
    baseApi.postToken(url, params).then((res) => {
      resolve(res)
    }).catch((error) => {
      reject(error)
    })
  })
}

function apiUpdateTask(params) {
  let url = `${host}/api/task/updateTask`
  return new Promise((resolve, reject) => {
    baseApi.postToken(url, params).then((res) => {
      resolve(res)
    }).catch((error) => {
      reject(error)
    })
  })
}

function apiListTaskGrabbingTeam(params) {
  let url = `${host}/api/task/listTaskGrabbingTeam`
  return new Promise((resolve, reject) => {
    baseApi.postToken(url, params).then((res) => {
      resolve(res)
    }).catch((error) => {
      reject(error)
    })
  })
}

function apiSearchTeam(params) {
  let url = `${host}/api/team/searchTeam`
  return new Promise((resolve, reject) => {
    baseApi.postToken(url, params).then((res) => {
      resolve(res)
    }).catch((error) => {
      reject(error)
    })
  })
}

function apiApplyTeam(params) {
  let url = `${host}/api/team/applyTeam`
  return new Promise((resolve, reject) => {
    baseApi.postToken(url, params).then((res) => {
      resolve(res)
    }).catch((error) => {
      reject(error)
    })
  })
}

function apiTotalNewApplyMember(params) {
  let url = `${host}/api/team/totalNewApplyMember`
  return new Promise((resolve, reject) => {
    baseApi.postToken(url, params).then((res) => {
      resolve(res)
    }).catch((error) => {
      reject(error)
    })
  })
}

function apiListTeamApplyLogMyApply(params) {
  let url = `${host}/api/team/listTeamApplyLogMyApply`
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
  apiListMyTasks,
  apiGetTaskByTaskId,
  apiGrab,
  apiCreateTeam,
  apiListMyTeam,
  apiGetTeamByTeamId,
  apiUpdateMyTeam,
  apiDeleteMyTeam,
  apiUpdateTask,
  apiListTaskGrabbingTeam,
  apiSearchTeam,
  apiApplyTeam,
  apiTotalNewApplyMember,
  apiListTeamApplyLogMyApply
}