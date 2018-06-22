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
    var content=this.data.content;
    var timestamp = Date.parse(new Date());
    timestamp = timestamp / 1000;    
    //获取当前时间  
    var n = timestamp * 1000;
    var date = new Date(n);
    //年  
    var Y = date.getFullYear();
    //月  
    var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1);
    //日  
    var D = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
    //时  
    var h = date.getHours();
    //分  
    var m = date.getMinutes();
    var articlesList=[];
    if (wx.getStorageSync("key")){
      var articlesList = wx.getStorageSync("key")
      articlesList.articles.unshift({
        "Title": "",
        "Id": 11296548,
        "CreateDate": Y + "-" + M + "-" + D + " " + h + ":" + m,
        "Click": 0,
        "ContentDesc": content,
        "IsPraise": 1,
        "Praise": 0,
        "good": articlesList.articles.length,
        "CommentCount": 0,
        "RewardUsers": [
          {
            "Id": 454645,
            "Headimgurl": "/images/myHeader.jpg",
            "NickName": "魔法棒",
            "Level": null,
            "PayMoney": 0
          }
        ],
        "PraiseUsers": null,
        "Images": null,
        "ArticleComments": null,
        "User": {
          "Id": 454645,
          "Headimgurl": "/images/myHeader.jpg",
          "NickName": "魔法棒",
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
      console.log(articlesList)
      wx.setStorageSync("key", articlesList)   
    }else{
      indexList.articles.unshift({
        "Title": "",
        "Id": 11296548,
        "CreateDate": Y + "-" + M + "-" + D + " " + h + ":" + m,
        "Click": 0,
        "ContentDesc": content,
        "IsPraise": 1,
        "Praise": 0,
        "good": indexList.articles.length,
        "CommentCount": 0,
        "RewardUsers": [
          {
            "Id": 454645,
            "Headimgurl": "/images/myHeader.jpg",
            "NickName": "魔法棒",
            "Level": null,
            "PayMoney": 0
          }
        ],
        "PraiseUsers": null,
        "Images": null,
        "ArticleComments": null,
        "User": {
          "Id": 454645,
          "Headimgurl": "/images/myHeader.jpg",
          "NickName": "魔法棒",
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
      wx.setStorageSync("key", indexList)
    }
   
    wx.navigateBack({
      delta: 2
    })
    
  },
  bindTextAreaTitle: function (e) {
    this.setData({
      title: e.detail.value
    })
  },   
  bindTextAreaContent: function (e) {
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