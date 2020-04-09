// pages/team/quitTeam/quitTeam.js

import api from '../../../api/api.js'
import Dialog from '../../../vant-weapp/dialog/dialog.js'
import MsgShow from '../../../utils/msgBox/msgBox.js'


Page({

  /**
   * 页面的初始数据
   */
  data: {
    isLoading: true,
    team: {},
    isMember: false,
    remark: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.loadAllData()
  },

  loadAllData() {
    let teamId = wx.getStorageSync('teamId')
    const params = {
      teamId
    }
    api.apiGetTeamByTeamId(params).then((res) => {
      this.setData({
        team: res.data.team,
        isMember: res.data.isMember,
        isLoading: false
      })
    }).catch((error) => {
      wx.showToast({
        title: '读取团队信息错误',
        icon: 'none'
      })
    })
  },

  onEditorInput(e) {
    this.setData({
      remark: e.detail.html
    })
  },

  onQuit() {
    let teamId = this.data.team.teamId
    if (teamId) {
      Dialog.confirm({
        message: '您确定要退出该团队吗？'
      }).then(() => {
        let params = {
          teamId: this.data.team.teamId,
          remark: this.data.remark
        }
        api.apiQuitTeam(params).then((res) => {
          wx.showToast({
            title: '提交成功'
          })
          wx.switchTab({
            url: '/pages/team/teamHome/teamHome'
          })
        }).catch((error) => {
          Notify(MsgShow(error))
        })
      }).catch(() => {
        // on cancel
      });
    } else {
      wx.showToast({
        title: '团队编号错误',
        icon: 'none'
      })
    }
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
