import baseApi from './httpBase.js'

const host = 'http://localhost:8090'
// const host='https://gogorpg.com'
// const host = 'http://192.168.1.247:8089'

function apiWxLogin(params) {
    const url = `${host}/yaofanapi/wx/wxLogin`
    return new Promise((resolve, reject) => {
        baseApi.post(url, params).then((res) => {
            resolve(res)
        }).catch((error) => {
            reject(error)
        })
    })
}

/**
 * 用户注册
 */
function apiRegister(params) {
    const url = `${host}/yaofanapi/user/register`
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
    const url = `${host}/yaofanapi/user/login`
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
    const url = `${host}/yaofanapi/user/loginByToken`
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
    const url = `${host}/yaofanapi/user/updateUsername`
    return new Promise((resolve, reject) => {
        baseApi.postToken(url, params).then((res) => {
            resolve(res)
        }).catch((error) => {
            reject(error)
        })
    })
}

function apiCreateTask(params) {
    const url = `${host}/yaofanapi/task/createTask`
    return new Promise((resolve, reject) => {
        baseApi.postToken(url, params).then((res) => {
            resolve(res)
        }).catch((error) => {
            reject(error)
        })
    })
}

function apiListMyTasks(params) {
    const url = `${host}/yaofanapi/task/listMyTasksDetail`
    return new Promise((resolve, reject) => {
        baseApi.postToken(url, params).then((res) => {
            resolve(res)
        }).catch((error) => {
            reject(error)
        })
    })
}

function apiListMyTasksTiny(params) {
    const url = `${host}/yaofanapi/task/listMyTasks`
    return new Promise((resolve, reject) => {
        baseApi.postToken(url, params).then((res) => {
            resolve(res)
        }).catch((error) => {
            reject(error)
        })
    })
}

function apiGetTaskByTaskId(params) {
    const url = `${host}/yaofanapi/task/getTaskByTaskId`
    return new Promise((resolve, reject) => {
        baseApi.postToken(url, params).then((res) => {
            resolve(res)
        }).catch((error) => {
            reject(error)
        })
    })
}

function apiGrab(params) {
    const url = `${host}/yaofanapi/task/grab`
    return new Promise((resolve, reject) => {
        baseApi.postToken(url, params).then((res) => {
            resolve(res)
        }).catch((error) => {
            reject(error)
        })
    })
}

function apiCreateTeam(params) {
    const url = `${host}/yaofanapi/team/createTeam`
    return new Promise((resolve, reject) => {
        baseApi.postToken(url, params).then((res) => {
            resolve(res)
        }).catch((error) => {
            reject(error)
        })
    })
}

function apiListMyTeam(params) {
    const url = `${host}/yaofanapi/team/listMyTeam`
    return new Promise((resolve, reject) => {
        baseApi.postToken(url, params).then((res) => {
            resolve(res)
        }).catch((error) => {
            reject(error)
        })
    })
}

function apiGetTeamByTeamId(params) {
    const url = `${host}/yaofanapi/team/getTeamByTeamId`
    return new Promise((resolve, reject) => {
        baseApi.postToken(url, params).then((res) => {
            resolve(res)
        }).catch((error) => {
            reject(error)
        })
    })
}

function apiUpdateMyTeam(params) {
    const url = `${host}/yaofanapi/team/updateMyTeam`
    return new Promise((resolve, reject) => {
        baseApi.postToken(url, params).then((res) => {
            resolve(res)
        }).catch((error) => {
            reject(error)
        })
    })
}

function apiDeleteMyTeam(params) {
    const url = `${host}/yaofanapi/team/deleteMyTeam`
    return new Promise((resolve, reject) => {
        baseApi.postToken(url, params).then((res) => {
            resolve(res)
        }).catch((error) => {
            reject(error)
        })
    })
}

function apiUpdateTask(params) {
    const url = `${host}/yaofanapi/task/updateTask`
    return new Promise((resolve, reject) => {
        baseApi.postToken(url, params).then((res) => {
            resolve(res)
        }).catch((error) => {
            reject(error)
        })
    })
}

function apiListTaskGrabbingTeam(params) {
    const url = `${host}/yaofanapi/task/listTaskGrabbingTeam`
    return new Promise((resolve, reject) => {
        baseApi.postToken(url, params).then((res) => {
            resolve(res)
        }).catch((error) => {
            reject(error)
        })
    })
}

