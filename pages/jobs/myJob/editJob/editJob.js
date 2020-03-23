// pages/jobs/myJob/editJob/editJob.js

import api from '../../../../api/api.js'
import tools from '../../../../utils/dateTools.js'

Page({

    /**
     * 页面的初始数据
     */
    data: {
        taskId: '',
        task: {},
        title: '',
        endDate: '',
        endTime: '',
        teamName: '',
        taskDetail:''
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        let taskId = wx.getStorageSync('taskId')
        console.log(taskId)
        this.setData({
            taskId
        })
        this.loadAllData()
    },

    loadAllData() {
        let params = {
            taskId: this.data.taskId
        }
        api.apiGetTaskByTaskId(params).then((res) => {
            console.log(res)
            let endDate = ''
            let endTime = ''
            if (res.data.task.endTime) {
                endDate = tools.momentTime(res.data.task.endTime, 'S')
                endTime = tools.momentTime(res.data.task.endTime, 'TIME')
            }
            this.setData({
                task: res.data.task,
                teamName: res.data.task.teamName,
                endDate,
                endTime,
                taskDetail:res.data.task.detail,
                point:res.data.task.point,
                title:res.data.task.title
            })
            console.log(this.data)
        }).catch((error)=>{
            wx.showToast({
                title: '读取任务失败',
                icon:'none'
            })
        })
    },

    onChangeTitle(e) {
        this.setData({
            title: e.detail
        })
    },

    onSelectTeam() {
        wx.navigateTo({
            url: '../../createJob/selectTeam/selectTeam',
        })
    },

    onEditorReady() {
        const that = this
        wx.createSelectorQuery().select('#editor').context(res => {
            that.editorCtx = res.context
            that.editorCtx.setContents({
                html: this.data.taskDetail
            })
        }).exec()
    },

    onEditorInput(e){
        this.setData({
            taskDetail:e.detail.html
        })
    },

    onSave(){
        console.log(this.data)
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