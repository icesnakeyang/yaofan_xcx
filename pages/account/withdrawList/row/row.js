// pages/account/withdrawList/row/row.js

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
        isUnprocess:false,
        isAgree:false
    },

    /**
     * 组件的方法列表
     */
    methods: {
        updateData(){
            let createTime=tools.momentTime(this.data.theData.createTime, 'S')
            let status=''
            let isUnprocess=false
            let isAgree
            if (!this.data.theData.processResult){
                status='未处理'
                isUnprocess=true
            }else{
                if(this.data.theData.processResult==='AGREE'){
                    status='已通过审核'
                    isAgree=true
                }
            }
            this.setData({
                createTime,
                status,
                isUnprocess,
                isAgree
            })
        }
    },

    attached(){
        this.updateData()
    },

    observers: {
        'theData': function (data) {
            this.updateData()
        }
    }
})
