// myComponent/PicTextModal.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    propCurrentStatus: Boolean,
    propCurrentIndex: Number,
    propContentText: String,
    propImgId: String,
    propImgUrl: String,
    propIsImg: Boolean
  },

  /**
   * 组件的初始数据
   */
  data: {
    imgId: '',
    imgUrl: '',
    detail: '',
    currentIndex: 0,
    hideModal: true,
    isImg: false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    //取消
    onPressCancel() {
      let outData = {
        modalStatus: false
      }
      this.triggerEvent('myevent', outData)
    },

    //保存
    onPressComfirm() {
      let outData = {
        modalStatus: false,
        detail: this.data.detail,
        currentIndex: this.data.currentIndex,
        imgId: this.data.imgId,
        imgUrl: this.data.imgUrl
      }
      this.triggerEvent('myevent', outData)
    },

    //编辑图片
    btUploadImg() {
      let _this = this
      wx.chooseImage({
        success: function (res) {
          var tempFilePaths = res.tempFilePaths
          wx.uploadFile({
            url: 'http://localhost:8090/yaofanapi/common/uploadFile',
            filePath: tempFilePaths[0],
            name: 'file',
            header: {
              'content-type': 'multipart/form-data',
              'token': wx.getStorageSync('yaofan_token')
            },
            success: function (res) {
              console.log(res)
              var jsonObj = JSON.parse(res.data);
              console.log(jsonObj.data.fileLogId)
              console.log(jsonObj.data.url)
              _this.setData({
                imgId: jsonObj.data.fileLogId,
                imgUrl: jsonObj.data.url
              })
              console.log(_this.data)

              //do something
            },
            fail: function (err) {}
          })
        },
      })
    },

    /**
     * 设置要修改的内容
     */
    bindText(e) {
      this.setData({
        detail: e.detail.html
      })
    },

    onEditorReady(content) {
      if (this.data.isImg) {
        return
      }
      let that = this
      that.createSelectorQuery().select('#editor').context(function (res) {
        that.editorCtx = res.context
        that.editorCtx.setContents({
          html: that.data.detail
        })
      }).exec()
    },
  },

  //监听变量
  observers: {
    //对话框状态，显示或者隐藏
    'propCurrentStatus': function(propCurrentStatus) {
      if (propCurrentStatus) {
        this.setData({
          hideModal: false
        })
      } else {
        this.setData({
          hideModal: true
        })
      }
    },

    //当前内容顺序号
    'propCurrentIndex': function(propCurrentIndex) {
      if (propCurrentIndex === -1) {
        //-1为新增
        this.setData({
          detail: '',
          currentIndex: -1,
          imgId: '',
          imgUrl: '',
          isImg: this.data.propIsImg
        })
      } else {
        //修改
        let isImg=false
        if (this.data.propImgId){
          isImg=true
        }
        this.setData({
          detail: this.data.propContentText,
          currentIndex: this.data.propCurrentIndex,
          imgId: this.data.propImgId,
          imgUrl: this.data.propImgUrl,
          isImg: isImg
        })
        this.onEditorReady(this.data.detail)
      }
    }
  }
})