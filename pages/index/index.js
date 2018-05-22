//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    imgUrls: [
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    categoryList: [{
      name: "必买清单",
      src: "/pages/images/1.png"
    }, {
        name: "全球精选",
      src: "/pages/images/2.png"
    }, {
        name: "钜划算",
      src: "/pages/images/3.png"
    }, {
        name: "值得买",
      src: "/pages/images/4.png"
    }],
    goodsList:[{
      title: '新品推荐',
      goodsdata: [{
        'goods_id': 100857,
        'goods_name': '西班牙公牛干红葡萄酒',
        'goods_image': '/pages/images/goods.jpg',
        'goods_price': '20.01'
      },{
        'goods_id': 100857,
        'goods_name': '西班牙公牛干红葡萄酒',
        'goods_image': '/pages/images/goods.jpg',
        'goods_price': '20.01'
      },{
          'goods_id': 100857,
          'goods_name': '西班牙公牛干红葡萄酒',
          'goods_image': '/pages/images/goods.jpg',
          'goods_price': '20.01'
      }]
    }, {
      title: '热销推荐',
      goodsdata: [{
        'goods_id': 100857,
        'goods_name': '西班牙公牛干红葡萄酒',
        'goods_image': '/pages/images/goods.jpg',
        'goods_price': '20.01'
      }, {
        'goods_id': 100857,
        'goods_name': '西班牙公牛干红葡萄酒',
        'goods_image': '/pages/images/goods.jpg',
        'goods_price': '20.01'
        }, {
          'goods_id': 100857,
          'goods_name': '西班牙公牛干红葡萄酒',
          'goods_image': '/pages/images/goods.jpg',
          'goods_price': '20.01'
        },{
        'goods_id': 100857,
        'goods_name': '西班牙公牛干红葡萄酒',
        'goods_image': '/pages/images/goods.jpg',
        'goods_price': '20.01'
      }]
      }, {
        title: '酒柜',
        goodsdata: [{
          'goods_id': 100857,
          'goods_name': '西班牙公牛干红葡萄酒',
          'goods_image': '/pages/images/goods.jpg',
          'goods_price': '20.01'
        }, {
          'goods_id': 100857,
          'goods_name': '西班牙公牛干红葡萄酒',
          'goods_image': '/pages/images/goods.jpg',
          'goods_price': '20.01'
        }, {
          'goods_id': 100857,
          'goods_name': '西班牙公牛干红葡萄酒',
          'goods_image': '/pages/images/goods.jpg',
          'goods_price': '20.01'
        }]
      }
    ] 
  },
  changeIndicatorDots: function (e) {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },
  changeAutoplay: function (e) {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },
  intervalChange: function (e) {
    this.setData({
      interval: e.detail.value
    })
  },
  durationChange: function (e) {
    this.setData({
      duration: e.detail.value
    })
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
