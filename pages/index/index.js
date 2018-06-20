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
    scrollLeft:0
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
  
 
 
  
})
