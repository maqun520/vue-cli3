/*
    在项目里新建一个common文件夹用于存放全局 .js 文件
    这种全局文件夹做法相当普遍，一般项目里都应该有这样一个文件夹来管理全局的东西
*/

// common/jurisdiction.js  用于存放与权限相关的全局函数/变量

export function checkJurisdiction(key) {
    // 权限数组
    let jurisdictionList = ['1', '2', '3', '5']
    let index = jurisdictionList.indexOf(key)
    console.log('index:',index)
    if (index > -1) {
        // 有权限
        return true
    } else {
        // 无权限
        return false
    }
}