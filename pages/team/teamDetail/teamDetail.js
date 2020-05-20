// pages/team/teamDetail/teamDetail.js
import api from '../../../api/api.js'
import Notify from '../../../vant-weapp/notify/notify.js'
import MsgShow from '../../../utils/msgBox/msgBox.js'
import Dialog from '../../../vant-weapp/dialog/dialog.js'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    team: {},
    isManager: false,
    isLoading: true,
    isMember: false,
    teamUserList:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.loadAllData()
  },

  loadAllData() {
    let teamId = wx.getStorageSync('teamId')
    let currentUserId = wx.getStorageSync('current_user_id')

    let params = {
      teamId: teamId
    }
    api.apiGetTeamByTeamId(params).then((res) => {
      let isManager = false
      let isMember = false
      if (currentUserId === res.data.team.managerId) {
        isManager = true
      } else {
        // if(currentUserId===res.data.team.)
      }
      if (res.data.isMember) {
        isMember = true
      }
      this.setData({
        team: res.data.team,
        isManager,
        isLoading: false,
        isMember,
        teamUserList:res.data.teamUsers
      })
      console.log(this.data)
    }).catch((error) => {
      wx.showToast({
        title: '读取团队数据失败',
        icon: 'none'
      })
    })
  },

  onEditTeam() {
    wx.navigateTo({
      url: '../editTeam/editTeam',
    })
  },

  onDeleteTeam() {
    let teamId = this.data.team.teamId
    if (teamId) {
      Dialog.confirm({
        title: '确认删除',
        message: '删除团队后不可恢复，确认删除该团队吗？'
      }).then(() => {
        let params = {
          teamId
        }
        api.apiDeleteMyTeam(params).then((res) => {
          wx.showToast({
            title: '删除成功'
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

  onJoinTeam() {
    wx.setStorageSync('teamId', this.data.team.teamId)
    wx.navigateTo({
      url: '../applyTeam/applyTeam',
    })
  },

  onQuit(){
    let teamId = this.data.team.teamId
    if (teamId) {
      wx.setStorageSync('teamId', teamId)
      wx.navigateTo({
        url: '../quitTeam/quitTeam',
      })
    }else{
      wx.showToast({
        title: '抱歉，不能退出该团队',
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
