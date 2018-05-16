/**
 * 接口层的公共配置
 */

//  用于接口路径
let hostUrl = process.env.API_ROOT
    // 用于图片
let hostImg = hostUrl + '/'
    // 获取服务器（去掉/RhSys）的地址 用于视频
    // let hostHandle = hostUrl.substr(0, hostUrl.length - 6)

let host = {
    hostUrl,
    hostImg,
    // hostHandle
}

export default {
    install(Vue, options) {
        Vue.prototype.Host = host
    }
}