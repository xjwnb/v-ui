/*
 * @Author: your name
 * @Date: 2020-12-12 01:23:52
 * @LastEditTime: 2020-12-12 01:24:50
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \v-ui\src\utils\debounce.js
 */
function debounce(fn, wait) {
  let timer = null;
  return function() {
    if(timer !== null) clearInterval(timer);
    timer = setTimeout(fn, wait);
  }
}