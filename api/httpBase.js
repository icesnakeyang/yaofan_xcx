function post(url, params) {
  return new Promise((resolve, reject) => {
    wx.request({
      url: url,
      header: {
        'content-type': 'application/json'
      },
      method: 'POST',
      data: params,
      dataType: 'json',
      success: function(res) {
        if (res.data.code === 0) {
          resolve(res.data)
        } else {
          reject(res.data.code)
        }
      },
      fail: function(error) {
        reject(error)
      },
      complete: function(res) {},
    })
  })
}

function postToken(url, params) {
  let token = wx.getStorageSync('yaofan_token')
  return new Promise((resolve, reject) => {
    wx.request({
      url: url,
      header: {
        'content-type': 'application/json',
        'token': token
      },
      method: 'POST',
      data: params,
      dataType: 'json',
      success: function(res) {
        if (res.data.code === 0) {
          resolve(res.data)
        } else {
          reject(res.data.code)
        }
      },
      fail: function(error) {
        reject(error)
      },
      complete: function(res) {},
    })
  })
}

function http(url, params) {
  return new Promise((resolve, reject) => {
    wx.request({
      url: url,
      header: {
        'content-type': 'application/json'
      },
      method: 'POST',
      data: params,
      dataType: 'json',
      success: (res) => {
        resolve(res)
      },
      fail: (err) => {
        reject(err)
      }
    })
  })
}

module.exports = {
  post,
  postToken,
  http
}