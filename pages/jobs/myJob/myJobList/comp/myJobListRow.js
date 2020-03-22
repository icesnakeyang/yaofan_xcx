// pages/jobs/myJob/myJobList/comp/myJobListRow.js
import tools from '../../../../../utils/dateTools.js'

Component({
    /**
     * 组件的属性列表
     */
    properties: {
        theData: Object
    },

    /**
     * 组件的初始数据
     */
    data: {
        title: '',
        point: 0,
        createTime: '',
        detail: ''
    },

    /**
     * 组件的方法列表
     */
    methods: {
        onRow() {
            wx.setStorageSync('taskId', this.data.theData.task.taskId)
            wx.navigateTo({
                url: '../myJobDetail/myJobDetail',
            })
        }
    },

    attached() {
        let createTime = ''
        if (this.data.theData.task.createTime) {
            createTime = tools.momentTime(this.data.theData.task.createTime, 'L')
        }
        this.setData({
            title: this.data.theData.task.title,
            point: this.data.theData.task.point,
            createTime,
            detail: this.data.theData.task.detail
        })
    }
})
