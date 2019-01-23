//index.js
//获取应用实例
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      './images/timg.jpg',
      './images/timg.jpg',
      './images/timg.jpg'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 2000,
    duration: 1000
  },
  changeIndicatorDots(e) {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },
  changeAutoplay(e) {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },
  intervalChange(e) {
    this.setData({
      interval: e.detail.value
    })
  },
  durationChange(e) {
    this.setData({
      duration: e.detail.value
    })
  },
  classTo() {
    wx.navigateTo({
      url: '../course/index'
    })
  },
  communityTo() {
    wx.navigateTo({
      url: '../shoushen/shoushenying'
    })
  },
  planTo() {
    wx.navigateTo({
      url: '../planall/planall'
    })
  }
})