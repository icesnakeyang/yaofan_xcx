import api from '../api/api.js'

function isLogin() {
    let token = wx.getStorageSync('yaofan_token')
    if (token) {
        return true
    } else {
        return false
    }
}

/**
 * 微信用户使用微信账号登录系统
 */
function apiLogin(params) {
    return new Promise((resolve, reject) => {
        wx.login({
            success: res => {
                // 发送 res.code 到后台换取 openId, sessionKey, unionId
                wx.getUserInfo({
                    success: infoRes => {
                        let phone=''
                        let os=''
                        try {
                            const res = wx.getSystemInfoSync()
                            console.log(res.model)
                            phone=res.model
                            console.log(res.pixelRatio)
                            console.log(res.windowWidth)
                            console.log(res.windowHeight)
                            console.log(res.language)
                            console.log(res.version)
                            console.log(res.platform)
                            os=res.platform
                        } catch (e) {
                            // Do something when catch error
                        }

                        let params = {
                            encryptedData: infoRes.encryptedData,
                            iv: infoRes.iv,
                            code: res.code,
                            phone,
                            os
                        }

                        console.log(params)

                        //从后台登录当前微信用户，如果没有注册，就直接注册一个用户
                        api.apiWxLogin(params).then((res) => {
                            if (res.data.userInfo.token) {

                                wx.setStorageSync('yaofan_token', res.data.userInfo.token)
                            //   wx.setStorageSync('yaofan_token', 'd325143f-9b50-4b25-b52d-05392dcc704e')

                                wx.setStorageSync('current_user_id', res.data.userInfo.userId)
                                wx.setStorageSync('wxavatarurl', infoRes.userInfo.avatarUrl)
                                resolve(true)
                            } else {
                                reject('没有获取到用户token')
                            }
                        }).catch((error) => {
                            reject(error)
                        })
                    },
                    fail: err => {
                        wx.navigateTo({
                            url: '/pages/legacy/wxLogin/wxLogin'
                        })
                    }
                })
            },
            fail:err=>{
                console.log(err)
            },
            complete:data=>{
                console.log(data)
            }
        })
    })
}

module.exports = {
    isLogin,
    apiLogin
}
