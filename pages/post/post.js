var indexList = require("../../data/index-list.js")
var app = getApp();

Page({
  data:{
    title:''
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
  },
  submitData:function (){
    var content=this.data.content
    // console.log(indexList)
    indexList.articles.unshift({
      "Title": "",
      "Id": 11296548,
      "CreateDate": "2018-01-12",
      "Click": 504,
      "ContentDesc": content,
      "IsPraise": 1,
      "Praise": 2,
      "CommentCount": 1,
      "RewardUsers": [
        {
          "Id": 454645,
          "Headimgurl": "http://wx.qlogo.cn/mmopen/tZOqj4KIx0hUglACMt0LKibI0aFfNpz7otTfNg5BmHjvic4QFL6gZ5oFcYQQuso90tZt5eZcibgwbpbnpakSR4X7UE6na6oVP3z/0",
          "NickName": "攻城狮-周明秀",
          "Level": null,
          "PayMoney": 0
        }
      ],
      "PraiseUsers": [
        {
          "Id": 160323492,
          "Headimgurl": "http://wx.qlogo.cn/mmopen/zQAyDltmadBI6069BKPDvoBjtvPSnIakqaMmTvt1HeAVY0Xbf51S6pMmSFMJsEHiaCLRogDQdqLriaRyNzuoRsHaLNs2icLtQ8R/132",
          "NickName": "爱你美",
          "Level": null,
          "PayMoney": 0
        },
        {
          "Id": 186739385,
          "Headimgurl": "http://wx.qlogo.cn/mmopen/7hINACNJlZhpZpBJfiaiabIQk7IV5fI3duRxfDaRTLT55kGhjDb8eKOX8iagMuFIMWbtFicFX10yY5n8sQNl7Tof00cnkxI2G6Fn/132",
          "NickName": "冰心",
          "Level": null,
          "PayMoney": 0
        }
      ],
      "Images": null,
      "ArticleComments": [{
        "Id": 17201444,
        "IsShowBest": 0,
        "CreateDate": "9-13",
        "Content": "棒棒达",
        "ContentHtml": "棒棒达",
        "CommentCount": 0,
        "ComUser": {
          "Id": 149481331,
          "Headimgurl": "http://wx.qlogo.cn/mmopen/7hINACNJlZjQmHibJCwAVwDfVT028PH3ibMGJEjOv5Izs7dHSwsACdXAnNficBLia61qpja4ObSULy2oRA31uXyt1UATKM38Um56/132",
          "NickName": "世态炎凉",
          "Level": "1",
          "PayMoney": 0
        },
        "DUser": null,
        "Voice": null,
        "Images": null
      }],
      "User": {
        "Id": 454645,
        "Headimgurl": "http://wx.qlogo.cn/mmopen/tZOqj4KIx0hUglACMt0LKibI0aFfNpz7otTfNg5BmHjvic4QFL6gZ5oFcYQQuso90tZt5eZcibgwbpbnpakSR4X7UE6na6oVP3z/132",
        "NickName": "攻城狮-周明秀",
        "Level": "3",
        "PayMoney": 0
      },

      "Voice": {
        "Id": "3221",
        "DownLoadFile": "http://shop.vzan.com/t.mp3",
        "VoiceTime": "313",
        "TransFilePath": "http://shop.vzan.com/t.mp3"
      },

    })
    console.log(indexList)
    wx.setStorageSync("key", indexList)
    // console.log(this.data.title)
    // console.log(this.data.content)
  
    wx.navigateBack({
      delta: 2
    })
    console.log(1111)
  },
  bindTextAreaTitle: function (e) {
    console.log(e.detail.value)
    this.setData({
      title: e.detail.value
    })
  },   
  bindTextAreaContent: function (e) {
    console.log(e.detail.value)
    this.setData({
      content: e.detail.value
    })
  },   
  onReady:function(){
    // 页面渲染完成
    
  },
  onShow:function(){
    // 页面显示
    
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  }
})