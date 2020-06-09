// pages/jobs/myJob/myTeamJob/myTeamJob.js

import api from '../../../../api/api'

Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		pageIndex:1,
		pageSize:10,
		jobs:[],
		isLoading:true,
		isEmpty:true,
		totalPage:0
	},

	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function (options) {
		this.listTeamJobs()
	},

	//读取全体团队成员的任务
    listTeamJobs() {
		wx.showLoading({
			title: '加载中...',
		  })
        let params = {
            pageIndex: this.data.pageIndex,
            pageSize: this.data.pageSize
        }
        api.apiListMyObserveTask(params).then((res) => {
			console.log(res)
			let isEmpty = false
            if (res.data.tasks.length === 0) {
                isEmpty = true
            }
            this.setData({
                jobs: res.data.tasks,
                isLoading: false,
                isEmpty,
                totalPage:res.data.totalTaskPage
			})
			wx.hideLoading()
        }).catch((error) => {
            wx.showToast({
                title: '读取任务失败',
                icon: 'none'
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
		console.log(this.data.pageIndex)
		console.log(this.data.totalPage)
		let page=this.data.pageIndex
		if(page>1){
			wx.showLoading({
			  title: '加载中...',
			})
			page--
			this.setData({
				pageIndex:page
			})
			this.listTeamJobs()
		}
	},

	/**
	 * 页面上拉触底事件的处理函数
	 */
	onReachBottom: function () {
		let page=this.data.pageIndex
		if(page<this.data.totalPage){
			wx.showLoading({
			  title: '加载中...',
			})
			page++
			this.setData({
				pageIndex:page
			})
			this.listTeamJobs()
		}
	},

	/**
	 * 用户点击右上角分享
	 */
	onShareAppMessage: function () {

	}
})