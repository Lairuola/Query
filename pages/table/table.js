var sliderWidth = 96;// 需要设置slider的宽度，用于计算中间位置

Page({
  data: {
    tabs: ['拜访商户', '拜访个体', '内部表单', '外拓表单'],
    activeIndex: 0,
    sliderOffset: 0,
    sliderLeft: 0,
    isloading:false
  },
  lower: function() {
      if(this.data.isloading) return;
      this.setData({isloading:true});
    var cont = 50; //合并请求的数据
    if (cont.length >= 100) {
      wx.showToast({
        //期间为了显示效果可以添加一个过度的弹出框提示“加载中”
        title: '我也是有底线的',
        icon: 'success',
        duration: 300
      });
      return false;
    } else {
      wx.showLoading({
        //期间为了显示效果可以添加一个过度的弹出框提示“加载中”
        title: '加载中',
        icon: 'loading'
      });
      setTimeout(() => {
        this.setData({
          res: cont
        });
        wx.hideLoading();
      }, 1500);
    }
  },
  onLoad: function() {
    var that = this
    wx.getSystemInfo({
      success: function(res) {
        that.setData({
          sliderLeft:
            (res.windowWidth / that.data.tabs.length - sliderWidth) / 2,
          sliderOffset:
            (res.windowWidth / that.data.tabs.length) * that.data.activeIndex
        })
      }
    })
  },
  tabClick: function(e) {
    this.setData({
      sliderOffset: e.currentTarget.offsetLeft,
      activeIndex: e.currentTarget.id
    })
  }
})
