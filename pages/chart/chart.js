var wxCharts = require('../../lib/wxcharts-min.js');
var pieChart1 = null;
var pieChart2 = null;
var pieChart3 = null;
var pieChart4 = null;
Page({

    /**
     * 页面的初始数据
     */
    data: {

    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        var windowWidth = 320;
        try {
            var res = wx.getSystemInfoSync();
            windowWidth = res.windowWidth;
        } catch (e) {
            console.error('getSystemInfoSync failed!');
        }
        var inrpx = windowWidth / 750;

        pieChart1 = new wxCharts({
            animation: true,
            canvasId: 'typeA',
            type: 'pie',
            series: [{
                name: '未完成',
                data: 400,
                color: '#bb74f9'
            }, {
                name: '已完成',
                data: 600,
                color: '#739df4',
            }],
            width: 300 * inrpx,
            height: 300 * inrpx,
            legend: true,
            dataLabel: false,
        })

        pieChart2 = new wxCharts({
            animation: true,
            canvasId: 'typeB',
            type: 'pie',
            series: [{
                name: '未完成',
                data: 400,
                color: '#f99a74'
            }, {
                name: '已完成',
                data: 600,
                color: '#739df4',
            }],
            width: 300 * inrpx,
            height: 300 * inrpx,
            legend: true,
            dataLabel: false,
        })

        pieChart3 = new wxCharts({
            animation: true,
            canvasId: 'typeC',
            type: 'pie',
            series: [{
                name: '未完成',
                data: 400,
                color: '#1fc417'
            }, {
                name: '已完成',
                data: 600,
                color: '#739df4',
            }],
            width: 300 * inrpx,
            height: 300 * inrpx,
            legend: true,
            dataLabel: false,
        })

        pieChart4 = new wxCharts({
            animation: true,
            canvasId: 'typeD',
            type: 'pie',
            series: [{
                name: '未完成',
                data: 400,
                color: '#176ae6'
            }, {
                name: '已完成',
                data: 600,
                color: '#739df4',
            }],
            width: 300 * inrpx,
            height: 300 * inrpx,
            legend: true,
            dataLabel:false,
            dataPointShape:true
        })

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {
       
    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})