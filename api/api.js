import baseApi from './httpBase.js'

const host = 'http://localhost:8089'
// const host = 'http://192.168.1.247:8089'

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

function apiListMyTasksTiny(params) {
    const url = `${host}/api/task/listMyTasks`
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

function apiQuitTeam(params) {
    const url = `${host}/api/team/quitTeam`
    return new Promise((resolve, reject) => {
        baseApi.postToken(url, params).then((res) => {
            resolve(res)
        }).catch((error) => {
            reject(error)
        })
    })
}

function apiListTeamQuitLogApply(params) {
    const url = `${host}/api/team/listTeamQuitLogApply`
    return new Promise((resolve, reject) => {
        baseApi.postToken(url, params).then((res) => {
            resolve(res)
        }).catch((error) => {
            reject(error)
        })
    })
}


function apiListTeamQuitLogProcess(params) {
    const url = `${host}/api/team/listTeamQuitLogProcess`
    return new Promise((resolve, reject) => {
        baseApi.postToken(url, params).then((res) => {
            resolve(res)
        }).catch((error) => {
            reject(error)
        })
    })
}

function apiGetTeamQuitLog(params) {
    const url = `${host}/api/team/getTeamQuitLog`
    return new Promise((resolve, reject) => {
        baseApi.postToken(url, params).then((res) => {
            resolve(res)
        }).catch((error) => {
            reject(error)
        })
    })
}

function apiCancelTeamQuitLog(params) {
    const url = `${host}/api/team/cancelTeamQuitLog`
    return new Promise((resolve, reject) => {
        baseApi.postToken(url, params).then((res) => {
            resolve(res)
        }).catch((error) => {
            reject(error)
        })
    })
}

function apiCreateTaskLog(params) {
    const url = `${host}/api/tasklog/createTaskLog`
    return new Promise((resolve, reject) => {
        baseApi.postToken(url, params).then((res) => {
            resolve(res)
        }).catch((error) => {
            reject(error)
        })
    })
}

function apiListTaskLog(params) {
    const url = `${host}/api/tasklog/listTaskLog`
    return new Promise((resolve, reject) => {
        baseApi.postToken(url, params).then((res) => {
            resolve(res)
        }).catch((error) => {
            reject(error)
        })
    })
}

function apiListMyPartyATasksDetail(params) {
    const url = `${host}/api/task/listMyPartyATasksDetail`
    return new Promise((resolve, reject) => {
        baseApi.postToken(url, params).then((res) => {
            resolve(res)
        }).catch((error) => {
            reject(error)
        })
    })
}

function apiListMyPartyBTasksDetail(params) {
    const url = `${host}/api/task/listMyPartyBTasksDetail`
    return new Promise((resolve, reject) => {
        baseApi.postToken(url, params).then((res) => {
            resolve(res)
        }).catch((error) => {
            reject(error)
        })
    })
}

function apiListTaskComplete(params) {
    const url = `${host}/api/complete/listTaskComplete`
    return new Promise((resolve, reject) => {
        baseApi.postToken(url, params).then((res) => {
            resolve(res)
        }).catch((error) => {
            reject(error)
        })
    })
}

function apiCreateComplete(params) {
    const url = `${host}/api/complete/createComplete`
    return new Promise((resolve, reject) => {
        baseApi.postToken(url, params).then((res) => {
            resolve(res)
        }).catch((error) => {
            reject(error)
        })
    })
}

function apiCancelComplete(params) {
    const url = `${host}/api/complete/cancelComplete`
    return new Promise((resolve, reject) => {
        baseApi.postToken(url, params).then((res) => {
            resolve(res)
        }).catch((error) => {
            reject(error)
        })
    })
}

function apiRejectComplete(params) {
    const url = `${host}/api/complete/rejectComplete`
    return new Promise((resolve, reject) => {
        baseApi.postToken(url, params).then((res) => {
            resolve(res)
        }).catch((error) => {
            reject(error)
        })
    })
}

function apiStopTask(params) {
    const url = `${host}/api/taskStop/stopTask`
    return new Promise((resolve, reject) => {
        baseApi.postToken(url, params).then((res) => {
            resolve(res)
        }).catch((error) => {
            reject(error)
        })
    })
}

function apiGetTaskStop(params) {
    const url = `${host}/api/taskStop/getTaskStop`
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
    apiGetTaskStop
}