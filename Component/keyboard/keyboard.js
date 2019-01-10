// Component/keyboard/keyboard.js
Component({
  /**
   * 组件的属性列表
   */
  options:{
    multipleSlots: true
  },
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    inputPassword: '', //输入的密码
    passwordInputHidden: false,//hidden是true 默认隐藏
  },

  /**
   * 组件的方法列表
   */
  methods: {
    inputPassword(e) {
      //键盘输入的密码 赋值给inputPassword
      
      this.data.inputPassword = this.data.inputPassword + e.currentTarget.dataset.key;
      this.setData({
        inputPassword: this.data.inputPassword
        });
     
      //当输入密码正确时   
    },
    passwordInputGo(){
      this.setData({
        inputPassword: this.data.inputPassword,    
        passwordInputHidden: !this.data.passwordInputHidden           
      });
    },
    passwordInputHidden() {
      this.setData({
        passwordInputHidden: !this.data.passwordInputHidden  //取反 打开关闭小键盘
      });
      this.setData({
        inputPassword: ''
      });
    },
    clear() {
      var index = this.data.inputPassword.length;
      if (index > 0) {
        var inputPassword = this.data.inputPassword.substr(0, index - 1);
        this.setData({
          inputPassword: inputPassword
        });
      }
    },

  }
})
