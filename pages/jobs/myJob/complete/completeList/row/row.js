// pages/jobs/myJob/complete/completeList/row/row.js

import tools from '../../../../../../utils/dateTools.js'

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
        createTime: '',
        processTime:'',
        processResult:''
    },

    /**
     * 组件的方法列表
     */
    methods: {
        updateData() {
            let createTime=''
            let processTime=''
            let processResult=''
            if (this.data.theData.createTime) {
                createTime = tools.momentTime(this.data.theData.createTime, 'L')
            }
            if(this.data.theData.processTime){
                processTime=tools.momentTime(this.data.theData.processTime, 'L')
                if(this.data.theData.processResult==='CANCEL'){
                    processResult='乙方取消完成'
                }
            }
            this.setData({
                createTime,
                processTime,
                processResult
            })
        }
    },

    attached() {
        this.updateData()
    },

    observers: {
        'theData': function(theData) {
            this.updateData()
        }
    }
})