// pages/team/teamHistory/detail/teamHistoryDetail.js

import api from '../../../../api/api'
import tools from '../../../../utils/dateTools'
import Dialog from '../../../../vant-weapp/dialog/dialog';

Page({

  /**
   * 页面的初始数据
   */
  data: {
    isLoading: true,
    team: {},
    createTime: '',
    status: '',
    lastUpdateTime:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.loadAllData()
  },

  loadAllData() {
    const teamId = wx.getStorageSync('historyTeamId')
    if (!teamId) {
      wx.showToast({
        title: '读取团队信息失败',
        icon: 'none'
      })
      return
    }
    let params = {
      teamId
    }
    api.apiGetTeamByTeamId(params).then((res) => {
      console.log(res)
      let createTime = tools.momentTime(res.data.team.createTime, 'L')
      let status = ''
      if (res.data.team.status === 'DELETE') {
        status = '已删除'
      }else{
        if(res.data.team.status==='ACTIVE'){
          status='正常'
        }
      }
      let lastUpdateTime=''
      if(res.data.team.lastUpdateTime){
        lastUpdateTime=tools.momentTime(res.data.team.lastUpdateTime, 'L')
      }
      this.setData({
        team: res.data.team,
        isLoading: false,
        createTime,
        status,
        lastUpdateTime
      })
    }).catch((error) => {
      wx.showToast({
        title: '读取团队详情失败',
        icon: 'none'
      })
    })
  },

  onRollbackTeam(){
    const teamId=this.data.team.teamId

    Dialog.confirm({
      title: '恢复确认',
      message: '恢复后该团队会出现在日常团队任务中，确定要恢复吗？',
    })
      .then(() => {
        console.log('confirm')
        const params={
          teamId:this.data.team.teamId
        }
        console.log(params)
        api.apiRollbackTeam(params).then((res)=>{
          console.log(res)
          wx.showToast({
            title: '恢复成功'
          })
          wx.switchTab({
            url: '/pages/team/teamHome/teamHome',
          })
        }).catch((error)=>{
          wx.showToast({
            title: '恢复失败',
            icon:'none'
          })
        })
      })
      .catch(() => {
        console.log('cancel')
      });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})