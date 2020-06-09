// pages/legacy/edit/name/name.js

import api from '../../../../api/api.js'
import Notify from '../../../../vant-weapp/notify/notify.js';
import MsgBox from '../../../../utils/msgBox/msgBox.js'

Page({

    /**
     * 页面的初始数据
     */
    data: {
        name: '',
        idcard:''
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        let name = options.name
        console.log(name)
        if(!name || name==='null'){
            name=''
        }
        this.setData({
            name
        })
    },

    loadAllData() {

    },

    onName(e) {
        this.setData({
            name: e.detail
        })
    },

    onIdcard(e) {
        this.setData({
            idcard: e.detail
        })
    },

    onSave() {
        if (!this.data.name) {
            wx.showToast({
                title: '请输入真实姓名',
                icon: 'none'
            })
            return
        }
        let params = {
            username: this.data.name,
            idCard:this.data.idcard
        }

        api.apiUpdateUsername(params).then((res) => {
            wx.showToast({
                title: '修改成功'
            })
            wx.switchTab({
                url: '/pages/legacy/home/home',
            })
        }).catch((error) => {
            Notify(MsgBox.showMsg(error));
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