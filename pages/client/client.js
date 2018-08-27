Page({
  /**
   * 页面的初始数据
   */
  data: {},
  lower: function() {
    var cont = 50 //合并请求的数据
    if (cont.length >= 100) {
      wx.showToast({
        //期间为了显示效果可以添加一个过度的弹出框提示“加载中”
        title: '我也是有底线的',
        icon: 'success',
        duration: 300
      })
      return false
    } else {
      wx.showLoading({
        //期间为了显示效果可以添加一个过度的弹出框提示“加载中”
        title: '加载中',
        icon: 'loading'
      })
      setTimeout(() => {
        this.setData({
          res: cont
        })
        wx.hideLoading()
      }, 1500)
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {},

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {},

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {},

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {},

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {},

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {},

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {}
})
