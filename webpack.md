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
