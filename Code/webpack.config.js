const path = require('path') // path 是node.js里的模块，专门处理路径问题， path 里有个方法叫 resolve, 可以返回一个绝对路径：
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    // 入口
    entry: "./src/main.js", // 相对路径

    // 输出：
    output: {
        // 文件输出路径：
        //  __dirname  是 node.js 的变量，代表当前文件夹目录
        path: path.resolve(__dirname, "dist"), // 绝对路径, 找到dist 文件夹； 
        // 入口文件打包输出的文件名
        filename: "js/main.js", // 这样打包后，main.js 入口文件就会保存在 dist/static/js 目录下，其他资源还是输出到 path 目录下；
        clean: true // 设置每次打包前清空上次的打包输出内容
    },

    // 加载器
    module: {
        rules: [
            // loader 的配置
            {
                test: /\.css$/i, // 检测筛查文件，只检测.css结尾的文件
                use: [
                        "style-loader", // 将 js 中的 css 通过 创建 style 标签添加到 html中让样式生效；
                        "css-loader" // 可以将css 资源编译成 common js 模块到 入口文件的 js 中；
                    ] // use 的执行顺序：从右到左，或者从下到上；

            },
            {
                test: /\.less$/i, // 检测筛查文件，只检测.css结尾的文件
                use: [
                        "style-loader", // 将 js 中的 css 通过 创建 style 标签添加到 html中让样式生效；
                        "css-loader", // 可以将css 资源编译成 common js 模块到 入口文件的 js 中；
                        "less-loader" // 可以将 less资源编译成 common js 模块到 入口文件的 js 中；
                    ] // use 的执行顺序：从右到左，或者从下到上；
            },
            {
                test: /\.(png|jpe?g|gif|webq|svg)$/,
                type: "asset",
                parser: {
                    dataUrlCondition: {
                        maxSize: 10 * 1024
                    }
                },
                generator: {
                    //生成输出图片的目录和文件名
                    filename: "images/[hash:10][ext][query]" // [hash:10] 表示只取哈希值的前10位
                }
            }

        ]

    },

    // 插件
    plugins: [
        //  plugin 的配置
        new HtmlWebpackPlugin({
            // 设置插件 html-webpack-plugin, 并且传入的参数是为了保证 打包成的新的 html文件保留我们之前写入的所有结构；
            //  打包成的新的html 文件特点： 1. 结构和以前一致，2. 会自动引入打包的资源；
            //  以后要运行的文件就直接用打包输出的新的 Html 文件
            template: path.resolve(__dirname, "public/index.html")

        })
    ],
    // 开发服务器
    devServer: {
        host: "localhost", // 启动服务器
        port: '3000', // 启动端口号
        open: true // 是否自动开启浏览器
    },
    // 模式
    mode: "development"

}