Component({
  options: {
    multipleSlots: true
  },
  properties: {
    "compBoo": Object
  },
  data: {
    inputWord: '',
    txtBoo: false
  },
  ready() {
    let unit = null;
    switch (this.properties.compBoo.type) {
      case 'height':
        unit = 'cm';
        break;
      case 'weightNow':
      case 'weightTarget':
        unit = 'kg';
        break;
    }
    this.setData({
      unit
    });
  },
  methods: {
    //信息输入
    inputWord(e) {
      if (this.data.inputWord.length < 3) {
        this.setData({
          inputWord: this.data.inputWord + e.currentTarget.dataset.key
        });
      }
    },
    //组件传参
    inputGo() {
      if (this.data.inputWord) {
        this.triggerEvent('onSureNum', {
          sureNum: this.data.inputWord,
          type: this.properties.compBoo.type
        });
        this.inputHidden();
      } else {
        wx.showToast({
          title: '内容不能为空',
          image: '../../images/warn.png',
          duration: 1000,
          mask: true
        })
      }
    },
    //页面隐藏
    inputHidden() {
      let compBoo = {
        boo: 0,
        type: null,
        text: null
      }
      this.triggerEvent('onCompHid', {
        compBoo
      });
    },
    clear() {
      var index = this.data.inputWord.length;
      if (index > 0) {
        var inputWord = this.data.inputWord.substr(0, index - 1);
        this.setData({
          inputWord: inputWord
        });
      }
    }
  }
})