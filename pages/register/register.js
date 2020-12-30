import { request } from "../../request/index"
import regeneratorRuntime from '../../lib/runtime/runtime.js'
// pages/register/register.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    requestUrl: {
      //验证码获取
      getAuthCode: '/sso/getAuthCode',
      //注册
      register: '/sso/register',
      //登录
      login: '/sso/login'
    },
    //注册参数
    registerParams: {
      telephone: '',
      authCode: '',
      username: '',
      password: ''
    },
    getAuthCodeParams: {
      telephone: ''
    },
    loginParams: {}
  },
  telephoneInput (e) {
    console.log(e.detail.value)
    this.setData({
      'registerParams.telephone': e.detail.value,
      'getAuthCodeParams.telephone': e.detail.value
    })
  },
  codeInput (e) {
    this.setData({
      'registerParams.authCode': e.detail.value
    })
  },
  userNameInput (e) {
    this.setData({
      'registerParams.username': e.detail.value
    })
  },
  passwordInput (e) {
    this.setData({
      'registerParams.password': e.detail.value
    })
  },
  async codeSet () {
    console.log('发送验证码')
    if (this.data.getAuthCodeParams.telephone.length !== 11) {
      wx.showToast({
        title: '请填写正确的手机号',
        icon: 'none'
      })
      return
    }
    const res = await request(this.data.requestUrl.getAuthCode, this.data.getAuthCodeParams, 'GET')
    console.log(res)
    this.setData({
      'registerParams.authCode': res.data
    })
  },
  //注册
  async register () {
    const res = await request(this.data.requestUrl.register, this.data.registerParams, 'POST')
    console.log(res)
    wx.showToast({
      title: res.message,
      icon: 'none'
    })
    if (res.code !== 200) {
      return
    }
    setTimeout(() => {
      wx.showLoading({
        title: '正在登录',
        icon: 'none'
      })
    }, 1500)
    const obj = {
      username: this.data.registerParams.username,
      password: this.data.registerParams.password
    }
    this.data.loginParams = obj
    setTimeout(() => {
      this.login(obj)
    }, 3000)
  },
  //登录
  async login (obj) {
    const res = await request(this.data.requestUrl.login, obj, 'POST')
    console.log(res)
    wx.setStorageSync("token", res.data.token)
    wx.setStorageSync('userInfo', this.data.loginParams)
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