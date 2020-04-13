import api from '../../../../../api/api.js'
import tools from '../../../../../utils/dateTools.js'
import Dialog from '../../../../../vant-weapp/dialog/dialog.js';
import Notify from '../../../../../vant-weapp/notify/notify.js'
import ShowMsg from '../../../../../utils/msgBox/msgBox.js'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    teamApplyLog: {},
    createTime: '',
    status: '',
    isPending: false,
    isReject: false,
    isAgree: false,
    isManager: false,
    isApply: false,
    processRemark: '',
    isLoading: true,
    processTime: '',
    isCancel: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.loadAllData()
  },

  loadAllData() {
    const teamApplyLogId = wx.getStorageSync('teamApplyLogId')
    let currentUserId = wx.getStorageSync('current_user_id')
    let params = {
      teamApplyLogId
    }
    api.apiGetTeamApplyLog(params).then((res) => {
      const teamApplyLog = res.data.teamApplyLog
      let createTime = tools.momentTime(teamApplyLog.createTime, 'L')
      let processTime = ''
      if (teamApplyLog.processTime) {
        processTime = tools.momentTime(teamApplyLog.processTime, 'L')
      }
      let status = ''
      let isPending = false
      let isReject = false
      let isAgree = false
      let isCancel = false
      if (teamApplyLog.status === 'PENDING') {
        status = '等待通过'
        isPending = true
      } else {
        if (teamApplyLog.status === 'REJECT') {
          status = '审核拒绝'
          isReject = true
        } else {
          if (teamApplyLog.status === 'AGREE') {
            status = '审核通过'
            isAgree = true
          } else {
            if (teamApplyLog.status === 'CANCEL') {
              status = '已取消'
              isCancel = true
            }
          }
        }
      }
      let isManager = false
      if (teamApplyLog.teamManagerId === currentUserId) {
        isManager = true
      }
      let isApply = false
      if (teamApplyLog.applyUserId === currentUserId) {
        isApply = true
      }
      this.setData({
        teamApplyLog: teamApplyLog,
        createTime,
        status,
        isManager,
        isApply,
        isPending,
        isReject,
        isAgree,
        isLoading: false,
        processTime,
        isCancel
      })
    }).catch((error) => {
      wx.showToast({
        title: '读取团队申请错误',
        icon: 'none'
      })
    })
  },

  onCancel() {
    Dialog.confirm({
      message: '确定要取消申请吗？'
    }).then(() => {
      let params = {
        teamApplyLogId: this.data.teamApplyLog.teamApplyLogId
      }
      api.apiCancelTeamApplyLog(params).then((res) => {
        wx.showToast({
          title: '取消成功',
        })
        this.loadAllData()
      }).catch((error) => {
        Notify(ShowMsg(error))
      })
    }).catch(() => {

    })
  },

  onAgree() {
    if (!this.data.processRemark) {
      Notify('请输入处理意见')
      return
    }
    Dialog.confirm({
      message: '确认要通过该用户的入团申请吗？'
    }).then(() => {
      let params = {
        remark: this.data.processRemark,
        teamApplyLogId: this.data.teamApplyLog.teamApplyLogId
      }
      api.apiAgreeApplyTeam(params).then((res) => {
        wx.showToast({
          title: '处理成功'
        })
        this.loadAllData()
      }).catch((error)=>{
        Notify(ShowMsg.showMsg(error))
      })
    }).catch(() => {

    })
  },

  onReject() {
    if (!this.data.processRemark) {
      Notify('请输入处理意见')
      return
    }
    Dialog.confirm({
      message: '确认要拒绝该用户的入团申请吗？'
    }).then(() => {
      let params = {
        remark: this.data.processRemark,
        teamApplyLogId: this.data.teamApplyLog.teamApplyLogId
      }
      api.apiRejectApplyTeam(params).then((res) => {
        wx.showToast({
          title: '保存成功'
        })
        this.loadAllData()
      }).catch((error) => {
        Notify(ShowMsg(error))
      })
    }).catch(() => {
      // on cancel
    });
  },

  onProcessRemark(e) {
    this.setData({
      processRemark: e.detail.html
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
