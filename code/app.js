import { resolve } from "dns";
import { rejects } from "assert";

/**
 * 找出数组中的最小值 第三题
 * @arr {Array} 原数组
 * @param {number} arr 
 */
function findMinNum(arr) {
    var newArr = arr.sort((a, b) => a - b);
    return newArr.length ? newArr[0] : null;
}

/**
 * 延时器
 * @param {number} delay 延迟时间 ms
 * @param {*} calllback 回调函数
 */
function delayTimer(delay, calllback) {
    setTimeout(() => {
        calllback();
    }, delay);
}

/**
 * 第九题
 */
function addStr() {
    var promiseA = new Promise((resolve, reject) => {
        delayTimer(10, () => resolve('hello'))
    }).then(res => {
        return new Promise((resolve, reject) => {
            delayTimer(10, () => resolve(res + ' lagou '))
        })
    }).then(res => {
        delayTimer(10, () => console.log(res + 'I 💗 U'))
    })
}