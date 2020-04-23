// pages/jobs/public/volunteer/row/row.js

import tools from '../../../../../utils/dateTools.js'

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
        startTime:''
    },

    /**
     * 组件的方法列表
     */
    methods: {
        updateData(){
            let startTime=''
            if (this.data.theData.startTime){
                startTime=tools.momentTime(this.data.theData.startTime, 'L')
            }
            this.setData({
                startTime
            })
        }
    },

    attached(){
        this.updateData()
    },

    observers:{
        'theData':function(theData){
            this.updateData()
        }
    }
})
