// pages/team/teamApplyLogDetail/teamApplyLogDetail.js
import api from '../../../api/api.js'
import tools from '../../../utils/dateTools.js'
import Dialog from '../../../vant-weapp/dialog/dialog.js';
import Notify from '../../../vant-weapp/notify/notify.js'
import ShowMsg from '../../../utils/msgBox/msgBox.js'

Page({

    /**
     * 页面的初始数据
     */
    data: {
        teamApplyLog: {},
        createTime: '',
        status: '',
        isPending:false,
        isReject:false,
        isAgree:false,
        isManager: false,
        isApply: false,
        processRemark:''
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        this.loadAllData()
    },

    loadAllData() {
        const item = wx.getStorageSync('item')
        let currentUserId = wx.getStorageSync('current_user_id')
        let createTime = tools.momentTime(item.createTime, 'L')
        let status = ''
        let isPending=false
        let isReject=false
        let isAgree=false
        console.log(item.status)
        if (item.status === 'PENDING') {
            status = '等待通过'
            isPending=true
        }else{
            if (item.status ==='REJECT'){
                status='审核拒绝'
                isReject=true
            }else{
                if(item.status==='AGREE'){
                    status='审核通过'
                    isAgree=true
                }
            }
        }
        let isManager = false
        if (item.teamManagerId === currentUserId) {
            isManager = true
        }
        let isApply = false
        if (item.applyUserId === currentUserId) {
            isApply = true
        }
        this.setData({
            teamApplyLog: item,
            createTime,
            status,
            isManager,
            isApply,
            isPending,
            isReject,
            isAgree
        })
        console.log(this.data)
    },

    onCancel() {

    },

    onAgree() {
        if (!this.data.processRemark) {
            Notify('请输入处理意见')
            return
        }
        Dialog.confirm({
            message: '确认要通过该用户的入团申请吗？'
        }).then(() => {
            console.log(this.data)
            let params={
                remark: this.data.processRemark,
                teamApplyLogId: this.data.teamApplyLog.teamApplyLogId
            }
        }).catch(() => {

        })
    },

    onReject() {
        if(!this.data.processRemark){
            Notify('请输入处理意见')
            return
        }
        Dialog.confirm({
            message: '确认要拒绝该用户的入团申请吗？'
        }).then(() => {
            let params={
                remark: this.data.processRemark,
                teamApplyLogId: this.data.teamApplyLog.teamApplyLogId
            }
            console.log(params)
            api.apiRejectApplyTeam(params).then((res)=>{
                console.log(res)
                wx.showToast({
                    title: '保存成功'
                })
                this.loadAllData()
            }).catch((error)=>{
                Notify(ShowMsg(error))
            })
        }).catch(() => {
            // on cancel
        });
    },

    onProcessRemark(e) {
        console.log(e.detail.html)
        this.setData({
            processRemark:e.detail.html
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