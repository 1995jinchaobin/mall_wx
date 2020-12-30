let ajaxTimes = 0 //发送的请求次数
export const request = (url, data, method) => {
  ajaxTimes++
  wx.showLoading({
    title: '加载中...',
  })
  const baseUrl = "http://192.168.1.165:8085"
  return new Promise((resolve, reject) => {
    wx.request({
      data: {...data},
      method,
      header: {
        "content-type": "application/x-www-form-urlencoded",
        "token": wx.getStorageSync('token'),
        "wxType":"wxType"
      },
      url: baseUrl + url,
      success: (res) => {
        console.log(res)
        resolve(res.data)
      },
      fail: (err) => {
        console.log(err)
        reject(err)
      },
      //接口调用结束的回调函数（调用成功、失败都会执行）
      complete: ()=> {
        ajaxTimes--
        if (ajaxTimes === 0) {
          wx.hideLoading()
        }
      }
    })
  })
}