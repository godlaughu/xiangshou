Component({
  /**
   * 组件的属性列表
   */
  properties: {
    
  },

  /**
   * 组件的初始数据
   */
  data: {
    date: '2003-06-01',
    endDate: '2019-01-09',
    showDate: '2003年06月01日'
  },

  /**
   * 组件的方法列表
   */
  methods: {
    bindDateChange(e) {
      let detDate = new Date();
      this.setData({
        endDate: detDate.getFullYear() + '-' + detDate.getMonth() + 1 + '-' + detDate.getDate()
      })
      let showDateArr = e.detail.value.split('-');
      this.setData({
        date: e.detail.value,
        showDate: showDateArr[0] + '年' + showDateArr[1] + '月' + showDateArr[2] + '日'
      })
    }
  }
})
