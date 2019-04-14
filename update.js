const fs  = require("fs");
const co   = require("co")
const path  = require("path")
let arr  =  ["127.9.0.1","127.9.0.1","217.9.0.1","127.9.0.1"];

// function files(arr=[]) {
//     co(function*() {
//         let result   =  yield fs.readFileSync(path.resolve('./base.txt'));
//         console.log(result);
//     })
// }


function files(arr) {
    fs.readFile(path.resolve('./server.txt'),async(err,data)=>{
        if(err){
            console.log(" 读取配置文件信息失败 ：：：");
            return
        }
        console.log(data);
        let baseData   =  data.toString();
        await Promise.all(arr.map(async(one)=>{
            let writeData  = baseData.replace(/###/g,one);
            let res  = await  fs.writeFileSync(path.resolve("./2.3/"+ [arr.indexValue(one)+1] +".txt"),writeData)
        }));
        // console.log(baseData)
    })
}

// 查询元素在数组中的索引值
Array.prototype.indexValue = function (arr) {
    for (var i = 0; i < this.length; i++) {
        if (this[i] == arr) {
            return i;
        }
    }
}


files(arr);