function apiSearchTeam(params) {
    const url = `${host}/yaofanapi/team/searchTeam`
    return new Promise((resolve, reject) => {
        baseApi.postToken(url, params).then((res) => {
            resolve(res)
        }).catch((error) => {
            reject(error)
        })
    })
}

function apiApplyTeam(params) {
    const url = `${host}/yaofanapi/team/applyTeam`
    return new Promise((resolve, reject) => {
        baseApi.postToken(url, params).then((res) => {
            resolve(res)
        }).catch((error) => {
            reject(error)
        })
    })
}

function apiTotalMyTeamLog(params) {
    const url = `${host}/yaofanapi/team/totalMyTeamLog`
    return new Promise((resolve, reject) => {
        baseApi.postToken(url, params).then((res) => {
            resolve(res)
        }).catch((error) => {
            reject(error)
        })
    })
}

function apiListTeamApplyLogMyApply(params) {
    const url = `${host}/yaofanapi/team/listTeamApplyLogMyApply`
    return new Promise((resolve, reject) => {
        baseApi.postToken(url, params).then((res) => {
            resolve(res)
        }).catch((error) => {
            reject(error)
        })
    })
}

function apiListTeamApplyLogApplyUser(params) {
    const url = `${host}/yaofanapi/team/listTeamApplyLogApplyUser`
    return new Promise((resolve, reject) => {
        baseApi.postToken(url, params).then((res) => {
            resolve(res)
        }).catch((error) => {
            reject(error)
        })
    })
}

function apiRejectApplyTeam(params) {
    const url = `${host}/yaofanapi/team/rejectApplyTeam`
    return new Promise((resolve, reject) => {
        baseApi.postToken(url, params).then((res) => {
            resolve(res)
        }).catch((error) => {
            reject(error)
        })
    })
}

function apiAgreeApplyTeam(params) {
    const url = `${host}/yaofanapi/team/agreeApplyTeam`
    return new Promise((resolve, reject) => {
        baseApi.postToken(url, params).then((res) => {
            resolve(res)
        }).catch((error) => {
            reject(error)
        })
    })
}

function apiCancelTeamApplyLog(params) {
    const url = `${host}/yaofanapi/team/cancelTeamApplyLog`
    return new Promise((resolve, reject) => {
        baseApi.postToken(url, params).then((res) => {
            resolve(res)
        }).catch((error) => {
            reject(error)
        })
    })
}

function apiGetTeamApplyLog(params) {
    const url = `${host}/yaofanapi/team/getTeamApplyLog`
    return new Promise((resolve, reject) => {
        baseApi.postToken(url, params).then((res) => {
            resolve(res)
        }).catch((error) => {
            reject(error)
        })
    })
}

function apiQuitTeam(params) {
    const url = `${host}/yaofanapi/team/quitTeam`
    return new Promise((resolve, reject) => {
        baseApi.postToken(url, params).then((res) => {
            resolve(res)
        }).catch((error) => {
            reject(error)
        })
    })
}

function apiListTeamQuitLogApply(params) {
    const url = `${host}/yaofanapi/team/listTeamQuitLogApply`
    return new Promise((resolve, reject) => {
        baseApi.postToken(url, params).then((res) => {
            resolve(res)
        }).catch((error) => {
            reject(error)
        })
    })
}


function apiListTeamQuitLogProcess(params) {
    const url = `${host}/yaofanapi/team/listTeamQuitLogProcess`
    return new Promise((resolve, reject) => {
        baseApi.postToken(url, params).then((res) => {
            resolve(res)
        }).catch((error) => {
            reject(error)
        })
    })
}

function apiGetTeamQuitLog(params) {
    const url = `${host}/yaofanapi/team/getTeamQuitLog`
    return new Promise((resolve, reject) => {
        baseApi.postToken(url, params).then((res) => {
            resolve(res)
        }).catch((error) => {
            reject(error)
        })
    })
}

function apiCancelTeamQuitLog(params) {
    const url = `${host}/yaofanapi/team/cancelTeamQuitLog`
    return new Promise((resolve, reject) => {
        baseApi.postToken(url, params).then((res) => {
            resolve(res)
        }).catch((error) => {
            reject(error)
        })
    })
}

