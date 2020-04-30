// pages/welcome/welcome.js

import commonTools from '../../utils/common.js'

Page({

    /**
     * 页面的初始数据
     */
    data: {
        isLoading:true
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        //从api后台登录微信用户
        console.log('load')
        let params = {}
        commonTools.apiLogin(params).then((res)=>{
            wx.showToast({
                title: '用户登录成功',
                icon:'none'
            })
            this.setData({
                isLoading:false
            })
            wx.switchTab({
                url: '/pages/jobs/public/plaza/publicJobList'
            })
        }).catch((error)=>{
            wx.showToast({
                title: '用户登录失败',
                icon:'none'
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
