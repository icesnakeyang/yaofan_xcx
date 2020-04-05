// pages/jobs/myJob/complete/completeList/completeList.js

import api from '../../../../../api/api.js'
import Dialog from '../../../../../vant-weapp/dialog/dialog.js';
import Notify from '../../../../../vant-weapp/notify/notify.js';
import MsgShow from '../../../../../utils/msgBox/msgBox.js'

Page({

    /**
     * 页面的初始数据
     */
    data: {
        isLoading: true,
        task:{},
        taskCompletes: [],
        isEmpty: true,
        remark: '',
        taskId: '',
        taskStatus:'',
        isComplete:false,
        isProgress:false,
        isPartyA:false,
        isPartyB:false
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        this.loadAllData()
    },

    loadAllData() {
        let taskId = wx.getStorageSync('taskId')
        let params = {
            taskId
        }
        api.apiGetTaskByTaskId(params).then((res)=>{
            let taskStatus=''
            let isComplete=false
            let isProgress=false
            let isPartyA=false
            let isPartyB=false
            console.log(res.data.task.status)
            let meId = wx.getStorageSync('current_user_id')
            console.log(meId)
            if (res.data.task.createUserId===meId){
                isPartyA=true
            }else{
                if (res.data.task.partyBId===meId){
                    isPartyB=true
                }
            }
            if(res.data.task.status==='PROGRESS'){
                taskStatus='进行中'
                isProgress=true
            }else{
                if (res.data.task.status ==='COMPLETE'){

                    taskStatus='已完成',
                    isComplete=true
                }
            }
            this.setData({
                task:res.data.task,
                taskStatus,
                isProgress,
                isComplete,
                isPartyA,
                isPartyB
            })
            api.apiListTaskComplete(params).then((res) => {
                console.log(res)
                let isEmpty = false
                if (res.data.taskCompletes.length === 0) {
                    isEmpty = true
                }
                this.setData({
                    taskId,
                    isEmpty,
                    taskCompletes: res.data.taskCompletes,
                    isLoading: false
                })
                console.log(this.data)
            }).catch((error) => {
                wx.showToast({
                    title: '读取日志失败',
                    icon: 'none'
                })
            })
        }).catch((error)=>{
            wx.showToast({
                title: '读取任务信息失败',
                icon:'none'
            })
        })
    },

    onRemark(e) {
        this.setData({
            remark: e.detail.html
        })
    },

    onCreateComplete() {
        if (!this.data.remark) {
            Notify('请输入完成说明');
            return
        }
        let params = {
            taskId: this.data.taskId,
            content: this.data.remark
        }
        Dialog.confirm({
            message: '确认完成'
        }).then(() => {
            console.log(params)
            api.apiCreateComplete(params).then((res) => {
                wx.showToast({
                    title: '任务已经完成'
                })
                this.loadAllData()
            }).catch((error) => {
                console.log(error)
                Notify(MsgShow.showMsg(error))
            })
        }).catch(() => {

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