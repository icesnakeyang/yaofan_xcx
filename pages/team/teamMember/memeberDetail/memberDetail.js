// pages/team/teamMember/memeberDetail/memberDetail.js

import api from '../../../../api/api'
import tools from '../../../../utils/dateTools'
import Dialog from '../../../../vant-weapp/dialog/dialog';

Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		isLoading: true,
		userInfo: {},
		sex: '',
		status: '',
		registerTime: '',
		joinTime: ''
	},

	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function (options) {
		this.loadAllData()
	},

	loadAllData() {
		const userId = wx.getStorageSync('userId')

		const params = {
			userId
		}
		api.apiGetMemberProfile(params).then((res) => {
			console.log(res)
			const userInfo = res.data.userInfo
			let sex = ''
			let status = ''
			let registerTime = ''
			let joinTime = ''

			if (userInfo.gender === '1') {
				sex = '男'
			} else {
				if (userInfo.gender === '2') {
					sex = '女'
				}
			}
			if (userInfo.status === 'ACTIVE') {
				status = '正常'
			}
			registerTime = tools.momentTime(userInfo.createTime, 'L')
			this.setData({
				userInfo: res.data.userInfo,
				isLoading: false,
				sex,
				status,
				registerTime
			})
		}).catch((error) => {
			wx.showToast({
				title: '读取团队成员信息失败',
				icon: 'none'
			})
		})
	},

	onResign() {
		Dialog.confirm({
				title: '解除该团队成员',
				message: '解除后该成员所有参与的团队任务将处于异常状态，确定解除吗？'
			})
			.then(() => {
				const userId = this.data.userInfo.userId
				const teamId = wx.getStorageSync('teamId');

				const params = {
					userId,
					teamId
				}
				api.apiResignMember(params).then((res) => {
					wx.showToast({
						title: '解除成功'
					})
					wx.navigateTo({
						url: '../memberList/teamMemberList',
					})
				}).catch((error) => {
					wx.showToast({
						title: '解除成员失败',
						icon: 'none'
					})
				})
			})
			.catch(() => {

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