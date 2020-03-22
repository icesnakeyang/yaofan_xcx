function isLogin(){
  let token = wx.getStorageSync('yaofan_token')
  if(token){
    return true
  }else{
    return false
  }
}

module.exports={
  isLogin
}