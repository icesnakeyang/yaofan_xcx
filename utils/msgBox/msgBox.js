function showMsg(msg) {
  if (msg === 10001) {
    return '抱歉！由于未知原因，您的操作失败了，请稍后再试。'
  }
  if (msg === 10002) {
    return '电话号码已经被其它用户使用了'
  }
  if (msg === 10003) {
    return '用户名或者密码错误'
  }
  if (msg === 20002){
    return '任务积分必须是整数'
  }
  if(msg===10006){
    return '团队名称已被使用'
  }
  if (msg === 10013){
    return '任务重复'
  }
  if (msg ===10007){
    return '您已经申请过该团队了，请等待团队管理员处理'
  }
  if(msg===10011){
    return '当前处理的申请已经被处理了'
  }
  if(msg===10012){
      return '您已经是该团队成员了，不用再申请了'
  }
}

module.exports = {
  showMsg
}