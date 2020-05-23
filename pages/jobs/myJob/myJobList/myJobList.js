// pages/jobs/myJob/myJobList/myJobList.js
import api from '../../../../api/api.js'
import common from '../../../../utils/common.js'

Page({

    /**
     * 页面的初始数据
     */
    data: {
        isLoading: true,
        jobs: [],
        catchTasks: [],
        pageIndex: 1,
        pageSize: 10,
        isEmpty: true,
        totalPage: 0,
        totalTasks: 0,
        status: 'PROGRESS',
        partyAPageIndex: 1,
        partyBPageIndex: 1,
        isPartyA: false,
        isPartyB: false,
        partyATotalPage: 0,
        partyBTotalPage: 0,
        totalTaskPartyA: 0,
        totalTaskPartyB: 0,
        totalTaskProgress: 0,
        totalVolunteerTasks: 0,
        unreadVolunteer: 0,
        teamTaskPageIndex: 1,
        teamTaskPageSize: 10,
        currentList : ''
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        this.loadDataFromApi().then((res) => {
            this.loadAllData()
        })

        this.totalTasks()
        this.totalVolunteer()
    },

    /**
     * 从数据库读取数据
     */
    loadDataFromApi() {
        let params = {
            pageIndex: this.data.pageIndex,
            pageSize: this.data.pageSize,
            status: this.data.status
        }
        return new Promise((resolve, reject) => {
            api.apiListMyTasksTiny(params).then((res) => {
                const catchTasks = res.data.tasks
                let isEmpty = true
                if (res.data.tasks.length > 0) {
                    isEmpty = false
                }
                this.setData({
                    catchTasks,
                    isLoading: false,
                    isEmpty,
                    totalPage: res.data.totalPage,
                    totalTasks: res.data.totalTasks
                })
                resolve()
            }).catch((error) => {
                reject(error)
            })
        }).catch((error) => {
            wx.showToast({
                title: '读取我的任务失败',
                icon: 'none'
            })
        })
    },

    totalTasks() {
        api.apiTotalTasks({}).then((res) => {
            this.setData({
                totalTaskPartyA: res.data.totalTaskPartyA,
                totalTaskPartyB: res.data.totalTaskPartyB,
                totalTaskProgress: res.data.totalTaskProgress
            })
        }).catch((error) => {

        })
    },

    totalVolunteer() {
        api.apiTotalMyVolunteer({}).then((res) => {
            let unreadVolunteer = 0
            unreadVolunteer += res.data.totalUnreadVolunteerApply
            unreadVolunteer += res.data.totalUnreadVolunteerProcess
            this.setData({
                totalVolunteerTasks: res.data.totalVolunteerTasks,
                unreadVolunteer

            })
        }).catch((error) => {

        })
    },

    /**
     * 整理准备数据
     */
    loadAllData() {
        const catchTasks = this.data.catchTasks
        if (catchTasks.length === 0) {
            this.setData({
                isEmpty: true
            })
            return
        }

        if (catchTasks.length <= this.data.pageSize) {
            this.setData({
                jobs: catchTasks
            })
            return
        }

        const pageIndex = this.data.pageIndex
        const pageSize = this.data.pageSize
        const offset = (pageIndex - 1) * pageSize
        let tasks = []
        const offsize = offset + pageSize
        for (let i = offset; i < offsize; i++) {
            if (i < catchTasks.length) {
                tasks.push(catchTasks[i])
            }
        }
        this.setData({
            jobs: tasks,
        })
    },

    onNewJob() {
        wx.navigateTo({
            url: '../../createJob/createJob',
        })
    },

    onCurrentJob() {
        this.setData({
            isLoading: true
        })
        let params = {
            pageIndex: 1,
            pageSize: 100,
            status: 'PROGRESS'
        }
        api.apiListMyTasksTiny(params).then((res) => {
            this.setData({
                jobs: res.data.tasks,
                isLoading: false
            })
        }).catch((error) => {
            wx.showToast({
                title: '读取任务失败',
                icon: 'none'
            })
        })
    },

    /**
     * 查询我是甲方的任务
     */
    onPartyA() {
        this.setData({
            isLoading: true,
            isPartyA: true
        })
        this.loadPartyAData()
    },

    loadPartyAData() {
        let params = {
            pageIndex: this.data.partyAPageIndex,
            pageSize: this.data.pageSize
        }
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
        }).catch((error) => {
            wx.showToast({
                title: '读取任务失败',
                icon: 'none'
            })
        })
    },

    /**
     * 查询我是乙方的任务
     */
    onPartyB() {
        this.setData({
            isLoading: true,
            isPartyB: true
        })
        this.loadPartyBData()
    },

    loadPartyBData() {
        let params = {
            pageIndex: this.data.pageIndex,
            pageSize: this.data.pageSize
        }
        api.apiListMyPartyBTasksDetail(params).then((res) => {
            let isEmpty = false
            if (res.data.tasks.length === 0) {
                isEmpty = true
            }
            this.setData({
                jobs: res.data.tasks,
                isLoading: false,
                isEmpty
            })
        }).catch((error) => {
            wx.showToast({
                title: '读取任务失败',
                icon: 'none'
            })
        })
    },

    onVolunteer() {
        wx.navigateTo({
            url: '/pages/volunteer/volunteerTaskList/volunteerTaskList'
        })
    },

    //查询其她成员任务
    onTeamJobs() {
        this.setData({
            isLoading: true,
            currentList: 'TEAM_TASK'
        })
        this.listTeamJobs()
    },

    //读取全体团队成员的任务
    listTeamJobs() {
        console.log(this.data)
        let params = {
            pageIndex: this.data.teamTaskPageIndex,
            pageSize: this.data.teamTaskPageSize
        }
        api.apiListMyObserveTask(params).then((res) => {
            let isEmpty = false
            if (res.data.tasks.length === 0) {
                isEmpty = true
            }
            this.setData({
                jobs: res.data.tasks,
                isLoading: false,
                isEmpty
            })
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
        this.onLoad()
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
        if (this.data.isPartyA) {
            page = this.data.partyAPageIndex
            if (page > 1) {
                page--
                this.setData({
                    partyAPageIndex: page
                })
                this.loadPartyAData()
            }
        } else {
            if (this.data.isPartyB) {
                page = this.data.partyBPageIndex
                if (page > 1) {
                    page--
                    this.setData({
                        partyBPageIndex: page
                    })
                    this.loadPartyBData()
                }
            } else {
                if (this.data.currentList === 'TEAM_TASK') {
                    page = this.data.teamTaskPageIndex
                    if (page > 1) {
                        page--
                        this.setData({
                            teamTaskPageIndex: page
                        })
                        this.listTeamJobs()
                    }
                } else {
                    page = this.data.pageIndex
                    if (page > 1) {
                        page--
                        this.setData({
                            pageIndex: page
                        })
                        this.loadAllData()
                        this.loadDataFromApi()
                    }
                }
            }
        }
    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {
        let page = 1
        if (this.data.isPartyA) {
            //甲方任务
            page = this.data.partyAPageIndex
            if (page < this.data.partyATotalPage) {
                page++
                this.setData({
                    partyAPageIndex: page
                })
                this.loadPartyAData()
            }
        } else {
            if (this.data.isPartyB) {
                //乙方任务
                page = this.data.partyBPageIndex
                if (page < this.data.partyBTotalPage) {
                    page++
                    this.setData({
                        partyBPageIndex: page
                    })
                    this.loadPartyBData()
                }
            } else {
                if (this.data.isPartyA) {
                    //甲乙方任务
                    page = this.data.pageIndex
                    if (page < this.data.totalPage) {
                        page++
                        this.setData({
                            pageIndex: page
                        })
                        this.loadAllData()
                        this.loadDataFromApi()
                    }
                }else{
                    if(this.data.teamTaskPageIndex==='TEAM_TASK'){
                        page=this.data.teamTaskPageIndex
                        if(page<this.data.totalTeamTaskPage){
                            page++
                            this.setData({
                                teamTaskPageIndex:page
                            })
                            this.listTeamJobs()
                        }
                    }
                }
            }
        }
    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})