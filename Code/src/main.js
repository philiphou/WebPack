import count from "./js/count"
import sum from "./js/sum"
//  要想 webpack 打包资源，必须引入该资源： 如果要编译 css 等文件，需要增加 webpack 的配置；
import "./css/index.css"
import "./less/index.less"

console.log(count(5, 3))
console.log(sum(1, 2, 3, 4, 5))