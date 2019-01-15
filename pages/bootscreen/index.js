const app = getApp()
Page({
  data: {
    bul: true,
    compBoo: {
      boo: true,
      type: null,
      text: null
    },
    birthTxt: "--年--月--日",
    heightTxt: "--",
    weightNowTxt: "--",
    weightTargetTxt: "--",
    loading: false,
  },
  wellDown() {
    if (this.data.heightTxt.indexOf('-') < 0 && this.data.weightTargetTxt.indexOf('-') < 0 && this.data.weightNowTxt.indexOf('-') < 0 && this.data.birthTxt.indexOf('-') < 0) {
      this.setData({
        loading: true
      })
    }
  },
  //弹出个人数据框
  showComp: function(e) {
    let compBoo = {};
    switch (e.currentTarget.dataset.key) {
      case '生日':
        compBoo.boo = 1;
        compBoo.type = 'birth';
        compBoo.text = '生日';
        break;
      case '身高':
        compBoo.boo = 2;
        compBoo.type = 'height';
        compBoo.text = '您的身高'
        break;
      case '当前体重':
        compBoo.boo = 2;
        compBoo.type = 'weightNow';
        compBoo.text = '当前体重'
        break;
      case '目标体重':
        compBoo.boo = 2;
        compBoo.type = 'weightTarget';
        compBoo.text = '目标体重'
        break;
    }
    this.setData({
      compBoo
    });
  },
  compHidden: function(e) {
    this.setData({
      compBoo: e.detail.compBoo
    });
  },
  //渲染身高体重数据
  sureNumber(e) {
    switch (e.detail.type) {
      case 'height':
        this.setData({
          heightTxt: e.detail.sureNum
        });
        break;
      case 'weightNow':
        this.setData({
          weightNowTxt: e.detail.sureNum
        });
        break;
      case 'weightTarget':
        this.setData({
          weightTargetTxt: e.detail.sureNum
        });
        break;
    }
    this.wellDown();
  },
  //渲染生日数据
  sureBirth(e) {
    this.setData({
      birthTxt: e.detail.showDate
    });
    this.wellDown();
  },
  //切换性别头像
  nv: function() {
    this.setData({
      bul: true
    })
  },
  nan: function() {
    this.setData({
      bul: false
    })
  },
  //页面跳转
  onBtnChange(e) {
    wx.switchTab({
      url: '../index/index',
      success: function(e) {
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
  },
  goIndex() {
    wx.switchTab({
      url: '../index/index',
      success: function(e) {
        var page = getCurrentPages().pop();
        if (page == undefined || page == null) return;
        page.onLoad();
      }
    })
  }
})