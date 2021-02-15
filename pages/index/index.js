// index.js
// 获取应用实例
const app = getApp()

Page({

  goToRecruiter: function(e){
    console.log('event', e)
    wx.navigateTo ({
      url: `/pages/recruiter/recruiterProfile?id=${e.currentTarget.id}`,
  });
    
  },

  seeNewJobs: function(e){
    console.log('event', e)
    wx.navigateTo ({
      url: `/pages/recruiter/previewJobs?id=${e.currentTarget.id}`,
  });
    
  },
 
})
