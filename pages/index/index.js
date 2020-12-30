// pages/index/index.js
import {request} from '../../request/index'
import regeneratorRuntime from '../../lib/runtime/runtime.js'
Page({
  /**
   * 页面的初始数据
   */
  data: {
    requestUrl: {
      // 首页内容
      home: '/home/content'
    },
    //广告列表(轮播图)
    advertiseList: [],
    //品牌推荐
    brandList: []
  },
  //首页内容
  async getHomeContentList () {
    const res = await request(this.data.requestUrl.home, {}, 'get')
    console.log(res)
    this.setData({
      advertiseList: res.data.advertiseList,
      brandList: res.data.brandList
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getHomeContentList()
    // this.getHotProductList()
    // this.getNewProductList()
    // this.getRecommendProductList()
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