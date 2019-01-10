//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
   bul:true,
   messageData: false,
   loading: false,
    birthday: ''
  },
  onLoad: function () {
   
  },
  nv: function () {
    this.setData({
      bul: true
    })
  },
  nan: function () {
    this.setData({
      bul: false
    })
  },
  onBtnChange(e) {
    this.setData({
      loading: true
    })
    wx.switchTab({
      url: '../index/index',
      success: function (e) {
        var page = getCurrentPages().pop();
        if (page == undefined || page == null) return;
        page.onLoad();
      } 
    })
      wx.showToast({
        title: '加载中...',
        icon: 'loading',
        duration: 1000,
      })
  },
  onShow: function(e) {
    this.onLoad();
  }
})
