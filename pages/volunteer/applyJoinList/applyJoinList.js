// pages/volunteer/applyJoinList/applyJoinList.js

import api from '../../../api/api.js'

Page({

    /**
     * 页面的初始数据
     */
    data: {
        isLoading:true,
        joinApplyList:[],
        isEmpty:true
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        this.loadAllData()
    },

    loadAllData(){
        wx.showLoading({
          title: '加载中...',
        })
        this.setData({
            isLoading:true,
            isEmpty:true
        })
        let params={

        }
        api.apiListMyVolunteerTaskApplyJoin(params).then((res)=>{
            let isEmpty=true
            if(res.data.volunteerApplies.length>0){
                isEmpty=false
            }
            this.setData({
                joinApplyList:res.data.volunteerApplies,
                isLoading:false,
                isEmpty
            })
            wx.hideLoading()
        }).catch((error)=>{
            this.setData({
                isLoading:false,
                isEmpty
            })
            wx.hideLoading()
            wx.showToast({
                title: '读取申请失败',
                icon:'none'
            })
        })
    },

    onRow(e){
        wx.setStorageSync('volunteerApplyId', e.currentTarget.dataset.volunteerapplyid)
        wx.navigateTo({
            url: '../applyDetail/applyDetail'
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
        this.loadAllData()
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
