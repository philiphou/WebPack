## ========= WebPack5 学习 ==========
# WebPack 简介
 - 简介：
    WebPack 是一种前端资源构建工具，一个静态模块打包器(module bundler), 在webpack看来，前端的所有资源文件都会作为模块处理，它将根据模块的依赖关系进行静态分析， 打包生成对应的静态资源（bundler)；
 - 为什么需要打包工具： 
   开发时， 我们会使用框架 （react,vue) es6 模块语法，less/sass等css预处理器等语法进行开发，这样的代码想要在浏览器运行必须通过编译成浏览器认识的 JS, CSS 语法才可以，所以我们需要打包工具帮我们做完这些事。除此之外，打包工具还能压缩代码，做兼容性处理，提升代码性能等
 - 主流打包工具是 Webpack;
 - 功能介绍：
   1. 开发模式： 仅能编译JS中的ES module 语法
   2. 生成模式： 能编译JS中的 ES module 语法，还能压缩JS代码
 - 下载 webpack 包：
   1. npm init -y ; 初始化包描述文件： package.json
   2. 下载两个依赖： - webpack 和 - webpack-cli 语法： npm i webpack webpack-cli  -D  ; -D 表示加入到依赖中
   3. 运行指令： 说明： npm 是用来下载包的指令 npx 指令是将 node_modules 下的 .bin 临时添加为环境变量，这样就可以访问 .bin 目录下个各个方法指令，
       此处比如运行 webpack.cmd, 运行webpack 时候要传入一个入口文件路径，指定从哪个文件开始打包，此处我们用 main.js 作为入口文件： 同时可以指定模式，我们先选择
       开发模式： mode=development; 生产模式： --mode=production
        npx webpack ./src/main.js --mode=development
   4. 看到 绿色的 successfully 就是编译成功了
   5. 打包完成的文件会保存在 dist 目录中，这样编译好的main.js 就可以被网页浏览器引入识别，注意是 dist 目录下的入口文件 main.js， 这是编译好的入口文件。
   6. 测试生产环境，只要改成： --mode = production 就好; 生产环境会对代码进行压缩；
 - 基本配置：5大核心概念
   1. 入口：（entry) 提示 webpack从哪个文件开始打包
   2. 输出： output 只是webpack打包玩的文件输出到哪里去，如何命名等；
   3. 加载器 （loader) webpack 本身只能处理 js json 等资源，其他资源需要借助 loader， webpack 才能处理这些资源
   4. plugins （插件）： 扩展webpack功能
   5. mode (模式) 开发模式和生产模式
   6. 配置文件： webpack.config.js 一定要位于根目录下; webpack.config.js是在node 环境下运行的，所以里面的模块化语法都是 common js 的 例如： module.export ={}
   7. 配置文件设置好之后，可以直接执行命令： npx webpack  这样它就会去目录下寻找 webpack.config.js 文件，读取配置文件后，开始根据配置文件要求去打包；
 - 开发模式介绍：
   1. 开发模式顾名思义就是我们开发代码时候使用的模式
   2. 此模式下，我们的主要两个任务：
      - 编译代码，使浏览器能识别运行
         开发时候， 我们有样式资源，字体图标，图片资源，html资源，webpack默认都不能处理这些资源，所以我们需要加载配置来编译这些资源
      - 代码质量检测，树立代码规范；
        提前检查代码的一些隐患，让代码运行时更加健壮； 提前检查代码规范和格式，统一团队编码风格，让代码更加美观。
 - 处理样式资源： 
    1. 处理CSS资源： 
      - 下载包
        npm i css-loader style-loader -D 或者：npm install --save-dev css-loader
        
      - 引入css 文件，在入口文件中 import 需要编译的 css 文件
      - 在 webpack 配置文件中 webpack.config.js 中， 修改rules{}, 可以查官方文档： 需要哪些loader 就下载哪些；
            {
                test: /\.css$/i, // 检测筛查文件，只检测.css结尾的文件
                use: [
                        "style-loader", // 将 js 中的 css 通过 创建 style 标签添加到 html中让样式生效；
                        "css-loader" // 可以将css 资源编译成 common js 模块到 入口文件的 js 中；
                    ] // use 的执行顺序：从右到左，或者从下到上；
            },
         
    2. 处理 less 资源： less 是一种css 的预处理器；其他类似的预处理器还有 saas 和 stylus
      - 下载包
        下载 less 和 less-loader: 
        npm install less less-loader --save-dev
      - 更新 webpack.config.js 的 less 配置；

       {
          test: /\.less$/i, // 检测筛查文件，只检测.css结尾的文件
                use: [
            "style-loader", // 将 js 中的 css 通过 创建 style 标签添加到 html中让样式生效；
            "css-loader", // 可以将css 资源编译成 common js 模块到 入口文件的 js 中；
            "less-loader" // 可以将 less资源编译成 common js 模块到 入口文件的 js 中；
                    ] // use 的执行顺序：从右到左，或者从下到上；
            }
    3. 处理 sass 资源
      - 方法同上，可以看官方文档下载包和配置 webpack.config.js
    4. 处理图片资源
      - 在webpack.config.js里添加图片配置： 利用正则选择所有后缀是 .png,jpeg,jpg gif 和 webq 的图片文件
         {
           test: /\.(png|jpe?g|gif|webp)$/, 
           type:"asset"
         }
      - 因为图片处理方法已经内置到了 webpack 中，不需要再安装下载loader, 所以可以直接打包： npx webpack
      - 针对较小的图片，可以转化成 base64 格式 来优化图片；可以搜索官方文件去调用；
          parser:{
            <!-- 小于10kb 的图片转化格式 -->
            dataUrlCondition:{
              <!-- 转换优点： 减少请求数量，缺点：转换后的体积会变得大一点  -->
              maxSize:10*1024
            }
          }
    5. 修改输出文件的目录：打包后输出的文件进入响应的目录，比如 js --> js. css-->css
     - 注意打包之后，不会删除dist 之前的内容，如果更新，要删除之前的内容，重新打包；
     - 配置输出文件的路径和文件名： 
         generator: {
                    //生成输出图片的目录和文件名
                    filename: "static/images/[hash:10][ext][query]" // [hash:10] 表示只取哈希值的前10位
                }

    6. 自动清空上次打包内容；
      - 只需要在 output 属性下加入 clea 子属性： 原理是打包前，将 path 整个目录内容清空；
                output: {
                  // 文件输出路径：
                  //  __dirname  是 node.js 的变量，代表当前文件夹目录
                  path: path.resolve(__dirname, "dist"), // 绝对路径, 找到dist 文件夹； 
                  // 入口文件打包输出的文件名
                  filename: "static/js/main.js", // 这样打包后，main.js 入口文件就会保存在 dist/static/js 目录下，其他资源还是输出到 path 目录下；
                  clean: true // 设置每次打包前清空上次的打包输出内容
              },
    7. 处理字体图标资源： 一般直接远程CDN 引入，除非下载下来再去引用打包；

    8. 处理其他资源： 音视频，excel 等： 
        {
          test:/\.(ttf|woff2?|mp3|mp4|avi)$/,
          type:"asset/resource",
          generator:{
            <!-- 输出路径和名称 -->
            filename:"media/[hash:10][ext][query]"
          }

        }
    9. 处理js 资源， 
      - 原因： 
        webpack 对js 处理是有限的，只能编译js 中的 es 模块化语法，不能编译其他语法，导致js不能在IE 等浏览器运行，不过IE 已经被放弃了，不学也罢；
      - 小知识： babel 可以将ES6语法编写的代码编译成向后兼容的 JS 语法，以便能够运行在IE 或者旧版本的浏览器；
    10. 处理 html 资源；
      - 需求：
        让HTML自动引入打包后的资源；不用现在手动引入打包完的 bundler
      - 使用插件 plugins 来自动引入打包完的文件： 
        下载 引入 直接用： npm install --save-dev html-webpack-plugin
      - 下载完毕后，进入 webpack.config.js， 首先引入，然后去 plugin 部分，设置配置 
                  plugins: [
                //  plugin 的配置
                new HtmlWebpackPlugin() // 设置插件 html-webpack-plugin
         ]
      - 控制台直接运行 npx webpack
    11. 开发服务器和自动化
      - 每次写完代码，都要手动输入指令才能编译代码，这样太麻烦了，我们希望一切自动化： 
         -- 下载包： npm i webpack-dev-server -D
         -- webpack-dev-server 服务器会自动监视我们src 目录下的原文件改动，如果发现改动，则会自动重新打包，
         -- 下载完这个包后，去到 webpack-config.js 文件下进行配置： 
         -- 启动了 webpack-dev-server后，我们的打包指令需要变成： npx webpack serve
         -- 注意，webpack-dev-server 不会输出打包后的文件，是在内存中编译打包的，开发模式下是没有任何输出的，只是会在浏览器里有效果；
    12. 总结开发模式下配置： 
        entry; output; module; plugins; devServer; mode;
    13. 生产模式： 
        -- 把 webpack-dev.js 和 webpack-prod.js 两个配置文件放到新建文件夹： config 中，
        -- 终端运行： npx webpack serve --config ./config/webpack-dev.js
        -- 注意修改配置文件中的绝对路径，需要 ../进入上一级目录
        -- 生产模式下，打包后是需要有输出文件的。配置文件 webpack.prod.js 中的mode 要改为： production 模式， 生产模式不再需要 webpack-dev-server,只需要打包文件输出就好。
        -- 终端输入命令： npx webpack --config ./Config/webpack-prod.js
        -- 为了缩短指令写法，我们去package.json 文件中找到 script 属性，定义并添加两个指令，一个是指定 dev 表示开发模式：一个是build 表示生产模式： 
              "scripts": {    
                              "start": "npm run dev",
                              "dev": "webpack serve --config ./Config/webpack-dev.js",
                              "build": "webpack --config ./Config/webpack-prod.js"
                          },
        -- 这样我们运行指令时候，直接输入 npm start 这样就启动开发模式的指令；如果运行生产环境，就输入： npm run build
     14. 生产模式的配置： 
        - 处理 CSS 文件成单独文件
          -- CSS文件目前被打包到js 文件中，当js文件加载时候，会创建一个style标签来生成样式
          -- 这样对于网站来说会出现闪屏现象，用户体验不好，我们应该提取出单独的CSS文件，然后link到我们的网页中才好
          -- 下载包： 
              npm install mini-css-extract-plugin -D
          -- 修改配置文件： 
              {
                test:/\.css$/i,
                use:[
                  MiniCssExtractPlugin.loader,"css-loaer'
                ]
              }
          -- 插件部分 用 new 创建一次；  new MiniCssExtractPlugin()
          -- 最后运行指令： npm run build 这样输出文件中就有一个 main.css ， 是把所有的css 文件打包输出到这一个css 文件中；可以指定文件目录和名称:
               new MiniCssExtractPlugin({
                                            filename: './css/main.css'
                                                })
          - CSS 兼容性处理： 一般使用 postcss-loader 去处理，详情看官方文档，现在IE 不用了，兼容性好很多了.
      15. 封装样式loader函数
        - webpack 的config 配置 js 里有很多重复代码，可以集合起来封装成一个loader函数，这样每次调用就好了；
            function getStyleloader(pre){
              return [
                MiniCssExtractPlugin.loader,// 提取css成单独文件
                "css-loader",
                {
                  loader:"postcss-loader",
                  options:{
                    postcssOptions:{
                      plugins:[
                        "postcss-preset-env",// 能解决大多数样式兼容性问题
                      ]
                    }
                  }
                },
               pre,
              ].filter(Boolean)
            }
      16. CSS 压缩： 使用插件： CssMinimizerWebpackPlugin; 
          下载包依赖，config.js中引入， 最后 plugin 中 new 方法调用，然后 npm  run build 检查输出结果；
      17. html 和 js 的压缩： 默认生产模式已经开启，html 和 js 文件不需要额外压缩，自动压缩；

              


        
                                  
            


   

