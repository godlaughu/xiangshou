import { data } from "../../JSON.js"

Page({

  /**
   * 页面的初始数据
   */
  data: {
    save: data.guide,
    course:data.guide,
    objective: 10,
    position: 0,
    difficulty: 10,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(this.data.course)
  },
  selectob(e){
    this.setData({
      objective: e.currentTarget.dataset.ob
    }),
    this.select();
  },
  selectpo(e) {
    this.setData({
      position: e.currentTarget.dataset.po
    }),
      this.select();
  },
  selectdi(e) {
    this.setData({
      difficulty: e.currentTarget.dataset.di
    }),
      this.select();
  },
  select() {
    let b=[];
    let a = this.data.save;
    
    for (let i = 0; i < a.length; i++) {
      if (a[i].objective == this.data.objective || this.data.objective == 10) {
        if (a[i].position == this.data.position || this.data.position == 0) {
          if (a[i].difficulty == this.data.difficulty || this.data.difficulty == 10 ) {
            b.push(a[i])
          }
        }
      }
    } 
    this.setData({
     course:b
    })
    
  }
}
  
  )
