<template>
    <view class="contain" :style="{backgroundColor:bar_back_color}">
        <view class="bar_top" :style="{'background-color':bar_back_color}">
            <view v-bind:style="{height: iStatusBarHeight + 'px'}">
            </view>
        </view>
        <view>
            <uni-nav-bar title="了明天气" v-bind:backgroundColor="view_color" :dark=dark_open />
        </view>
        <view class="choose_city" :style="{ 'background-color' : view_color,'z-index':100}">
            <text :style="{ 'color' : font_color}">选择城市</text>
            <uni-data-select :localdata="range1" @change="proChange" emptyText="省" placeholder="选择省份">
            </uni-data-select>
            <view></view>
            <uni-data-select :localdata="range2" @change="cityChange" emptyText="市" placeholder="选择区\市">
            </uni-data-select>
            <switch color="#5b5b5b" style="transform:scale(0.7)" @change="change" />
        </view>
        <view id="main" v-bind:backgroundColor="view_color">
            <view class="city" :style="{ 'top': iStatusBarHeight + 'px','background-color':bar_back_color}">
                <text :style="{ 'color' : font_color}"> {{city_name}}</text>
            </view>
            <view id="top" :style="{'opacity':opacity+'%'}">
                <text :style="{ 'color' : font_color}">{{temp_now}}°C</text>
                <text :style="{ 'color' : font_color}">{{temp_min}}/{{temp_max}}°C</text>
                <text :style="{ 'color' : font_color}">{{weather_0}} | 空气{{air_0}}</text>
            </view>


            <view>
                <scroll-view class="all_hour_temp" scroll-x="true" :style="{ 'background-color' : view_color}">
                    <view class="all_hour">
                        <view id="hour_0" class="each_hour">
                            <view>
                                <text :style="{ 'color' : font_color}"
                                    class="each_hour_time">{{each_hour.hour[0]}}</text>
                                <view class="icon">
                                    <uni-icons custom-prefix="icon" :type=icon[0] size="30"></uni-icons>
                                </view>
                                <text :style="{ 'color' : font_color}"
                                    class="each_hour_tem">{{each_hour.tem[0]}}°C</text>
                            </view>
                        </view>
                        <view id="hour_1" class="each_hour">
                            <view>
                                <text :style="{ 'color' : font_color}"
                                    class="each_hour_time">{{each_hour.hour[1]}}</text>
                                <view class="icon">
                                    <uni-icons custom-prefix="icon" :type=icon[1] size="30"></uni-icons>
                                </view>
                                <text :style="{ 'color' : font_color}"
                                    class="each_hour_tem">{{each_hour.tem[1]}}°C</text>
                            </view>
                        </view>
                        <view id="hour_2" class="each_hour">
                            <view>
                                <text :style="{ 'color' : font_color}"
                                    class="each_hour_time">{{each_hour.hour[2]}}</text>
                                <view class="icon">
                                    <uni-icons custom-prefix="icon" :type=icon[2] size="30"></uni-icons>
                                </view>
                                <text :style="{ 'color' : font_color}"
                                    class="each_hour_tem">{{each_hour.tem[2]}}°C</text>
                            </view>
                        </view>
                        <view id="hour_3" class="each_hour">
                            <view>
                                <text :style="{ 'color' : font_color}"
                                    class="each_hour_time">{{each_hour.hour[3]}}</text>
                                <view class="icon">
                                    <uni-icons custom-prefix="icon" :type=icon[3] size="30"></uni-icons>
                                </view>
                                <text :style="{ 'color' : font_color}"
                                    class="each_hour_tem">{{each_hour.tem[3]}}°C</text>
                            </view>
                        </view>
                        <view id="hour_4" class="each_hour">
                            <view>
                                <text :style="{ 'color' : font_color}"
                                    class="each_hour_time">{{each_hour.hour[4]}}</text>
                                <view class="icon">
                                    <uni-icons custom-prefix="icon" :type=icon[4] size="30"></uni-icons>
                                </view>
                                <text :style="{ 'color' : font_color}"
                                    class="each_hour_tem">{{each_hour.tem[4]}}°C</text>
                            </view>
                        </view>
                        <view id="hour_5" class="each_hour">
                            <view>
                                <text :style="{ 'color' : font_color}"
                                    class="each_hour_time">{{each_hour.hour[5]}}</text>
                                <view class="icon">
                                    <uni-icons custom-prefix="icon" :type=icon[5] size="30"></uni-icons>
                                </view>
                                <text :style="{ 'color' : font_color}"
                                    class="each_hour_tem">{{each_hour.tem[5]}}°C</text>
                            </view>
                        </view>
                        <view id="hour_6" class="each_hour">
                            <view>
                                <text :style="{ 'color' : font_color}"
                                    class="each_hour_time">{{each_hour.hour[6]}}</text>
                                <view class="icon">
                                    <uni-icons custom-prefix="icon" :type=icon[6] size="30"></uni-icons>
                                </view>
                                <text :style="{ 'color' : font_color}"
                                    class="each_hour_tem">{{each_hour.tem[6]}}°C</text>
                            </view>
                        </view>
                        <view id="hour_7" class="each_hour">
                            <view>
                                <text :style="{ 'color' : font_color}"
                                    class="each_hour_time">{{each_hour.hour[7]}}</text>
                                <view class="icon">
                                    <uni-icons custom-prefix="icon" :type=icon[7] size="30"></uni-icons>
                                </view>
                                <text :style="{ 'color' : font_color}"
                                    class="each_hour_tem">{{each_hour.tem[7]}}°C</text>
                            </view>
                        </view>
                        <view id="hour_8" class="each_hour">
                            <view>
                                <text :style="{ 'color' : font_color}"
                                    class="each_hour_time">{{each_hour.hour[8]}}</text>
                                <view class="icon">
                                    <uni-icons custom-prefix="icon" :type=icon[8] size="30"></uni-icons>
                                </view>
                                <text :style="{ 'color' : font_color}"
                                    class="each_hour_tem">{{each_hour.tem[8]}}°C</text>
                            </view>
                        </view>
                        <view id="hour_9" class="each_hour">
                            <view>
                                <text :style="{ 'color' : font_color}"
                                    class="each_hour_time">{{each_hour.hour[9]}}</text>
                                <view class="icon">
                                    <uni-icons custom-prefix="icon" :type=icon[9] size="30"></uni-icons>
                                </view>
                                <text :style="{ 'color' : font_color}"
                                    class="each_hour_tem">{{each_hour.tem[9]}}°C</text>
                            </view>
                        </view>
                    </view>
                </scroll-view>
            </view>


            <view>
                <scroll-view class="week_wea_scroll" scroll-x="true" :style="{ 'background-color' : view_color}">
                    <view class="all_day">
                        <view class="each_day">
                            <view>
                                <text :style="{ 'color' : font_color}" class="each_day_time">今天</text>
                                <text :style="{ 'color' : font_color}" class="each_day_week">{{each_day_time[0]}}</text>
                                <view class="icon">
                                    <uni-icons custom-prefix="icon" :type=day_icon[0] size="30"></uni-icons>
                                </view>
                                <text :style="{ 'color' : font_color}" class="each_day_wea">{{each_day_wea[0]}}</text>
                            </view>
                        </view>
                        <view class="each_day">
                            <view>
                                <text :style="{ 'color' : font_color}" class="each_day_time">{{each_day_week[1]}}</text>
                                <text :style="{ 'color' : font_color}" class="each_day_week">{{each_day_time[1]}}</text>
                                <view class="icon">
                                    <uni-icons custom-prefix="icon" :type=day_icon[1] size="30"></uni-icons>
                                </view>
                                <text :style="{ 'color' : font_color}" class="each_day_wea">{{each_day_wea[1]}}</text>
                            </view>
                        </view>
                        <view class="each_day">
                            <view>
                                <text :style="{ 'color' : font_color}" class="each_day_time">{{each_day_week[2]}}</text>
                                <text :style="{ 'color' : font_color}" class="each_day_week">{{each_day_time[2]}}</text>
                                <view class="icon">
                                    <uni-icons custom-prefix="icon" :type=day_icon[2] size="30"></uni-icons>
                                </view>
                                <text :style="{ 'color' : font_color}" class="each_day_wea">{{each_day_wea[2]}}</text>
                            </view>
                        </view>
                        <view class="each_day">
                            <view>
                                <text :style="{ 'color' : font_color}" class="each_day_time">{{each_day_week[3]}}</text>
                                <text :style="{ 'color' : font_color}" class="each_day_week">{{each_day_time[3]}}</text>
                                <view class="icon">
                                    <uni-icons custom-prefix="icon" :type=day_icon[3] size="30"></uni-icons>
                                </view>
                                <text :style="{ 'color' : font_color}" class="each_day_wea">{{each_day_wea[3]}}</text>
                            </view>
                        </view>
                        <view class="each_day">
                            <view>
                                <text :style="{ 'color' : font_color}" class="each_day_time">{{each_day_week[4]}}</text>
                                <text :style="{ 'color' : font_color}" class="each_day_week">{{each_day_time[4]}}</text>
                                <view class="icon">
                                    <uni-icons custom-prefix="icon" :type=day_icon[4] size="30"></uni-icons>
                                </view>
                                <text :style="{ 'color' : font_color}" class="each_day_wea">{{each_day_wea[4]}}</text>
                            </view>
                        </view>
                        <view class="each_day">
                            <view>
                                <text :style="{ 'color' : font_color}" class="each_day_time">{{each_day_week[5]}}</text>
                                <text :style="{ 'color' : font_color}" class="each_day_week">{{each_day_time[5]}}</text>
                                <view class="icon">
                                    <uni-icons custom-prefix="icon" :type=day_icon[5] size="30"></uni-icons>
                                </view>
                                <text :style="{ 'color' : font_color}" class="each_day_wea">{{each_day_wea[5]}}</text>
                            </view>
                        </view>
                        <view class="each_day">
                            <view>
                                <text :style="{ 'color' : font_color}" class="each_day_time">{{each_day_week[6]}}</text>
                                <text :style="{ 'color' : font_color}" class="each_day_week">{{each_day_time[6]}}</text>
                                <view class="icon">
                                    <uni-icons custom-prefix="icon" :type=day_icon[6] size="30"></uni-icons>
                                </view>
                                <text :style="{ 'color' : font_color}" class="each_day_wea">{{each_day_wea[6]}}</text>
                            </view>
                        </view>
                    </view>
                    <view class="week_wea_line">
                        <qiun-data-charts type="line" :chartData="chartData"></qiun-data-charts>
                    </view>
                </scroll-view>
            </view>
            <view class="air" id="air" :style="{ 'background-color' : view_color}">
                <view class="air_pic">
                    <uni-icons custom-prefix="icon" type="i-yibiaopan" size="120"></uni-icons>
                </view>
                <view class="air_word">
                    <text :style="{ 'color' : font_color}" class="air_level_word">{{air_level_word}}</text>
                    <text :style="{ 'color' : font_color}" class="aqi_word">{{aqi_word}}</text>
                </view>

            </view>



            <view class="tem_info" id="tem_info" :style="{ 'background-color' : view_color}">
                <view class="each_wea_info">
                    <view class="weainfo_icon">
                        <uni-icons custom-prefix="icon" type="i-wendu" size="60"></uni-icons>
                    </view>
                    <text :style="{ 'color' : font_color}" class="name">体感温度</text>
                    <text :style="{ 'color' : font_color}" class="value">{{wea_info[0]}}°C</text>
                </view>
                <view class="each_wea_info">
                    <view class="weainfo_icon">
                        <uni-icons custom-prefix="icon" type="i-blob" size="60"></uni-icons>
                    </view>
                    <text :style="{ 'color' : font_color}" class="name">湿度</text>
                    <text :style="{ 'color' : font_color}" class="value">{{wea_info[1]}}</text>
                </view>
                <view class="each_wea_info">
                    <view class="weainfo_icon">
                        <uni-icons custom-prefix="icon" type="i-feng" size="60"></uni-icons>
                    </view>
                    <text :style="{ 'color' : font_color}" class="name">风力</text>
                    <text :style="{ 'color' : font_color}" class="value">{{wea_info[2]}}级</text>
                </view>
                <view class="each_wea_info">
                    <view class="weainfo_icon">
                        <uni-icons custom-prefix="icon" type="i-fengxiang" size="60"></uni-icons>
                    </view>
                    <text :style="{ 'color' : font_color}" class="name">风向</text>
                    <text :style="{ 'color' : font_color}" class="value">{{wea_info[3]}}</text>
                </view>

            </view>
            <view class="life_info" id="life_info" :style="{ 'background-color' : view_color}">
                <view class="each_life">
                    <view class="weainfo_icon">
                        <uni-icons custom-prefix="icon" type="i-duanxiu" size="60"></uni-icons>
                    </view>
                    <text :style="{ 'color' : font_color}" class="name">{{life_list[0]}}</text>
                    <text :style="{ 'color' : font_color}" class="value">穿衣</text>

                </view>
                <view class="each_life">
                    <view class="weainfo_icon">
                        <uni-icons custom-prefix="icon" type="i-lanqiu" size="60"></uni-icons>
                    </view>
                    <text :style="{ 'color' : font_color}" class="name">{{life_list[1]}}</text>
                    <text :style="{ 'color' : font_color}" class="value">运动</text>
                </view>
                <view class="each_life">
                    <view class="weainfo_icon">
                        <uni-icons custom-prefix="icon" type="i-shouye" size="60"></uni-icons>
                    </view>
                    <text :style="{ 'color' : font_color}" class="name">{{life_list[2]}}</text>
                    <text :style="{ 'color' : font_color}" class="value">感冒</text>
                </view>
                <view class="each_life">
                    <view class="weainfo_icon">
                        <uni-icons custom-prefix="icon" type="i-yu" size="60"></uni-icons>
                    </view>
                    <text :style="{ 'color' : font_color}" class="name">{{life_list[3]}}</text>
                    <text :style="{ 'color' : font_color}" class="value">钓鱼</text>
                </view>
                <view class="each_life">
                    <view class="weainfo_icon">
                        <uni-icons custom-prefix="icon" type="i-qiche" size="60"></uni-icons>
                    </view>
                    <text :style="{ 'color' : font_color}" class="name">{{life_list[4]}}</text>
                    <text :style="{ 'color' : font_color}" class="value">洗车</text>
                </view>
                <view class="each_life">
                    <view class="weainfo_icon">
                        <uni-icons custom-prefix="icon" type="i-fangshaishuang" size="60"></uni-icons>
                    </view>
                    <text :style="{ 'color' : font_color}" class="name">{{life_list[5]}}</text>
                    <text :style="{ 'color' : font_color}" class="value">防晒</text>
                </view>
                <view class="each_life">
                    <view class="weainfo_icon">
                        <uni-icons custom-prefix="icon" type="i-paoxie" size="60"></uni-icons>
                    </view>
                    <text :style="{ 'color' : font_color}" class="name">{{life_list[6]}}</text>
                    <text :style="{ 'color' : font_color}" class="value">晨练</text>
                </view>
            </view>
        </view>
    </view>
