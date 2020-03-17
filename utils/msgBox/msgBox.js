function showMsg(msg) {
  if(msg===10001){
    return '抱歉！由于未知原因，您的操作失败了，请稍后再试。'
  }
  if (msg === 10002) {
    return '电话号码已经被其它用户使用了'
  }
}

module.exports={
  showMsg
}