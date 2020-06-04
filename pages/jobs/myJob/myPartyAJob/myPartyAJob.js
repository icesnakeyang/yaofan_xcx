// pages/jobs/myJob/myPartyAJob/myPartyAJob.js

import api from '../../../../api/api'

Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		pageIndex: 1,
		pageSize: 10,
		jobs: [],
		isLoading: true,
		isEmpty: true,
		partyATotalPage: 0
	},

	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function (options) {
		this.loadPartyAData()
	},

	loadPartyAData() {
		let params = {
			pageIndex: this.data.pageIndex,
			pageSize: this.data.pageSize
		}
		console.log(params)
		api.apiListMyPartyATasksDetail(params).then((res) => {
			let isEmpty = false
			if (res.data.tasks.length === 0) {
				isEmpty = true
			}
			this.setData({
				jobs: res.data.tasks,
				isLoading: false,
				isEmpty,
				partyATotalPage: res.data.totalPage
			})
			console.log(this.data)
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
		let page = this.data.pageIndex
		if (page > 1) {
			page--
			this.setData({
				pageIndex: page
			})
			this.loadPartyAData()
		}
	},

	/**
	 * 页面上拉触底事件的处理函数
	 */
	onReachBottom: function () {
		let page = this.data.pageIndex
		console.log('page:'+page)
		console.log('total:'+this.data.partyATotalPage)
		if (page < this.data.partyATotalPage) {
			// 显示加载图标
			wx.showLoading({
				title: '玩命加载中',
			})
			page++
			this.setData({
				pageIndex: page
			})
			this.loadPartyAData()
		}
	},

	/**
	 * 用户点击右上角分享
	 */
	onShareAppMessage: function () {

	}
})