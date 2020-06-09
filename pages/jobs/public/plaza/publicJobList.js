// pages/jobs/public/plaza/publicJobList.js
import api from '../../../../api/api.js'
import ShowMsg from '../../../../utils/msgBox/msgBox.js'
import Notify from '../../../../vant-weapp/notify/notify.js';
Page({

    /**
     * 页面的初始数据
     */
    data: {
        isLoading: true,
        taskList: [],
        pageIndex: 1,
        pageSize: 5,
        isNoneTeam:false
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        this.loadAllData()
    },

    loadAllData() {
        this.setData({
            isLoading:true
        })
        wx.showLoading({
          title: '加载中...',
        })
        let params = {
            pageIndex: this.data.pageIndex,
            pageSize: this.data.pageSize
        }
        api.apiListTaskGrabbingTeam(params).then((res) => {
            this.setData({
                taskList: res.data.tasks,
                isLoading: false
            })
            wx.hideLoading()
        }).catch((error) => {
            console.log(error)
            let isNoneTeam=false
            if(error===20005){
                isNoneTeam=true
            }
            this.setData({
                isLoading: false,
                isNoneTeam
            })
            wx.hideLoading()
        })
    },

    onTaskRow(e) {
        wx.setStorageSync('taskId', e.currentTarget.dataset.taskid)
        wx.navigateTo({
            url: '../../jobDetail/jobDetail',
        })
    },

    onVolunteerTask(){
        wx.navigateTo({
            url: '/pages/jobs/public/volunteer/volunteerTaskList'
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