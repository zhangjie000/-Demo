var index = require("../../data/index-list.js")
//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    articles: [],
    pageIndex:1,
    pageSize:2,
    currentTypeId:0,
    hot:0,
    scrollLeft:0,
    fouceShow:false,
    goodIdex:0,
    commitSureShow:false
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
    this.ready();
    
  },
  //我要发帖
  myPost:function (){
      wx.navigateTo({
        url: '/pages/post/post',
      })
  },
  //关注
  foucsPop:function (){
   
    if (wx.getStorageSync('foucsPop') == "0"){
      wx.showToast({
        title: '取消关注',
        icon: 'none',
        duration: 2000
      })
      wx.setStorageSync('foucsPop', '1');
      this.setData({
        fouceShow:true
      })
    }else{
      wx.showToast({
        title: '已关注',
        icon: 'none',
        duration: 2000
      })
      wx.setStorageSync('foucsPop', '0')
      this.setData({
        fouceShow: false
      })
    }
    console.log(this.fouceShow)
    
  },
  //点赞
  praiseGood:function (event){  
   
    var list = wx.getStorageSync('key').articles;
    for (var k = 0; k < list.length;k++ ){     
      if (list[k].good == event.currentTarget.dataset.good){
        console.log(list[k])
        if (list[k].PraiseUsers){         
          list[k].PraiseUsers.unshift({
              "Id": 160323492,
              "Headimgurl": "/images/myHeader.jpg",
              "NickName": "魔法棒",
              "Level": null,
              "PayMoney": 0
          }) 
          list[k].Praise ++
        }else{
          list[k].PraiseUsers = [{
            "Id": 160323492,
            "Headimgurl": "/images/myHeader.jpg",
            "NickName": "魔法棒",
            "Level": null,
            "PayMoney": 0
          }]
          list[k].Praise++
        }
       
      }else {

      }
    }
    wx.setStorageSync('key', {articles:list});
    this.setData({
      articles: list,
    })
  },
  //评论
  praiseping: function (event){
    this.setData({
      commitSureShow:true
    })
  },
  //确定评论
  sumitSureTap:function (event){
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
    console.log(this.data.content)
    if (!this.data.content){
      this.setData({
        commitSureShow: false
      })
      return 
    }
    this.setData({
      commitSureShow: false
    })
    var list = wx.getStorageSync('key').articles;
    for (var k = 0; k < list.length; k++) {
      if (list[k].good == event.currentTarget.dataset.good) {
        console.log(list[k])
        if (list[k].ArticleComments) {
          list[k].ArticleComments.unshift({
            "Id": 17201444,
            "IsShowBest": 0,
            "CreateDate": Y + "-" + M + "-" + D + " " + h + ":" + m,
            "Content": "棒棒达",
            "ContentHtml": this.data.content,
            "CommentCount": 0,
            "ComUser": {
              "Id": 149481331,
              "Headimgurl": "/images/myHeader.jpg",
              "NickName": this.data.content,
              "Level": "1",
              "PayMoney": 0
            },
            "DUser": null,
            "Voice": null,
            "Images": null
          })
          list[k].CommentCount++
        } else {
          list[k].ArticleComments = [{
            "Id": 17201444,
            "IsShowBest": 0,
            "CreateDate": Y + "-" + M + "-" + D + " " + h + ":" + m,
            "Content": "棒棒达",
            "ContentHtml": "棒棒达",
            "CommentCount": 0,
            "ComUser": {
              "Id": 149481331,
              "Headimgurl": "/images/myHeader.jpg",
              "NickName": this.data.content,
              "Level": "1",
              "PayMoney": 0
            },
            "DUser": null,
            "Voice": null,
            "Images": null
          }],
            list[k].CommentCount++
        }

      } else {
      }
    }
    wx.setStorageSync('key', { articles: list });
    this.setData({
      articles: list,
    })
  },
  bindTextAreaContent: function (e) {
    this.setData({
      content: e.detail.value
    })
  },   
  // 加载数据
  ready: function () {
    
    this.setData({
      articles:index.articles.slice(0,10),
    })
  },
  moreArticle: function (event) {
    wx.showNavigationBarLoading();
    var first = (this.data.pageIndex) * this.data.pageSize;
    this.getArticle(first);
  },
  getArticle:function(first) {
    if ( (first == "undefined") || (first == null) ) {
      first = 1;
    }
    if (first > index.articles.length) {
      wx.hideNavigationBarLoading();
      return
    }
    var end = first + this.data.pageSize;
    if (end > index.articles.length) {
        end = index.articles.length;
    }
    var newArticle = index.articles.slice(first, end);
    this.setData({
      articles:this.data.articles.concat(newArticle),
      pageIndex:parseInt(this.data.pageIndex)+1
    });
    wx.hideNavigationBarLoading();
  },
  onShow:function (){   
    this.setData({
      articles: wx.getStorageSync('key').articles,
    })
  }
 
 
  
})