function apiCreateTaskLog(params) {
    const url = `${host}/yaofanapi/tasklog/createTaskLog`
    return new Promise((resolve, reject) => {
        baseApi.postToken(url, params).then((res) => {
            resolve(res)
        }).catch((error) => {
            reject(error)
        })
    })
}

function apiListTaskLog(params) {
    const url = `${host}/yaofanapi/tasklog/listTaskLog`
    return new Promise((resolve, reject) => {
        baseApi.postToken(url, params).then((res) => {
            resolve(res)
        }).catch((error) => {
            reject(error)
        })
    })
}

function apiListMyPartyATasksDetail(params) {
    const url = `${host}/yaofanapi/task/listMyPartyATasksDetail`
    return new Promise((resolve, reject) => {
        baseApi.postToken(url, params).then((res) => {
            resolve(res)
        }).catch((error) => {
            reject(error)
        })
    })
}

function apiListMyPartyBTasksDetail(params) {
    const url = `${host}/yaofanapi/task/listMyPartyBTasksDetail`
    return new Promise((resolve, reject) => {
        baseApi.postToken(url, params).then((res) => {
            resolve(res)
        }).catch((error) => {
            reject(error)
        })
    })
}

function apiListTaskComplete(params) {
    const url = `${host}/yaofanapi/complete/listTaskComplete`
    return new Promise((resolve, reject) => {
        baseApi.postToken(url, params).then((res) => {
            resolve(res)
        }).catch((error) => {
            reject(error)
        })
    })
}

function apiCreateComplete(params) {
    const url = `${host}/yaofanapi/complete/createComplete`
    return new Promise((resolve, reject) => {
        baseApi.postToken(url, params).then((res) => {
            resolve(res)
        }).catch((error) => {
            reject(error)
        })
    })
}

function apiCancelComplete(params) {
    const url = `${host}/yaofanapi/complete/cancelComplete`
    return new Promise((resolve, reject) => {
        baseApi.postToken(url, params).then((res) => {
            resolve(res)
        }).catch((error) => {
            reject(error)
        })
    })
}

function apiRejectComplete(params) {
    const url = `${host}/yaofanapi/complete/rejectComplete`
    return new Promise((resolve, reject) => {
        baseApi.postToken(url, params).then((res) => {
            resolve(res)
        }).catch((error) => {
            reject(error)
        })
    })
}

function apiStopTask(params) {
    const url = `${host}/yaofanapi/taskStop/stopTask`
    return new Promise((resolve, reject) => {
        baseApi.postToken(url, params).then((res) => {
            resolve(res)
        }).catch((error) => {
            reject(error)
        })
    })
}

function apiGetTaskStop(params) {
    const url = `${host}/yaofanapi/taskStop/getTaskStop`
    return new Promise((resolve, reject) => {
        baseApi.postToken(url, params).then((res) => {
            resolve(res)
        }).catch((error) => {
            reject(error)
        })
    })
}

function apiListMyPointLedger(params) {
    const url = `${host}/yaofanapi/point/listMyPointLedger`
    return new Promise((resolve, reject) => {
        baseApi.postToken(url, params).then((res) => {
            resolve(res)
        }).catch((error) => {
            reject(error)
        })
    })
}

function apiTotalUserPoint(params) {
    const url = `${host}/yaofanapi/point/totalUserPoint`
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
    apiTotalMyTeamLog,
    apiListTeamApplyLogMyApply,
    apiListTeamApplyLogApplyUser,
    apiRejectApplyTeam,
    apiAgreeApplyTeam,
    apiGetTeamApplyLog,
    apiCancelTeamApplyLog,
    apiQuitTeam,
    apiListTeamQuitLogApply,
    apiListTeamQuitLogProcess,
    apiGetTeamQuitLog,
    apiCancelTeamQuitLog,
    apiCreateTaskLog,
    apiListTaskLog,
    apiListMyPartyATasksDetail,
    apiListMyPartyBTasksDetail,
    apiListMyTasksTiny,
    apiListTaskComplete,
    apiCreateComplete,
    apiCancelComplete,
    apiRejectComplete,
    apiStopTask,
    apiGetTaskStop,
    apiListMyPointLedger,
    apiTotalUserPoint,
    apiWxLogin
}