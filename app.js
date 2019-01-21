//app.js
App({
  onLaunch() {
    let openId, nickName;
    // 登录
    wx.login({
      success: res => {
        wx.request({
          url: 'https://api.weixin.qq.com/sns/jscode2session',
          data: {
            appid: 'wxbaa12aa38c7c01b9',
            secret: '1a12fa9bec9ef347b9553eec44042500',
            js_code: res.code,
            grant_type: 'authorization_code'
          },
          method: 'GET',
          success: res => {
            openId = res.data.openid;
            wx.getSetting({ // 获取用户信息
              success: res => {
                if (res.authSetting['scope.userInfo']) {
                  wx.getUserInfo({
                    success: res => {
                      nickName = res.rawData.nickName;
                      if (this.userInfoReadyCallback) {
                        this.userInfoReadyCallback(res)
                      }
                      // wx.request({
                      //   url: 'http://127.0.0.1:3200/',
                      //   // method: 'GET',
                      //   method: 'POST',
                      //   data: {,,,asdssssss
                      //     openId,
                      //     nickName
                      //   },
                      //   header: {
                      //     'content-type': 'application/json' // 默认值
                      //   },
                      //   success: (res) => {
                      //     console.log(res);
                      //   }
                      // })
                    }
                  })
                }
              }
            })
            // wx.request({
            //   url: 'http://127.0.0.1:3200/',
            //   method: 'POST',
            //   data: {
            //     openid: res.data.openid
            //   },
            //   header: {
            //     'content-type': 'application/json' // 默认值
            //   },
            //   success: (res) => {
            //     console.log(res);
            //   }
            // })
          }
        })
      }
    })
  },
  globalData: {
    userInfo: null
  }
})