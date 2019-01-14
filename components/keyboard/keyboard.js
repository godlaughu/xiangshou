Component({
  options: {
    multipleSlots: true
  },
  properties: {
    "compBoo": Object
  },
  data: {
    inputWord: ''
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
    inputWord(e) {
      if (this.data.inputWord.length < 3) {
        this.setData({
          inputWord: this.data.inputWord + e.currentTarget.dataset.key
        });
      }
    },
    inputGo() {
      this.triggerEvent('onSureNum', {
        sureNum: this.data.inputWord,
        type: this.properties.compBoo.type
      });
      this.inputHidden();
    },
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