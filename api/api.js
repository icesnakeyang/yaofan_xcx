import baseApi from './httpBase.js'

const host = 'http://localhost:8089'

/**
 * 用户注册
 */
function apiRegister(params) {
    const url = `${host}/api/user/register`
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
    const url = `${host}/api/user/login`
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
    const url = `${host}/api/user/loginByToken`
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
    const url = `${host}/api/user/updateUsername`
    return new Promise((resolve, reject) => {
        baseApi.postToken(url, params).then((res) => {
            resolve(res)
        }).catch((error) => {
            reject(error)
        })
    })
}

function apiCreateTask(params) {
    const url = `${host}/api/task/createTask`
    return new Promise((resolve, reject) => {
        baseApi.postToken(url, params).then((res) => {
            resolve(res)
        }).catch((error) => {
            reject(error)
        })
    })
}

function apiListMyTasks(params) {
    const url = `${host}/api/task/listMyTasksDetail`
    return new Promise((resolve, reject) => {
        baseApi.postToken(url, params).then((res) => {
            resolve(res)
        }).catch((error) => {
            reject(error)
        })
    })
}

function apiGetTaskByTaskId(params) {
    const url = `${host}/api/task/getTaskByTaskId`
    return new Promise((resolve, reject) => {
        baseApi.postToken(url, params).then((res) => {
            resolve(res)
        }).catch((error) => {
            reject(error)
        })
    })
}

function apiGrab(params) {
    const url = `${host}/api/task/grab`
    return new Promise((resolve, reject) => {
        baseApi.postToken(url, params).then((res) => {
            resolve(res)
        }).catch((error) => {
            reject(error)
        })
    })
}

function apiCreateTeam(params) {
    const url = `${host}/api/team/createTeam`
    return new Promise((resolve, reject) => {
        baseApi.postToken(url, params).then((res) => {
            resolve(res)
        }).catch((error) => {
            reject(error)
        })
    })
}

function apiListMyTeam(params) {
    const url = `${host}/api/team/listMyTeam`
    return new Promise((resolve, reject) => {
        baseApi.postToken(url, params).then((res) => {
            resolve(res)
        }).catch((error) => {
            reject(error)
        })
    })
}

function apiGetTeamByTeamId(params) {
    const url = `${host}/api/team/getTeamByTeamId`
    return new Promise((resolve, reject) => {
        baseApi.postToken(url, params).then((res) => {
            resolve(res)
        }).catch((error) => {
            reject(error)
        })
    })
}

function apiUpdateMyTeam(params) {
    const url = `${host}/api/team/updateMyTeam`
    return new Promise((resolve, reject) => {
        baseApi.postToken(url, params).then((res) => {
            resolve(res)
        }).catch((error) => {
            reject(error)
        })
    })
}

function apiDeleteMyTeam(params) {
    const url = `${host}/api/team/deleteMyTeam`
    return new Promise((resolve, reject) => {
        baseApi.postToken(url, params).then((res) => {
            resolve(res)
        }).catch((error) => {
            reject(error)
        })
    })
}

function apiUpdateTask(params) {
    const url = `${host}/api/task/updateTask`
    return new Promise((resolve, reject) => {
        baseApi.postToken(url, params).then((res) => {
            resolve(res)
        }).catch((error) => {
            reject(error)
        })
    })
}

function apiListTaskGrabbingTeam(params) {
    const url = `${host}/api/task/listTaskGrabbingTeam`
    return new Promise((resolve, reject) => {
        baseApi.postToken(url, params).then((res) => {
            resolve(res)
        }).catch((error) => {
            reject(error)
        })
    })
}

function apiSearchTeam(params) {
    const url = `${host}/api/team/searchTeam`
    return new Promise((resolve, reject) => {
        baseApi.postToken(url, params).then((res) => {
            resolve(res)
        }).catch((error) => {
            reject(error)
        })
    })
}

function apiApplyTeam(params) {
    const url = `${host}/api/team/applyTeam`
    return new Promise((resolve, reject) => {
        baseApi.postToken(url, params).then((res) => {
            resolve(res)
        }).catch((error) => {
            reject(error)
        })
    })
}

function apiTotalMyTeamLogUnread(params) {
    const url = `${host}/api/team/totalMyTeamLogUnread`
    return new Promise((resolve, reject) => {
        baseApi.postToken(url, params).then((res) => {
            resolve(res)
        }).catch((error) => {
            reject(error)
        })
    })
}

function apiListTeamApplyLogMyApply(params) {
    const url = `${host}/api/team/listTeamApplyLogMyApply`
    return new Promise((resolve, reject) => {
        baseApi.postToken(url, params).then((res) => {
            resolve(res)
        }).catch((error) => {
            reject(error)
        })
    })
}

function apiListTeamApplyLogApplyUser(params) {
    const url = `${host}/api/team/listTeamApplyLogApplyUser`
    return new Promise((resolve, reject) => {
        baseApi.postToken(url, params).then((res) => {
            resolve(res)
        }).catch((error) => {
            reject(error)
        })
    })
}

function apiRejectApplyTeam(params) {
    const url = `${host}/api/team/rejectApplyTeam`
    return new Promise((resolve, reject) => {
        baseApi.postToken(url, params).then((res) => {
            resolve(res)
        }).catch((error) => {
            reject(error)
        })
    })
}

function apiAgreeApplyTeam(params) {
    const url = `${host}/api/team/agreeApplyTeam`
    return new Promise((resolve, reject) => {
        baseApi.postToken(url, params).then((res) => {
            resolve(res)
        }).catch((error) => {
            reject(error)
        })
    })
}

function apiCancelTeamApplyLog(params) {
    const url = `${host}/api/team/cancelTeamApplyLog`
    return new Promise((resolve, reject) => {
        baseApi.postToken(url, params).then((res) => {
            resolve(res)
        }).catch((error) => {
            reject(error)
        })
    })
}

function apiGetTeamApplyLog(params) {
    const url = `${host}/api/team/getTeamApplyLog`
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
    apiTotalMyTeamLogUnread,
    apiListTeamApplyLogMyApply,
    apiListTeamApplyLogApplyUser,
    apiRejectApplyTeam,
    apiAgreeApplyTeam,
    apiGetTeamApplyLog,
    apiCancelTeamApplyLog
}