Page({
  data:{

  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    // 获取用户信息

  },
  studyDetails: function (event) {
    wx.navigateTo({
      url: "/pages/studyDetails/studyDetails",

    })
  },
  myPost:function (){
    wx.navigateTo({
      url: "/pages/myPost/myPost",

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