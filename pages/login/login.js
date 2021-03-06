// pages/login/login.js
import { request } from "../../request/index"
import regeneratorRuntime from '../../lib/runtime/runtime.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    requestUrl: {
      login: '/sso/login'
    },
    loginParams: {
      username: '',
      password: ''
    }
  },
  userNameInput (e) {
    this.setData({
      'loginParams.username': e.detail.value,
    })
  },
  passwordInput (e) {
    this.setData({
      'loginParams.password': e.detail.value,
    })
  },
  //登录
  async login (obj) {
    const res = await request(this.data.requestUrl.login, this.data.loginParams, 'POST')
    console.log(res)
    wx.showToast({
      title: res.message,
      icon: 'none'
    })
    if (res.code !== 200) {
      return
    }
    wx.setStorageSync("token", res.data.token)
    wx.setStorageSync('userInfo', this.data.loginParams)
    wx.switchTab({
      url: '/pages/index/index'
    })
  },
  //返回登录选择
  toBeforLogin () {
    wx.redirectTo({
      url: '/pages/beforLogin/index'
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