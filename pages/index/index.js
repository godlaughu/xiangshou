const app = getApp()

Page({
  data: {
    date: '2000-01-01',
    endDate:'2019-01-09'
  },
  onLoad:function(){
    let date = new Date();
    this.setData({
      endDate: date.getFullYear() + '-' + date.getMonth() + 1 + '-' + date.getDate()
    })
  },
  bindDateChange(e) {
    this.setData({
      date: e.detail.value
    })
  }
})
