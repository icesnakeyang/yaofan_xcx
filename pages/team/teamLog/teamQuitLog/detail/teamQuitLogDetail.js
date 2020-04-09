// pages/team/teamLog/teamQuitLog/detail/teamQuitLogDetail.js

import api from '../../../../../api/api.js'
import tools from '../../../../../utils/dateTools.js'
import Dialog from '../../../../../vant-weapp/dialog/dialog.js'


Page({

  /**
   * 页面的初始数据
   */
  data: {
    isLoading: true,
    teamQuitLog: {},
    createTime: '',
    isPending:false,
    status:'',
    isCancel:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.loadAllData()
  },

  loadAllData() {
    let teamQuitLogId = wx.getStorageSync('teamQuitLogId')
    let params = {
      teamQuitLogId
    }
    api.apiGetTeamQuitLog(params).then((res) => {
      let createTime = tools.momentTime(res.data.teamQuitLog.createTime, 'L')
      let isApply = false
      if (res.data.isApply) {
        isApply = true
      }
      let isPending=false
      let status = ''
      let isCancel=false
      if(res.data.teamQuitLog.status==='PENDING'){
        isPending=true
        status='等待处理'
      }
      if(res.data.teamQuitLog.status==='CANCEL'){
        status='已取消'
        isCancel=true
      }
      this.setData({
        teamQuitLog: res.data.teamQuitLog,
        isLoading: false,
        createTime,
        isApply,
        isPending,
        status,
        isCancel
      })
    }).catch((error) => {
      wx.showToast({
        title: '读取退团申请失败',
        icon: 'none'
      })
    })
  },

  onCancel(){
    Dialog.confirm({
      message: '确认取消退团申请'
    }).then(() => {
      let params={
        teamQuitLogId:this.data.teamQuitLog.teamQuitLogId
      }
      api.apiCancelTeamQuitLog(params).then((res)=>{
        wx.showToast({
          title: '已取消退团申请'
        })
        this.loadAllData()
      }).catch((error)=>{
        wx.showToast({
          title: '取消失败',
          icon:'none'
        })
      })
    }).catch(()=>{

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
