// pages/account/withdraw/withdraw.js

import api from '../../../api/api.js'
import Notify from '../../../vant-weapp/notify/notify.js'

Page({

    /**
     * 页面的初始数据
     */
    data: {
        isLoading:true,
        point:0,
        withdrawAble:0,
        remark:'',
        totalWithdraw:0
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        this.loadAllData()
    },

    loadAllData(){
        let params={

        }
        api.apiTotalUserPoint(params).then((res)=>{
            console.log(res)
            this.setData({
                withdrawAble: res.data.withdrawAble
            })
            api.apiTotalWithdraw(params).then((res)=>{
                console.log(res)
                this.setData({
                    totalWithdraw: res.data.totalWithdraw,
                    isLoading: false
                })
            })
        }).catch((error)=>{
            wx.showToast({
                title: '读取积分账户失败',
                icon:'none'
            })
        })
    },

    onPointChange(e){
        console.log(e.detail)
        this.setData({
            point:e.detail
        })
    },
    
    onEditorInput(e){
        console.log(e.detail.html)
        this.setData({
            remark:e.detail.html
        })
    },

    onWithdraw(){
        if(this.data.withdrawAble===0){
            Notify('没有可以取现的积分');
            return
        }
        if(this.data.point===0){
            Notify('请输入要取现的积分')
            return
        }
        if(this.data.point>this.data.withdrawAble){
            Notify('取现积分额度不足')
            return
        }

        let params={
            point:this.data.point,
            remark:this.data.remark
        }

        api.apiWithdrawPoint(params).then((res)=>{
            wx.showToast({
                title: '取现申请成功'
            })
            wx.navigateTo({
                url: '../withdrawList/withdrawList',
            })
        }).catch((error)=>{
            wx.showToast({
                title: '取现申请失败',
                icon:'none'
            })
        })
    },

    onWithdrawList(){
        wx.navigateTo({
            url: '../withdrawList/withdrawList',
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