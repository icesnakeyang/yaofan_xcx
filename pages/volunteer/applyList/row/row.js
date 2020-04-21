// pages/volunteer/applyList/row/row.js

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
        processResult:'',
        isReject:false,
        isPending:false
    },

    /**
     * 组件的方法列表
     */
    methods: {
        updateData(){
            console.log(this.data.theData)
            let createTime = tools.momentTime(this.data.theData.createTime, 'S')
            let processResult=''
            let isReject=false
            let isPending=false
            if (!this.data.theData.processResult){
                processResult='等待通过'
                isPending=true
            }else{
                if (this.data.theData.processResult ==='REJECT'){
                    processResult='已拒绝'
                    isReject=true
                }
            }
            this.setData({
                createTime,
                processResult,
                isReject,
                isPending
            })
            console.log(this.data)
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
