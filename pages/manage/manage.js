var sliderWidth = 96;// 需要设置slider的宽度，用于计算中间位置

Page({
    data: {
        tabs: ['人员管理', '数据报表'],
        activeIndex: 0,
        sliderOffset: 0,
        sliderLeft: 0,
        bottomHidden1: "none",
        state:"停用",
        bgColor:"#739df4",
    },
    lower: function () {
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
    onLoad: function () {
        var that = this
        wx.getSystemInfo({
            success: function (res) {
                that.setData({
                    sliderLeft:
                        (res.windowWidth / that.data.tabs.length - sliderWidth) / 2,
                    sliderOffset:
                        (res.windowWidth / that.data.tabs.length) * that.data.activeIndex
                })
            }
        })
    },
    tabClick: function (e) {
        if (e.currentTarget.id == 1){
            console.log(e.currentTarget.id);
            wx.redirectTo({
                url: '../chart/chart',
                success: function(res) {},
                fail: function(res) {},
                complete: function(res) {},
            })
            return false;
        }
        this.setData({
            sliderOffset: e.currentTarget.offsetLeft,
            activeIndex: e.currentTarget.id
        })
    },

    //停用启用
    btnTap: function (event) {
        var that = this;
        if (that.data.state === "停用"){
            that.setData({
                state: "启用",
                bgColor: "#b0b0b0",
            })
        }else{
            that.setData({
                state: "停用",
                bgColor: "#739df4",
            })
        }
    },

    //显示提示
    qrTap: function (event) {
        var that = this;
        if (that.data.bottomHidden1 === "none") {
            that.setData({
                bottomHidden1: "block"
            })
        }else{
            that.setData({
                bottomHidden1: "none"
            })
        }
    }
})
