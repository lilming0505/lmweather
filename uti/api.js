//获取生活质量数据，直接返回列表
export default lifeInfo(cityid) {
    var life_info = []
    uni.request({
        url: "https://www.tianqiapi.com/life/lifepro",
        data: {
            appid: '29688265',
            appsecret: '7LIT0JEW',
            cityid: cityid,
        },
        success: (res) => {
            life_info.push(res.data.chuanyi.level)
            life_info.push(res.data.chenlian.level)
            life_info.push(res.data.diaoyu.level)
            life_info.push(res.data.ganmao.level)
            life_lnfo.push(res.data.fangshai.level)
            life_info.push(res.data.xiche.level)
            life_info.push(res.data.yundong.level)
        }
    })
    return life_info;
}
