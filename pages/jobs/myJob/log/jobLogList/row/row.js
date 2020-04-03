// pages/jobs/myJob/log/jobLogList/row/row.js

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
      createTime:''
    },

    /**
     * 组件的方法列表
     */
    methods: {
        updateData() {
          let createTime=tools.momentTime(this.data.theData.createTime, 'L')
          this.setData({
            createTime
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