</template>

<script>
    export default {
        data() {
            return {
                dark_open: false,
                font_color: "#111111",
                view_color: '#d0e7ff',
                bar_back_color: '#78bdff',
                swi_color: "rgb(234, 234, 234)",
                city_name: "杭州",
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
                    series: [{
                            name: "最高气温",
                            data: []
                        },
                        {
                            name: "最低气温",
                            data: []
                        }
                    ]
                },
                icon: [],
                frist_change: true,
                sencend_change: false,
                cityid: "101210101",
                color: 'black',
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
                    tem: [],
                },

                old: {
                    scrollTop: 0
                },
                iStatusBarHeight: 0,
            };
        },


        methods: {
            //改变颜色模式
            change(e) {
                if (e.target.value === true) {
                    uni.setNavigationBarColor({
                        frontColor: '#ffffff',
                        backgroundColor: '#fff'
                    });
                    uni.setBackgroundColor({
                        backgroundColor: 'rgb(40, 44, 53)',
                        backgroundColorTop: 'rgb(40, 44, 53)',
                        backgroundColorBottom: 'rgb(40, 44, 53)'
                    });
                    this.bar_back_color = "#282c35"
                    console.log(this.bar_back_color)
                    this.view_color = '#3d454f'
                    this.font_color = "#eeeeee"
                    this.dark_open = true
                } else {
                    uni.setNavigationBarColor({
                        frontColor: '#000000',
                        backgroundColor: '#fff'
                    });
                    uni.setBackgroundColor({
                        backgroundColor: 'rgb(120, 189, 255)',
                        backgroundColorTop: 'rgb(120, 189, 255)',
                        backgroundColorBottom: 'rgb(120, 189, 255)'
                    });
                    this.bar_back_color = "#78bdff";
                    this.view_color = '#d0e7ff'
                    this.font_color = "#111111"
                    this.dark_open = false

                }

            },
            //获取当日的天气
            gettodaywea(cityid) {
                uni.request({
                    url: 'https://api.seniverse.com/v3/weather/hourly.json',
                    data: {
                        key: 'S8bEb7PvT6EdaikXS',
                        location: this.cityid
                    },
                    success: (res) => {
                        console.log(res)
                        this.city_name = res.data.results[0].location.name

                        this.temp_now = res.data.results[0].hourly[0].temperature
                        this.temp_max = this.chartData.series[0].data[0]
                        this.temp_min = this.chartData.series[1].data[0]
                        console.log(res.data.results[0].hourly[0])
                        for (var i = 0; i < 10; i++) {
                            this.each_hour.hour[i] = res.data.results[0].hourly[i].time.substring(11,
                                16)
                            console.log(this.each_hour.hour[i])

                        }
                        for (var i = 0; i < 10; i++) {
                            this.each_hour.tem[i] = res.data.results[0].hourly[i].temperature
                        }
                        for (var i = 0; i < 10; i++) {
                            this.each_hour.wea[i] = res.data.results[0].hourly[i].text
                        }
                        console.log(this.each_hour.wea)
                        this.icon = []
                        for (var index in this.each_hour.wea) {
                            if (this.each_hour.wea[index] === "多云" || this.each_hour.wea[index] ===
                                "阴转多云" ||
                                this.each_hour.wea[index] === "多云转阴" || this.each_hour.wea[index] === "阴") {
                                this.icon.push("i-duoyun")
                            } else if (this.each_hour.wea[index] === "小雨") {
                                this.icon.push("i-xiaoyu")
                            } else if (this.each_hour.wea[index] === "晴") {
                                if (Number(this.each_hour.hour[index].split(":")[0]) > 6 && Number(this
                                        .each_hour.hour[index].split(":")[0]) < 18) {
                                    this.icon.push("i-qing")
                                } else {
                                    this.icon.push("i-yueliang")
                                }
                            } else if (this.each_hour.wea[index] === "雷阵雨") {
                                this.icon.push("i-leiyujiaojia")
                            } else if (this.each_hour.wea[index] === "小雨转晴") {
                                this.icon.push("i-xiaoyu")
                            } else if (this.each_hour.wea[index] === "中雨") {
                                this.icon.push("i-zhongyu")
                            } else if (this.each_hour.wea[index] === "中雪") {
                                this.icon.push("i-zhongxue")
                            } else if (this.each_hour.wea[index] === "小雪") {
                                this.icon.push("i-xiaoxue")
                            }
                        }

                    },
                    fail: (err) => {
                        console.log(err)
                    }
                });
            },
            //获取未来7天的天气
            getalldaywea(cityid) {
                this.each_day_wea = []
                this.each_day_week = []
                uni.request({
                    url: 'https://yiketianqi.com/api?unescape=1',
                    data: {
                        appid: '29688265',
                        appsecret: '7LIT0JEW',
                        unescape: '1',
                        version: 'v1',
                        cityid: this.cityid
                    },
                    success: (res) => {
                        for (var i = 0; i < res.data["data"].length; i++) {
                            this.each_day_time.push(res.data["data"][i]["date"].split("-")[1] + "/" + res
                                .data[
                                    "data"][i]["date"].split("-")[2])
                        }
                        for (var i = 0; i < res.data["data"].length; i++) {
                            this.each_day_week.push(res.data["data"][i]["week"])
                        }
                        for (var i = 0; i < res.data["data"].length; i++) {
                            this.each_day_wea.push(res.data["data"][i]["wea_day"])
                        }

                        this.day_icon = []
                        this.chartData.series[0]["data"] = []
                        this.chartData.series[1]["data"] = []
                        for (var index in this.each_day_wea) {
                            if (this.each_day_wea[index].search("晴") !== -1) {
                                this.day_icon.push("i-qing")
                            } else if (this.each_day_wea[index].search("多云") !== -1) {
                                this.day_icon.push("i-duoyun")
                            } else if (this.each_day_wea[index].search("阴") !== -1) {
                                this.day_icon.push("i-duoyun")
                            } else if (this.each_day_wea[index].search("小雨") !== -1) {
                                this.day_icon.push("i-xiaoyu")
                            } else if (this.each_day_wea[index].search("中雨") !== -1) {
                                this.day_icon.push("i-zhongyu")
                            } else if (this.each_day_wea[index].search("大雨") !== -1) {
                                this.day_icon.push("i-dayu")
                            } else if (this.each_day_wea[index].search("雷阵雨") !== -1) {
                                this.day_icon.push("i-leiyujiaojia")
                            } else if (this.each_day_wea[index].search("小雪") !== -1) {
                                this.day_icon.push("i-xiaoxue")
                            } else if (this.each_day_wea[index].search("中雪") !== -1) {
                                this.day_icon.push("i-zhongxue")
                            } else if (this.each_day_wea[index].search("雷阵雨") !== -1) {
                                this.day_icon.push("i-leiyujiaojia")
                            }
                        }
                        for (var i = 0; i < res.data["data"].length; i++) {
                            this.chartData.series[0]["data"].push(res.data["data"][i]["tem1"].replace("℃",
                                ""))
                            this.chartData.series[1]["data"].push(res.data["data"][i]["tem2"].replace("℃",
                                ""))
                        }
                        console.log(this.chartData.series[0]["data"])
                        console.log(this.chartData.series[1]["data"])
                    }
                })
            },
            //获取空气指数
            getairinfo(cityid) {
                uni.request({
                    url: 'https://devapi.qweather.com/v7/air/now',
                    data: {
                        location: cityid,
                        key: '71cb1295daf64c3293a9e20a1372b31f',
                    },
                    success: (res) => {
                        this.air_level = res.data.now.category
                        this.air_level_word = "当前AQI指数为" + res.data.now.aqi

                    },
                    fail: (err) => {
                        console.log(err)
                    }
                })
            },
            //获取天气指数
            getweainfo(cityid) {
                this.wea_info = [];
                uni.request({
                    url: 'https://devapi.qweather.com/v7/weather/now',
                    data: {
                        location: cityid,
                        key: '71cb1295daf64c3293a9e20a1372b31f',
                    },
                    success: (res) => {
                        this.wea_info.push(res.data.now.temp)
                        this.wea_info.push(res.data.now.humidity)
                        this.wea_info.push(res.data.now.windScale)
                        this.wea_info.push(res.data.now.windDir)

                    },
                    fail: (err) => {
                        console.log(err)
                    }
                })
            },
            //根据地理位置，获取城市id
            getCityId(city_name) {
                uni.request({
                    url: 'https://geoapi.qweather.com/v2/city/lookup',
                    data: {
                        location: city_name,
                        key: '71cb1295daf64c3293a9e20a1372b31f',
                    },
                    success: (res) => {
                        this.cityid = res.data.location[0].id
                    }
                })
            },
            //获取生活指数
            lifeInfo(cityid) {
                var life_info = []
                uni.request({
                    url: "https://devapi.qweather.com/v7/indices/1d",
                    data: {
                        key: '71cb1295daf64c3293a9e20a1372b31f',
                        location: cityid,
                        type: 0,
                    },
                    success: (res) => {
                        life_info.push(res.data.daily[2].category)
                        life_info.push(res.data.daily[0].category)
                        life_info.push(res.data.daily[8].category)
                        life_info.push(res.data.daily[3].category)
                        life_info.push(res.data.daily[1].category)
                        life_info.push(res.data.daily[15].category)
                        life_info.push(res.data.daily[5].category)
                        this.aqi_word = res.data.daily[9].text
                    },
                    fail: (err) => {
                        console.log(err)

                    }
                })
                return life_info;
            },

            //第一个选择的响应，获取下一个的城市列表
            proChange(e) {
                console.log("选择省份")
                if (this.frist_change === true) {
                    this.frist_change === false
                }
                const db = uniCloud.database()
                db.collection("cityid").get()
                    .then(res => {
                        this.range2 = []
                        for (var each_city in res["result"]["data"][0][e]) {
                            this.range2.push({
                                'value': Object.values(res["result"]["data"][0][e][each_city])[0],
                                'text': Object.keys(res["result"]["data"][0][e][each_city])[0]
                            })
                        }
                    })
                    .catch(err => {
                        console.log(err)
                    })
                console.log("e:", e);
            },


            cityChange(e) {
                console.log("选择城市")
                console.log("e:", e);
                if (e !== "") {
                    this.cityid = e
                    console.log(e)
                    //获取当天天气
                    this.gettodaywea(this.cityid)
                    //获取7天天气
                    this.getalldaywea(this.cityid)
                    //获取空气指数
                    this.getairinfo(this.cityid)
                    //获取天气指数
                    this.getweainfo(this.cityid)
                    //获取各项生活指数
                    this.life_list = this.lifeInfo(this.cityid)
                }
            },
        },



        onPageScroll: function(e) {
            this.opacity = 100 - e.scrollTop * 0.6;

        },

        onReady() {
            uni.setNavigationBarColor({
                frontColor: '#000000',
                backgroundColor: '#fff'
            })
        },

        onLoad() {

            //获取城市id
            this.getCityId(this.city_name)
            console.log('city_id:' + this.cityid)

            //连接数据库，获取省份列表
            const db = uniCloud.database();
            db.collection("city_id").get()
                .then(res => {
                    for (var i = 0; i < res.result.data.length; i++) {
                        this.range1.push({
                            'value': res.result.data[i].cityname,
                            'text': res.result.data[i].cityname
                        })
                    }
                })
                .catch(err => {
                    console.log(err)
                })

            //获取7天天气
            this.getalldaywea(this.cityid);
            //获取当天天气
            this.gettodaywea(this.cityid);
            //获取空气指数
            this.getairinfo(this.cityid);
            //获取天气指数
            this.getweainfo(this.cityid);
            //调用lifeinfo方法，获取各项生活指数
            this.life_list = this.lifeInfo(this.cityid);




            this.iStatusBarHeight = uni.getSystemInfoSync().statusBarHeight;






        }

    }
