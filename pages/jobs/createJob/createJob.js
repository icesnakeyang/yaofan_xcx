// pages/jobs/createJob/createJob.js
import api from '../../../api/api.js'
import tools from '../../../utils/dateTools.js'
import Notify from '../../../vant-weapp/notify/notify.js';
import MsgBox from '../../../utils/msgBox/msgBox.js'

Page({

    /**
     * 页面的初始数据
     */
    data: {
        title: '',
        endDate: '',
        endTime: '',
        point: 50,
        detail: '',
        teamId: '',
        teamName: '',
        isSaving: false,
        contentList:[]
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        wx.removeStorageSync('endDateTime')
        let now = new Date()
        let endDate = tools.momentTime(now, 'S')
        let endTime = tools.momentTime(now, 'TIME')
        this.setData({
            endDate: endDate,
            endTime: endTime
        })

        // api.apiGetRich().then((res) => {
        //     let content = res.data.data.note.content

        //     content = content.replace(/&quot;/g, '"');
        //     content = content.replace(/&amp;/g, '&');
        //     content = content.replace(/&lt;/g, '<');
        //     content = content.replace(/&gt;/g, '>');
        //     content = content.replace(/&nbsp;/g, ' ');
        //     content = content.replace(/<p/gi, '<p class="p_class" ');
        //     content = content.replace(/<span/gi, '<span class="span_class" ');
        //     content = content.replace(/<img/gi, '<img class="img_class" ');

        //     this.setData({
        //         detail: content
        //     })
        // })
    },

    onTitle(e) {
        this.setData({
            title: e.detail
        })
    },

    onDetail(e) {
        this.setData({
            detail: e.detail.html
        })
    },

    onRemark(e) {},

    onPoint(e) {
        this.setData({
            point: e.detail
        })
    },

    onEndDate() {
        let data = {
            date: this.data.endDate,
            time: this.data.endTime
        }
        wx.setStorageSync('endDateTime', data)
        wx.navigateTo({
            url: './endDate/endDate',
        })
    },

    onSave() {
        if (!this.data.teamId) {
            wx.showToast({
                title: '请选择团队',
                icon: 'none'
            })
            return
        }
        if (!this.data.title) {
            wx.showToast({
                title: '请输入任务标题',
                icon: 'none'
            })
            return
        }
        if (!this.data.detail) {
            wx.showToast({
                title: '请输入任务详情',
                icon: 'none'
            })
            return
        }
        let params = {
            title: this.data.title,
            point: this.data.point,
            detail: this.data.detail,
            endDateWx: this.data.endDate,
            endTimeWx: this.data.endTime,
            teamId: this.data.teamId
        }

        this.setData({
            isSaving: true
        })

        api.apiCreateTask(params).then((res) => {
            wx.showToast({
                title: '创建成功'
            })
            wx.switchTab({
                url: '/pages/jobs/myJob/myJobList/myJobList',
            })
        }).catch((error) => {
            Notify(MsgBox.showMsg(error));
        })
    },

    onSelectTeam() {
        let data = {
            date: this.data.endDate,
            time: this.data.endTime
        }
        // wx.setStorageSync('endDateTime', data)
        wx.navigateTo({
            url: './selectTeam/selectTeam',
        })
    },

    btShowModal() {
        this.setData({
            content: {
                currentIndex: -1,
                currentStatus: true,
                isImg: true
            }
        })
    },

    btUploadImg() {
        let _this = this
        wx.chooseImage({
            success: function (res) {
                var tempFilePaths = res.tempFilePaths
                wx.uploadFile({
                    url: 'https://www.wegou1688.com/tools/guidePhotoUpload',
                    filePath: tempFilePaths[0],
                    name: 'file',
                    header: {
                        'content-type': 'multipart/form-data',
                        'token': wx.getStorageSync('smartyou_token')
                    },
                    success: function (res) {
                        var jsonObj = JSON.parse(res.data);
                        _this.setData({
                            logoImgId: jsonObj.data.fileLogId,
                            logoImgUrl: jsonObj.data.filename
                        })

                        //do something
                    },
                    fail: function (err) {}
                })
            },
        })
    },

    onMyEvent(e) {
        let outData = e.detail
        /**
         * 修改或新增
         */
        let content = ''
        if (outData.imgId) {
          //有图片
          content = {
            imgId: outData.imgId,
            imgUrl: outData.imgUrl
          }
        }
        if (outData.detail) {
          //有文字
          content = {
            detail: outData.detail
          }
        }
        if (content) {
          let list = this.data.contentList

          if (outData.currentIndex === -1) {
            //新增
            list.push(content)
          } else {
            //修改
            /**
             * 增加到要编辑的内容列表序号里去
             * 删除当前内容
             */
            list.splice(outData.currentIndex, 1, content)
          }
          this.setData({
            content: {
              currentStatus: false
            },
            contentList: list
          })
        } else {
          this.setData({
            content: {
              currentStatus: false
            }
          })
        }
      },

      btShowTextModal() {
        this.setData({
          content: {
            currentStatus: true,
            currentIndex: -1,
            isImg: false
          }
        })
      },

      btUp(e) {
        let cIndex = e.currentTarget.dataset.index
        let list = this.data.contentList
        if (cIndex === 0) {
          return
        }
        let c1 = list[cIndex]
        let c2 = list[cIndex - 1]
        list.splice(cIndex, 1, c2)
        list.splice(cIndex - 1, 1, c1)
        this.setData({
          contentList: list
        })
      },
    
      /**
       * 把当前内容下移一个顺序
       */
      btDown(e) {
        let cIndex = e.currentTarget.dataset.index
        let list = this.data.contentList
        if ((cIndex + 1) === list.length) {
          return
        }
        let c1 = list[cIndex]
        let c2 = list[cIndex + 1]
        list.splice(cIndex, 1, c2)
        list.splice(cIndex + 1, 1, c1)
        this.setData({
          contentList: list
        })
      },
    
      /**
       * 删除当前内容
       */
      btDelete(e) {
        let that = this
        wx.showModal({
          title: '提示',
          content: '确定要删除该内容吗？',
          success(res) {
            if (res.confirm) {
              let cIndex = e.currentTarget.dataset.index
              let list = that.data.contentList
              list.splice(cIndex, 1)
              that.setData({
                contentList: list
              })
            } else if (res.cancel) {}
          }
        })
      },
    
      /**
       * 修改当前内容
       */
      btUpdate(e) {
        let cIndex = e.currentTarget.dataset.index
        let content = {
          currentStatus: true,
          currentIndex: e.currentTarget.dataset.index,
          detail: this.data.contentList[cIndex].detail,
          imgId: this.data.contentList[cIndex].imgId,
          imgUrl: this.data.contentList[cIndex].imgUrl
        }
        this.setData({
          content: content
        })
      },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {
        let teamId = wx.getStorageSync('selectedTeamId')
        let teamName = wx.getStorageSync('selectedTeamName')
        let endDateTime = wx.getStorageSync('endDateTime')
        if (endDateTime) {
            this.setData({
                endDate: endDateTime.date,
                endTime: endDateTime.time
            })
        } else {}
        if (teamId) {
            this.setData({
                teamId,
                teamName
            })
        }
    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {},

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})