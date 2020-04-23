// pages/volunteer/apply/applyVolunteerTask.js

import api from '../../../api/api.js'
import Notify from '../../../vant-weapp/notify/notify.js'
import ShowMsg from '../../../utils/msgBox/msgBox.js'

Page({

    /**
     * 页面的初始数据
     */
    data: {
        isLoading:true,
        volunteerTask:{},
        remark:'',
        isSaving:false
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        this.loadAllData()
    },

    loadAllData(){
        let volunteerTaskId = wx.getStorageSync('volunteerTaskId')
        let params={
            volunteerTaskId
        }
        api.apiGetVolunteerTask(params).then((res)=>{
            this.setData({
                volunteerTask:res.data.volunteerTask,
                isLoading:false
            })
        }).catch((error)=>{
            wx.showToast({
                title: '读取义工任务失败',
                icon:'none'
            })
        })
    },

    onEditorInput(e){
        this.setData({
            remark:e.detail.html
        })
    },

    onApply(){
        if(!this.data.remark){
            Notify('请输入报名说明')
            return
        }

        let params={
            volunteerTaskId:this.data.volunteerTask.volunteerTaskId,
            remark:this.data.remark
        }

        this.setData({
            isSaving:true
        })
        api.apiApplyVolunteerTask(params).then((res)=>{
            wx.showToast({
                title: '报名成功'
            })
            wx.navigateTo({
                url: '../applyJoinList/applyJoinList'
            })
        }).catch((error)=>{
            Notify(ShowMsg.showMsg(error))
            this.setData({
                isSaving:false
            })
        })
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
