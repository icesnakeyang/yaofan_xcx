// pages/jobs/myJob/log/jobLogList/row/row.js
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

    },

    /**
     * 组件的方法列表
     */
    methods: {
        updateData() {
            console.log(this.data.theData)
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