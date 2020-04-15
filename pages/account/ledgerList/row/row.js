// pages/account/ledgerList/row/row.js

import tools from '../../../../utils/dateTools.js'

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
        createTime:'',
        type:'',
        point:0
    },

    /**
     * 组件的方法列表
     */
    methods: {
        updateData() {
            console.log(this.data.theData)
            let createTime=tools.momentTime(this.data.theData.createTime, 'L')
            let type=''
            let point=0
            if(this.data.theData.actType==='DEAL'){
                type='任务支出'
                point = -this.data.theData.pointOut
            }
            if(this.data.theData.actType==='GRAB'){
                type='抢单成功'
                point = this.data.theData.pointIn
            }
            this.setData({
                createTime,
                type,
                point
            })
        }
    },

    attached() {
        this.updateData()
    },

    observers: {
        'theData': function (theData) {
            this.updateData()
        }
    }
})
