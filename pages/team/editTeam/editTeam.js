// pages/team/editTeam/editTeam.js
import api from '../../../api/api.js'
import Notify from '../../../vant-weapp/notify/notify.js'
import MsgShow from '../../../utils/msgBox/msgBox.js'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    teamId: '',
    teamName: '',
    description: '',
    isLoading: true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    let teamId = wx.getStorageSync('teamId')
    this.setData({
      teamId
    })
    this.loadAllData()
  },

  loadAllData() {
    let params = {
      teamId: this.data.teamId
    }
    api.apiGetTeamByTeamId(params).then((res) => {
      this.setData({
        teamName: res.data.team.teamName,
        description: res.data.team.description,
        isLoading: false
      })
    }).catch((error) => {
      wx.showToast({
        title: '读取团队信息失败',
        icon: 'none'
      })
    })
  },

  onEditorReady() {
    const that = this
    wx.createSelectorQuery().select('#editor').context(res => {
      that.editorCtx = res.context
      that.editorCtx.setContents({
        html: that.data.description
      })
    }).exec()
  },

  onChangeTeamName(e) {
    this.setData({
      teamName:e.detail
    })
  },

  onEditorInput(e) {
    this.setData({
      description:e.detail.html
    })
  },

  onSave() {
    let params={
      name: this.data.teamName,
      description:this.data.description,
      teamId:this.data.teamId
    }
    api.apiUpdateMyTeam(params).then((res)=>{
      wx.showToast({
        title: '保存成功'
      })
      wx.navigateTo({
        url: '/pages/team/teamDetail/teamDetail',
      })
    }).catch((error)=>{
      Notify(MsgShow(error))
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
