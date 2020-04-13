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
        type:''
    },

    /**
     * 组件的方法列表
     */
    methods: {
        updateData() {
            let createTime=tools.momentTime(this.data.theData.createTime, 'L')
            let type=''
            if(this.data.theData.actType==='DEAL'){
                type='任务支出'
            }
            if(this.data.theData.actType==='GRAB'){
                type='抢单成功'
            }
            this.setData({
                createTime,
                type
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
