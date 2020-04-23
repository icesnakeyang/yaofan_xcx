// pages/volunteer/volunteerTaskList/row/row.js

import tools from '../../../../utils/dateTools.js'

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
        createTime:'',
        status:'',
        isActive:false,
        isStop:false
    },

    /**
     * 组件的方法列表
     */
    methods: {
        updateData(){
            let createTime=tools.momentTime(this.data.theData.createTime, 'S')
            let status=''
            let isActive=false
            let isStop=false
            if (this.data.theData.status ==='ACTIVE'){
                status='招募中'
                isActive=true
            }else{
                if(this.data.theData.status==='STOP'){
                    status='已停止'
                    isStop=true
                }
            }
            this.setData({
                createTime,
                status,
                isActive,
                isStop
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
