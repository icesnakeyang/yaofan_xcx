function isLogin(){
  let token = wx.getStorageSync('yaofan_token')
  console.log(token)
  if(token){
    console.log(1)
    return true
  }else{
    console.log(2)
    return false
  }
}

module.exports={
  isLogin
}