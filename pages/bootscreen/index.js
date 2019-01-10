//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
   bul:true,
   isRuleTrue:false,
  dates: '2016-11-08',
  loading:false
  },
 nv:function(){
   this.setData({
     bul:true
   })
   console.log(1);
 },
  nan: function () {
    this.setData({
      bul: false
    })
    console.log(1);
  },
  onLoad: function () {
   
  },
  showRule:function(){
    this.setData({
      isRuleTrue:true
    })
  },
  hideRule: function () {
    this.setData({
      isRuleTrue: false
    })
  },
   bindDateChange: function (e) {
     console.log(e.detail.value)
    this.setData({
      dates: e.detail.value
    })
  },
  onBtnChange(e) {
    this.setData({
      loading: true
    })
    wx.navigateTo({
      url: '../index/index',
      duration: 2000
    })
    wx.showToast({
      title: '加载中...',
      icon: 'loading',
      duration: 1000,
    })
  }
})
