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
        console.log('login')
        wx.login({
            success: res => {
                console.log('login success')
                // 发送 res.code 到后台换取 openId, sessionKey, unionId
                wx.getUserInfo({
                    success: infoRes => {
                        console.log('get user info success')
                        let phone = ''
                        let os = ''
                        let avatarUrl = infoRes.userInfo.avatarUrl
                        try {
                            const res = wx.getSystemInfoSync()
                            phone = res.model
                            os = res.platform
                        } catch (e) {
                            // Do something when catch error
                        }

                        let params = {
                            encryptedData: infoRes.encryptedData,
                            iv: infoRes.iv,
                            code: res.code,
                            phone,
                            os,
                            avatarUrl
                        }

                        //从后台登录当前微信用户，如果没有注册，就直接注册一个用户
                        api.apiWxLogin(params).then((res) => {
                            if (res.data.userInfo.token) {

                                wx.setStorageSync('yaofan_token', res.data.userInfo.token)
                                //   wx.setStorageSync('yaofan_token', 'd325143f-9b50-4b25-b52d-05392dcc704e')

                                wx.setStorageSync('current_user_id', res.data.userInfo.userId)
                                wx.setStorageSync('wxavatarurl', infoRes.userInfo.avatarUrl)
                                wx.setStorageSync('isLogin', true)
                                resolve(true)
                            } else {
                                reject('没有获取到用户token')
                            }
                        }).catch((error) => {
                            reject(error)
                        })
                    },
                    fail: err => {
                        console.log('get user info fail')
                        // wx.navigateTo({
                        //     url: '/pages/legacy/wxLogin/wxLogin'
                        // })
                        //使用游客账号登录
                        wx.setStorageSync('yaofan_token', 'e9ecc769-ed28-4c9c-b2a6-2446c849db80')
                        wx.setStorageSync('current_user_id', 'c11b70e3-a15a-4bea-b663-4389bf7187c5')
                        wx.setStorageSync('isLogin', false)
                        resolve(true)
                    }
                })
            },
            fail: err => {
                console.log('login error')
                throw new Error(err)
            },
            complete: data => {}
        })
    })
}

module.exports = {
    isLogin,
    apiLogin
}