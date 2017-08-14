/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _deferred = __webpack_require__(1);

var _deferred2 = _interopRequireDefault(_deferred);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var d1 = new _deferred2.default();

var d2 = new _deferred2.default();

_deferred2.default.when(d1, d2).done(function (data1, data2) {
	console.log('d1, d2', data1, data2);
});
setTimeout(function () {
	d1.resolve(new Date());
	d2.resolve(new Date());
}, 1000);
/*var asy1 = $.Deferred();
var asy2 = $.Deferred();
$.when(asy1, asy2).done((data1, data2) => {
	console.log(data1, data2);
});
asy1.resolve('asy1');
asy2.resolve('asy2');*/

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function Deferred() {
	this.init();
}
Deferred.prototype.init = function () {
	this.resolveList = [];
	this.rejectList = [];
	this.notifyList = [];
};
Deferred.prototype.resolve = function () {
	var _this = this,
	    _arguments = arguments;

	this.resolveList.forEach(function (fn, key) {
		fn.apply(_this, _arguments);
	});
	this.resolveList = [];
	return this;
};
Deferred.prototype.resolveWith = function (contexts, args) {};
Deferred.prototype.reject = function () {
	var _this2 = this,
	    _arguments2 = arguments;

	this.rejectList.forEach(function (fn, key) {
		fn.apply(_this2, _arguments2);
	});
	this.rejectList = [];
	return this;
};
Deferred.prototype.notify = function () {
	var _this3 = this,
	    _arguments3 = arguments;

	this.notifyList.forEach(function (fn, key) {
		fn.apply(_this3, _arguments3);
	});
	this.rejectList = [];
	return this;
};
Deferred.prototype.done = function (callback) {

	this.resolveList.push(callback);
	return this;
};
Deferred.prototype.fail = function (callback) {

	this.rejectList.push(callback);
	return this;
};
Deferred.prototype.progress = function (callback) {

	this.notifyList.push(callback);
	return this;
};
Deferred.when = function (deferreds) {
	var length = deferreds.length;
	var master = new Deferred(); // 返回的deferred
	var count = length;
	var masterArgs = [];
	for (var i = 0; i < length; i++) {
		console.log(deferreds);
		deferreds[i].done(resolveFunc(i));
	}
	function resolveFunc(i) {
		return function (value) {
			masterArgs[i] = [].slice.call(arguments, 0);
			if (! --count) {
				master.resolve(masterArgs);
			}
		};
	}
	return master;
};

