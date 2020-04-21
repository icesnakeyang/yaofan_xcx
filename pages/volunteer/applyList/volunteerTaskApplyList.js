// pages/volunteer/applyList/volunteerTaskApplyList.js

import api from '../../../api/api.js'

Page({

    /**
     * 页面的初始数据
     */
    data: {
        isLoading:true,
        applyList:[]
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
        api.apiListMyVolunteerTaskApply(params).then((res)=>{
            console.log(res)
            this.setData({
                applyList:res.data.volunteerApplies,
                isLoading:false
            })
        }).catch((error)=>{
            wx.showToast({
                title: '读取义工申请失败',
                icon:'none'
            })
        })
    },

    onCardRow(e){
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