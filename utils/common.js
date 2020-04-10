import api from '../api/api.js'

function isLogin(){
  let token = wx.getStorageSync('yaofan_token')
  if(token){
    return true
  }else{
    return false
  }
}

function apiLogin(params){
    wx.login({
        success: res => {
            // 发送 res.code 到后台换取 openId, sessionKey, unionId
            wx.getUserInfo({
                success: infoRes => {
                    let params={
                        encryptedData: infoRes.encryptedData,
                        iv:infoRes.iv,
                        code:res.code
                    }
                    //从后台登录当前微信用户，如果没有注册，就直接注册一个用户
                    api.apiWxLogin(params).then((res) => {
                        console.log(res)
                        console.log(infoRes.userInfo.avatarUrl)
                        if(res.data.userInfo.token){
                            wx.setStorageSync('yaofan_token', res.data.userInfo.token)
                            wx.setStorageSync('wxavatarurl', infoRes.userInfo.avatarUrl)
                            wx.showToast({
                                title: '微信用户登录成功',
                                icon:'none'
                            })
                        }else{
                            wx.showToast({
                                title: '微信用户登录失败',
                                icon:'none'
                            })
                        }
                    }).catch((error) => {
                    })
                },
                fail: err => {
                    wx.navigateTo({
                        url: '/pages/legacy/wxLogin/wxLogin'
                    })
                }
            })
        }
    })
}

module.exports={
  isLogin,
    apiLogin
}
