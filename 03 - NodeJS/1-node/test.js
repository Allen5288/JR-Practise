console.log("Hello, world!");

// IIFE (Immediately Invoked Function Expression) 立即调用函数表达式
(function (filename) {
    console.log(filename);
})(__filename); // __filename 是 Node.js 提供的全局变量，表示当前模块的文件名

