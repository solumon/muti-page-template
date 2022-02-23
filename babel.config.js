// babel config blog https://my.oschina.net/u/4125329/blog/4916583
module.exports = {
    presets: [
        ['@babel/preset-env', {
            // 需要兼容到以下浏览器的什么版本
            "targets": {
                "ie": 11,
                "edge": "17",
                "firefox": "60",
                "chrome": "67",
                "safari": "11.1",
            },
            // 按需加载
            "useBuiltIns": "usage",
            // 指定core-js版本 看好了这个地方如果和你安装的包的版本不一样会报错
            "corejs": "3.21",
        }]
    ]
}
