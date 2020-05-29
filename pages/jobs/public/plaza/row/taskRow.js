// pages/jobs/public/plaza/row/taskRow.js

import tools from '../../../../../utils/dateTools'

Component({
    /**
     * 组件的属性列表
     */
    properties: {
        theData:Object
    },

    /**
     * 组件的初始数据
     */
    data: {
        createTime:''
    },

    /**
     * 组件的方法列表
     */
    methods: {
        updateData(){
            let createTime=tools.momentTime(this.data.theData.createTime, 'L')
            this.setData({
                createTime
            })
            console.log(this.data.theData)
        }
    },

    attached(){
        this.updateData()
    },

    observers:{
        'theData':function(data){
        this.updateData()
        }
    }
})
