// pages/team/applyTeam/applyTeam.js

import api from '../../../api/api.js'
import Notify from '../../../vant-weapp/notify/notify.js';
import MsgBox from '../../../utils/msgBox/msgBox.js'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    team: {},
    remark: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.loadAllData()
  },

  loadAllData() {
    const teamId = wx.getStorageSync('teamId')
    let params = {
      teamId
    }
    api.apiGetTeamByTeamId(params).then((res) => {
      this.setData({
        team: res.data.team
      })
    }).catch((error) => {
      wx.showToast({
        title: '读取团队信息失败',
        icon: 'none'
      })
    })
  },

  onEditorChange(e) {
    this.setData({
      remark: e.detail.html
    })
  },

  onApplyTeam() {
    if (!this.data.remark) {
      Notify('请描写申请说明');
      return
    }
    let params = {
      remark: this.data.remark,
      teamId: this.data.team.teamId
    }
    api.apiApplyTeam(params).then((res) => {
      wx.showToast({
          title: '保存成功'
      })
      wx.switchTab({
          url: '/pages/team/teamHome/teamHome',
      })
    }).catch((error) => {
        console.log(error)
      Notify(MsgBox.showMsg(error))
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})
