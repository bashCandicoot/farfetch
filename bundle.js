(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
var css = ".Homepage{display:grid;grid-gap:10px;grid-template-rows:30px 35px 1fr;font-family:sans-serif;max-width:1440px;margin:auto;color:#333333;line-height:20px}.Homepage-TopMenuBar{display:flex;flex-direction:row;justify-content:space-around;padding:10px 0px 0px 0px}.Homepage-TopMenuBar>Icon{cursor:pointer}.Homepage-TopMenuBar-starred{padding-top:20px;margin-top:15px;color:grey}.Homepage-MessageBar{position:relative;display:flex;max-width:95%;justify-content:space-between;background-color:#d3d3d3;padding:10px}.Homepage-MessageBar-message{font-weight:bold;color:#db445d}.Homepage-backgroundImage{position:relative;display:inline;max-width:100%}.Homepage-promotionImage{position:absolute;-webkit-transform:translateX(-50%);transform:translateX(-50%);top:18%;left:50%;max-width:25%}.Homepage-Content{position:absolute;top:35%;text-align:center;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}.Homepage-Content-title{font-weight:bold;font-size:30px;width:500px}.Homepage-Content-body{padding-top:25px;padding-bottom:15px;max-width:55%;margin:auto}.Homepage-Content-shopButton{font-weight:bold;padding:7px;min-width:170px;min-height:40px;color:white;background-color:#333333;border-color:#333333;border-radius:5px}.Homepage-margin{margin-top:20px}.Homepage-emphasis{font-weight:bold}.Homepage-Footer-terms{padding-top:20%;font-weight:lighter}@media (min-width: 650px){.Homepage-promotionImage{top:6%;max-width:15%}.Homepage-Content{top:28%}.Homepage-Content-title{font-size:20px}.Homepage-Content-body{font-size:13px;max-width:95%;width:300px}.Homepage-Content-shopButton{min-height:20px}.Homepage-Footer-terms{font-size:12px;padding-top:5%}}@media (min-width: 1025px){.Homepage-promotionImage{top:7%;max-width:10%}}\n"
module.exports = require('scssify').createStyle(css, {})
},{"scssify":2}],2:[function(require,module,exports){
'use strict'
/*eslint-env browser */

module.exports = {
  /**
   * Create a <style>...</style> tag and add it to the document head
   * @param {string} cssText
   * @param {object?} options
   * @return {Element}
   */
  createStyle: function (cssText, options) {
    var container = document.head || document.getElementsByTagName('head')[0]
    var style = document.createElement('style')
    options = options || {}
    style.type = 'text/css'
    if (options.href) {
      style.setAttribute('data-href', options.href)
    }
    if (style.sheet) { // for jsdom and IE9+
      style.innerHTML = cssText
      style.sheet.cssText = cssText
    }
    else if (style.styleSheet) { // for IE8 and below
      style.styleSheet.cssText = cssText
    }
    else { // for Chrome, Firefox, and Safari
      style.appendChild(document.createTextNode(cssText))
    }
    if (options.prepend) {
      container.insertBefore(style, container.childNodes[0]);
    } else {
      container.appendChild(style);
    }
    return style
  }
}

},{}],3:[function(require,module,exports){
'use strict';

require('./main.scss');

},{"./main.scss":1}]},{},[3]);
