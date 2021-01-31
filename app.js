// app.js
App({
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    wx.BaaS = requirePlugin('sdkPlugin')
    //让插件帮助完成登录、支付等功能
    wx.BaaS.wxExtend(wx.login,
     wx.getUserInfo,
     wx.requestPayment)

    wx.BaaS.init('4e7717546a5d3f27c745')
    wx.BaaS.auth.loginWithWechat() // 静默登录

    // 登录
    
    // 获取用户信息
    
  },
  globalData: {
    userInfo: null
  }
})
