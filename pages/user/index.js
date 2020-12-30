// pages/user/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    orderFenleiList: [
      { id: 1, label: '待付款', url: '/1' },
      { id: 2, label: '待发货', url: '/2' },
      { id: 3, label: '待收货', url: '/3' },
      { id: 4, label: '待评价', url: '/4' },
      { id: 5, label: '退货', url: '/5' }
    ],
    login: false
  },
  //查看全部按钮
  lookAll () {
    console.log('查看全部')
  },
  //我的订单按钮
  myOrder () {
    console.log('我的订单')
  },
  //未登录按钮
  toLogin () {
    wx.clearStorage()
    wx.navigateTo({
      url: '/pages/beforLogin/index'
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.getStorage({
      key: 'token',
      success: (res) => {
        console.log(res)
        if (res) {
          this.setData({
            login: true
          })
        }
      }
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