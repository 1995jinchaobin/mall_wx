// pages/beforLogin/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    wxBtn: true
  },
  changeLogin () {
    const boolean = this.data.wxBtn
    this.setData({
      wxBtn: !boolean
    })
  },
  //手机登录
  phoneLogin () {
    wx.redirectTo({
      url: '/pages/login/login'
    })
  },
  //微信登录
  wxLogin () {
    wx.login({
      success (res) {
        console.log(res)
        if (res.code) {
          //发起网络请求
          // wx.request({
          //   url: '',
          //   data: {
          //     code: res.code
          //   }
          // })
        } else {
          console.log('登录失败！' + res.errMsg)
        }
      }
    })
    wx.getUserInfo({
      success: function (res) {
        // var userInfo = res.userInfo
        // var nickName = userInfo.nickName
        // var avatarUrl = userInfo.avatarUrl
        // var gender = userInfo.gender //性别 0：未知、1：男、2：女
        // var province = userInfo.province
        // var city = userInfo.city
        // var country = userInfo.country
        console.log(res)
      }
    })
  },
  //注册
  toRegidster () {
    wx.redirectTo({
      url: '/pages/register/register'
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
  onPullDownRefresh: function () {

  },

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