module.exports = Deferred;

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZDdiNmYyZjc3YTcwMDAzMjNjZTAiLCJ3ZWJwYWNrOi8vLy4vYXBwL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9kZWZlcnJlZC5qcyJdLCJuYW1lcyI6WyJkMSIsImQyIiwid2hlbiIsImRvbmUiLCJkYXRhMSIsImRhdGEyIiwiY29uc29sZSIsImxvZyIsInNldFRpbWVvdXQiLCJyZXNvbHZlIiwiRGF0ZSIsIkRlZmVycmVkIiwiaW5pdCIsInByb3RvdHlwZSIsInJlc29sdmVMaXN0IiwicmVqZWN0TGlzdCIsIm5vdGlmeUxpc3QiLCJmb3JFYWNoIiwiZm4iLCJrZXkiLCJhcHBseSIsInJlc29sdmVXaXRoIiwiY29udGV4dHMiLCJhcmdzIiwicmVqZWN0Iiwibm90aWZ5IiwiY2FsbGJhY2siLCJwdXNoIiwiZmFpbCIsInByb2dyZXNzIiwiZGVmZXJyZWRzIiwibGVuZ3RoIiwibWFzdGVyIiwiY291bnQiLCJtYXN0ZXJBcmdzIiwiaSIsInJlc29sdmVGdW5jIiwidmFsdWUiLCJzbGljZSIsImNhbGwiLCJhcmd1bWVudHMiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7QUM3REE7Ozs7OztBQUVBLElBQUlBLEtBQUss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QUFhaEMsSUFBYixDQUFrQmlDLFlBQVlELENBQVosQ0FBbEI7QUFDQTtBQUNELFVBQVNDLFdBQVQsQ0FBc0JELENBQXRCLEVBQXlCO0FBQ3hCLFNBQU8sVUFBVUUsS0FBVixFQUFpQjtBQUN2QkgsY0FBV0MsQ0FBWCxJQUFnQixHQUFHRyxLQUFILENBQVNDLElBQVQsQ0FBY0MsU0FBZCxFQUF5QixDQUF6QixDQUFoQjtBQUNBLE9BQUksQ0FBRSxHQUFFUCxLQUFSLEVBQWdCO0FBQ2ZELFdBQU92QixPQUFQLENBQWV5QixVQUFmO0FBQ0E7QUFDRCxHQUxEO0FBTUE7QUFDRCxRQUFPRixNQUFQO0FBQ0EsQ0FsQkQ7O0FBb0JBUyxPQUFPQyxPQUFQLEdBQWlCL0IsUUFBakIsQyIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBkN2I2ZjJmNzdhNzAwMDMyM2NlMCIsImltcG9ydCBEZWZlcnJlZCBmcm9tICcuLi9zcmMvZGVmZXJyZWQnXHJcblxyXG52YXIgZDEgPSBuZXcgRGVmZXJyZWQoKTtcclxuXHJcbnZhciBkMiA9IG5ldyBEZWZlcnJlZCgpO1xyXG5cclxuRGVmZXJyZWQud2hlbihkMSwgZDIpLmRvbmUoKGRhdGExLCBkYXRhMikgPT4ge1xyXG5cdGNvbnNvbGUubG9nKCdkMSwgZDInLCBkYXRhMSwgZGF0YTIpO1xyXG59KTtcclxuc2V0VGltZW91dCgoKSA9PiB7XHJcblx0ZDEucmVzb2x2ZShuZXcgRGF0ZSgpKTtcclxuXHRkMi5yZXNvbHZlKG5ldyBEYXRlKCkpO1xyXG59LCAxMDAwKTtcclxuLyp2YXIgYXN5MSA9ICQuRGVmZXJyZWQoKTtcclxudmFyIGFzeTIgPSAkLkRlZmVycmVkKCk7XHJcbiQud2hlbihhc3kxLCBhc3kyKS5kb25lKChkYXRhMSwgZGF0YTIpID0+IHtcclxuXHRjb25zb2xlLmxvZyhkYXRhMSwgZGF0YTIpO1xyXG59KTtcclxuYXN5MS5yZXNvbHZlKCdhc3kxJyk7XHJcbmFzeTIucmVzb2x2ZSgnYXN5MicpOyovXHJcblxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvaW5kZXguanMiLCJmdW5jdGlvbiBEZWZlcnJlZCgpIHtcclxuXHR0aGlzLmluaXQoKTtcclxufVxyXG5EZWZlcnJlZC5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uICgpIHtcclxuXHR0aGlzLnJlc29sdmVMaXN0ID0gW107XHJcblx0dGhpcy5yZWplY3RMaXN0ID0gW107XHJcblx0dGhpcy5ub3RpZnlMaXN0ID0gW107XHJcbn07XHJcbkRlZmVycmVkLnByb3RvdHlwZS5yZXNvbHZlID0gZnVuY3Rpb24gKCkge1xyXG5cdHRoaXMucmVzb2x2ZUxpc3QuZm9yRWFjaCgoZm4sIGtleSkgPT4ge1xyXG5cdFx0Zm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxuXHR9KTtcclxuXHR0aGlzLnJlc29sdmVMaXN0ID0gW107XHJcblx0cmV0dXJuIHRoaXM7XHJcbn1cclxuRGVmZXJyZWQucHJvdG90eXBlLnJlc29sdmVXaXRoID0gZnVuY3Rpb24gKGNvbnRleHRzLCBhcmdzKSB7XHJcblxyXG59O1xyXG5EZWZlcnJlZC5wcm90b3R5cGUucmVqZWN0ID0gZnVuY3Rpb24gKCkge1xyXG5cdHRoaXMucmVqZWN0TGlzdC5mb3JFYWNoKChmbiwga2V5KSA9PiB7XHJcblx0XHRmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG5cdH0pO1xyXG5cdHRoaXMucmVqZWN0TGlzdCA9IFtdO1xyXG5cdHJldHVybiB0aGlzO1xyXG59XHJcbkRlZmVycmVkLnByb3RvdHlwZS5ub3RpZnkgPSBmdW5jdGlvbiAoKSB7XHJcblx0dGhpcy5ub3RpZnlMaXN0LmZvckVhY2goKGZuLCBrZXkpID0+IHtcclxuXHRcdGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcblx0fSk7XHJcblx0dGhpcy5yZWplY3RMaXN0ID0gW107XHJcblx0cmV0dXJuIHRoaXM7XHRcclxufVxyXG5EZWZlcnJlZC5wcm90b3R5cGUuZG9uZSA9IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XHJcblx0XHJcblx0dGhpcy5yZXNvbHZlTGlzdC5wdXNoKGNhbGxiYWNrKTtcclxuXHRyZXR1cm4gdGhpcztcclxufVxyXG5EZWZlcnJlZC5wcm90b3R5cGUuZmFpbCA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xyXG5cdFxyXG5cdHRoaXMucmVqZWN0TGlzdC5wdXNoKGNhbGxiYWNrKTtcclxuXHRyZXR1cm4gdGhpcztcdFxyXG59XHJcbkRlZmVycmVkLnByb3RvdHlwZS5wcm9ncmVzcyA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xyXG5cdFxyXG5cdHRoaXMubm90aWZ5TGlzdC5wdXNoKGNhbGxiYWNrKTtcclxuXHRyZXR1cm4gdGhpcztcdFx0XHJcbn1cclxuRGVmZXJyZWQud2hlbiA9IGZ1bmN0aW9uIChkZWZlcnJlZHMpIHtcclxuXHR2YXIgbGVuZ3RoID0gZGVmZXJyZWRzLmxlbmd0aDtcclxuXHR2YXIgbWFzdGVyID0gbmV3IERlZmVycmVkKCk7IC8vIOi/lOWbnueahGRlZmVycmVkXHJcblx0dmFyIGNvdW50ID0gbGVuZ3RoO1xyXG5cdHZhciBtYXN0ZXJBcmdzID0gW107XHJcblx0Zm9yIChsZXQgaSA9IDA7aSA8IGxlbmd0aDtpKyspIHtcclxuXHRcdGNvbnNvbGUubG9nKGRlZmVycmVkcyk7XHJcblx0XHRkZWZlcnJlZHNbaV0uZG9uZShyZXNvbHZlRnVuYyhpKSk7XHJcblx0fVxyXG5cdGZ1bmN0aW9uIHJlc29sdmVGdW5jIChpKSB7XHJcblx0XHRyZXR1cm4gZnVuY3Rpb24gKHZhbHVlKSB7XHJcblx0XHRcdG1hc3RlckFyZ3NbaV0gPSBbXS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMCk7XHJcblx0XHRcdGlmICghKC0tY291bnQpKSB7XHJcblx0XHRcdFx0bWFzdGVyLnJlc29sdmUobWFzdGVyQXJncyk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblx0cmV0dXJuIG1hc3RlcjtcclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBEZWZlcnJlZDtcclxuXHJcblxyXG5cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2RlZmVycmVkLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==