"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      dark_open: false,
      font_color: "#111111",
      view_color: "#d0e7ff",
      bar_back_color: "#78bdff",
      swi_color: "rgb(234, 234, 234)",
      city_name: "\u676D\u5DDE",
      city_location1: "",
      city_location2: "",
      life_list: [],
      wea_info: [],
      air_level_word: "",
      aqi_word: "",
      air_level: "",
      each_day_week: [],
      each_day_time: [],
      each_day_wea: [],
      day_icon: [],
      chartData: {
        categories: ["", "", "", "", "", "", ""],
        series: [
          {
            name: "\u6700\u9AD8\u6C14\u6E29",
            data: []
          },
          {
            name: "\u6700\u4F4E\u6C14\u6E29",
            data: []
          }
        ]
      },
      icon: [],
      frist_change: true,
      sencend_change: false,
      cityid: "101210101",
      color: "black",
      opacity: 100,
      value: 0,
      range1: [],
      range2: [],
      city: "",
      temp_now: "",
      temp_max: "",
      temp_min: "",
      weather_0: "",
      air_0: "",
      scrollTop: 0,
      each_hour: {
        hour: [],
        wea: [],
        tem: []
      },
      old: {
        scrollTop: 0
      },
      iStatusBarHeight: 0
    };
  },
  methods: {
    change(e) {
      if (e.target.value === true) {
        common_vendor.index.setNavigationBarColor({
          frontColor: "#ffffff",
          backgroundColor: "#fff"
        });
        common_vendor.index.setBackgroundColor({
          backgroundColor: "rgb(40, 44, 53)",
          backgroundColorTop: "rgb(40, 44, 53)",
          backgroundColorBottom: "rgb(40, 44, 53)"
        });
        this.bar_back_color = "#282c35";
        console.log(this.bar_back_color);
        this.view_color = "#3d454f";
        this.font_color = "#eeeeee";
        this.dark_open = true;
      } else {
        common_vendor.index.setNavigationBarColor({
          frontColor: "#000000",
          backgroundColor: "#fff"
        });
        common_vendor.index.setBackgroundColor({
          backgroundColor: "rgb(120, 189, 255)",
          backgroundColorTop: "rgb(120, 189, 255)",
          backgroundColorBottom: "rgb(120, 189, 255)"
        });
        this.bar_back_color = "#78bdff";
        this.view_color = "#d0e7ff";
        this.font_color = "#111111";
        this.dark_open = false;
      }
    },
    gettodaywea(cityid) {
      common_vendor.index.request({
        url: "https://api.seniverse.com/v3/weather/hourly.json",
        data: {
          key: "S8bEb7PvT6EdaikXS",
          location: this.cityid
        },
        success: (res) => {
          console.log(res);
          this.city_name = res.data.results[0].location.name;
          this.temp_now = res.data.results[0].hourly[0].temperature;
          this.temp_max = this.chartData.series[0].data[0];
          this.temp_min = this.chartData.series[1].data[0];
          console.log(res.data.results[0].hourly[0]);
          for (var i = 0; i < 10; i++) {
            this.each_hour.hour[i] = res.data.results[0].hourly[i].time.substring(11, 16);
            console.log(this.each_hour.hour[i]);
          }
          for (var i = 0; i < 10; i++) {
            this.each_hour.tem[i] = res.data.results[0].hourly[i].temperature;
          }
          for (var i = 0; i < 10; i++) {
            this.each_hour.wea[i] = res.data.results[0].hourly[i].text;
          }
          console.log(this.each_hour.wea);
          this.icon = [];
          for (var index in this.each_hour.wea) {
            if (this.each_hour.wea[index] === "\u591A\u4E91" || this.each_hour.wea[index] === "\u9634\u8F6C\u591A\u4E91" || this.each_hour.wea[index] === "\u591A\u4E91\u8F6C\u9634" || this.each_hour.wea[index] === "\u9634") {
              this.icon.push("i-duoyun");
            } else if (this.each_hour.wea[index] === "\u5C0F\u96E8") {
              this.icon.push("i-xiaoyu");
            } else if (this.each_hour.wea[index] === "\u6674") {
              if (Number(this.each_hour.hour[index].split(":")[0]) > 6 && Number(this.each_hour.hour[index].split(":")[0]) < 18) {
                this.icon.push("i-qing");
              } else {
                this.icon.push("i-yueliang");
              }
            } else if (this.each_hour.wea[index] === "\u96F7\u9635\u96E8") {
              this.icon.push("i-leiyujiaojia");
            } else if (this.each_hour.wea[index] === "\u5C0F\u96E8\u8F6C\u6674") {
              this.icon.push("i-xiaoyu");
            } else if (this.each_hour.wea[index] === "\u4E2D\u96E8") {
              this.icon.push("i-zhongyu");
            } else if (this.each_hour.wea[index] === "\u4E2D\u96EA") {
              this.icon.push("i-zhongxue");
            } else if (this.each_hour.wea[index] === "\u5C0F\u96EA") {
              this.icon.push("i-xiaoxue");
            }
          }
        },
        fail: (err) => {
          console.log(err);
        }
      });
    },
    getalldaywea(cityid) {
      this.each_day_wea = [];
      this.each_day_week = [];
      common_vendor.index.request({
        url: "https://yiketianqi.com/api?unescape=1",
        data: {
          appid: "29688265",
          appsecret: "7LIT0JEW",
          unescape: "1",
          version: "v1",
          cityid: this.cityid
        },
        success: (res) => {
          for (var i = 0; i < res.data["data"].length; i++) {
            this.each_day_time.push(res.data["data"][i]["date"].split("-")[1] + "/" + res.data["data"][i]["date"].split("-")[2]);
          }
          for (var i = 0; i < res.data["data"].length; i++) {
            this.each_day_week.push(res.data["data"][i]["week"]);
          }
          for (var i = 0; i < res.data["data"].length; i++) {
            this.each_day_wea.push(res.data["data"][i]["wea_day"]);
          }
          this.day_icon = [];
          this.chartData.series[0]["data"] = [];
          this.chartData.series[1]["data"] = [];
          for (var index in this.each_day_wea) {
            if (this.each_day_wea[index].search("\u6674") !== -1) {
              this.day_icon.push("i-qing");
            } else if (this.each_day_wea[index].search("\u591A\u4E91") !== -1) {
              this.day_icon.push("i-duoyun");
            } else if (this.each_day_wea[index].search("\u9634") !== -1) {
              this.day_icon.push("i-duoyun");
            } else if (this.each_day_wea[index].search("\u5C0F\u96E8") !== -1) {
              this.day_icon.push("i-xiaoyu");
            } else if (this.each_day_wea[index].search("\u4E2D\u96E8") !== -1) {
              this.day_icon.push("i-zhongyu");
            } else if (this.each_day_wea[index].search("\u5927\u96E8") !== -1) {
              this.day_icon.push("i-dayu");
            } else if (this.each_day_wea[index].search("\u96F7\u9635\u96E8") !== -1) {
              this.day_icon.push("i-leiyujiaojia");
            } else if (this.each_day_wea[index].search("\u5C0F\u96EA") !== -1) {
              this.day_icon.push("i-xiaoxue");
            } else if (this.each_day_wea[index].search("\u4E2D\u96EA") !== -1) {
              this.day_icon.push("i-zhongxue");
            } else if (this.each_day_wea[index].search("\u96F7\u9635\u96E8") !== -1) {
              this.day_icon.push("i-leiyujiaojia");
            }
          }
          for (var i = 0; i < res.data["data"].length; i++) {
            this.chartData.series[0]["data"].push(res.data["data"][i]["tem1"].replace("\u2103", ""));
            this.chartData.series[1]["data"].push(res.data["data"][i]["tem2"].replace("\u2103", ""));
          }
          console.log(this.chartData.series[0]["data"]);
          console.log(this.chartData.series[1]["data"]);
        }
      });
    },
    getairinfo(cityid) {
      common_vendor.index.request({
        url: "https://devapi.qweather.com/v7/air/now",
        data: {
          location: cityid,
          key: "71cb1295daf64c3293a9e20a1372b31f"
        },
        success: (res) => {
          this.air_level = res.data.now.category;
          this.air_level_word = "\u5F53\u524DAQI\u6307\u6570\u4E3A" + res.data.now.aqi;
        },
        fail: (err) => {
          console.log(err);
        }
      });
    },
    getweainfo(cityid) {
      this.wea_info = [];
      common_vendor.index.request({
        url: "https://devapi.qweather.com/v7/weather/now",
        data: {
          location: cityid,
          key: "71cb1295daf64c3293a9e20a1372b31f"
        },
        success: (res) => {
          this.wea_info.push(res.data.now.temp);
          this.wea_info.push(res.data.now.humidity);
          this.wea_info.push(res.data.now.windScale);
          this.wea_info.push(res.data.now.windDir);
        },
        fail: (err) => {
          console.log(err);
        }
      });
    },
    getCityId(city_name) {
      common_vendor.index.request({
        url: "https://geoapi.qweather.com/v2/city/lookup",
        data: {
          location: city_name,
          key: "71cb1295daf64c3293a9e20a1372b31f"
        },
        success: (res) => {
          this.cityid = res.data.location[0].id;
        }
      });
    },
    lifeInfo(cityid) {
      var life_info = [];
      common_vendor.index.request({
        url: "https://devapi.qweather.com/v7/indices/1d",
        data: {
          key: "71cb1295daf64c3293a9e20a1372b31f",
          location: cityid,
          type: 0
        },
        success: (res) => {
          life_info.push(res.data.daily[2].category);
          life_info.push(res.data.daily[0].category);
          life_info.push(res.data.daily[8].category);
          life_info.push(res.data.daily[3].category);
          life_info.push(res.data.daily[1].category);
          life_info.push(res.data.daily[15].category);
          life_info.push(res.data.daily[5].category);
          this.aqi_word = res.data.daily[9].text;
        },
        fail: (err) => {
          console.log(err);
        }
      });
      return life_info;
    },
    proChange(e) {
      console.log("\u9009\u62E9\u7701\u4EFD");
      if (this.frist_change === true) {
        this.frist_change === false;
      }
      const db = common_vendor.pn.database();
      db.collection("cityid").get().then((res) => {
        this.range2 = [];
        for (var each_city in res["result"]["data"][0][e]) {
          this.range2.push({
            "value": Object.values(res["result"]["data"][0][e][each_city])[0],
            "text": Object.keys(res["result"]["data"][0][e][each_city])[0]
          });
        }
      }).catch((err) => {
        console.log(err);
      });
      console.log("e:", e);
    },
    cityChange(e) {
      console.log("\u9009\u62E9\u57CE\u5E02");
      console.log("e:", e);
      if (e !== "") {
        this.cityid = e;
        console.log(e);
        this.gettodaywea(this.cityid);
        this.getalldaywea(this.cityid);
        this.getairinfo(this.cityid);
        this.getweainfo(this.cityid);
        this.life_list = this.lifeInfo(this.cityid);
      }
    }
  },
  onPageScroll: function(e) {
    this.opacity = 100 - e.scrollTop * 0.6;
  },
  onReady() {
    common_vendor.index.setNavigationBarColor({
      frontColor: "#000000",
      backgroundColor: "#fff"
    });
  },
  onLoad() {
    this.getCityId(this.city_name);
    console.log("city_id:" + this.cityid);
    const db = common_vendor.pn.database();
    db.collection("city_id").get().then((res) => {
      for (var i = 0; i < res.result.data.length; i++) {
        this.range1.push({
          "value": res.result.data[i].cityname,
          "text": res.result.data[i].cityname
        });
      }
    }).catch((err) => {
      console.log(err);
    });
    this.getalldaywea(this.cityid);
    this.gettodaywea(this.cityid);
    this.getairinfo(this.cityid);
    this.getweainfo(this.cityid);
    this.life_list = this.lifeInfo(this.cityid);
    this.iStatusBarHeight = common_vendor.index.getSystemInfoSync().statusBarHeight;
  }
};
if (!Array) {
  const _easycom_uni_nav_bar2 = common_vendor.resolveComponent("uni-nav-bar");
  const _easycom_uni_data_select2 = common_vendor.resolveComponent("uni-data-select");
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _easycom_qiun_data_charts2 = common_vendor.resolveComponent("qiun-data-charts");
  (_easycom_uni_nav_bar2 + _easycom_uni_data_select2 + _easycom_uni_icons2 + _easycom_qiun_data_charts2)();
}
const _easycom_uni_nav_bar = () => "../../uni_modules/uni-nav-bar/components/uni-nav-bar/uni-nav-bar.js";
const _easycom_uni_data_select = () => "../../uni_modules/uni-data-select/components/uni-data-select/uni-data-select.js";
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const _easycom_qiun_data_charts = () => "../../uni_modules/qiun-data-charts/components/qiun-data-charts/qiun-data-charts.js";
if (!Math) {
  (_easycom_uni_nav_bar + _easycom_uni_data_select + _easycom_uni_icons + _easycom_qiun_data_charts)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: $data.iStatusBarHeight + "px",
    b: $data.bar_back_color,
    c: common_vendor.p({
      title: "\u4E86\u660E\u5929\u6C14",
      backgroundColor: $data.view_color,
      dark: $data.dark_open
    }),
    d: $data.font_color,
    e: common_vendor.o($options.proChange),
    f: common_vendor.p({
      localdata: $data.range1,
      emptyText: "\u7701",
      placeholder: "\u9009\u62E9\u7701\u4EFD"
    }),
    g: common_vendor.o($options.cityChange),
    h: common_vendor.p({
      localdata: $data.range2,
      emptyText: "\u5E02",
      placeholder: "\u9009\u62E9\u533A\\\u5E02"
    }),
    i: common_vendor.o((...args) => $options.change && $options.change(...args)),
    j: $data.view_color,
    k: common_vendor.t($data.city_name),
    l: $data.font_color,
    m: $data.iStatusBarHeight + "px",
    n: $data.bar_back_color,
    o: common_vendor.t($data.temp_now),
    p: $data.font_color,
    q: common_vendor.t($data.temp_min),
    r: common_vendor.t($data.temp_max),
    s: $data.font_color,
    t: common_vendor.t($data.weather_0),
    v: common_vendor.t($data.air_0),
    w: $data.font_color,
    x: $data.opacity + "%",
    y: common_vendor.t($data.each_hour.hour[0]),
    z: $data.font_color,
    A: common_vendor.p({
      ["custom-prefix"]: "icon",
      type: $data.icon[0],
      size: "30"
    }),
    B: common_vendor.t($data.each_hour.tem[0]),
    C: $data.font_color,
    D: common_vendor.t($data.each_hour.hour[1]),
    E: $data.font_color,
    F: common_vendor.p({
      ["custom-prefix"]: "icon",
      type: $data.icon[1],
      size: "30"
    }),
    G: common_vendor.t($data.each_hour.tem[1]),
    H: $data.font_color,
    I: common_vendor.t($data.each_hour.hour[2]),
    J: $data.font_color,
    K: common_vendor.p({
      ["custom-prefix"]: "icon",
      type: $data.icon[2],
      size: "30"
    }),
    L: common_vendor.t($data.each_hour.tem[2]),
    M: $data.font_color,
    N: common_vendor.t($data.each_hour.hour[3]),
    O: $data.font_color,
    P: common_vendor.p({
      ["custom-prefix"]: "icon",
      type: $data.icon[3],
      size: "30"
    }),
    Q: common_vendor.t($data.each_hour.tem[3]),
    R: $data.font_color,
    S: common_vendor.t($data.each_hour.hour[4]),
    T: $data.font_color,
    U: common_vendor.p({
      ["custom-prefix"]: "icon",
      type: $data.icon[4],
      size: "30"
    }),
    V: common_vendor.t($data.each_hour.tem[4]),
    W: $data.font_color,
    X: common_vendor.t($data.each_hour.hour[5]),
    Y: $data.font_color,
    Z: common_vendor.p({
      ["custom-prefix"]: "icon",
      type: $data.icon[5],
      size: "30"
    }),
    aa: common_vendor.t($data.each_hour.tem[5]),
    ab: $data.font_color,
    ac: common_vendor.t($data.each_hour.hour[6]),
    ad: $data.font_color,
    ae: common_vendor.p({
      ["custom-prefix"]: "icon",
      type: $data.icon[6],
      size: "30"
    }),
    af: common_vendor.t($data.each_hour.tem[6]),
    ag: $data.font_color,
    ah: common_vendor.t($data.each_hour.hour[7]),
    ai: $data.font_color,
    aj: common_vendor.p({
      ["custom-prefix"]: "icon",
      type: $data.icon[7],
      size: "30"
    }),
    ak: common_vendor.t($data.each_hour.tem[7]),
    al: $data.font_color,
    am: common_vendor.t($data.each_hour.hour[8]),
    an: $data.font_color,
    ao: common_vendor.p({
      ["custom-prefix"]: "icon",
      type: $data.icon[8],
      size: "30"
    }),
    ap: common_vendor.t($data.each_hour.tem[8]),
    aq: $data.font_color,
    ar: common_vendor.t($data.each_hour.hour[9]),
    as: $data.font_color,
    at: common_vendor.p({
      ["custom-prefix"]: "icon",
      type: $data.icon[9],
      size: "30"
    }),
    av: common_vendor.t($data.each_hour.tem[9]),
    aw: $data.font_color,
    ax: $data.view_color,
    ay: $data.font_color,
    az: common_vendor.t($data.each_day_time[0]),
    aA: $data.font_color,
    aB: common_vendor.p({
      ["custom-prefix"]: "icon",
      type: $data.day_icon[0],
      size: "30"
    }),
    aC: common_vendor.t($data.each_day_wea[0]),
    aD: $data.font_color,
    aE: common_vendor.t($data.each_day_week[1]),
    aF: $data.font_color,
    aG: common_vendor.t($data.each_day_time[1]),
    aH: $data.font_color,
    aI: common_vendor.p({
      ["custom-prefix"]: "icon",
      type: $data.day_icon[1],
      size: "30"
    }),
    aJ: common_vendor.t($data.each_day_wea[1]),
    aK: $data.font_color,
    aL: common_vendor.t($data.each_day_week[2]),
    aM: $data.font_color,
    aN: common_vendor.t($data.each_day_time[2]),
    aO: $data.font_color,
    aP: common_vendor.p({
      ["custom-prefix"]: "icon",
      type: $data.day_icon[2],
      size: "30"
    }),
    aQ: common_vendor.t($data.each_day_wea[2]),
    aR: $data.font_color,
    aS: common_vendor.t($data.each_day_week[3]),
    aT: $data.font_color,
    aU: common_vendor.t($data.each_day_time[3]),
    aV: $data.font_color,
    aW: common_vendor.p({
      ["custom-prefix"]: "icon",
      type: $data.day_icon[3],
      size: "30"
    }),
    aX: common_vendor.t($data.each_day_wea[3]),
    aY: $data.font_color,
    aZ: common_vendor.t($data.each_day_week[4]),
    ba: $data.font_color,
    bb: common_vendor.t($data.each_day_time[4]),
    bc: $data.font_color,
    bd: common_vendor.p({
      ["custom-prefix"]: "icon",
      type: $data.day_icon[4],
      size: "30"
    }),
    be: common_vendor.t($data.each_day_wea[4]),
    bf: $data.font_color,
    bg: common_vendor.t($data.each_day_week[5]),
    bh: $data.font_color,
    bi: common_vendor.t($data.each_day_time[5]),
    bj: $data.font_color,
    bk: common_vendor.p({
      ["custom-prefix"]: "icon",
      type: $data.day_icon[5],
      size: "30"
    }),
    bl: common_vendor.t($data.each_day_wea[5]),
    bm: $data.font_color,
    bn: common_vendor.t($data.each_day_week[6]),
    bo: $data.font_color,
    bp: common_vendor.t($data.each_day_time[6]),
    bq: $data.font_color,
    br: common_vendor.p({
      ["custom-prefix"]: "icon",
      type: $data.day_icon[6],
      size: "30"
    }),
    bs: common_vendor.t($data.each_day_wea[6]),
    bt: $data.font_color,
    bv: common_vendor.p({
      type: "line",
      chartData: $data.chartData
    }),
    bw: $data.view_color,
    bx: common_vendor.p({
      ["custom-prefix"]: "icon",
      type: "i-yibiaopan",
      size: "120"
    }),
    by: common_vendor.t($data.air_level_word),
    bz: $data.font_color,
    bA: common_vendor.t($data.aqi_word),
    bB: $data.font_color,
    bC: $data.view_color,
    bD: common_vendor.p({
      ["custom-prefix"]: "icon",
      type: "i-wendu",
      size: "60"
    }),
    bE: $data.font_color,
    bF: common_vendor.t($data.wea_info[0]),
    bG: $data.font_color,
    bH: common_vendor.p({
      ["custom-prefix"]: "icon",
      type: "i-blob",
      size: "60"
    }),
    bI: $data.font_color,
    bJ: common_vendor.t($data.wea_info[1]),
    bK: $data.font_color,
    bL: common_vendor.p({
      ["custom-prefix"]: "icon",
      type: "i-feng",
      size: "60"
    }),
    bM: $data.font_color,
    bN: common_vendor.t($data.wea_info[2]),
    bO: $data.font_color,
    bP: common_vendor.p({
      ["custom-prefix"]: "icon",
      type: "i-fengxiang",
      size: "60"
    }),
    bQ: $data.font_color,
    bR: common_vendor.t($data.wea_info[3]),
    bS: $data.font_color,
    bT: $data.view_color,
    bU: common_vendor.p({
      ["custom-prefix"]: "icon",
      type: "i-duanxiu",
      size: "60"
    }),
    bV: common_vendor.t($data.life_list[0]),
    bW: $data.font_color,
    bX: $data.font_color,
    bY: common_vendor.p({
      ["custom-prefix"]: "icon",
      type: "i-lanqiu",
      size: "60"
    }),
    bZ: common_vendor.t($data.life_list[1]),
    ca: $data.font_color,
    cb: $data.font_color,
    cc: common_vendor.p({
      ["custom-prefix"]: "icon",
      type: "i-shouye",
      size: "60"
    }),
    cd: common_vendor.t($data.life_list[2]),
    ce: $data.font_color,
    cf: $data.font_color,
    cg: common_vendor.p({
      ["custom-prefix"]: "icon",
      type: "i-yu",
      size: "60"
    }),
    ch: common_vendor.t($data.life_list[3]),
    ci: $data.font_color,
    cj: $data.font_color,
    ck: common_vendor.p({
      ["custom-prefix"]: "icon",
      type: "i-qiche",
      size: "60"
    }),
    cl: common_vendor.t($data.life_list[4]),
    cm: $data.font_color,
    cn: $data.font_color,
    co: common_vendor.p({
      ["custom-prefix"]: "icon",
      type: "i-fangshaishuang",
      size: "60"
    }),
    cp: common_vendor.t($data.life_list[5]),
    cq: $data.font_color,
    cr: $data.font_color,
    cs: common_vendor.p({
      ["custom-prefix"]: "icon",
      type: "i-paoxie",
      size: "60"
    }),
    ct: common_vendor.t($data.life_list[6]),
    cv: $data.font_color,
    cw: $data.font_color,
    cx: $data.view_color,
    cy: $data.view_color,
    cz: $data.bar_back_color
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/Project/lmweather/lmweather/pages/index/index.vue"]]);
_sfc_main.__runtimeHooks = 1;
wx.createPage(MiniProgramPage);
