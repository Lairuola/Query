var dateTimePicker = require('../../lib/dateTimePicker.js');

Page({
    /**
     * 页面的初始数据
     */
    data: {
        //动态表单 
        //1.widget:表单样式 TextInput文本框 ，Textarea多行文本，RadioSelect单选,CheckboxSelectMultiple多选
        //2.label 表单名字
        //3.name 表单的name
        //4.type 类型 IntegerField输入数字
        //5.option 单选多选的选项参数 ，label选项名 ，value值 ，check 选中状态
        //6.select 选择器选项， index 默认展示第几项
        form: {
            fields: [
                {
                    widget: "TextInput",
                    label: "姓名",
                    name: "name"
                }, //文本框
                {
                    widget: "TextInput",
                    type: "IntegerField",
                    label: "电话",
                    name: "call"
                },//文本数字框
                {
                    widget: "Textarea",
                    label: "详细",
                    name: "detail"
                },//多行文本
                {
                    widget: "RadioSelect",
                    label: "性别",
                    name: "gender",
                    option: [{ label: "男", value: "0", }, { label: "女", value: "1", checked: "checked" }]
                },//单选
                {
                    widget: "CheckboxSelectMultiple",
                    label: "爱好",
                    name: "hubby",
                    option: [
                        { label: '选项1', value: '0', checked: true },
                        { label: '选项2', value: '1' },
                        { label: '选项3', value: '2' },
                    ],
                },//多选
                {
                    name:"country",
                    widget: "Select",
                    label: "国家",
                    select: ['美国',
                        '中国',
                        '巴西',
                        '日本',
                        '印度'],
                    index: 0,
                },//下拉单选
                {
                    name: "tv",
                    widget: "Select",
                    label: "电视",
                    select: ['江苏电视',
                        '浙江卫视',
                        '东方卫视',
                        '星空卫视',
                        'cctv'],
                    index: 2,
                },//下拉单选
                {
                    widget: "Date",
                    name:"birth",
                    date: '2000-01-01',
                    label:"生日"                    
                },//日期
                {
                    widget: "Date",
                    name: "birth1",
                    date: '2018-10-02',
                    label: "出发日"
                },
                {   
                    label:"选择日期",
                    widget: "Datetime",
                    name:"time",
                },//日期时间
                {
                    widget: "Upload",
                    name:"upload"
                },//上传图片
            ]
        },
        formdata : {},

        //错误提示
        showTopTips: false,

        //文件
        files: [],

        //datetimepicker
        time: '12:00',
        dateTimeArray1: null,
        dateTime1: null,
        startYear: 2000,
        endYear: 2050
    },



    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        // 获取完整的年月日 时分秒，以及默认显示的数组
        var obj = dateTimePicker.dateTimePicker(this.data.startYear, this.data.endYear);
        var obj1 = dateTimePicker.dateTimePicker(this.data.startYear, this.data.endYear);
        // 精确到分的处理，将数组的秒去掉
        var lastArray = obj1.dateTimeArray.pop();
        var lastTime = obj1.dateTime.pop();

        this.setData({
            dateTime: obj.dateTime,
            dateTimeArray: obj.dateTimeArray,
            dateTimeArray1: obj1.dateTimeArray,
            dateTime1: obj1.dateTime
        });
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () { },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () { },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () { },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () { },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () { },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () { },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () { },


    bindPickerChange: function (e) {
        this.data.formdata[e.target.id] = e.detail.value;
        this.setData({
            formdata: this.data.formdata
        })
    },



    bindDateChange: function (e) {
        console.log('picker发送选择改变，携带值为', e.detail.value)
        this.data.formdata[e.target.id] = e.detail.value;
        this.setData({
            formdata: this.data.formdata
        })
    },

    bindTextAreaBlur: function (e) {
        console.log(e.detail.value)
    },

    chooseImage: function (e) {
        var that = this;
        wx.chooseImage({
            sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
            sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
            success: function (res) {
                // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
                that.setData({
                    files: that.data.files.concat(res.tempFilePaths)
                });
            }
        })
    },

    previewImage: function (e) {
        wx.previewImage({
            current: e.currentTarget.id, // 当前显示图片的http链接
            urls: this.data.files // 需要预览的图片http链接列表
        })
    },



    changeDateTime1(e) {
        this.setData({ 
            dateTime1: e.detail.value 
        });
    },
    changeDateTimeColumn1(e) {
        var arr = this.data.dateTime1, dateArr = this.data.dateTimeArray1;

        arr[e.detail.column] = e.detail.value;
        dateArr[2] = dateTimePicker.getMonthDay(dateArr[0][arr[0]], dateArr[1][arr[1]]);

        this.setData({
            dateTimeArray1: dateArr
        });
    },




})