</script>

<style lang="scss">
    @import "@/static/iconfont1.css";

    .switch {
        background-color: aqua;
        margin-left: 10rpx;
        height: 80%;
        width: 20%;
    }

    .choose_city {
        z-index: 100;
        border-radius: 20px;
        width: 95%;
        height: 90rpx;
        display: flex;
        align-items: center;
        margin: 0 auto;
        margin-top: 20rpx;
        z-index: 100;
    }

    .choose_city uni-data-select {
        margin-left: 20rpx;
    }

    .choose_city text {
        font-size: 15px;
        margin-left: 30rpx;
    }

    #main {
        display: flex;
        flex-direction: column;
    }

    #top {

        display: flex;
        width: 100%;
        height: 4%;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .all_hour_temp {
        box-sizing: border-box;
        padding: 0 20rpx;
        height: 250rpx;
        margin: 2% auto;
        margin-top: 3%;
        white-space: nowrap;
        width: 95%;
        border-radius: 20px;
        opacity: 0.7;
        z-index: -1;

    }

    .each_hour {
        width: 25%;
        height: 230rpx;
        display: inline-block;
        vertical-align: middle;
    }

    .each_hour view {
        box-sizing: border-box;
        margin-top: 15%;
        width: 100%;
        height: 80%;
        display: flex;
        flex-direction: column;
        text-align: center;
        justify-content: center;
    }

    .each_hour_time {
        margin-bottom: 0%;
    }

    .each_hour_tem {
        margin-top: 10%;
    }

    .each_day_time {
        margin-bottom: 0%;
    }

    .each_day_week {
        margin-bottom: 10%;
    }

    .each_day_wea {
        margin-top: 10%;
    }


    .week_wea_scroll {
        box-sizing: border-box;
        padding: 10rpx;
        display: flex;
        width: 95%;
        height: 70%;
        margin: 2% auto;

        border-radius: 20px;
        opacity: 0.7;
    }

    .each_day {
        display: inline-block;
        vertical-align: middle;
        height: 100%;
        width: 15%;
    }

    .each_day view {
        display: flex;
        flex-direction: column;
        text-align: center;
    }


    .all_day {
        margin-top: 3%;
        margin-left: 7%;
        white-space: nowrap;
        height: 50%;
        width: 160%;
    }


    .week_wea_line {
        margin-left: -3%;
        padding-bottom: 15rpx;
        width: 180%;
    }

    #air {
        display: flex;
        width: 95%;
        height: 270rpx;
        margin: 2% auto;
        border-radius: 20px;
        opacity: 0.7;
    }

    #tem_info {
        width: 95%;
        height: 250rpx;
        margin: 2% auto;
        border-radius: 20px;
        opacity: 0.7;
        display: flex;
    }

    #life_info {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        width: 95%;
        height: 40%;
        margin: 2% auto;
        border-radius: 20px;
        margin-bottom: 10%;
        opacity: 0.7;
    }



    #top>text:nth-child(1) {
        font-size: 60rpx;
    }

    #top>text:nth-child(2) {
        font-size: 25rpx;
    }

    #top>text:nth-child(3) {
        font-size: 30rpx;
    }

    .city {
        position: sticky;
        text-align: center;
        font-size: 75rpx;
        z-index: 1;
        width: 100%;
    }

    .air_pic {
        height: 200rpx;
        margin: 20rpx 0;
    }

    .air_level {
        position: relative;
        margin-top: -50rpx;
        font-size: 50rpx;
        top: -33%;
        left: 40%;
    }

    .air_word {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .air_level_word {
        font-size: 40rpx;
    }

    .aqi_word {
        color: rgb(100, 100, 100);
    }

    .each_wea_info {
        margin: 0, 10rpx;
        width: 25%;
        height: 250rpx;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .weainfo_icon {
        margin-top: 20%;
    }

    .name {
        font-size: 30rpx;
    }

    .value {
        color: rgb(120, 120, 120);
    }

    .each_life {
        width: 25%;
        height: 250rpx;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .bar_top {
        z-index: 10;
        position: sticky;
        top: 0rpx;
    }
</style>
