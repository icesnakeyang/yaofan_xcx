// pages/volunteer/applyJoinList/row/row.js

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
        processStatus:'',
        isPending:false,
        isReject:'',
        isAgree:''
    },

    /**
     * 组件的方法列表
     */
    methods: {
        updateData(){
            console.log(this.data.theData)
            let createTime = tools.momentTime(this.data.theData.createTime, 'L')
            let processStatus=''
            let isPending=false
            let isReject=false
            let isAgree=false
            if(!this.data.theData.processResult){
                processStatus='等待审核'
                isPending=true
            }else{
                if (this.data.theData.processResult ==='REJECT'){
                    processStatus='已拒绝'
                    isReject=true
                }else{
                  if(this.data.theData.processResult='AGREE'){
                    processStatus='已通过'
                    isAgree=true
                  }
                }
            }
            this.setData({
                createTime,
                processStatus,
                isPending,
                isReject,
                isAgree
            })

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
