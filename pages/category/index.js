// pages/category/index.js
import {request} from '../../request/index'
import regeneratorRuntime from '../../lib/runtime/runtime.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    requestUrl: {
      //商品分类
      productCateList: '/home/productCateList/',
      //人气推荐商品
      hotProductList: '/home/hotProductList',
      //新品推荐商品
      newProductList: '/home/newProductList',
      //(综合)推荐商品
      recommendProductList: '/home/recommendProductList'
    },
    //头部导航
    topIndex: [
      {id:0, name: '综合', class: 'index0'},
      {id:1, name: '最新', class: 'index1'},
      {id:2, name: '最热', class: 'index2'}
    ],
    //商品搜索参数
    params0: {
      pageNum: 1,
      pageSize: 6
    },
    params1: {
      pageNum: 1,
      pageSize: 6
    },
    params2: {
      pageNum: 1,
      pageSize: 6
    },
    //活跃的头部导航
    activeIndex: 0,
    // 数据列表
    recommendProductList: [],
    newProductList: [],
    hotProductList: [],
    //显示的数据列表
    showList: []
  },
  async getProductCateList (path) {
    const res = await request(`${this.data.requestUrl.productCateList}${path}`, {}, 'get')
    console.log(res)
  },
    // 人气推荐商品
  async getHotProductList () {
    const res = await request(this.data.requestUrl.hotProductList, this.data.params2, 'get')
    console.log(res)
    if (res.data.length === 0) {
      wx.showToast({
        title: '没有跟多了...',
      })
      return
    }
    const arr = this.data.hotProductList
    this.setData({
      hotProductList: arr.concat(res.data)
    })
  },
  // 新品推荐商品
  async getNewProductList () {
    const res = await request(this.data.requestUrl.newProductList, this.data.params1, 'get')
    console.log(res)
    if (res.data.length === 0) {
      wx.showToast({
        title: '没有跟多了...',
      })
      return
    }
    const arr = this.data.newProductList
    this.setData({
      newProductList: arr.concat(res.data)
    })
  },
  // (综合)推荐商品
  async getRecommendProductList () {
    const res = await request(this.data.requestUrl.recommendProductList, this.data.params0, 'get')
    if (res.data.length === 0) {
      wx.showToast({
        title: '没有跟多了...',
      })
      return
    }
    const arr = this.data.recommendProductList
    this.setData({
      recommendProductList: arr.concat(res.data)
    })
    console.log(this.data.recommendProductList)
  },
  //点击头部导航
  handleItemTap (e) {
    console.log(e.currentTarget.dataset)
    this.setData({
      activeIndex: e.currentTarget.dataset.index
    })
    if (this.data.activeIndex === 0) {
      this.setData({
        showList: this.data.recommendProductList
      })
    } else if (this.data.activeIndex === 1) {
      this.setData({
        showList: this.data.newProductList
      })
    } else {
      this.setData({
        showList: this.data.hotProductList
      })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: async function (options) {
    await this.getRecommendProductList()//综合
    this.getNewProductList()//最新
    this.getHotProductList()//人气(最热)
    this.getProductCateList(1)
    this.setData({
      showList: this.data.recommendProductList
    })
    console.log(123)
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
  onReachBottom: async function () {
    if (this.data.activeIndex === 0) {
      const obj = this.data.params0
      obj.pageNum ++
      this.setData({
        params0: obj
      })
      await this.getRecommendProductList()
      this.setData({
        showList: this.data.recommendProductList
      })
    } else if (this.data.activeIndex === 1) {
      const obj = this.data.params1
      obj.pageNum ++
      this.setData({
        params1: obj
      })
      await this.getNewProductList()
      this.setData({
        showList: this.data.newProductList
      })
    } else {
      const obj = this.data.params2
      obj.pageNum ++
      this.setData({
        params2: obj
      })
      await this.getHotProductList()
      this.setData({
        showList: this.data.hotProductList
      })
    }
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})