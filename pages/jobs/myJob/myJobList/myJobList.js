// pages/jobs/myJob/myJobList/myJobList.js
import api from '../../../../api/api.js'
import common from '../../../../utils/common.js'

Page({

    /**
     * 页面的初始数据
     */
    data: {
        jobs: [],
        pageIndex: 1,
        pageSize: 10
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
      if (common.isLogin()) {
        this.setData({
          isLogin: true
        })
      } else {
        this.setData({
          isLogin: false
        })
      }
      if (!this.data.isLogin) {
        wx.navigateTo({
          url: '/pages/legacy/login/login',
        })
        return
      }
        this.loadAllData()
    },

    loadAllData() {
        let params = {
            pageIndex: this.data.pageIndex,
            pageSize: this.data.pageSize
        }
        api.apiListMyTasks(params).then((res) => {
            this.setData({
                jobs: res.data.tasks
            })
        }).catch((error) => {
            console.log(error)
            wx.showToast({
                title: '读取我的任务失败',
                icon: 'none'
            })
        })
    },

    onNewJob() {
        wx.navigateTo({
            url: '../../createJob/createJob',
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
      this.loadAllData()
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
      let page=this.data.pageIndex
      if(page>1){
          page--
          this.setData({
              pageIndex: page
          })
          this.loadAllData()
      }
    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function() {
      let page = this.data.pageIndex
      page++
      this.setData({
        pageIndex: page
      })
      this.loadAllData()
    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function() {

    }
})
