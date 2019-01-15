const date = new Date()
const year = date.getFullYear() - 18
const years = []
const months = []
const days = []

for (let i = 1959; i <= date.getFullYear(); i++) {
  years.push(i)
}

for (let i = 1; i <= 12; i++) {
  months.push(i)
}

for (let i = 1; i <= 31; i++) {
  days.push(i)
}
Component({
  properties: {
    "compBoo": Object
  },
  data: {
    years,
    months,
    days,
    showDate: '1996年06月16日',
    value: [37, 5, 15]
  },
  methods: {
    numStr(val) {
      if (val < 10) {
        val = '0' + val;
      }
      return val;
    },
    changeDate(e) {
      const val = e.detail.value
      this.setData({
        year: this.data.years[val[0]],
        month: this.data.months[val[1]],
        day: this.data.days[val[2]]
      })
    },
    sureDate(e) {
      this.triggerEvent('onSureNum', {
        showDate: this.data.showDate,
        type: this.properties.compBoo.type
      });
      this.compHid();
    },
    compHid() {
      let compBoo = {
        boo: 0,
        type: null,
        text: null
      }
      this.triggerEvent('onCompHid', {
        compBoo
      });
    },
    changeDate(e) {
      this.setData({
        endDate: date.getFullYear() + '-' + date.getMonth() + 1 + '-' + date.getDate()
      })
      let showDateArr = e.detail.value;
      this.setData({
        showDate: this.numStr(this.data.years[showDateArr[0]]) + '年' + this.numStr(this.data.months[showDateArr[1]]) + '月' + this.numStr(this.data.days[showDateArr[2]]) + '日'
      })
    },
  }
})