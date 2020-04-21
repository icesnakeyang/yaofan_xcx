// pages/volunteer/applyDetail/applyDetail.js

import api from '../../../api/api.js'
import tools from '../../../utils/dateTools.js'
import Dialog from '../../../vant-weapp/dialog/dialog.js'
import Notify from '../../../vant-weapp/notify/notify.js'
import ShowMsg from '../../../utils/msgBox/msgBox.js'

Page({

    /**
     * 页面的初始数据
     */
    data: {
        isLoading:true,
        apply:{},
        applyTime:'',
        canProcess:false,
        processRemark:'',
        processTime:'',
        processResult:''
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        this.loadAllData()
    },

    loadAllData(){
        let volunteerApplyId=wx.getStorageSync('volunteerApplyId')
        let params={
            volunteerApplyId
        }

        api.apiGetVolunteerApply(params).then((res)=>{
            console.log(res)
            let applyTime = tools.momentTime(res.data.volunteerApply.createTime, 'L')
            let canProcess=false
            let current_user_id = wx.getStorageSync('current_user_id')
            if (current_user_id === res.data.volunteerApply.taskCreateUserId){
                if (!res.data.volunteerApply.processResult){
                    canProcess=true
                }
            }
            let processTime=''
            if(res.data.volunteerApply.processTime){
                processTime=tools.momentTime(res.data.volunteerApply.processTime, 'L')
            }
            let processResult='等待审核'
            if(res.data.volunteerApply.processResult){
                if (res.data.volunteerApply.processResult ==='REJECT'){
                    processResult='已拒绝'
                }else{
                  if (res.data.volunteerApply.processResult ==='AGREE'){
                    processResult='已通过'
                  }
                }
            }
            this.setData({
                apply:res.data.volunteerApply,
                isLoading:false,
                applyTime,
                canProcess,
                processTime,
                processResult
            })
        }).catch((error)=>{
            wx.showToast({
                title: '读取义工任务申请失败',
                icon:'none'
            })
        })

    },

    onEditorInput(e){
        console.log(e.detail.html)
        this.setData({
            processRemark:e.detail.html
        })
    },


    onReject(){
        if(!this.data.processRemark){
            Notify('请输入审核理由')
            return
        }

        Dialog.confirm({
            message: '确认要拒绝该用户的义工申请'
        }).then(() => {
            console.log(this.data)
            let params={
                remark:this.data.processRemark,
                volunteerApplyId: this.data.apply.volunteerApplyId
            }
            api.apiRejectVolunteerApply(params).then((res)=>{
                wx.showToast({
                    title: '拒绝成功'
                })
                wx.navigateTo({
                    url: '../applyList/volunteerTaskApplyList'
                })
            }).catch((error)=>{
                Notify(ShowMsg.showMsg(error))
            })
        }).catch(() => {
            // on cancel
        });
    },

    onAgree(){
        if(!this.data.processRemark){
            Notify('请输入审核理由')
            return
        }
        Dialog.confirm({
            message: '确认要通过该用户的义工申请'
        }).then(() => {
            let params={
                remark: this.data.processRemark,
                volunteerApplyId: this.data.apply.volunteerApplyId
            }
            api.apiAgreeVolunteerApply(params).then((res)=>{
                wx.showToast({
                    title: '已通过义工申请'
                })
                wx.navigateTo({
                    url: '../applyList/volunteerTaskApplyList'
                })
            }).catch((error)=>{
                Notify(ShowMsg.showMsg(error))
            })
            // on confirm
        }).catch(() => {
            // on cancel
        });
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