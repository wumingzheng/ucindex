/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/assets/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(2);

	var _wa = __webpack_require__(6);

	var _wa2 = _interopRequireDefault(_wa);

	var _creationPainter = __webpack_require__(9);

	var _creationPainter2 = _interopRequireDefault(_creationPainter);

	var _pageLoading = __webpack_require__(41);

	var _pageLoading2 = _interopRequireDefault(_pageLoading);

	var _adaptation = __webpack_require__(45);

	var _adaptation2 = _interopRequireDefault(_adaptation);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	window.addEventListener('error', function () {
	    alert('message:' + event.message + '`filename:' + event.filename + '`lineno:' + event.lineno);
	});

	// import vconsole from 'vconsole'


	var creation = window.__creation__;

	_creationPainter2.default.draw(creation);
	_pageLoading2.default.waitToResourceArrive(creation, function () {
	    _creationPainter2.default.show(creation);
	});

	_wa2.default.setup({
	    appid: '27c5e9e8acb5',
	    intl: false
	});

	_adaptation2.default.banLandscapeOrientation();

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(3);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./app.scss", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./app.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, "html,\nbody,\ndiv,\nspan,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\npre,\nimg,\nb,\ni,\ndl,\ndt,\ndd,\nol,\nul,\nli {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  outline: 0;\n  list-style: none;\n  background-color: transparent; }\n\narticle,\nsection {\n  display: block; }\n\na {\n  color: #666;\n  text-decoration: none; }\n\nhtml {\n  width: 100%;\n  height: 100%; }\n\nbody {\n  font-family: \"Helvetica Neue\", Arial, \"Hiragino Sans GB\", STHeiti, \"Microsoft Yahei\", \"WenQuanYi Micro Hei\", \"sans-serif\";\n  -webkit-text-size-adjust: 100%;\n  -webkit-font-smoothing: antialiased;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  -webkit-user-select: none;\n  -webkit-tap-highlight-color: transparent;\n  height: 100%;\n  overflow: hidden;\n  margin: auto; }\n  body .cf:after {\n    visibility: hidden;\n    display: block;\n    font-size: 0;\n    content: \" \";\n    clear: both;\n    height: 0; }\n  body .panel {\n    border-radius: 0; }\n  body .btn {\n    border-radius: 0;\n    padding: 0; }\n  body .navbar {\n    margin-bottom: 0; }\n\n.model-audio-roll {\n  -webkit-animation: modelAudioRoll 1.6s infinite linear; }\n\n@-webkit-keyframes modelAudioRoll {\n  0% {\n    -webkit-transform: rotateZ(0); }\n  100% {\n    -webkit-transform: rotateZ(360deg); } }\n\n.cssload-thecube {\n  width: 73px;\n  height: 73px;\n  margin: 0 auto;\n  position: relative;\n  transform: rotateZ(45deg);\n  -webkit-transform: rotateZ(45deg) scale(0.7); }\n\n.cssload-thecube .cssload-cube {\n  position: relative;\n  transform: rotateZ(45deg);\n  -webkit-transform: rotateZ(45deg); }\n\n.cssload-thecube .cssload-cube {\n  float: left;\n  width: 50%;\n  height: 50%;\n  position: relative;\n  transform: scale(1.1);\n  -webkit-transform: scale(1.1); }\n\n.cssload-thecube .cssload-cube:before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: #2a327a;\n  animation: cssload-fold-thecube 2.76s infinite linear both;\n  -webkit-animation: cssload-fold-thecube 2.76s infinite linear both;\n  transform-origin: 100% 100%;\n  -webkit-transform-origin: 100% 100%; }\n\n.cssload-thecube .cssload-c2 {\n  transform: scale(1.1) rotateZ(90deg);\n  -webkit-transform: scale(1.1) rotateZ(90deg); }\n\n.cssload-thecube .cssload-c3 {\n  transform: scale(1.1) rotateZ(180deg);\n  -webkit-transform: scale(1.1) rotateZ(180deg); }\n\n.cssload-thecube .cssload-c4 {\n  transform: scale(1.1) rotateZ(270deg);\n  -webkit-transform: scale(1.1) rotateZ(270deg); }\n\n.cssload-thecube .cssload-c2:before {\n  animation-delay: 0.35s;\n  -webkit-animation-delay: 0.35s; }\n\n.cssload-thecube .cssload-c3:before {\n  animation-delay: 0.69s;\n  -webkit-animation-delay: 0.69s; }\n\n.cssload-thecube .cssload-c4:before {\n  animation-delay: 1.04s;\n  -webkit-animation-delay: 1.04s; }\n\n@keyframes cssload-fold-thecube {\n  0%,\n  10% {\n    transform: perspective(136px) rotateX(-180deg);\n    opacity: 0; }\n  25%,\n  75% {\n    transform: perspective(136px) rotateX(0deg);\n    opacity: 1; }\n  90%,\n  100% {\n    transform: perspective(136px) rotateY(180deg);\n    opacity: 0; } }\n\n@-webkit-keyframes cssload-fold-thecube {\n  0%,\n  10% {\n    -webkit-transform: perspective(136px) rotateX(-180deg);\n    opacity: 0; }\n  25%,\n  75% {\n    -webkit-transform: perspective(136px) rotateX(0deg);\n    opacity: 1; }\n  90%,\n  100% {\n    -webkit-transform: perspective(136px) rotateY(180deg);\n    opacity: 0; } }\n", ""]);

	// exports


/***/ },
/* 4 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	(function (root, factory) {
	    'use strict';
	    if (true) {
	        // CommonJS
	        module.exports = factory(
	            __webpack_require__(7),
	            __webpack_require__(8)
	        );
	    }
	    // Global Variables
	    root.UEM = root.UEM || {};
	    root.UEM.wa = factory(root.UEM.ua, root.UEM.network);
	}(window, function (ua, network) {
	    'use strict';

	    var out = {},
	        appid = null,
	        intl = null,
	        isSetuped = false,
	        debug = null,
	        WA_HOST_NAME = ['http://track.uc.cn', 'http://gjtrack.uc.cn'],
	        KEY_NAME = {
	            PAGE: 'pg',
	            CLICK: 'ck_id',
	            EVENT: 'event'
	        };

	    /**
	     * 初始化配置
	     * @param  {Object} config 配置项
	     *
	     * {String} appid 接入wa分配的appId
	     * {Boolean} intl 是否为国际业务
	     */
	    out.setup = function (conf) {
	        appid = conf.appid;
	        intl = conf.intl ? 1 : 0;
	        debug = conf.debug;
	        isSetuped = true;
	    };

	    /**
	     * 【访问日志】
	     * @param {string} page 访问页面
	     * @param {Object} params 日志自定义参数对象
	     * @param {string} turl 目标地址
	     */
	    out.pageview = generateStandardWaFunc(KEY_NAME.PAGE);

	    /**
	     * 【点击日志】
	     * @param {string} click 点击行为
	     * @param {Object} params 日志自定义参数对象
	     * @param {string} turl 目标地址
	     */
	    out.click = generateStandardWaFunc(KEY_NAME.CLICK);

	    /**
	     * 【事件日志】
	     * @param {string} event 事件名称
	     * @param {Object} params 日志自定义参数对象
	     * @param {string} turl 目标地址
	     */
	    out.event = generateStandardWaFunc(KEY_NAME.EVENT);

	    /**
	     * 【自定义日志】
	     * @param {Object} params 日志自定义参数对象
	     * @param {string} turl 目标地址
	     */
	    out.custom = function (params, turl) {
	        executeValidityCheck(null, null);
	        sendDataPackage2WaHost(null, null, params, turl);
	    };

	    /**
	     * generate wa function
	     */
	    function generateStandardWaFunc(keyName) {
	        return function (keyParam, params, turl) {
	            executeValidityCheck(keyName, keyParam);
	            sendDataPackage2WaHost(keyName, keyParam, params, turl);
	        };
	    }

	    /**
	     * execute a variety of validity check.
	     */
	    function executeValidityCheck(keyName, keyParam) {
	        if (!isSetuped) {
	            throw new Error('please setup config first.');
	        }
	        if (keyName) {
	            if (!keyParam) {
	                throw new Error(keyName + ' required.');
	            }
	            if (typeof keyParam !== 'string') {
	                throw new Error(keyName + ' must be a string.');
	            }
	        }
	    }

	    /**
	     * send log data package to wa host.
	     */
	    function sendDataPackage2WaHost(keyName, keyParam, params, turl) {
	        var keyPair = {};
	        if (keyName) {
	            keyPair[keyName] = keyParam;
	        }
	        if (debugLoghandler(keyName, keyPair, params)) {
	            return;
	        }
	        network.ping(
	            network.parseQuery(
	                multipleInheritance(params, keyPair),
	                WA_HOST_NAME[intl] + '/collect'
	            ),
	            generateBasicLogData(keyName),
	            function () {
	                if (turl) {
	                    window.location.href = turl;
	                }
	            }
	        );
	    }

	    /**
	     * generate basic log data according key name.
	     */
	    function generateBasicLogData(keyName) {
	        return {
	            lt: getWaLogType(keyName),
	            appid: appid,
	            sessionid: ua.getSessionId(),
	            platform: ua.pf
	        };
	    }

	    /**
	     * get wa log type according key name.
	     */
	    function getWaLogType(keyName) {
	        switch (keyName) {
	        case KEY_NAME.PAGE:
	            return 'log';
	        case KEY_NAME.CLICK:
	            return 'link';
	        case KEY_NAME.EVENT:
	            return 'event';
	        }
	    }

	    /**
	     * create object by multiple inheritance
	     */
	    function multipleInheritance() {
	        var obj = {},
	            i = arguments.length;
	        while (i--) {
	            for (var prop in arguments[i]) {
	                if (arguments[i].hasOwnProperty(prop)) {
	                    obj[prop.toLowerCase()] = arguments[i][prop];
	                }
	            }
	        }
	        return obj;
	    }

	    /**
	     * handle debug log
	     */
	    function debugLoghandler(keyName, keyPair, params) {
	        if (debug) {
	            console.log(
	                WA_HOST_NAME[intl] + '/collect',
	                multipleInheritance(
	                    generateBasicLogData(keyName),
	                    multipleInheritance(params, keyPair)
	                )
	            );
	            return true;
	        }
	        return false;
	    }

	    return out;
	}));


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	(function(root, factory) {
	    'use strict';
	    if (true) {
	        // CommonJS
	        module.exports = factory();
	    } else if (typeof define === 'function' && define.amd) {
	        // AMD
	        define(function() {
	            return factory();
	        });
	    } else if (typeof define === 'function' && define.cmd) {
	        // CMD
	        define(function(require, exports, module) {
	            module.exports = factory();
	        });
	    } else {
	        // Global Variables
	        root.UEM = root.UEM || {};
	        root.UEM.ua = factory();
	    }
	}(this, function() {
	    'use strict';

	    var out = {},
	        ua = window.navigator.userAgent.toLowerCase(),
	        pf = '',
	        os = '',
	        sessionId = '';

	    /**
	     * whether is ios system
	     */
	    out.isIOS = function() {
	        return /\(i[^;]+;( U;)? CPU.+Mac OS X/i.test(ua);
	    };

	    /**
	     * current os
	     */
	    if (out.isIOS()) {
	        os = 'IOS';
	    } else if (ua.indexOf('android') > 1) {
	        os = 'ANDROID';
	    } else {
	        os = 'OTHERS';
	    }
	    out.os = os;

	    /**
	     * calculate pf
	     */
	    if (ua.indexOf('ucbrowser') >= 0) {
	        pf = 'UC';
	    } else if (ua.indexOf('ucnewsapp') >= 0) {
	        pf = 'UCNEWS';
	    } else if (ua.indexOf('micromessenger') >= 0) {
	        pf = 'WECHAT';
	    } else if (ua.indexOf('youku/') >= 0) {
	        pf = 'YOUKU';
	    } else if (new RegExp('qq/\\d+\\.\\d+\\.\\d+\\.\\d+', 'i').test(ua)) {
	        pf = 'QQ';
	    } else if (new RegExp('weibo__\\d+\\.\\d+\\.\\d+', 'i').test(ua)) {
	        pf = 'WEIBO';
	    } else {
	        pf = 'OTHERS';
	    }
	    
	    /**
	     * useragent platform
	     */
	    out.pf = pf;

	    /**
	     * get session id
	     */
	    out.getSessionId = function() {
	        try {
	            var key = 'UEM_SESSION_ID';
	            sessionId = sessionId || window.localStorage.getItem(key);
	            if (sessionId && sessionId.length) {
	                return sessionId;
	            } else {
	                sessionId = generateSessionId();
	                window.localStorage.setItem(key, sessionId);
	                return sessionId;
	            }
	        } catch (e) {
	            return '';
	        }
	    };

	    /**
	     * generate session id
	     */
	    function generateSessionId() {
	        var sessionId = (+new Date() + '').substr(2, 10),
	            NUM = 32;
	        while (sessionId.length < NUM) {
	            sessionId += parseInt(Math.random() * 10, 10);
	        }
	        return sessionId;
	    }

	    out.getSessionId();

	    /**
	     * get uc version string
	     */
	    out.getUCVersion = function() {
	        var match = /ucbrowser\/([^\s]*)/.exec(ua);
	        return match && match.length === 2 ? match[1] : '';
	    };

	    /**
	     * is uc latest version
	     */
	    out.isUCLatestVersion = function(latestVersion) {
	        var curVersion = out.getUCVersion();
	        return compareVersion(curVersion, latestVersion);
	    };

	    /**
	     * get ucnews version string
	     */
	    out.getUCNewsVersion = function() {
	        var match = /ucnewsapp\/([^\s]*)/.exec(ua);
	        return match && match.length === 2 ? match[1] : '';
	    };

	    /**
	     * is uc latest version
	     */
	    out.isUCNewsLatestVersion = function(latestVersion) {
	        var curVersion = out.getUCNewsVersion();
	        return compareVersion(curVersion, latestVersion);
	    };


	    function compareVersion(curVersion, latestVersion) {
	        if (!curVersion.length) {
	            return false;
	        }
	        var curVersionArr = curVersion.split('.');
	        var latestVersionArr = latestVersion.split('.');
	        var cmpBit = 0;
	        while (cmpBit < latestVersionArr.length) {
	            if (parseInt(curVersionArr[cmpBit], 10) < parseInt(latestVersionArr[cmpBit], 10)) {
	                return false;
	            }
	            if (parseInt(curVersionArr[cmpBit], 10) > parseInt(latestVersionArr[cmpBit], 10)) {
	                return true;
	            }
	            ++cmpBit;
	        }
	        return true;
	    }

	    return out;

	}));


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	(function (root, factory) {
	    'use strict';
	    if (true) {
	        // CommonJS
	        module.exports = factory();
	    } else {
	        // Global Variables
	        root.UEM = root.UEM || {};
	        root.UEM.network = factory();
	    }
	}(this, function () {
	    'use strict';
	    var out = {};

	    var baseRequestParams = {}, // 每个请求都会带的参数，可通过 baseParam 设置
	        baseResponseSuccessHandler, // 每个 response 都会执行的 handler，可通过 baseSuccess 设置
	        ucParam; // 为 url 添加 uc 公参和 entry 参数的方法

	    /**
	     * 获取对象的类型
	     * @param {any} obj - 被检查的对象
	     */
	    function getType(obj) {
	        var type;
	        if (obj == null) {
	            type = String(obj);
	        } else {
	            type = Object.prototype.toString.call(obj).toLowerCase();
	            type = type.substring(8, type.length - 1);
	        }
	        return type;
	    }

	    /**
	     * 遍历数组或对象，当迭代函数返回 false 时终止
	     * @param {object|array} obj - 需要遍历的对象或数组
	     * @param {function} iterator - 迭代器，遍历时调用的迭代函数
	     * @param {object} context - 迭代器的 this 上下文对象
	     */
	    function each(obj, iterator, context) {
	        /*jshint curly: false */
	        var i,
	            l,
	            type;
	        if (typeof obj !== 'object') {
	            return;
	        }
	        type = getType(obj);
	        context = context || obj;
	        if (type === 'array' || type === 'arguments' || type === 'nodelist') {
	            for (i = 0, l = obj.length; i < l; i++) {
	                if (iterator.call(context, obj[i], i, obj) === false) {
	                    return;
	                }
	            }
	        } else {
	            for (i in obj) {
	                if (obj.hasOwnProperty(i)) {
	                    if (iterator.call(context, obj[i], i, obj) === false) {
	                        return;
	                    }
	                }
	            }
	        }
	    }

	    /**
	     * 浅复制
	     * @params {object...} args - 多个被复制的对象
	     */
	    function extend() {
	        var obj = {};
	        each(arguments, function (arg) {
	            each(arg, function (val, key) {
	                obj[key] = val;
	            });
	        });
	        return obj;
	    }

	    /**
	     * 获取 url 上的 search 参数值
	     * @param {string} key - 参数名
	     * @param {string} url - 被查找的 url，默认为当前的 location
	     */
	    function getQueryParam(key, url) {
	        url = url || location.search;
	        var hashIndex = url.indexOf('#'),
	            keyMatches;
	        if (hashIndex > 0) {
	            url = url.substr(0, hashIndex);
	        }
	        keyMatches = url.match(new RegExp('[?|&]' + encodeURIComponent(key) + '=([^&]*)(&|$)'));
	        return keyMatches ? decodeURIComponent(keyMatches[1]) : '';
	    }

	    /**
	     * 将 queryString 拼接在 url 后面
	     * @param {string} url - 拼接的 url
	     * @param {string} query - queryString
	     */
	    function _appendQuery2Url(url, query) {
	        var hashIndex, hash;
	        if (query) {
	            hashIndex = url.indexOf('#');
	            if (hashIndex >= 0) {
	                hash = url.substr(hashIndex);
	                url = url.substr(0, hashIndex);
	            } else {
	                hash = '';
	            }
	            url += (url.indexOf('?') < 0 ? '?' : '&') + query.replace(/^[?|&]+/, '') + hash;
	        }
	        return url;
	    }


	    /**
	     * 反序列化 'a=1&b=2&c=d+e' 形式的 querystring 为 对象 {a: 1, b: 2, c: 'd e'}
	     * @param {string} queryString - 被查找的 querystring，默认为当前的 location.search
	     */
	    function parseQueryString2Object(queryString) {
	        queryString = (queryString || location.queryString).replace(/^\?/, '');
	        var queryArr = queryString.split('&'),
	            i,
	            queryKeyVal,
	            queryObj = {};
	        if (queryArr.length) {
	            for (i = 0; i < queryArr.length; i++) {
	                queryKeyVal = queryArr[i].split('=');
	                if (queryKeyVal.length === 2) {
	                    queryObj[queryKeyVal[0]] = decodeURIComponent(queryKeyVal[1]);
	                }
	            }
	        }
	        return queryObj;
	    }


	    /**
	     * 序列化对象 {a: 1, b: 2, c: 'd e'} 为 'a=1&b=2&c=d+e' 形式的 querystring
	     * @param {object} data - 被转化的对象
	     * @param {string} appendTo - ，追加 querystring 的 url
	     * @return {string} - 若指定 appendTo，则返回追加 querystring 后的 url，否则直接返回 querystring
	     */
	    function parseObject2QueryString(data, appendTo) {
	        var stack = [],
	            query,
	            appendUrlHashIndex,
	            appendUrlHash = '',
	            appendUrlQueryIndex,
	            appendUrlQueryObject,
	            needAppend = getType(appendTo) === 'string';

	        // 解析 appendTo 上面的 queryObject，用 data 覆盖重复的 key
	        if (needAppend) {
	            appendUrlHashIndex = appendTo.indexOf('#');
	            if (appendUrlHashIndex >= 0) {
	                appendUrlHash = appendTo.substr(appendUrlHashIndex);
	                appendTo = appendTo.substr(0, appendUrlHashIndex);
	            }
	            appendUrlQueryIndex = appendTo.indexOf('?');
	            if (appendUrlQueryIndex >= 0) {
	                appendUrlQueryObject = parseQueryString2Object(appendTo.substr(appendUrlQueryIndex));
	                data = extend(appendUrlQueryObject, data);
	                appendTo = appendTo.substr(0, appendUrlQueryIndex);
	            }
	        }

	        each(data, function (value, key) {
	            stack.push(encodeURIComponent(key) + '=' + encodeURIComponent(value === undefined ? '' : value));
	        });
	        query = stack.join('&').replace(/%20/g, '+');

	        return needAppend ? appendTo + '?' + query + appendUrlHash : query;
	    }

	    /**
	     * 为 url 添加 uc 公参和 entry 参数
	     * 注意：uc_param_str 放在 url 最后，避免 Android 客户端 10.4.0.(558+) 的 bug
	     * @params {string} url - 需要被添加公参的 url 地址
	     */
	    ucParam = (function () {
	        var query,
	            entry,
	            origin,
	            ucParamStr,
	            i = 0,
	            pName,
	            pVal,
	            data = {},
	            validLen;

	        // 兼容 WP 和 UCMINI 在 ajax 的时候不带公参
	        if (getQueryParam('fr') === 'wp' || getQueryParam('pf') === '139' || getQueryParam('pf') === '140') {
	            ucParamStr = getQueryParam('uc_param_str');
	            validLen = ucParamStr.length - ucParamStr.length % 2;
	            while (i < validLen) {
	                pName = ucParamStr.substr(i, 2);
	                pVal = getQueryParam(pName);
	                if (pVal.length > 0) {
	                    data[pName] = pVal;
	                }
	                i += 2;
	            }
	        }
	        entry = getQueryParam('entry').replace(/\s/g, '');
	        if (entry) {
	            data.entry = entry;
	        }
	        origin = getQueryParam('origin').replace(/\s/g, '');
	        if (origin) {
	            data.origin = origin;
	        }
	        query = parseObject2QueryString(data);
	        return function (url) {
	            url = _appendQuery2Url(url, query);
	            if (!getQueryParam('uc_param_str', url)) {
	                url = _appendQuery2Url(url, 'uc_param_str=dsdnfrpfbivesscpgimibtbmnijblauputogpintnw');
	            }
	            return url;
	        };
	    })();

	    /**
	     * 获取当前用户访问时长，低端机型需要带上__t参数，避开缓存
	     */
	    function getDurationTimeParam() {
	        try {
	            return {
	                __dt: +new Date() - window.performance.timing.navigationStart,
	                __t: +new Date()
	            };
	        } catch (e) {
	            return {
	                __t: +new Date()
	            };
	        }
	    }

	    /**
	     * ajax 方法(只支持 GET 和 POST)
	     * @params {object} options - ajax 的配置
	     */
	    function ajax(options) {
	        options = options || {};
	        var type = options.type || 'GET',
	            url = options.url || '',
	            params = extend(getDurationTimeParam(), baseRequestParams, options.data),
	            success = options.success,
	            error = options.error || function () {},
	            xhr = new XMLHttpRequest(),
	            formData;
	        // 兼容 UC 浏览器的缓存
	        xhr.onreadystatechange = function () {
	            var res;
	            if (xhr.readyState === 4) {
	                if (xhr.status === 200) {
	                    try {
	                        res = JSON.parse(xhr.responseText);
	                    } catch (e) {
	                        // 记录 JSON.parse 错误，方便出错时检查
	                        xhr.customError = e;
	                        error(xhr);
	                        return;
	                    }
	                    // 如果设置了 baseResponseSuccessHandler 则先执行
	                    if (baseResponseSuccessHandler) {
	                        baseResponseSuccessHandler(res);
	                    }
	                    // 再执行成功回调
	                    if (success) {
	                        success(res);
	                    }
	                } else {
	                    error(xhr);
	                }
	            }
	        };
	        type = type.toUpperCase() === 'POST' ? 'POST' : 'GET';
	        try {
	            if (type === 'POST') {
	                // 检查是否有上传文件
	                each(params, function (val) {
	                    if (getType(val) === 'file') {
	                        formData = new FormData();
	                        return false;
	                    }
	                });
	                url = ucParam(url);
	                xhr.open(type, url, true);
	                if (formData) {
	                    // 有文件类型，使用 multipart/form-data
	                    each(params, function (val, key) {
	                        if (key && val !== undefined) {
	                            formData.append(key, getType(val) === 'array' ? val.join() : val);
	                        }
	                    });
	                    // 不需要 set Content-Type
	                    // https://developer.mozilla.org/en-US/docs/Web/API/FormData/Using_FormData_Objects
	                } else {
	                    // 没有文件上传，使用 application/x-www-form-urlencoded
	                    // https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest
	                    formData = parseObject2QueryString(params);
	                    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
	                }
	            } else {
	                // 将 uc_param_str 放在最后
	                url = ucParam(parseObject2QueryString(params, url));
	                xhr.open(type, url, true);
	            }
	            xhr.customRequestUrl = url; // 记录请求的 URL，方便出错时检查
	            xhr.send(formData);
	        } catch (e) {
	            console.error('ajax error', e);
	            // do nothing
	        }
	    }

	    /**
	     * 创建一个 GET 或 POST 的 ajax 的 快捷方法
	     * @params {string} type - ajax 的 method，'GET' 或 'POST'
	     */
	    function _typeAjax(type) {
	        return function (url, params, success, error) {
	            ajax({
	                type: type,
	                url: url,
	                data: params,
	                success: success,
	                error: error
	            });
	        };
	    }

	    /**
	     * ping 一个 url 地址
	     * @param {string} url - 访问的地址
	     * @param {object} data - get 参数
	     * @param {function} cb - 回调方法
	     */
	    out.ping = function (url, data, cb) {
	        var img = new Image(),
	            params = extend(getDurationTimeParam(), baseRequestParams, data);
	        setupPingCallback(img, cb);
	        img.src = ucParam(parseObject2QueryString(params, url));
	    };

	    /**
	     * ping 超时等待时间
	     */
	    var WAIT_TIME_THRESHOLD = 2000;

	    /**
	     * setup ping callback
	     */
	    function setupPingCallback(img, cb) {
	        var count = 1,
	            timer = setTimeout(function () {
	                count = pingCallback(count, cb, false);
	                timer = null;
	            }, WAIT_TIME_THRESHOLD);
	        img.onload = img.onerror = function () {
	            count = pingCallback(count, cb, true);
	            if (timer) {
	                clearTimeout(timer);
	                timer = null;
	            }
	        };
	    }

	    /**
	     * ping callback
	     */
	    function pingCallback(count, cb, success) {
	        if (count && cb) {
	            cb(success); // 是否超时
	            --count;
	        }
	        return count;
	    }

	    /**
	     * 设置、获取 baseParam
	     * @param {string|object} name - 若为 string，则为被设置、获取的参数名；若为 object，则为设置的对象，并忽略后面的参数
	     * @param {string} val - 若为不传参，则返回前面的 name 参数值；否则设置 name 的值为 val
	     */
	    out.baseParam = function (name, val) {
	        if (getType(name) === 'string') {
	            if (arguments.length === 1) {
	                return baseRequestParams[name];
	            } else {
	                baseRequestParams[name] = val;
	            }
	        } else if (getType(name) === 'object') {
	            baseRequestParams = extend(baseRequestParams, name);
	        }
	    };

	    /**
	     * 设置默认的 success handler
	     * @param  {[type]} argument [description]
	     */
	    out.baseSuccess = function (handler) {
	        if (getType(handler) === 'function') {
	            baseResponseSuccessHandler = handler;
	        }
	    };

	    /**
	     * 重定向
	     * @param {string} url 目标地址
	     */
	    out.redirect = function (url) {
	        if (url) {
	            // 补全 URL
	            if (!/http[s]:\/\//.test(url)) {
	                var elLink = document.createElement('a');
	                // document.body.appendChild(elLink);
	                elLink.href = url;
	                url = elLink.href;
	                elLink = undefined;
	            }
	            location.href = ucParam(parseObject2QueryString(baseRequestParams, url));
	        }
	    };


	    /**
	     * 对外发布接口
	     */
	    out.query = getQueryParam;
	    out.parseObject = parseQueryString2Object;
	    out.parseQuery = parseObject2QueryString;
	    out.ucParam = ucParam;
	    out.ajax = ajax;
	    out.get = _typeAjax('GET');
	    out.post = _typeAjax('POST');

	    return out;
	}));


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	__webpack_require__(10);

	var _slider = __webpack_require__(12);

	var _slider2 = _interopRequireDefault(_slider);

	var _query = __webpack_require__(13);

	var _query2 = _interopRequireDefault(_query);

	var _wa = __webpack_require__(6);

	var _wa2 = _interopRequireDefault(_wa);

	var _ModelType = __webpack_require__(14);

	var _audioModel = __webpack_require__(15);

	var _audioModel2 = _interopRequireDefault(_audioModel);

	var _fontModel = __webpack_require__(22);

	var _fontModel2 = _interopRequireDefault(_fontModel);

	var _imageModel = __webpack_require__(23);

	var _imageModel2 = _interopRequireDefault(_imageModel);

	var _quadrangleModel = __webpack_require__(24);

	var _quadrangleModel2 = _interopRequireDefault(_quadrangleModel);

	var _circleModel = __webpack_require__(25);

	var _circleModel2 = _interopRequireDefault(_circleModel);

	var _barGraphModel = __webpack_require__(26);

	var _barGraphModel2 = _interopRequireDefault(_barGraphModel);

	var _multiDimensionalGraphModel = __webpack_require__(28);

	var _multiDimensionalGraphModel2 = _interopRequireDefault(_multiDimensionalGraphModel);

	var _brokenLineGraphModel = __webpack_require__(30);

	var _brokenLineGraphModel2 = _interopRequireDefault(_brokenLineGraphModel);

	var _annulusGraphModel = __webpack_require__(32);

	var _annulusGraphModel2 = _interopRequireDefault(_annulusGraphModel);

	var _shareButtonModel = __webpack_require__(34);

	var _shareButtonModel2 = _interopRequireDefault(_shareButtonModel);

	var _skipButtonModel = __webpack_require__(39);

	var _skipButtonModel2 = _interopRequireDefault(_skipButtonModel);

	var _spriteModel = __webpack_require__(40);

	var _spriteModel2 = _interopRequireDefault(_spriteModel);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var CreationPainter = function () {
	    function CreationPainter() {
	        _classCallCheck(this, CreationPainter);

	        this.__wrapCreationEle__ = null;
	        this.__globalModel__ = [];
	        this.__afterRenderQueue__ = [];
	        this.__pageList__ = [];
	        this.__lastPageIndex__ = null;
	    }

	    _createClass(CreationPainter, [{
	        key: 'draw',
	        value: function draw(creation) {
	            var pageListHtml = '';
	            for (var i = 0; i < creation.pageList.length; ++i) {
	                var page = creation.pageList[i];
	                page.index = i;
	                pageListHtml += this.__drawPage(page);
	                this.__pageList__.push(page);
	            }
	            this.__wrapCreationEle__ = '\n            <div id="wrap-creation">\n                ' + pageListHtml + '\n            </div>\n        ';
	            this.__globalModel__ = '\n            <div id="global-model">\n                ' + this.__globalModel__.join('') + '\n            </div>\n        ';
	        }
	    }, {
	        key: 'show',
	        value: function show(creation) {
	            var _this = this;

	            (0, _query2.default)('#visual-app').append((0, _query2.default)(this.__globalModel__)).append((0, _query2.default)(this.__wrapCreationEle__)).delay(100).exec(function () {
	                _this.__drawCompleted(creation);
	            }).exec(function () {
	                _this.__drawNextTips();
	                window.__visualSlider__ = new _slider2.default({
	                    el: '#wrap-creation',
	                    loop: false,
	                    nextTipsEl: '#next',
	                    change: function change(i) {
	                        _this.__runExitJob(_this.__lastPageIndex__);
	                        _this.__runShowJob(i);
	                        _this.__lastPageIndex__ = i;
	                        _wa2.default.pageview('page' + (i + 1), {
	                            creationid: creation.id
	                        });
	                    }
	                });
	                (0, _query2.default)('#visual-app').style('opacity: 1');
	                if (window.visualInited) {
	                    window.visualInited();
	                }
	            });
	        }
	    }, {
	        key: '__drawPage',
	        value: function __drawPage(page) {
	            page.showJob = [];
	            page.exitJob = [];
	            var modelListHtml = '';
	            for (var i = 0; i < page.modelList.length; ++i) {
	                modelListHtml += this.__drawModel(page.modelList[i], page);
	            }
	            return '\n            <div class="wrap-page">\n                ' + modelListHtml + '\n            </div>\n            ';
	        }
	    }, {
	        key: '__drawModel',
	        value: function __drawModel(model, page) {
	            var modelObject = null;
	            switch (model.type) {
	                case _ModelType.MODEL_IMAGE:
	                    modelObject = _imageModel2.default;
	                    break;
	                case _ModelType.MODEL_FONT:
	                    modelObject = _fontModel2.default;
	                    break;
	                case _ModelType.MODEL_AUDIO:
	                    modelObject = _audioModel2.default;
	                    break;
	                case _ModelType.MODEL_QUADRANGLE:
	                    modelObject = _quadrangleModel2.default;
	                    break;
	                case _ModelType.MODEL_CIRCLE:
	                    modelObject = _circleModel2.default;
	                    break;
	                case _ModelType.MODEL_BAR_GRAPH:
	                    modelObject = _barGraphModel2.default;
	                    break;
	                case _ModelType.MODEL_MULTI_DIMENSIONAL_GRAPH:
	                    modelObject = _multiDimensionalGraphModel2.default;
	                    break;
	                case _ModelType.MODEL_BROKEN_LINE_GRAPH:
	                    modelObject = _brokenLineGraphModel2.default;
	                    break;
	                case _ModelType.MODEL_ANNULUS_GRAPH:
	                    modelObject = _annulusGraphModel2.default;
	                    break;
	                case _ModelType.MODEL_SHARE_BUTTON:
	                    modelObject = _shareButtonModel2.default;
	                    break;
	                case _ModelType.MODEL_SKIP_BUTTON:
	                    modelObject = _skipButtonModel2.default;
	                    break;
	                case _ModelType.MODEL_SPRITE:
	                    modelObject = _spriteModel2.default;
	                    break;
	                default:
	                    return '';
	            }
	            model.pageIndex = page.index;
	            return modelObject.parseToHtmlString(model, this.__globalModel__, this.__afterRenderQueue__, page.showJob, page.exitJob);
	        }
	    }, {
	        key: '__drawNextTips',
	        value: function __drawNextTips() {
	            if (window.__creation__.id !== 38) {
	                (0, _query2.default)('#visual-app').append((0, _query2.default)('<div id="next"></div>'));
	            }
	        }
	    }, {
	        key: '__drawCompleted',
	        value: function __drawCompleted(creation) {
	            for (var i = 0; i < this.__afterRenderQueue__.length; ++i) {
	                this.__afterRenderQueue__[i]();
	            }
	            _audioModel2.default.init(creation);
	        }
	    }, {
	        key: '__runShowJob',
	        value: function __runShowJob(pageIndex) {
	            var page = this.__pageList__[pageIndex];
	            for (var i = 0; i < page.showJob.length; ++i) {
	                page.showJob[i](page);
	            }
	            _audioModel2.default.next(pageIndex);
	        }
	    }, {
	        key: '__runExitJob',
	        value: function __runExitJob(pageIndex) {
	            try {
	                var page = this.__pageList__[pageIndex];
	                for (var i = 0; i < page.exitJob.length; ++i) {
	                    page.exitJob[i](page);
	                }
	            } catch (e) {}
	        }
	    }]);

	    return CreationPainter;
	}();

	exports.default = new CreationPainter();

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(11);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./creationPainter.scss", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./creationPainter.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, "#next {\n  position: fixed;\n  bottom: 14px;\n  left: 50%;\n  width: 25px;\n  height: 22px;\n  margin-left: -12px;\n  -webkit-animation: nextTips 1.6s infinite;\n  background: 0 0 url(http://image.uc.cn/s/uae/g/01/visual/18/next_tips.png) no-repeat;\n  background-size: 100% 100%; }\n\n@-webkit-keyframes nextTips {\n  0% {\n    bottom: 15px; }\n  25% {\n    bottom: 5px; }\n  50% {\n    bottom: 15px; }\n  75% {\n    bottom: 10px; }\n  100% {\n    bottom: 15px; } }\n\n#visual-app {\n  -webkit-transition: all 0.4s ease;\n  opacity: 0; }\n  #visual-app #wrap-creation {\n    -webkit-transform-origin-x: 0;\n    -webkit-transform-origin-y: 0; }\n    #visual-app #wrap-creation .wrap-page {\n      width: 100%;\n      height: 100%;\n      overflow: hidden;\n      background-color: #fff; }\n  #visual-app #global-model {\n    -webkit-transform-origin-x: 0;\n    -webkit-transform-origin-y: 0;\n    position: fixed;\n    z-index: 100; }\n  #visual-app .model {\n    position: absolute;\n    text-align: center;\n    font-size: 0;\n    -webkit-transform: translate3d(0, 0, 0); }\n", ""]);

	// exports


/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	(function (win, factory) {
	    'use strict';
	    win.UEM = win.UEM || {};
	    win.UEM.Slider = factory();
	    if (true) {
	        // CommonJS
	        module.exports = factory();
	    } else if (typeof define === 'function' && define.cmd) {
	        // CMD
	        define(function (require, exports, module) {
	            module.exports = factory();
	        });
	    }
	}(this, function () {
	    'use strict';

	    var MIN_TOUCH_DIS = 50;

	    /**
	     * Class Slider
	     */
	    function Slider(opt) {
	        init(this, opt);
	    }

	    /**
	     * show prev page
	     */
	    Slider.prototype.prev = function () {
	        if (this.opt.loop) {
	            this.move(this.cur === 0 ? this.pages.length - 1 : this.cur - 1);
	        } else {
	            if (this.cur !== 0) {
	                this.move(this.cur - 1);
	            }
	        }
	    };

	    /**
	     * show next page
	     */
	    Slider.prototype.next = function () {
	        if (this.opt.loop) {
	            this.move(this.cur === this.pages.length - 1 ? 0 : this.cur + 1);
	        } else {
	            if (this.cur !== this.pages.length - 1) {
	                this.move(this.cur + 1);
	            }
	        }
	    };

	    /**
	     * back to top page
	     */
	    Slider.prototype.backToTop = function () {
	        if (this.cur !== 0) {
	            this.move(0);
	            this.change(0);
	        }
	    };

	    /**
	     * move to page specified
	     * @param {number} next - next page's index
	     */
	    Slider.prototype.move = function (next) {
	        var forceReflow,
	            ns = this.pages[next].style,
	            cs = this.pages[this.cur].style,
	            dir = next > this.cur ? 1 : -1;
	        ns.webkitTransition = '';
	        ns.webkitTransform = 'translate3d(0, ' + dir + '00%, 0)';
	        ns.display = 'block';
	        forceReflow = this.el.offsetTop;
	        cs.webkitTransition = 'all .6s linear';
	        ns.webkitTransition = 'all .6s linear';
	        setTimeout(function () {
	            cs.webkitTransform = 'translate3d(0, ' + (-dir) + '00%, 0)';
	            ns.webkitTransform = 'translate3d(0, 0, 0)';
	        }, 40)
	        this.change(this.cur = next);
	        changeNextTipsElDisplay(this, next);
	    };


	    /**
	     * initialize property
	     */
	    function initProp(slider, opt) {
	        slider.el = {};
	        slider.opt = opt;
	        slider.startY = 0;
	        slider.cur = 0;
	        slider.flag = 1;
	        slider.nextTipsEl = opt.nextTipsEl;
	        slider.change = opt.change || function () {};
	    }

	    /**
	     * initialize element style
	     */
	    function initElement(slider, el) {
	        slider.el = document.querySelectorAll(el)[0];
	        slider.el.style.position = 'absolute';
	        slider.el.style.margin = 0;
	        slider.el.style.padding = 0;
	        if (slider.nextTipsEl) {
	            slider.nextTipsEl = document.querySelector(slider.nextTipsEl);
	        }
	        fullScreen(slider.el);
	    }

	    /**
	     * initialize children li style
	     */
	    function initPages(slider, pages) {
	        var i = pages.length,
	            page = {};
	        while (i--) {
	            page = pages[i];
	            page.slider = slider;
	            page.style.position = 'absolute';
	            // fullScreen(page);
	            if (i) {
	                page.style.display = 'none';
	            }
	            if (!slider.opt.forbidTouch) {
	                setupHandler(page);
	            }
	        }
	    }

	    /**
	     * initialize slider
	     */
	    function init(slider, opt) {
	        initProp(slider, opt);
	        initElement(slider, opt.el);
	        initPages(slider, slider.pages = slider.el.children);
	        slider.el.style.display = 'block';
	        slider.change(0);
	        if (slider.nextTipsEl) {
	            slider.nextTipsEl.addEventListener('touchstart', function () {
	                slider.next();
	            });
	        }
	        changeNextTipsElDisplay(slider, 0);
	    }

	    /**
	     * change next tips element display
	     */
	    function changeNextTipsElDisplay(slider, next) {
	        if (slider.nextTipsEl) {
	            slider.nextTipsEl.style.display = slider.opt.loop || next + 1 < slider.pages.length ? 'block' : 'none';
	        }
	    }

	    /**
	     * prevent default action and stop propagation
	     */
	    function preventAndStop(e) {
	        e.preventDefault();
	        e.stopPropagation();
	    }

	    /**
	     * touch start handler
	     */
	    function handlerStart(slider, e) {
	        var point = e.touches[0];
	        slider.startY = point.pageY;
	        slider.flag = 1;
	    }

	    /**
	     * add handler to li
	     */
	    function setupHandler(page) {
	        page.addEventListener('touchstart', function (e) {
	            handlerStart(page.slider, e);
	            preventAndStop(e);
	        });
	        page.addEventListener('touchmove', function (e) {
	            handlerMove(page.slider, e);
	            preventAndStop(e);
	        });
	    }

	    /**
	     * touch end handler
	     */
	    function handlerMove(slider, e) {
	        if (slider.flag) {
	            var point = e.touches[0],
	                dis = getDis(slider, point);
	            if (dis > MIN_TOUCH_DIS) {
	                slider.prev();
	                slider.flag = 0;
	            } else if (dis < -MIN_TOUCH_DIS) {
	                slider.next();
	                slider.flag = 0;
	            }
	        }
	    }

	    /**
	     * set full screen style
	     */
	    function fullScreen(ele) {
	        ele.style.top = 0;
	        ele.style.left = 0;
	        ele.style.width = '100%';
	        ele.style.height = '100%';
	    }

	    /**
	     * get touch move distance
	     */
	    function getDis(slider, point) {
	        return point.pageY - slider.startY;
	    }

	    return Slider;
	}));

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	(function (root, factory) {
	    'use strict';
	    // Global Variables
	    root.UEM = root.UEM || {};
	    root.UEM.query = factory();
	    if (true) {
	        // CommonJS
	        module.exports = root.UEM.query;
	    } else if (typeof define === 'function' && define.cmd) {
	        // CMD
	        define(function (require, exports, module) {
	            module.exports = root.UEM.query;
	        });
	    }
	}(this || window, function () {
	    /*! query - v0.2.9 - 2016-03-17 */
	    "use strict";!function(){function a(a){var c=this;return c.selectors="",c.els=[],c.promise=new b.Promise,"object"==typeof a?c.els.push(a):"string"==typeof a&&(a=a.trim(),b.generator.init(c,a)||(c.selectors=a,c._initEls(c,a))),c}a.prototype._initEls=function(a,c){var d=b.cache.get(c);d?a.els=d:(a.els=document.querySelectorAll.call(document,c),a.els&&a.els.length&&b.cache.set(c,a.els))};var b=window.$=function(b){return new a(b)};b.init=function(){b.method.setup(a)}}(),function(){function a(){this.state=1,this._thens=[]}a.prototype.resolve=function(){var a=this._thens.shift();this.state=1,a&&a()},a.prototype.then=function(a){this.state?(this.state=0,a()):this._thens.push(a)},window.$.Promise=a}(),function(){function a(){for(var a=d.length,b=[];a--;)b=b.concat(window.$.method[d[a]]);return b}function b(a,b){return"find"===a||"get"===a?!0:b.length||-1===e.indexOf(a)?1===b.length&&-1!==f.indexOf(a)?!0:"style"===a&&b&&1===b.length&&window.$.method.style.isSync(b[0])?!0:void 0:!0}function c(a,c){return function(){var d=this,e=arguments;return b(a,e)?c(d,e):(this.promise.then(function(){c(d,e)}),this)}}var d=["attribute","node","class","display","event","time","search","style","func"],e=["text","html","value","class"],f=["hasClass","attr"];window.$.method={push:function(a){d.push(a)},setup:function(b){for(var d=a(),e=0;e<d.length;)b.prototype[d[e]]=c(d[e],d[e+=1]),++e},exec:function(a,b){for(var c=0;c<a.els.length;)b.call(a,a.els[c],c),++c}}}(),function(){function a(a,b){for(var c;null!==(c=h.exec(b));)a.setAttribute(c[1],c[2])}function b(b){var c=f.exec(b),d=document.createElement(c[1].split(" ")[0]);return a(d,c[1]),d}function c(b){var c=g.exec(b),d=document.createElement(c[1].split(" ")[0]);return a(d,c[1]),d.innerHTML=c[2],d}function d(a){return!(f.test(a)||g.test(a))}function e(a,d){var e;return e=f.test(d)?b(d):c(d),a.els.push(e)}var f=/^<([^>]+)>$/,g=/^<([^>]+)>([\s\S]*)<\/[^>]+>$/,h=/([^=^\s]*)="([^"]*)"/g;window.$.generator={init:function(a,b){return d(b)?null:e(a,b)}}}(),function(){var a={};window.$.cache={get:function(b){return a[b]},set:function(b,c){a[b]=c},clear:function(){a={}}}}(),function(){function a(a,b,c){return function(e,f){return"attr"!==c&&void 0!==f[0]||"attr"===c&&void 0!==f[1]?(d.exec(e,function(b){a(b,f[0],f[1])}),void e.promise.resolve()):b(e.els[0],f[0])}}function b(b){return a(function(a,c){"html"===b&&e.clear(),a[f[b]]=c},function(a){return a[f[b]]},b)}function c(){return a(function(a,b,c){a.setAttribute(b,c)},function(a,b){return a.getAttribute(b)},"attr")}var d=window.$.method,e=window.$.cache,f={text:"textContent",html:"innerHTML",value:"value","class":"className"};d.attribute=function(){var a=[];for(var d in f)f.hasOwnProperty(d)&&(a.push(d),a.push(b(d)));return a.push("attr"),a.push(c()),a}()}(),function(){function a(a,b){for(var c=(b[0]||"").split(/\s+/),e=0;e<c.length;e++)if(c[e].trim()&&!d(c[e]).test(a.els[0].className))return!1;return!0}function b(a,b){e.exec(a,function(a){d(b[0]).test(a.className)||(a.className+=a.className?" "+b[0]:b[0])}),f.clear(),a.promise.resolve()}function c(a,b){e.exec(a,function(a){a.className=a.className.replace(d(b[0])," ").trim()}),f.clear(),a.promise.resolve()}function d(a){return new RegExp("\\b"+a.trim()+"\\b")}var e=window.$.method,f=window.$.cache;e["class"]=["hasClass",a,"addClass",b,"removeClass",c]}(),function(){function a(a,b){c.exec(a,function(a){a.style.display=b[0]||"block"}),a.promise.resolve()}function b(a){c.exec(a,function(a){a.style.display="none"}),a.promise.resolve()}var c=window.$.method;c.display=["show",a,"hide",b]}(),function(){function a(a,b){c.exec(a,function(a){a.addEventListener(b[0],b[1],b[2])}),a.promise.resolve()}function b(a,b){c.exec(a,function(a){a.removeEventListener(b[0],b[1],b[2])}),a.promise.resolve()}var c=window.$.method;c.event=["on",a,"off",b]}(),function(){var a=window.$.method;window.$.method.func=["exec",function(a,b){b[0](a),a.promise.resolve()},"each",function(b,c){a.exec(b,function(a,b){c[0]($(a),b)})}]}(),function(){function a(a,b){e.exec(a,function(a){a.appendChild(b[0].els[0])}),f.clear(),a.promise.resolve()}function b(a,b){a.els[0].insertBefore(b[0].els[0],document.querySelector(b[1])),f.clear(),a.promise.resolve()}function c(a){e.exec(a,function(a){a.innerHTML=""}),f.clear(),a.promise.resolve()}function d(a,b){e.exec(a,function(a){b[0]?Array.prototype.forEach.call(b[0].els,function(b){a.removeChild(b)}):a.parentNode.removeChild(a)}),f.clear(),a.promise.resolve()}var e=window.$.method,f=window.$.cache;e.node=["append",a,"empty",c,"insert",b,"remove",d]}(),function(){function a(a){return a.els}function b(a){return a.els[0]}window.$.method.search=["find",a,"get",b]}(),function(){function a(a,d){var h=d[0],i=d[1];return void 0!==i||void 0===i&&!f(h)?(g.exec(a,function(a){var d=e(h);d?b(a,d):c(a,h,i)}),void a.promise.resolve()):a.els[0].style[h]}function b(a,b){for(var c=b.length-1;c>0;)a.style[b[c-1]]=b[c],c-=2}function c(a,b,c){return void 0===c&&f(b)?a.style[d(b)]:void(a.style[d(b)]=c)}function d(a){for(var b=a.split("-"),c=0,d=!0,e="";c<b.length;)b[c]&&(d?(e+=b[c],d=!1):e+=b[c][0].toUpperCase()+b[c].substr(1)),++c;return e}function e(a){if(-1!==a.indexOf(":")){for(var b=a.split(";"),c=b.length,e=[];c--;)if(b[c]){var f=b[c].indexOf(":");e.push(d(b[c].substr(0,f)).trim()),e.push(b[c].substr(f+1,b[c].length-1).trim())}return e}return null}function f(a){return-1===a.indexOf(":")}var g=window.$.method;g.style=["style",a],g.style.isSync=f}(),function(){window.$.method.time=["delay",function(a,b){setTimeout(function(){a.promise.resolve()},b[0])}]}(),function(){window.$.init()}();
	    return window.$;
	}));

/***/ },
/* 14 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var MODEL_IMAGE = exports.MODEL_IMAGE = 'MODEL_IMAGE';
	var MODEL_FONT = exports.MODEL_FONT = 'MODEL_FONT';
	var MODEL_AUDIO = exports.MODEL_AUDIO = 'MODEL_AUDIO';
	var MODEL_QUADRANGLE = exports.MODEL_QUADRANGLE = 'MODEL_QUADRANGLE';
	var MODEL_CIRCLE = exports.MODEL_CIRCLE = 'MODEL_CIRCLE';
	var MODEL_BAR_GRAPH = exports.MODEL_BAR_GRAPH = 'MODEL_BAR_GRAPH';
	var MODEL_MULTI_DIMENSIONAL_GRAPH = exports.MODEL_MULTI_DIMENSIONAL_GRAPH = 'MODEL_MULTI_DIMENSIONAL_GRAPH';
	var MODEL_BROKEN_LINE_GRAPH = exports.MODEL_BROKEN_LINE_GRAPH = 'MODEL_BROKEN_LINE_GRAPH';
	var MODEL_ANNULUS_GRAPH = exports.MODEL_ANNULUS_GRAPH = 'MODEL_ANNULUS_GRAPH';
	var MODEL_SHARE_BUTTON = exports.MODEL_SHARE_BUTTON = 'MODEL_SHARE_BUTTON';
	var MODEL_SKIP_BUTTON = exports.MODEL_SKIP_BUTTON = 'MODEL_SKIP_BUTTON';
	var MODEL_SPRITE = exports.MODEL_SPRITE = 'MODEL_SPRITE';

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	__webpack_require__(16);

	var _query = __webpack_require__(13);

	var _query2 = _interopRequireDefault(_query);

	var _ua = __webpack_require__(7);

	var _ua2 = _interopRequireDefault(_ua);

	var _wa = __webpack_require__(6);

	var _wa2 = _interopRequireDefault(_wa);

	var _visualSprite = __webpack_require__(18);

	var _visualSprite2 = _interopRequireDefault(_visualSprite);

	var _CommonModel2 = __webpack_require__(19);

	var _CommonModel3 = _interopRequireDefault(_CommonModel2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var NEED_RECOVER_KEY = 'NEED_RECOVER_KEY';

	var AudioModel = function (_CommonModel) {
	    _inherits(AudioModel, _CommonModel);

	    function AudioModel() {
	        _classCallCheck(this, AudioModel);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(AudioModel).call(this));

	        _this.__muted__ = true;
	        _this.__modelMap__ = {};
	        _this.__needRecoverList__ = [];
	        _this.__currentAudioList__ = [];
	        _this.__currentPage__ = 0;
	        return _this;
	    }

	    _createClass(AudioModel, [{
	        key: 'parseToHtmlString',
	        value: function parseToHtmlString(model, globalModel, afterRenderQueue, showJob, exitJob) {
	            var _this2 = this;

	            this.__modelMap__[model.id + ''] = model;
	            var eleString = '';
	            if (!model.btnStyle) {
	                eleString = '\n                <div id="model' + model.id + '" class="model-audio model-audio-style-0 model"\n                    style="\n                        ' + this.__parseToStyleString(model) + '\n                        background: 0 0 url(' + model.btnImage + ') no-repeat;\n                        background-size: 100% 100%;\n                        z-index: 9999\n                    ">\n                </div>\n            ';
	            } else {
	                eleString = '\n                <div id="model' + model.id + '" class="model-audio model-audio-style-1 model"\n                    style="\n                        ' + this.__parseToStyleString(model) + '\n                        z-index: 9999\n                    ">\n                </div>\n            ';
	                afterRenderQueue.push(function () {
	                    var opt = _this2.__getInitOption(model);
	                    model.sprite = new _visualSprite2.default(opt);
	                });
	            }
	            if (model.playRange === 1) {
	                return eleString;
	            } else {
	                globalModel.push(eleString);
	                return '';
	            }
	        }
	    }, {
	        key: 'init',
	        value: function init(creation) {
	            this.__initAudioObject();
	            this.__listenVisibilityEvent();
	        }
	    }, {
	        key: 'next',
	        value: function next(pageIndex) {
	            if (this.__muted__) {
	                return;
	            }
	            var pauseList = [];
	            this.__currentPage__ = pageIndex;
	            this.__currentAudioList__ = [];
	            for (var modelKey in this.__modelMap__) {
	                var model = this.__modelMap__[modelKey];
	                var audio = model.audio;
	                if (model.playRange === 0 || model.playRange === 1 && model.pageIndex === pageIndex || model.playRange === 2 && this.__isSpecifyPage(model, pageIndex)) {
	                    if (audio.src) {
	                        audio.play();
	                    }
	                    audio.autoplay = model.autoplay;
	                    this.__currentAudioList__.push(audio);
	                } else {
	                    pauseList.push(audio);
	                }
	            }
	            for (var i = 0; i < pauseList.length; ++i) {
	                var _audio = pauseList[i];
	                try {
	                    _audio.currentTime = 0;
	                } catch (e) {}
	                _audio.pause();
	            }
	        }
	    }, {
	        key: '__isSpecifyPage',
	        value: function __isSpecifyPage(model, pageIndex) {
	            var pageList = model.specifyPage.split(',');
	            return pageList.indexOf(pageIndex + '') !== -1;
	        }
	    }, {
	        key: '__initAudioObject',
	        value: function __initAudioObject() {
	            var _this3 = this;

	            (0, _query2.default)('.model-audio').each(function (q, i) {
	                var modelId = q.attr('id').split('model')[1];
	                var model = _this3.__modelMap__[modelId];
	                var audio = model.audio = new Audio();
	                var count = 0;
	                audio.autoplay = false;
	                audio.loop = model.loop;
	                if (model.value) {
	                    audio.src = model.value;
	                }
	                _this3.__isAutoplay(true, function () {
	                    _this3.__muted__ = false;
	                    if (model.btnStyle) {
	                        model.sprite.start();
	                    } else {
	                        q.addClass('model-audio-roll');
	                    }
	                }, function () {
	                    if (model.btnStyle) {
	                        model.sprite.draw(0);
	                    }
	                });
	                q.on('touchstart', function () {
	                    _this3.__switchAudioStatus();
	                    _wa2.default.click(_this3.__muted__ ? 'audio_pause' : 'audio_play', {
	                        modelid: model.id,
	                        creationid: window.__creation__.id
	                    });
	                });
	            });
	        }
	    }, {
	        key: '__switchAudioStatus',
	        value: function __switchAudioStatus() {
	            var _this4 = this;

	            if (this.__muted__) {
	                this.__muted__ = false;
	                this.next(this.__currentPage__);
	                (0, _query2.default)('.model-audio-style-0').addClass('model-audio-roll');
	                (0, _query2.default)('.model-audio-style-1').each(function (q, index) {
	                    var modelId = q.attr('id').split('model')[1];
	                    var model = _this4.__modelMap__[modelId];
	                    model.sprite.start();
	                });
	            } else {
	                this.__muted__ = true;
	                this.__pauseAll();
	                (0, _query2.default)('.model-audio-style-0').removeClass('model-audio-roll');
	                (0, _query2.default)('.model-audio-style-1').each(function (q, index) {
	                    var modelId = q.attr('id').split('model')[1];
	                    var model = _this4.__modelMap__[modelId];
	                    model.sprite.draw(0);
	                    model.sprite.pause();
	                });
	            }
	        }
	    }, {
	        key: '__isAutoplay',
	        value: function __isAutoplay(autoplay, trueCallback, falseCallback) {
	            if (autoplay && (_ua2.default.pf !== 'UC' || !_ua2.default.isIOS())) {
	                trueCallback();
	            } else {
	                falseCallback();
	            }
	        }
	    }, {
	        key: '__pauseAll',
	        value: function __pauseAll() {
	            for (var i = 0; i < this.__currentAudioList__.length; ++i) {
	                this.__currentAudioList__[i].pause();
	            }
	        }
	    }, {
	        key: '__listenVisibilityEvent',
	        value: function __listenVisibilityEvent() {
	            var _this5 = this;

	            document.addEventListener('visibilitychange', function () {
	                if (document.hidden && !_this5.__muted__) {
	                    _this5.__needRecovery = true;
	                    _this5.__switchAudioStatus();
	                } else if (!document.hidden && _this5.__needRecovery) {
	                    _this5.__needRecovery = false;
	                    _this5.__switchAudioStatus();
	                }
	            });
	        }
	    }, {
	        key: '__getInitOption',
	        value: function __getInitOption(model) {
	            var opt = {};
	            opt.ele = '#model' + model.id;
	            opt.width = this.__calculateStyleWidth(model);
	            opt.height = this.__calculateStyleHeight(model);
	            opt.image = model.btnImage;
	            opt.count = model.count;
	            opt.times = 0;
	            opt.frames = [];
	            var framePairList = model.frames.split(',');
	            for (var framePairKey in framePairList) {
	                var framePair = framePairList[framePairKey];
	                framePair = framePair.split('|');
	                opt.frames.push({
	                    index: parseInt(framePair[0], 10),
	                    time: parseInt(framePair[1], 10)
	                });
	            }
	            return opt;
	        }
	    }]);

	    return AudioModel;
	}(_CommonModel3.default);

	exports.default = new AudioModel();

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(17);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/sass-loader/index.js!./audioModel.scss", function() {
				var newContent = require("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/sass-loader/index.js!./audioModel.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, "", ""]);

	// exports


/***/ },
/* 18 */
/***/ function(module, exports) {

	'use strict';

	function Painter(option) {
	    this.ele = option.ele;

	    // 帧数
	    this.count = option.count;

	    // 父级ele宽高
	    this.width = option.width;
	    this.height = option.height;

	    // 循环次数,0为无限循环
	    if(option.times === undefined || option.times === 0){
	        this.times = Infinity;
	    }
	    else{
	        this.times = option.times;
	    }

	    this.imgSrc = option.image;

	    // 每帧宽度,在image onload 后再初始化
	    this.frameWidth = 0;

	    this.frames = option.frames;

	    this.stopPaint = true;

	    this.round = 0;
	    this.roundTimes = 0;

	    this.ele = document.querySelector(this.ele);
	        this.canvas = document.createElement('canvas');
	        this.ele.appendChild(this.canvas);

	        this.ctx = this.canvas.getContext('2d');

	        //修复canvas图片清晰度问题
	        this.canvas.width = this.width * 2 ;
	        this.canvas.height = this.height * 2 ;

	        this.canvas.style.width = this.width + 'px';
	        this.canvas.style.height = this.height + 'px';

	        // this.canvas.style.zoom = 0.5;
	        //修复canvas图片清晰度问题 End
	}

	Painter.prototype = {
	    init: function(){

	    },

	    /**
	     * 控制函数: 循环次数控制
	     * @param round 循环次数
	     */
	    render: function(){

	        if(this.round >= this.times){
	            return;
	        }

	        this.roundTimes = 0;
	        this.paint();
	    },

	    /**
	     * 控制函数: 帧控制
	     * @param tmpIndex 目前帧位置
	     * @param round 第几轮渲染
	     */
	    paint: function(){
	        if(this.stopPaint){
	            return;
	        }

	        var that = this;

	        if(this.roundTimes >= this.frames.length){
	            this.round++;
	            this.render();
	            return;
	        }

	        this.clearCanvas();
	        this.drawImage(this.frames[this.roundTimes].index);

	        setTimeout(function(){
	            ++that.roundTimes;
	            that.paint();
	        }, this.frames[that.roundTimes].time);
	    },

	    /**
	     * 功能函数: 清除canvas
	     */
	    clearCanvas: function(){
	        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
	    },

	    /**
	     * 功能函数: 绘制图片
	     * @param index 帧在数组位置
	     */
	    drawImage: function(index){
	        try {
	            this.ctx.drawImage(
	                this.image,
	                index * this.frameWidth, 0,
	                this.frameWidth, this.image.height,
	                0, 0,
	                this.width * 2, this.height * 2);
	        } catch (e) {
	            console.log('wtf')
	        }
	    },

	    /**
	     * 入口
	     */
	    start: function(index){
	        if(this.stopPaint === false){
	            return;
	        }
	        this.stopPaint = false;

	        this.run(index);
	    },

	    /**
	     * 启动
	     */
	    run: function(index){
	        var that = this;
	        this.round = 0;

	        this.image = new Image();
	        this.image.src = this.imgSrc;

	        this.image.onload = function(){
	            if(this.stopPaint === false){
	                return;
	            }

	            that.frameWidth = that.image.width / that.count;

	            if(index !== undefined){
	                that.drawImage(index);
	                return;
	            }
	            that.render();

	            this.stopPaint = false;
	        };

	        if(this.image.width > 0 && this.stopPaint === true){

	            if(index !== undefined){
	                that.drawImage(index);
	                return;
	            }

	            this.stopPaint = false;
	            that.render();
	            return;

	        }

	    },

	    /**
	     * 停止帧动画
	     */
	    pause: function(){
	        this.stopPaint = true;
	    },

	    /**
	     * 停止后再开始
	     */
	    resume: function(){
	        if(this.stopPaint === false){
	            return;
	        }
	        this.stopPaint = false;
	        this.paint();
	    },

	    /**
	     * 绘制指定帧
	     */
	    draw: function(index){
	        this.clearCanvas();
	        this.stopPaint = true;
	        this.run(index);
	    }

	};

	module.exports = Painter;


/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _query = __webpack_require__(13);

	var _query2 = _interopRequireDefault(_query);

	var _adaptation = __webpack_require__(20);

	var _adaptation2 = _interopRequireDefault(_adaptation);

	var _DisplayUnit = __webpack_require__(21);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var CommonModel = function () {
	    function CommonModel() {
	        _classCallCheck(this, CommonModel);
	    }

	    _createClass(CommonModel, [{
	        key: '__handleKeyframes',
	        value: function __handleKeyframes(model, showJob, exitJob) {
	            var _this = this;

	            model.currentAnimationId = model.currentAnimationId || 0;
	            showJob.push(function () {
	                if (model.keyframeList && model.keyframeList.length) {
	                    _this.__clearModelAnimation(model);
	                    model.lastFrameTime = 0;
	                    _this.__startAnimation(model, model.currentAnimationId);
	                }
	            });
	            exitJob.push(function () {
	                _this.__stopAnimation(model);
	            });
	        }
	    }, {
	        key: '__stopAnimation',
	        value: function __stopAnimation(model) {
	            ++model.currentAnimationId;
	        }
	    }, {
	        key: '__startAnimation',
	        value: function __startAnimation(model, currentAnimationId) {
	            var _this2 = this;

	            var firstKeyframe = model.keyframeList[0];
	            if (firstKeyframe.time === 0) {
	                this.__nextKeyframe(model, 0, currentAnimationId);
	            } else {
	                setTimeout(function () {
	                    _this2.__nextKeyframe(model, 0, currentAnimationId);
	                }, firstKeyframe.time);
	            }
	        }
	    }, {
	        key: '__nextKeyframe',
	        value: function __nextKeyframe(model, keyframeIndex, currentAnimationId) {
	            var _this3 = this;

	            var keyframe = model.keyframeList[keyframeIndex];
	            this.__runAnimation(model, keyframe, keyframe.time - model.lastFrameTime, function () {
	                if (currentAnimationId === model.currentAnimationId) {
	                    var nextKeyframeIndex = keyframeIndex + 1;
	                    if (nextKeyframeIndex < model.keyframeList.length) {
	                        model.lastFrameTime = keyframe.time;
	                        _this3.__nextKeyframe(model, nextKeyframeIndex, currentAnimationId);
	                    } else {
	                        if (model.animationTimes === 0) {
	                            _this3.__clearModelAnimation(model);
	                            _this3.__startAnimation(model, currentAnimationId);
	                        }
	                    }
	                }
	            });
	        }
	    }, {
	        key: '__clearModelAnimation',
	        value: function __clearModelAnimation(model) {
	            var $model = (0, _query2.default)('#model' + model.id);
	            $model.style('-webkit-transition: all 0s').style('-webkit-transform: scale(1, 1)').style(this.__parseToStyleString(model)).exec(function () {
	                var forceCalculate = $model.get().offsetTop;
	            });
	        }
	    }, {
	        key: '__runAnimation',
	        value: function __runAnimation(model, keyframe, transitionTime, finishedCallback) {
	            var $model = (0, _query2.default)('#model' + model.id);
	            $model.style('-webkit-transition: all ' + transitionTime / 1000 + 's ' + (model.animationTimingFunction || 'ease')).exec(function () {
	                var forceCalculate = $model.get().offsetTop;
	            }).style('opacity:' + keyframe.opacity).style('\n                -webkit-transform: \n                translate3d(' + keyframe.translateX + 'px, ' + keyframe.translateY + 'px, 0px)\n                scale(' + keyframe.scaleX + ', ' + keyframe.scaleY + ')\n                rotatez(' + (keyframe.rotatez || 0) + 'deg)\n            ').delay(transitionTime).exec(function () {
	                finishedCallback && finishedCallback();
	            });
	        }
	    }, {
	        key: '__parseToStyleString',
	        value: function __parseToStyleString(model) {
	            var individualStyle = model.individualStyle;
	            var modelCss = this.__convertToLowerCaseCss(model.css);
	            var cssString = '';
	            var webkitTransformQueue = [];
	            if (model.rotatez) {
	                webkitTransformQueue.push('rotatez(' + model.rotatez + 'deg)');
	            }
	            try {
	                var cssList = modelCss.split(';');
	                var i = 0;
	                while (i < cssList.length) {
	                    if (cssList && cssList.length) {
	                        var cssPair = cssList[i].split(':');
	                        if (cssPair[0] === '-webkit-transform') {
	                            webkitTransformQueue.push(cssPair[1]);
	                        } else {
	                            cssString += cssList[i] + ';';
	                        }
	                    }
	                    ++i;
	                }
	            } catch (e) {}
	            webkitTransformQueue.push('translateZ(' + model.zIndex + ')');
	            var styleString = '\n            ' + this.__parseIndividualStyleToString(individualStyle) + '\n            top: ' + this.__calculateStyleTop(model) + 'px;\n            left: ' + this.__calculateStyleLeft(model) + 'px;\n            width: ' + this.__calculateStyleWidth(model) + 'px;\n            height: ' + this.__calculateStyleHeight(model) + 'px;\n            z-index: ' + model.zIndex + ';\n            opacity: ' + (model.opacity || 100) / 100 + ';\n            background-color: ' + (model.backgroundColor || 'initial') + ';\n        ';
	            if (webkitTransformQueue.length) {
	                styleString += '-webkit-transform: ' + webkitTransformQueue.join(' ') + ';';
	            }
	            if (modelCss && modelCss.length) {
	                styleString += cssString;
	            }
	            return styleString;
	        }
	    }, {
	        key: '__convertToLowerCaseCss',
	        value: function __convertToLowerCaseCss(css) {
	            for (var i = 0; i < css.length; ++i) {
	                var char = css[i];
	                if (/^[A-Z]+$/.test(char)) {
	                    css = css.substring(0, i) + '-' + css[i].toLowerCase() + css.substring(i + 1, css.length);
	                    ++i;
	                }
	            }
	            return css;
	        }
	    }, {
	        key: '__parseIndividualStyleToString',
	        value: function __parseIndividualStyleToString(individualStyle) {
	            var cssString = '';
	            if (individualStyle) {
	                for (var prop in individualStyle) {
	                    cssString += this.__convertToLowerCaseCss(prop) + ':' + individualStyle[prop] + ';';
	                }
	            }
	            return cssString;
	        }
	    }, {
	        key: '__calculateStyleWidth',
	        value: function __calculateStyleWidth(model) {
	            var width = 0;
	            if (model.adaptiveSolution === 0) {
	                width = model.width / _DisplayUnit.WINDOW_WIDTH * window.innerWidth;
	            } else if (model.adaptiveSolution === 1) {
	                width = 1 / _DisplayUnit.WINDOW_HEIGHT * window.innerHeight * model.width;
	            } else {
	                width = model.width / _DisplayUnit.WINDOW_WIDTH * window.innerWidth;
	            }
	            return Math.ceil(width);
	        }
	    }, {
	        key: '__calculateStyleHeight',
	        value: function __calculateStyleHeight(model) {
	            var height = 0;
	            if (model.adaptiveSolution === 0) {
	                height = 1 / _DisplayUnit.WINDOW_WIDTH * window.innerWidth * model.height;
	            } else if (model.adaptiveSolution === 1) {
	                height = model.height / _DisplayUnit.WINDOW_HEIGHT * window.innerHeight;
	            } else {
	                height = model.height / _DisplayUnit.WINDOW_HEIGHT * window.innerHeight;
	            }
	            return Math.ceil(height);
	        }
	    }, {
	        key: '__calculateStyleLeft',
	        value: function __calculateStyleLeft(model) {
	            var x = model.coord.x;
	            var width = this.__calculateStyleWidth(model);
	            if (model.adaptiveSolution === 0) {
	                x *= 1 / _DisplayUnit.WINDOW_WIDTH * window.innerWidth;
	                return x;
	            } else if (model.adaptiveSolution === 1) {
	                x *= 1 / _DisplayUnit.WINDOW_HEIGHT * window.innerHeight;
	                switch (model.horizontalLayout) {
	                    case 1:
	                        return (window.innerWidth - width) / 2 + x;
	                    case 2:
	                        return window.innerWidth - width - x;
	                    default:
	                        return x;
	                }
	            } else {
	                x *= 1 / _DisplayUnit.WINDOW_WIDTH * window.innerWidth;
	                return x;
	            }
	        }
	    }, {
	        key: '__calculateStyleTop',
	        value: function __calculateStyleTop(model) {
	            var y = model.coord.y;
	            var height = this.__calculateStyleHeight(model);
	            if (model.adaptiveSolution === 0) {
	                y *= 1 / _DisplayUnit.WINDOW_WIDTH * window.innerWidth;
	                switch (model.verticalLayout) {
	                    case 1:
	                        return (window.innerHeight - height) / 2 + y;
	                    case 2:
	                        return window.innerHeight - height - y;
	                    default:
	                        return y;
	                }
	            } else if (model.adaptiveSolution === 1) {
	                y *= 1 / _DisplayUnit.WINDOW_HEIGHT * window.innerHeight;
	                return y;
	            } else {
	                y *= 1 / _DisplayUnit.WINDOW_HEIGHT * window.innerHeight;
	                return y;
	            }
	        }
	    }]);

	    return CommonModel;
	}();

	exports.default = CommonModel;

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _query = __webpack_require__(13);

	var _query2 = _interopRequireDefault(_query);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Adaptation = function () {
	    function Adaptation() {
	        _classCallCheck(this, Adaptation);

	        this.__factor__ = 0;
	    }

	    _createClass(Adaptation, [{
	        key: 'refresh',
	        value: function refresh() {
	            this.__factor__ = this.calculateFactor();
	            (0, _query2.default)('#wrap-creation').style('-webkit-transform: scale(' + this.__factor__ + ')');

	            (0, _query2.default)('#global-model').style('-webkit-transform: scale(' + this.__factor__ + ')');

	            (0, _query2.default)('body #visual-app #wrap-creation .wrap-page').style('height: ' + (window.innerHeight + 1) / this.__factor__ + 'px');
	        }
	    }, {
	        key: 'calculateFactor',
	        value: function calculateFactor() {
	            return window.innerWidth / 320;
	        }
	    }]);

	    return Adaptation;
	}();

	exports.default = new Adaptation();

/***/ },
/* 21 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var WINDOW_HEIGHT = exports.WINDOW_HEIGHT = 514;
	var WINDOW_WIDTH = exports.WINDOW_WIDTH = 320;

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _CommonModel2 = __webpack_require__(19);

	var _CommonModel3 = _interopRequireDefault(_CommonModel2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var FontModel = function (_CommonModel) {
	    _inherits(FontModel, _CommonModel);

	    function FontModel() {
	        _classCallCheck(this, FontModel);

	        return _possibleConstructorReturn(this, Object.getPrototypeOf(FontModel).apply(this, arguments));
	    }

	    _createClass(FontModel, [{
	        key: 'parseToHtmlString',
	        value: function parseToHtmlString(model, globalModel, afterRenderQueue, showJob, exitJob) {
	            this.__handleKeyframes(model, showJob, exitJob);
	            model.individualStyle = {
	                color: model.color,
	                backgroundColor: model.backgroundColor,
	                fontSize: model.fontSize + 'px',
	                lineHeight: model.lineHeight || 'initial',
	                fontWeight: model.fontWeight,
	                textAlign: model.textAlign
	            };
	            return '\n            <div id="model' + model.id + '" class="model-font model" style="' + this.__parseToStyleString(model) + '">\n                ' + this.__convertBlankSpaceToNbsp(model.value) + '\n            </div>\n        ';
	        }
	    }, {
	        key: '__convertBlankSpaceToNbsp',
	        value: function __convertBlankSpaceToNbsp(value) {
	            return value.replace(/\s/g, '&nbsp;');
	        }
	    }]);

	    return FontModel;
	}(_CommonModel3.default);

	exports.default = new FontModel();

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _query = __webpack_require__(13);

	var _query2 = _interopRequireDefault(_query);

	var _wa = __webpack_require__(6);

	var _wa2 = _interopRequireDefault(_wa);

	var _CommonModel2 = __webpack_require__(19);

	var _CommonModel3 = _interopRequireDefault(_CommonModel2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var ImageModel = function (_CommonModel) {
	    _inherits(ImageModel, _CommonModel);

	    function ImageModel() {
	        _classCallCheck(this, ImageModel);

	        return _possibleConstructorReturn(this, Object.getPrototypeOf(ImageModel).apply(this, arguments));
	    }

	    _createClass(ImageModel, [{
	        key: 'parseToHtmlString',
	        value: function parseToHtmlString(model, globalModel, afterRenderQueue, showJob, exitJob) {
	            this.__handleKeyframes(model, showJob, exitJob);
	            afterRenderQueue.push(function () {
	                if (model.hyperlink) {
	                    (0, _query2.default)('#model' + model.id).on('touchstart', function () {
	                        _wa2.default.click('hyperlink', {
	                            modelid: model.id,
	                            creationid: window.__creation__.id
	                        }, model.hyperlink);
	                    });
	                }
	            });
	            return '\n            <div id="model' + model.id + '" class="model-image model"\n                style="\n                    background: 0 0 url(' + model.value + ') no-repeat;\n                    background-size: 100% 100%;\n                    ' + this.__parseToStyleString(model) + '\n                    ">\n            </div>\n        ';
	        }
	    }]);

	    return ImageModel;
	}(_CommonModel3.default);

	exports.default = new ImageModel();

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _CommonModel2 = __webpack_require__(19);

	var _CommonModel3 = _interopRequireDefault(_CommonModel2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var QuadrangleModel = function (_CommonModel) {
	    _inherits(QuadrangleModel, _CommonModel);

	    function QuadrangleModel() {
	        _classCallCheck(this, QuadrangleModel);

	        return _possibleConstructorReturn(this, Object.getPrototypeOf(QuadrangleModel).apply(this, arguments));
	    }

	    _createClass(QuadrangleModel, [{
	        key: 'parseToHtmlString',
	        value: function parseToHtmlString(model, globalModel, afterRenderQueue, showJob, exitJob) {
	            this.__handleKeyframes(model, showJob, exitJob);
	            return '\n            <div id="model' + model.id + '" class="model-quadrangle model"\n                style="\n                    ' + this.__parseToStyleString(model) + '\n                    ">\n            </div>\n        ';
	        }
	    }]);

	    return QuadrangleModel;
	}(_CommonModel3.default);

	exports.default = new QuadrangleModel();

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _CommonModel2 = __webpack_require__(19);

	var _CommonModel3 = _interopRequireDefault(_CommonModel2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var CircleModel = function (_CommonModel) {
	    _inherits(CircleModel, _CommonModel);

	    function CircleModel() {
	        _classCallCheck(this, CircleModel);

	        return _possibleConstructorReturn(this, Object.getPrototypeOf(CircleModel).apply(this, arguments));
	    }

	    _createClass(CircleModel, [{
	        key: 'parseToHtmlString',
	        value: function parseToHtmlString(model, globalModel, afterRenderQueue, showJob, exitJob) {
	            this.__handleKeyframes(model, showJob, exitJob);
	            var width = this.__calculateStyleWidth(model);
	            var height = this.__calculateStyleHeight(model);
	            return '\n            <div id="model' + model.id + '" class="model-circle model"\n                style="\n                    border-radius: ' + (width < height ? width / 2 : height / 2) + 'px;\n                    ' + this.__parseToStyleString(model) + '\n                    ">\n            </div>\n        ';
	        }
	    }]);

	    return CircleModel;
	}(_CommonModel3.default);

	exports.default = new CircleModel();

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _visualBarGraph = __webpack_require__(27);

	var _visualBarGraph2 = _interopRequireDefault(_visualBarGraph);

	var _query = __webpack_require__(13);

	var _query2 = _interopRequireDefault(_query);

	var _CommonModel2 = __webpack_require__(19);

	var _CommonModel3 = _interopRequireDefault(_CommonModel2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var BarGraphModel = function (_CommonModel) {
	    _inherits(BarGraphModel, _CommonModel);

	    function BarGraphModel() {
	        _classCallCheck(this, BarGraphModel);

	        return _possibleConstructorReturn(this, Object.getPrototypeOf(BarGraphModel).apply(this, arguments));
	    }

	    _createClass(BarGraphModel, [{
	        key: 'parseToHtmlString',
	        value: function parseToHtmlString(model, globalModel, afterRenderQueue, pageShowQueue, pageExitQueue) {
	            afterRenderQueue.push(function () {
	                model.ele = 'model' + model.id;
	                _visualBarGraph2.default.init(model);
	            });
	            pageShowQueue.push(function () {
	                setTimeout(_visualBarGraph2.default.render, 1000);
	            });
	            pageExitQueue.push(_visualBarGraph2.default.exit);
	            return '\n            <div id="model' + model.id + '" class="model-bar-graph model"\n                style="\n                    -webkit-transform: scale(1);\n                    ' + this.__parseToStyleString(model) + '\n                    ">\n            </div>\n        ';
	        }
	    }]);

	    return BarGraphModel;
	}(_CommonModel3.default);

	exports.default = new BarGraphModel();

/***/ },
/* 27 */
/***/ function(module, exports) {

	'use strict';

	var Graph = function () {
	};

	Graph.prototype = {

	    init: function (option) {
	        this.exit();
	        if (!option.ele) {
	            throw new Error('form options.el is require')
	        }
	        this._option = option;

	        // 降序排序后的对象,后续render要用

	        var ele = option.ele,
	            data = option.dataList,
	            unit = option.unit,
	            width = option.width,
	            height = option.height,
	            column = [],
	            columnWidth = option.columnWidth || width / data.length,
	            container = document.getElementById(ele),
	            columnSourceCode = '';

	        this.columns = data.sort(this.__proto__.objectSort);

	        container.style.width = width + 'px';
	        container.style.height = height + 'px';

	        var imageStr = '';

	        for (var i = 0; this.columns[i++];) {
	            var tmpCloumnHeight = this.columns[i - 1].value / this.columns[0].value * option.height * 0.7;

	            var pureImageWidth = this.__proto__.imagesWidthCaculate(option.columnWidth, this.columns[i - 1].imageWidth, this.columns[i - 1].imageMiddleWidth);
	            var avatarOffset = (pureImageWidth - option.columnWidth) / 2;

	            
	            if(!this._option.hasImage){
	                imageStr = '';
	            } else{
	                imageStr ='<img class="chart-column-avatar" style="bottom:-2px;right: ' + avatarOffset + 'px;display: block;width: ' + pureImageWidth + 'px;position:relative;" src="' + this.columns[i - 1].image + '" >';
	            }

	            columnSourceCode +=
	                '<div style="display:inline-block;width:' + option.width / option.dataList.length + 'px;height: 100%;position: relative;">' +

	                '<div style="position:absolute; bottom: 42px;left: 50%;margin-left:-' + columnWidth / 2 + 'px;" class="chart-column">' +
	                imageStr +
	                '   <div id="chart-column-' + i + '" style="height:0;width:' + columnWidth + 'px; background:' + this.columns[i - 1].color + '"></div>' +
	                '</div>' +

	                '<div class="char-column-footer" style="width: 100%;text-align:center;position:absolute; bottom: 0;">' +
	                '    <div style="font-size:12px;line-height: 17px;">' + this.columns[i - 1].item + '</div>' +
	                '    <div>' +
	                '         <span style="font-size:18px;font-weight:bold;line-height: 18px;">' + this.columns[i - 1].value + '</span><span style="font-size:8px;color:#adadad;">' + option.unit + '</span>' +
	                '    </div>' +
	                '</div>' +

	                '</div>';
	        }
	        container.innerHTML = columnSourceCode;
	    },

	    exit: function(){
	    },

	    render: function(){
	        var that = this;
	        for (var i = 0; this.columns[i++];) {
	            var tmp = this.__proto__.getId('chart-column-' + i);
	            tmp.style.webkitTransition = '';
	            tmp.style.height = 0;
	        }

	        setTimeout(function(){
	            for (var i = 0; this.columns[i++];) {
	                var tmp = this.__proto__.getId('chart-column-' + i);

	                tmp.style.webkitTransition = 'height 1s ease';

	                (function(){
	                    var a = i;
	                    setTimeout(function () {
	                        tmp.style.height = that.columns[a - 1].value / that.columns[0].value * that._option.height * 0.7 + 'px';
	                    }, 15);
	                })()
	            }
	        }, 15)

	        // setTimeout(()=>{
	        //     for (var i = 0; this.columns[i++];) {
	        //         var tmp = this.__proto__.getId('chart-column-' + i);

	        //         tmp.style.webkitTransition = 'height 1s ease';

	        //         (() => {
	        //             var a = i;
	        //             setTimeout(function () {
	        //                 tmp.style.height = that.columns[a - 1].value / that.columns[0].value * that._option.height * 0.7 + 'px';
	        //             }, 15);
	        //         })()
	        //     }
	        // },15);
	    },

	    objectSort: function (a, b) {
	        if (a['value'] > b['value']) {
	            return -1;
	        }
	        if (a['value'] < b['value']) {
	            return 1;
	        }
	        return 0;
	    },


	    imagesWidthCaculate: function (origin, imgWidth, imageMiddleWidth) {
	        return imgWidth / (imageMiddleWidth / origin);
	    },

	    getId: function(id){
	        return document.getElementById(id);
	    }
	};

	Graph.constructor = Graph;
	module.exports = Graph;

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _visualMultiDimensionalGraph = __webpack_require__(29);

	var _visualMultiDimensionalGraph2 = _interopRequireDefault(_visualMultiDimensionalGraph);

	var _query = __webpack_require__(13);

	var _query2 = _interopRequireDefault(_query);

	var _CommonModel2 = __webpack_require__(19);

	var _CommonModel3 = _interopRequireDefault(_CommonModel2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var MultiDimensionalGraphModel = function (_CommonModel) {
	    _inherits(MultiDimensionalGraphModel, _CommonModel);

	    function MultiDimensionalGraphModel() {
	        _classCallCheck(this, MultiDimensionalGraphModel);

	        return _possibleConstructorReturn(this, Object.getPrototypeOf(MultiDimensionalGraphModel).apply(this, arguments));
	    }

	    _createClass(MultiDimensionalGraphModel, [{
	        key: 'parseToHtmlString',
	        value: function parseToHtmlString(model, globalModel, afterRenderQueue, pageShowQueue, pageExitQueue) {
	            var _this2 = this;

	            afterRenderQueue.push(function () {
	                _visualMultiDimensionalGraph2.default.init(_this2.__getInitOption(model));
	            });
	            pageShowQueue.push(function () {
	                setTimeout(_visualMultiDimensionalGraph2.default.render, 1000);
	            });
	            pageExitQueue.push(_visualMultiDimensionalGraph2.default.exit);
	            return '\n            <div id="model' + model.id + '" class="model-multi-dimensional-graph model"\n                style="\n                    ' + this.__parseToStyleString(model) + '\n                    ">\n            </div>\n        ';
	        }
	    }, {
	        key: '__getInitOption',
	        value: function __getInitOption(model) {
	            model.ele = '#model' + model.id;
	            model.dataList = this.__getDataList(model.dataList);
	            model.dataDimensions = this.__getDataDimensions(model.dataDimensions);
	            model.lineColor = '#999999';
	            model.numColor = '#999999';
	            model.numFontSize = 7;
	            return model;
	        }
	    }, {
	        key: '__getDataDimensions',
	        value: function __getDataDimensions(dataDimensions) {
	            var dataDimensionsOption = [];
	            dataDimensions = dataDimensions.split(',');
	            for (var i = 0; i < dataDimensions.length; ++i) {
	                dataDimensionsOption.push({
	                    image: dataDimensions[i]
	                });
	            }
	            return dataDimensionsOption;
	        }
	    }, {
	        key: '__getDataList',
	        value: function __getDataList(dataList) {
	            for (var i = 0; i < dataList.length; ++i) {
	                dataList[i].value = dataList[i].value.split(',');
	                for (var j = 0; j < dataList[i].value.length; ++j) {
	                    dataList[i].value[j] = parseFloat(dataList[i].value[j]);
	                }
	            }
	            return dataList;
	        }
	    }]);

	    return MultiDimensionalGraphModel;
	}(_CommonModel3.default);

	exports.default = new MultiDimensionalGraphModel();

/***/ },
/* 29 */
/***/ function(module, exports) {

	"use strict";

	// 柱子源代码

	var columnSourceCode = '',
	    container = null,
	    columns = void 0,
	    _option = void 0,
	    maxValue = 0,
	    dimensions = [],
	    dataList = [],
	    footHeight = 0,


	// 底部图片加载标记
	imgOnload = false,


	// 是否开始渲染标记
	isRender = false,
	    footerHeight = 50;

	var getId = function getId(ele) {
	    return document.querySelector(ele);
	};

	var initLattice = function initLattice(bottomHeight) {
	    var floors = _option.maxValue / _option.valueInterval,
	        floorHeight = (_option.height - bottomHeight) / floors;

	    // 网格
	    var lattice = document.createElement('div');

	    // 网格宽度
	    var tmp = dimensions.length + 1;
	    var tmp1 = dimensions.length / tmp;
	    lattice.style.width = _option.width * tmp1 + 'px';

	    // 网格高度
	    lattice.style.height = _option.height - bottomHeight + 'px';

	    lattice.style.position = 'absolute';
	    lattice.style.top = 0;
	    lattice.style.right = 0;
	    lattice.style.zIndex = 1;
	    lattice.style.borderBottom = '1px solid ' + _option.lineColor;

	    // 盖住底部的线脚，在移动端柱子会出现抖动
	    var latticeBottomCover = document.createElement('div');
	    latticeBottomCover.style.width = _option.width * tmp1 + 'px';
	    latticeBottomCover.style.height = _option.height - bottomHeight + 'px';
	    latticeBottomCover.style.position = 'absolute';
	    latticeBottomCover.style.top = 0;
	    latticeBottomCover.style.right = 0;
	    latticeBottomCover.style.zIndex = 10;
	    latticeBottomCover.style.borderBottom = '1px solid ' + _option.lineColor;

	    var tmpStr = '';
	    for (var i = 0; i < floors; i++) {
	        // if( i === 0){
	        //     tmpStr += '<div style="box-sizing:border-box;width:100%;height:'+ floorHeight +'px;border-top:1px solid '+_option.lineColor +';border-bottom: 1px solid '+_option.lineColor +';"></div>';
	        // }
	        // else{
	        tmpStr += '<div style="box-sizing:border-box;width:100%;height:' + floorHeight + 'px;border-top: 1px solid ' + _option.lineColor + ';"></div>';
	        // }
	    }

	    lattice.innerHTML = tmpStr;
	    container.appendChild(lattice);
	    container.appendChild(latticeBottomCover);

	    //左边的标尺
	    var tmpStr1 = '';
	    for (var _i = 0, j = _option.maxValue / _option.valueInterval + 1; _i < j; _i++) {
	        var aa = _option.maxValue - _option.valueInterval * _i;

	        if (_i == j - 1) {
	            tmpStr1 += '<div style="font-size:' + _option.numFontSize + 'px;width:100%;height:' + floorHeight + 'px;text-align:center;color: ' + _option.numColor + ';">' + aa + '</br>' + _option.unit + '</div>';
	        } else {
	            tmpStr1 += '<div style="font-size:' + _option.numFontSize + 'px;width:100%;height:' + floorHeight + 'px;text-align:center;color: ' + _option.numColor + ';">' + aa + '</div>';
	        }
	    }

	    var leftWrap = getId('#chart_staff');

	    leftWrap.innerHTML = tmpStr1;
	};

	var init = function init(option) {

	    _option = option;

	    dataList = _option.dataList;
	    dimensions = _option.dataDimensions;
	    maxValue = _option.maxValue;

	    var width = _option.width,
	        height = _option.height,
	        columnWidth = _option.columnWidth > width / dimensions.length ? width / dimensions.length : _option.columnWidth;

	    var wrapContainer = getId(_option.ele); //容器  

	    wrapContainer.style.width = width + 'px';
	    wrapContainer.style.height = height + 'px';

	    // 子层wrap，实现wrap层的position:relative;
	    container = document.createElement('div');
	    container.style.width = '100%';
	    container.style.height = '100%';
	    container.style.position = 'relative';

	    wrapContainer.appendChild(container);

	    var tmpStr = '<div id="chart_staff" style="float:left;width:' + _option.width / (dimensions.length + 1) + 'px;height: 100%;position: relative;top:-' + _option.numFontSize / 2 + 'px;"></div>';

	    columnSourceCode += tmpStr;

	    for (var i = 0; dimensions[i++];) {

	        var tmpCloumnHeight = 0;
	        var tmpIndex = i - 1;
	        var tmpColorRect = '';

	        for (var j = 0; dataList[j++];) {
	            tmpColorRect += '<div id="chart-column-' + i + '-' + j + '" style="display:inline-block;height:0;width:' + columnWidth / dataList.length + 'px; background:' + dataList[j - 1].color + '"></div>';
	        }

	        tmpStr = '<div style="z-index:2;float:left;width:' + _option.width / (dimensions.length + 1) + 'px;height: 100%;position: relative;">' + '   <div id="chart-column-wrap-' + i + '" style="font-size:0;position:absolute; bottom: 42px;left: 50%;margin-left:-' + columnWidth / 2 + 'px;" class="chart-column">' + tmpColorRect + '   </div>' + '   <div id="char-column-footer-' + i + '" style="height:' + footerHeight + 'px;width: 100%;text-align:center;position:absolute; bottom: 0;">' +
	        // '       <img style="height:100%;" id="icon-'+ i +'" src="'+dimensions[tmpIndex].image+'" />'+
	        '   </div>' + '</div>';

	        columnSourceCode += tmpStr;
	    }

	    container.innerHTML = columnSourceCode;

	    // 柱图的底部定位
	    for (var _i2 = 0; dimensions[_i2++];) {
	        getId('#chart-column-wrap-' + _i2).style.bottom = footerHeight + 'px';
	    }
	    initLattice(footerHeight);
	};

	var exit = function exit() {};

	var render = function render() {
	    for (var i = 0; dimensions[i++];) {

	        for (var j = 0; dataList[j++];) {
	            var tmpDom = getId('#chart-column-' + i + '-' + j);
	            tmpDom.style.webkitTransition = '';
	        }

	        for (var _j = 0; dataList[_j++];) {
	            var _tmpDom = getId('#chart-column-' + i + '-' + _j);
	            _tmpDom.style.height = 0;
	        }
	    }

	    //延迟15ms，让transition生效，保证render时动画重新执行
	    setTimeout(function () {
	        var _loop = function _loop(_i3) {
	            for (var _j2 = 0; dataList[_j2++];) {
	                var _tmpDom2 = getId('#chart-column-' + _i3 + '-' + _j2);
	                _tmpDom2.style.webkitTransition = 'height 1s ease';
	            }

	            (function () {
	                var a = _i3;
	                setTimeout(function () {
	                    for (var _j3 = 0; dataList[_j3++];) {
	                        var _tmpDom3 = getId('#chart-column-' + _i3 + '-' + _j3);
	                        _tmpDom3.style.height = dataList[_j3 - 1].value[_i3 - 1] / _option.maxValue * (_option.height - footerHeight) + 'px';
	                    }
	                }, 15);
	            })();
	        };

	        for (var _i3 = 0; dimensions[_i3++];) {
	            _loop(_i3);
	        }
	    }, 15);
	};

	module.exports = {
	    init: init,
	    render: render,
	    exit: exit
	};

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _visualBrokenLineGraph = __webpack_require__(31);

	var _visualBrokenLineGraph2 = _interopRequireDefault(_visualBrokenLineGraph);

	var _query = __webpack_require__(13);

	var _query2 = _interopRequireDefault(_query);

	var _CommonModel2 = __webpack_require__(19);

	var _CommonModel3 = _interopRequireDefault(_CommonModel2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var BrokenLineGraphModel = function (_CommonModel) {
	    _inherits(BrokenLineGraphModel, _CommonModel);

	    function BrokenLineGraphModel() {
	        _classCallCheck(this, BrokenLineGraphModel);

	        return _possibleConstructorReturn(this, Object.getPrototypeOf(BrokenLineGraphModel).apply(this, arguments));
	    }

	    _createClass(BrokenLineGraphModel, [{
	        key: 'parseToHtmlString',
	        value: function parseToHtmlString(model, globalModel, afterRenderQueue, pageShowQueue, pageExitQueue) {
	            var visualBrokenLineGraph = new _visualBrokenLineGraph2.default();
	            model.ele = '#model' + model.id;
	            afterRenderQueue.push(function () {
	                model.duration = 1000;
	                model.dataList = [{
	                    color: '#f8c21e',
	                    name: '爸爸',
	                    data: [{
	                        x: 0,
	                        y: 5.0,
	                        r: 3
	                    }, {
	                        x: 1,
	                        y: 3.3
	                    }, {
	                        x: 2,
	                        y: 2.0
	                    }, {
	                        x: 3,
	                        y: 1.2
	                    }, {
	                        x: 4,
	                        y: 0.9
	                    }, {
	                        x: 5,
	                        y: 1.1
	                    }, {
	                        x: 6,
	                        y: 2.3
	                    }, {
	                        x: 7,
	                        y: 3.6
	                    }, {
	                        x: 8,
	                        y: 4.5
	                    }, {
	                        x: 9,
	                        y: 4.8
	                    }, {
	                        x: 10,
	                        y: 4.9
	                    }, {
	                        x: 11,
	                        y: 4.8
	                    }, {
	                        x: 12,
	                        y: 5.1
	                    }, {
	                        x: 13,
	                        y: 5.2
	                    }, {
	                        x: 14,
	                        y: 5.0
	                    }, {
	                        x: 15,
	                        y: 4.9
	                    }, {
	                        x: 16,
	                        y: 4.8
	                    }, {
	                        x: 17,
	                        y: 4.6
	                    }, {
	                        x: 18,
	                        y: 4.4
	                    }, {
	                        x: 19,
	                        y: 4.4
	                    }, {
	                        x: 20,
	                        y: 4.8
	                    }, {
	                        x: 21,
	                        y: 5.6
	                    }, {
	                        x: 22,
	                        y: 6.4
	                    }, {
	                        x: 23,
	                        y: 6.3,
	                        r: 3
	                    }]
	                }, {
	                    color: '#333',
	                    name: '非爸爸',
	                    data: [{
	                        x: 0,
	                        y: 6.3,
	                        r: 3
	                    }, {
	                        x: 1,
	                        y: 4.6
	                    }, {
	                        x: 2,
	                        y: 2.8
	                    }, {
	                        x: 3,
	                        y: 1.7
	                    }, {
	                        x: 4,
	                        y: 1.1
	                    }, {
	                        x: 5,
	                        y: 1.2
	                    }, {
	                        x: 6,
	                        y: 2.0
	                    }, {
	                        x: 7,
	                        y: 3.1
	                    }, {
	                        x: 8,
	                        y: 4.0
	                    }, {
	                        x: 9,
	                        y: 4.5
	                    }, {
	                        x: 10,
	                        y: 4.7
	                    }, {
	                        x: 11,
	                        y: 4.6
	                    }, {
	                        x: 12,
	                        y: 4.9
	                    }, {
	                        x: 13,
	                        y: 4.9
	                    }, {
	                        x: 14,
	                        y: 4.6
	                    }, {
	                        x: 15,
	                        y: 4.6
	                    }, {
	                        x: 16,
	                        y: 4.4
	                    }, {
	                        x: 17,
	                        y: 4.3
	                    }, {
	                        x: 18,
	                        y: 4.2
	                    }, {
	                        x: 19,
	                        y: 4.3
	                    }, {
	                        x: 20,
	                        y: 4.6
	                    }, {
	                        x: 21,
	                        y: 5.4
	                    }, {
	                        x: 22,
	                        y: 6.2
	                    }, {
	                        x: 23,
	                        y: 7.0,
	                        r: 3
	                    }]
	                }];
	                model.xAxis = {
	                    color: '#666',
	                    data: [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24],
	                    unit: 'T/h'
	                };
	                model.yAxis = {
	                    color: '#999',
	                    data: [0, 1, 2, 3, 4, 5, 6, 7, 8],
	                    unit: '%'
	                };
	                visualBrokenLineGraph.init(model);
	            });
	            pageShowQueue.push(function () {
	                setTimeout(function () {
	                    visualBrokenLineGraph.render();
	                }, 1000);
	            });
	            pageExitQueue.push(function () {
	                visualBrokenLineGraph.exit();
	            });
	            return '\n            <div id="model' + model.id + '" class="model-broken-line-graph model"\n                style="\n                    text-align: left;\n                    -webkit-transform: scale(1);\n                    ' + this.__parseToStyleString(model) + '\n                    ">\n            </div>\n        ';
	        }
	    }]);

	    return BrokenLineGraphModel;
	}(_CommonModel3.default);

	exports.default = new BrokenLineGraphModel();

/***/ },
/* 31 */
/***/ function(module, exports) {

	'use strict';

	/**
	 * 折线图
	 * 
	 */
	var Graph = function() {};

	Graph.prototype = {

	    init: function(options) {
	        if (!options.ele) {
	            throw new Error('options.ele is require');
	        }
	        this.options = options;
	        this.width = options.width;
	        this.height = options.height - 30; //多余空间用于放置title&tags
	        this.padding = options.padding || 40; // x，y轴占据的空间

	        this.ele = document.querySelector(options.ele);
	        this.duration = options.duration || 3000;
	        this.lengthX = this.options.xAxis.data.length;
	        this.lengthY = this.options.yAxis.data.length;
	        this.start = {
	            x: this.padding,
	            y: this.height - this.padding
	        };
	        this.end = {
	            x: this.width,
	            y: this.padding
	        };
	        this.max = {
	            x: this.options.xAxis.data[this.options.xAxis.data.length - 1],
	            y: this.options.yAxis.data[this.options.yAxis.data.length - 1]
	        };
	        this.gap = {
	            x: (this.end.x - this.start.x) / this.lengthX,
	            y: (this.start.y - this.end.y) / (this.lengthY - 1)
	        };
	        this.ratio = {
	            x: (this.gap.x * (this.lengthX - 1)) / (this.max.x),
	            y: (this.start.y - (this.start.y - this.gap.y * (this.lengthY - 1))) / (0 - this.max.y)
	        };
	        this.svgData = '';

	        this._renderTitle();
	        this._renderTags();
	        this._renderAxis();
	        this._renderLines();


	        this.svgEl = document.createElement('div');
	        this.svgEl.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg"' +
	            ' width=' + this.width + ' height=' + this.height + ' viewBox="0 0 ' + this.width + ' ' + this.height + '">' + this.svgData + '</svg>';
	        this.ele.appendChild(this.svgEl);
	    },
	    render: function() {

	        for (var i = 0; i < this.options.dataList.length; i++) {
	            var line = document.querySelector('.line' + i);
	            var dot = line.querySelector('.dots-start');
	            dot.style.display = 'block';
	            var path = line.querySelector('path');
	            path.style.transition = path.style.WebkitTransition =
	                'stroke-dashoffset ' + (this.duration / 1000) + 's linear';
	            path.style.strokeDashoffset = '0';
	        }
	        this.drawEndDots = setTimeout(function() {
	            var endDots = document.querySelectorAll('.dots-end');
	            for (var i = 0; i < endDots.length; i++) {
	                endDots[i].style.display = 'block';
	            }
	        }, this.duration);

	    },
	    exit: function() {
	        clearTimeout(this.drawEndDots);
	        for (var i = 0; i < this.options.dataList.length; i++) {
	            var line = document.querySelector('.line' + i);
	            var path = line.querySelector('path');
	            var length = path.getTotalLength();
	            path.style.transition = path.style.WebkitTransition =
	                'none';
	            path.style.strokeDashoffset = length;
	            line.querySelector('.dots-start').style.display = 'none';
	            line.querySelector('.dots-end').style.display = 'none';
	        }
	    },
	    _renderTitle: function() {
	        var div = '<div class="g-title" style="width:60%;font-size:12px;color:#333;padding-left:' + this.padding + 'px;font-weight:bold;" >' +
	            this.options.title +
	            '</div>';
	        this.ele.innerHTML += div;
	    },
	    _renderAxis: function() {
	        var x = this.options.xAxis;
	        var y = this.options.yAxis;
	        var tmpX = '';
	        for (var i = 0; i < this.lengthX; i++) {
	            tmpX += this.text((this.start.x + this.gap.x * i), this.height - 20, x.data[i]);
	            tmpX += this.line(this.start.x + this.gap.x * i, this.start.y, this.start.x + this.gap.x * i, this.start.y - 4, 'stroke:' + x.color + ';stroke-width:1');
	        }
	        var labelsX = '<g class = "labels x-labels" >' + tmpX +
	            this.text((this.start.x + this.gap.x * (this.lengthX - 1)), this.height - 5, x.unit) + '</g>';


	        var tmpY = '';
	        for (i = 0; i < this.lengthY; i++) {
	            tmpY += this.text(this.start.x - 10, (this.start.y - this.gap.y * i) + 3, y.data[i]);
	            tmpY += this.line(this.start.x, this.start.y - this.gap.y * i, this.end.x, this.start.y - this.gap.y * i, 'stroke: ' + y.color + ';stroke-width:1');
	        }
	        var labelsY = '<g class = "labels y-labels" style="text-anchor:end">' + tmpY +
	            this.text(this.start.x - 10, this.gap.y /2, y.unit) + '</g>';

	        this.svgData += labelsX + labelsY;
	    },
	    _renderLines: function() {
	        var dataList = this.options.dataList;
	        var tmp = '';
	        for (var i = 0; i < dataList.length; i++) {
	            var data = dataList[i].data;
	            var dot = '';
	            var j = 0;
	            for (var key in data) {
	                if (data[key].r) {
	                    var d = this.map(data[key]);
	                    dot += this.circle(d, dataList[i].color, i, j++);
	                }
	            }
	            tmp += '<g class="line' + i + '">' + dot + this.path(dataList[i], i) + ' </g>';
	        }
	        this.svgData += tmp;
	    },
	    _renderTags: function() {
	        var dataList = this.options.dataList;
	        var div = '';
	        var tmp = '';
	        for (var i = 0; i < dataList.length; i++) {
	            var data = dataList[i];
	            tmp += '<div style="display:inline-block;position:relative;padding-left:5px;color:#666">' +
	                '<span>' + data.name + '<span class="g-tri" style="position:absolute;right:0;top:-10px;width: 0;height: 0;border-style: solid;' +
	                'border-width: 0 0 8px 10px;border-color:transparent transparent ' + (data.color || '#000') + ' transparent' + '"></span>' + '</span>' +
	                '</div>';
	        }
	        div = '<div class="g-tags" style="font-size:7px;color:#ddd;position:absolute;right:0;top:20px">' + tmp + '</div>';
	        this.ele.innerHTML += div;
	    },
	    text: function(x, y, txt) {
	        return '<text x = "' + x + '" y = "' + y + '" font-size="9" fill="#999">' + txt + '</text>';
	    },
	    line: function(x1, y1, x2, y2, style) {
	        return '<line x1="' + x1 + '" x2="' + x2 + '" y1="' + y1 + '" y2="' + y2 + '" style="' + style + '"></line>';
	    },
	    circle: function(data, color, id, n) {
	        var x = data.x;
	        var y = data.y;
	        var r = data.r;
	        if (n === 0) {
	            return '<circle class="dots-start" cx="' + x + '" cy="' + y + '" r="' + r + '" style="fill:' + color + ';stroke-width:1;display:none">' +
	                '</circle>';
	        } else {
	            return '<circle class="dots-end" cx="' + x + '" cy="' + y + '" r="' + r + '" style="fill:' + color + ';stroke-width:1;display:none">' +
	                '</circle>';
	        }

	    },
	    path: function(lineData, id) {
	        var p = [];
	        var i = 0;
	        var data = lineData.data;
	        var lineWidth = lineData.lineWidth || 1;
	        var color = lineData.color || '#000';
	        for (var key in data) {
	            if (data.hasOwnProperty(key)) {
	                var d = this.map(data[key]);
	                if (i === 0) {
	                    p.push('M ' + d.x + ',' + d.y);
	                    i++;
	                } else {
	                    p.push('L ' + d.x + ',' + d.y);
	                }
	            }
	        }
	        var path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
	        path.setAttributeNS(null, 'd', p.join(' '));
	        var length = path.getTotalLength();
	        return '<path id="path' + id +
	            '" stroke-dasharray="' + length + ' ' + length +
	            '" stroke-dashoffset="' + length +
	            '" fill="none" stroke="' + color +
	            '" stroke-width="' + lineWidth + '"' +
	            ' d="' + p.join(' ') + '"' +
	            '>' +
	            '</path>';
	    },
	    map: function(data) {
	        var x = data.x * this.ratio.x + this.padding;
	        var y = this.start.y + data.y * this.ratio.y;
	        return {
	            x: x,
	            y: y,
	            r: data.r || 1
	        };
	    }
	};


	Graph.constructor = Graph;

	module.exports = Graph;

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _visualAnnulusGraph = __webpack_require__(33);

	var _visualAnnulusGraph2 = _interopRequireDefault(_visualAnnulusGraph);

	var _query = __webpack_require__(13);

	var _query2 = _interopRequireDefault(_query);

	var _CommonModel2 = __webpack_require__(19);

	var _CommonModel3 = _interopRequireDefault(_CommonModel2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var AnnulusGraphModel = function (_CommonModel) {
	    _inherits(AnnulusGraphModel, _CommonModel);

	    function AnnulusGraphModel() {
	        _classCallCheck(this, AnnulusGraphModel);

	        return _possibleConstructorReturn(this, Object.getPrototypeOf(AnnulusGraphModel).apply(this, arguments));
	    }

	    _createClass(AnnulusGraphModel, [{
	        key: 'parseToHtmlString',
	        value: function parseToHtmlString(model, globalModel, afterRenderQueue, pageShowQueue, pageExitQueue) {
	            model.ele = '#model' + model.id;
	            var foo = foo = (0, _visualAnnulusGraph2.default)(model);
	            afterRenderQueue.push(function () {
	                foo.init();
	            });
	            pageShowQueue.push(function () {
	                setTimeout(foo.render, 1000);
	            });
	            pageExitQueue.push(foo.exit);
	            return '\n            <div id="model' + model.id + '" class="model-annulus-graph model"\n                style="\n                    -webkit-transform: scale(1);\n                    ' + this.__parseToStyleString(model) + '\n                    ">\n            </div>\n        ';
	        }
	    }]);

	    return AnnulusGraphModel;
	}(_CommonModel3.default);

	exports.default = new AnnulusGraphModel();

/***/ },
/* 33 */
/***/ function(module, exports) {

	'use strict';

	var Pastry = function (option) {

	    this.option = option;
	    this.canvas = null;
	    this.ctx = null;
	    this.circleRadius = 0;
	    this.tmpValue = 0;
	    this.animationTime = option.animationTime;
	    this.locX = 0;
	    this.locY = 0;
	    this.img = null;
	    this.imgWidth = 0;
	    this.imgHeight = 0;

	    this.incSpeed = option.value / (option.animationTime / 20);

	    // canvas相对外框的缩放程度
	    this.canvasScale = 0.85;
	    this.timer = null;

	};

	Pastry.prototype = {
	    drawCircle: function (option) {
	        var ctx = this.ctx;
	        //开始绘制
	        ctx.save();

	        if (this.tmpValue < this.option.value) {
	            this.tmpValue += this.incSpeed;
	            if (this.tmpValue > this.option.value) {
	                this.tmpValue = this.option.value;
	            }
	        } else {
	            clearTimeout(this.timer);
	        }

	        var tmp = 0;
	        if (option.ballRadius) {
	            tmp = option.ballRadius - option.tickness / 2;
	        }

	        this.circleRadius = (this.canvas.width / 2 - option.tickness / 2 ) * this.canvasScale;

	        if (option.image) {
	            this.drawImage();
	        }

	        // 画圈圈底色
	        ctx.beginPath();
	        ctx.strokeStyle = option.originColor || '#000';
	        ctx.arc(this.canvas.width / 2, this.canvas.height / 2, this.circleRadius, 0, Math.PI * 2, 0);
	        ctx.lineWidth = option.tickness;
	        ctx.stroke();
	        ctx.closePath();

	        // 画圈圈
	        ctx.beginPath();
	        ctx.strokeStyle = option.color || '#eee';
	        ctx.arc(this.canvas.width / 2, this.canvas.height / 2, this.circleRadius, -Math.PI / 2, this.tmpValue / 100 * Math.PI * 2 - Math.PI / 2, 0);
	        ctx.lineWidth = option.tickness;
	        ctx.stroke();
	        ctx.closePath();

	        if (option.ballRadius) {
	            this.drawBall(option);
	        }

	        if (option.textDisplay) {
	            ctx.restore();
	            this.drawText(option);
	        }
	    },

	    drawImage: function () {
	        var ctx = this.ctx;
	        ctx.save();

	        var imgLocate = this.canvas.width * this.canvasScale;
	        var tmpHeight, tmpWidth;

	        // 图片相对canvas缩放
	        if (this.imgWidth > this.imgHeight) {
	            tmpHeight = this.imgHeight / (this.imgWidth / imgLocate);
	            tmpWidth = imgLocate;
	        } else {
	            tmpWidth = this.imgWidth / (this.imgHeight / imgLocate);
	            tmpHeight = imgLocate;
	        }
	        
	        ctx.drawImage(this.img, this.canvas.width * (1 - this.canvasScale) / 2, this.canvas.height * (1 - this.canvasScale) / 2, tmpWidth, tmpHeight);
	        ctx.restore();
	    },

	    drawBall: function (option) {
	        var ctx = this.ctx;

	        ctx.beginPath();
	        ctx.fillStyle = option.color || '#eee';

	        var angle = this.tmpValue / 100 * Math.PI * 2 - Math.PI / 2;
	        var ballRadius = option.ballRadius;

	        ctx.arc(this.locX + this.circleRadius * Math.cos(angle),
	            this.locY + this.circleRadius * Math.sin(angle),
	            ballRadius,
	            0, 2 * Math.PI,
	            0);

	        ctx.fill();
	        ctx.closePath();
	    },

	    drawText: function (option) {
	        var ctx = this.ctx;
	        var angle = this.tmpValue / 100 * Math.PI * 2 - Math.PI / 2;
	        var rotateAngle = angle - Math.PI / 1.7;

	        ctx.save();
	        ctx.beginPath();
	        ctx.translate(this.canvas.width / 2, this.canvas.height / 2);

	        ctx.rotate(rotateAngle);

	        ctx.translate(-this.canvas.width / 2, -this.canvas.height / 2);
	        ctx.textBaseline = 'middle';
	        ctx.textAlign = 'center';
	        ctx.fillStyle = option.textColor || '#000';

	        var tmpFont = ( option.fontSize || option.tickness / 1.8 ) + 'px';
	        ctx.font = tmpFont + ' Arial';

	        ctx.fillText(this.tmpValue.toFixed(1) + '%', this.locX + this.circleRadius * Math.cos(angle - rotateAngle) + 20, this.locY + this.circleRadius * Math.sin(angle - rotateAngle) + 2);

	        ctx.closePath();
	        ctx.restore();
	    },

	    init: function () {
	        var el = this.option.el;

	        var wrap = document.querySelector(el);

	        this.canvas = document.createElement('canvas');

	        // 解决canvas模糊问题
	        this.canvas.width = this.option.wrapWidth * 2 ;
	        this.canvas.height = this.option.wrapWidth * 2;
	        this.canvas.style.zoom = 0.5;
	        this.option.tickness = this.option.tickness * 2;
	        this.option.ballRadius = this.option.ballRadius * 2;

	        this.ctx = this.canvas.getContext('2d');
	        wrap.appendChild(this.canvas);

	        this.locX = this.canvas.width / 2;
	        this.locY = this.canvas.height / 2;

	        if (this.option.image) {
	            var that = this;
	            this.img = new Image();
	            this.img.src = this.option.image;

	            this.img.onload = function () {
	                that.imgWidth = that.img.width;
	                that.imgHeight = that.img.height;
	                that.drawCircle(that.option);
	            };
	        } else {
	            this.drawCircle(this.option);
	        }


	    },

	    render: function () {
	        var that = this;

	        this.timer = setTimeout(function () {
	            that.render();
	        }, 1000 / 50);

	        that.ctx.clearRect(0, 0, that.canvas.width, that.canvas.height);
	        this.drawCircle(this.option);

	        if (this.option.image) {
	            this.imgWidth = this.img.width;
	            this.imgHeight = this.img.height;
	        }
	    },

	    exit: function () {
	        clearTimeout(this.timer);
	        this.tmpValue = 0;
	    }

	};

	module.exports = Pastry;

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _query = __webpack_require__(13);

	var _query2 = _interopRequireDefault(_query);

	var _share = __webpack_require__(35);

	var _share2 = _interopRequireDefault(_share);

	var _network = __webpack_require__(8);

	var _network2 = _interopRequireDefault(_network);

	var _ua = __webpack_require__(7);

	var _ua2 = _interopRequireDefault(_ua);

	var _wa = __webpack_require__(6);

	var _wa2 = _interopRequireDefault(_wa);

	var _visualSprite = __webpack_require__(18);

	var _visualSprite2 = _interopRequireDefault(_visualSprite);

	__webpack_require__(37);

	var _CommonModel2 = __webpack_require__(19);

	var _CommonModel3 = _interopRequireDefault(_CommonModel2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var ACTPLAT_CONFIG_API = 'http://rec.uc.cn/actplat/frontend/wechat/config';

	var ShareButtonModel = function (_CommonModel) {
	    _inherits(ShareButtonModel, _CommonModel);

	    function ShareButtonModel() {
	        _classCallCheck(this, ShareButtonModel);

	        return _possibleConstructorReturn(this, Object.getPrototypeOf(ShareButtonModel).apply(this, arguments));
	    }

	    _createClass(ShareButtonModel, [{
	        key: 'parseToHtmlString',
	        value: function parseToHtmlString(model, globalModel, afterRenderQueue, showJob, exitJob) {
	            var _this2 = this;

	            this.__handleKeyframes(model, showJob, exitJob);
	            afterRenderQueue.push(function () {
	                _this2.__initShareConfig(model);
	                if (_ua2.default.pf === 'WECHAT') {
	                    _network2.default.get(ACTPLAT_CONFIG_API, {
	                        url: encodeURIComponent(window.location.href)
	                    }, function (res) {
	                        if (res.success) {
	                            _this2.__initWechatShareConfig(model, res.data);
	                        }
	                    });
	                }
	                _this2.__initShareDOM(model);
	            });
	            return '\n            <div id="model' + model.id + '" class="model-share-button model"\n                style="\n                    background: 0 0 url(' + model.btnImage + ') no-repeat;\n                    background-size: 100% 100%;\n                    ' + this.__parseToStyleString(model) + '\n                    ">\n            </div>\n        ';
	        }
	    }, {
	        key: '__initShareConfig',
	        value: function __initShareConfig(model) {
	            model.__shareOpt__ = {
	                title: model.title,
	                desc: model.content,
	                imgUrl: model.shareImage,
	                link: window.location.href,
	                domId: 'wrap-creation'
	            };
	        }
	    }, {
	        key: '__initWechatShareConfig',
	        value: function __initWechatShareConfig(model, jsApiConf) {
	            model.__shareOpt__.jsApiConf = jsApiConf;
	            _share2.default.init(model.__shareOpt__);
	        }
	    }, {
	        key: '__initShareDOM',
	        value: function __initShareDOM(model) {
	            var _this3 = this;

	            model.__wechatMask__ = (0, _query2.default)('\n            <div id="wechat-mask' + model.id + '">\n                <div class="wrap-mask-image"></div>\n            </div>\n            ');
	            model.__wechatMask__.hide().style('-webkit-transition: all 0.2s ease').style('opacity: 0').style('position: fixed').style('width: 100%').style('height: 100%').style('background-color: rgba(0, 0, 0, 0.9)').style('z-index: 9999').on('touchstart', function (e) {
	                e.preventDefault();
	                model.sprite.pause();
	                model.__wechatMask__.style('opacity: 0').delay(200).hide();
	            });
	            (0, _query2.default)('body').append(model.__wechatMask__);

	            var image = new Image();
	            image.onload = function () {
	                var opt = _this3.__getInitOption(model, image.width, image.height);
	                model.sprite = new _visualSprite2.default(opt);
	                model.sprite.init();
	                _this3.__bindWechatMaskEvent(model);
	            };
	            image.src = model.wechatMaskImage;
	        }
	    }, {
	        key: '__bindWechatMaskEvent',
	        value: function __bindWechatMaskEvent(model) {

	            (0, _query2.default)('#model' + model.id).on('touchstart', function (e) {
	                e.preventDefault();
	                _wa2.default.click('share', {
	                    modelid: model.id,
	                    creationid: window.__creation__.id
	                }, model.hyperlink);
	                model.__shareOpt__.showWechatMask = function () {
	                    model.__wechatMask__.show().delay(50).style('opacity: 1').exec(function () {
	                        try {
	                            model.sprite.start();
	                        } catch (e) {}
	                    });
	                };
	                _share2.default.share(model.__shareOpt__);
	            });
	        }
	    }, {
	        key: '__getInitOption',
	        value: function __getInitOption(model, width, height) {
	            var opt = {};
	            opt.ele = '#wechat-mask' + model.id + ' .wrap-mask-image';
	            opt.width = width / 2 / model.count;
	            opt.height = height / 2;
	            opt.image = model.wechatMaskImage;
	            opt.count = model.count;
	            opt.times = model.times;
	            opt.frames = [];
	            var framePairList = model.frames.split(',');
	            for (var framePairKey in framePairList) {
	                var framePair = framePairList[framePairKey];
	                framePair = framePair.split('|');
	                opt.frames.push({
	                    index: parseInt(framePair[0], 10),
	                    time: parseInt(framePair[1], 10)
	                });
	            }
	            opt.times = model.times;
	            return opt;
	        }
	    }]);

	    return ShareButtonModel;
	}(_CommonModel3.default);

	exports.default = new ShareButtonModel();

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	/* jshint camelcase: false */
	(function(root, factory) {
	    'use strict';
	    if (true) {
	        // CommonJS
	        module.exports = factory(__webpack_require__(7), __webpack_require__(8), __webpack_require__(36));
	    } else {
	        // Global Variables
	        root.UEM = root.UEM || {};
	        root.UEM.share = factory(root.UEM.ua, root.UEM.network, root.wx);
	    }
	}(this, function (ua, net, wx) {

	    'use strict';

	    var out = {};

	    /**
	     * initialize share config
	     */
	    out.init = function (opt) {
	        if (ua.pf === 'WECHAT') {
	            initOpt(opt);
	            opt.jsApiConf.jsApiList = [
	                'onMenuShareTimeline',
	                'onMenuShareAppMessage',
	                'onMenuShareQQ'
	            ];
	            wx.config(opt.jsApiConf);
	            setUpWechatOpt(opt);
	        }
	    };

	    /**
	     * when share action dispatch, use thie function
	     */
	    out.share = function (opt) {
	        initOpt(opt);
	        switch (ua.pf) {
	        case 'UC':
	            ucShare(opt);
	            break;
	        case 'UCNEWS':
	            ucShare(opt);
	            break;
	        case 'DINGTALK':
	            opt.showMask();
	            break;
	        case 'WECHAT':
	            setUpWechatOpt(opt);
	            opt.showWechatMask();
	            opt.showMask();
	            break;
	        case 'WEIBO':
	            weiboShare(opt);
	            break;
	        default:
	            qqShare(opt);
	            break;
	        }
	    };

	    var IOSDictionary = {
	        'SinaWeibo': 'kSinaWeibo',
	        'WechatFriends': 'kWeixin',
	        'WechatTimeline': 'kWeixinFriend',
	        'QQ': 'kQQ',
	        'img': 'shareImage'
	    };

	    function initOpt(opt) {
	        opt.title = opt.title || '';
	        opt.desc = opt.desc || '';
	        opt.link = opt.link || 'http://uc.cn';
	        addEntryParam2Link(opt);
	        addOriginParam2Link(opt);
	        opt.platform = opt.platform || '';
	        opt.disableTarget = '';
	        opt.domId = opt.domId || '';
	        opt.showMask = opt.showMask || function () {};
	        opt.showWechatMask = opt.showWechatMask || function () {};
	        opt.weiboRuleId = opt.weiboRuleId || 106;
	        opt.weiboActivityId = opt.weiboActivityId || 261;
	        opt.type = opt.type || '';
	        if (ua.isIOS()) {
	            opt.platform = IOSDictionary[opt.platform];
	            opt.type = IOSDictionary[opt.type];
	        } else {
	            if (opt.disablePlatform && opt.disablePlatform.length !== 0) {
	                opt.disableTarget = opt.disablePlatform.toString();
	            }
	        }
	    }

	    var ENTRY_MAP = {
	        UC: 'ucshare',
	        UCNEWS: 'ucnewsshare',
	        DINGTALK: 'dingtalkshare',
	        WECHAT: 'wechatshare',
	        QQ: 'qqshare',
	        WEIBO: 'weiboshare'
	    };

	    function addEntryParam2Link(opt) {
	        if (opt.link.indexOf('entry=') === -1) {
	            opt.link = net.parseQuery({
	                entry: ENTRY_MAP[ua.pf]
	            }, opt.link);
	        }
	    }

	    function addOriginParam2Link(opt) {
	        if (opt.link.indexOf('origin=') === -1) {
	            opt.link = net.parseQuery({
	                origin: net.query('origin')
	            }, opt.link);
	        }
	    }

	    function setUpWechatOpt(opt) {
	        wx.ready(function () {
	            wx.onMenuShareTimeline(opt);
	            wx.onMenuShareAppMessage(opt);
	            wx.onMenuShareQQ(opt);
	        });
	    }

	    function qqShare(opt) {
	        window.location.href = 'http://connect.qq.com/widget/shareqq/index.html?' +
	            'url=' + encodeURIComponent(opt.link) +
	            '&desc=' + encodeURIComponent(opt.desc) +
	            '&title=' + encodeURIComponent(opt.title) +
	            '&pics=' + encodeURIComponent(opt.imgUrl);
	    }

	    function weiboShare(opt) {
	        window.location.href = 'http://rec.uc.cn/actplat/sharetheme/service/index?' +
	            'uc_param_str=nidnssbifrpfuacpve' +
	            '&userId=' +
	            '&ruleId=' + opt.weiboRuleId +
	            '&activityId=' + opt.weiboActivityId +
	            '&content=' + encodeURIComponent(opt.desc) +
	            '&title=' + encodeURIComponent(opt.title) +
	            '&url=' + encodeURIComponent(opt.link) +
	            '&imgUrl=' + encodeURIComponent(opt.imgUrl) +
	            '&backUrl=' + '&site=sina';
	    }

	    function ucShare(opt) {
	        try {
	            if (!ua.isIOS()) {
	                ucAndroidShare(opt);
	            } else {
	                ucIOSShare(opt);
	            }
	        } catch (e) {}
	    }

	    /*
	     * 安卓版本高于10.4 调用新接口
	     */
	    function ucAndroidShare(opt) {
	        if (isUCNews()) {
	            window.ucweb.startRequest('shell.share', [
	                JSON.stringify({
	                    target: opt.platform,
	                    invisible_platforms: opt.disableTarget,
	                    title: opt.title,
	                    content: opt.desc,
	                    url: opt.link,
	                    iconUrl: opt.imgUrl,
	                    screenShotsArea: opt.domId,
	                    type: opt.type
	                })
	            ]);
	        } else if (isCurrentHighVersion('10.4.0.0')) {
	            window.ucweb.startRequest('shell.share', [
	                JSON.stringify({
	                    target: opt.platform,
	                    invisible_platforms: opt.disableTarget,
	                    title: opt.title,
	                    content: opt.desc,
	                    url: opt.link,
	                    image_url: opt.imgUrl,
	                    screenShotsArea: opt.domId,
	                    type: opt.type
	                })
	            ]);
	        } else {
	            window.ucweb.startRequest('shell.page_share',   [
	                opt.title,
	                opt.desc,
	                opt.link,
	                opt.platform,
	                opt.disableTarget,
	                '',
	                getNodeInfoById(opt.domId)
	            ]);
	        }
	    }

	    /**
	     * ios uc浏览器分享至朋友圈为desc，安卓则为title
	     * ios 版本高于10.2 调用新接口
	     */
	    function ucIOSShare(opt) {
	        if (isUCNews()||isCurrentHighVersion('10.2.0.0')) {
	            window.ucbrowser.web_shareEX(JSON.stringify({
	                target: opt.platform,
	                disableTarget: opt.disableTarget,
	                title: opt.title,
	                content: opt.desc,
	                sourceUrl: opt.link,
	                imageUrl: opt.imgUrl,
	                htmlNode: opt.domId,
	                shareStyle: opt.type
	            }));
	        } else {
	            window.ucbrowser.web_share(
	                opt.title,
	                opt.desc,
	                opt.link,
	                opt.platform,
	                '',
	                '',
	                opt.domId);
	        }
	    }
	    /*
	     * 判断是否NEWS
	     */
	    function isUCNews() {
	        if(ua.pf==='UCNEWS') {
	            return true;
	        }

	        return false;
	    }
	    /*
	     * 判断浏览器版本
	     */
	    function isCurrentHighVersion(ver) {
	        var ucVesion = window.navigator.userAgent.toLowerCase().match(/ucbrowser\/\d+.\d+.\d+.\d+/);
	        if(ucVesion) {
	            ucVesion = ucVesion[0].replace('ucbrowser/', '').split('.');
	            ver = ver.split('.');
	            if (+ucVesion[0] > +ver[0] ||
	                +ucVesion[0] === +ver[0] && +ucVesion[1] > +ver[1] ||
	                +ucVesion[0] === +ver[0] && +ucVesion[1] === +ver[1] && +ucVesion[2] > +ver[2] ||
	                +ucVesion[0] === +ver[0] && +ucVesion[1] === +ver[1] && +ucVesion[2] === +ver[2] && +ucVesion[3] >= +ver[3]) {
	                return true;
	            }
	        }

	        return false;
	    }

	    /**
	     * ========== 以下为客户端同学提供的代码 T T ===========
	     **/
	    function getTop(e) {
	        var offset = e.offsetTop;
	        offset += e.offsetParent != null ? offset += getTop(e.offsetParent) : 0;
	        return offset;
	    }

	    function getLeft(e) {
	        var offset = e.offsetLeft;
	        offset += e.offsetParent != null ? getLeft(e.offsetParent) : 0;
	        return offset;
	    }

	    function getCss3offsetTop(e) {
	        var css3offset = getComputedStyle(e, null).webkitTransform,
	            css3offsetTop;
	        if (css3offset === 'none') {
	            css3offsetTop = 0;
	        } else { //存在CSS3属性
	            css3offsetTop = parseInt(css3offset.split(',')[5].replace(')', ''), 10);
	        }
	        css3offsetTop += e.parentNode.tagName !== 'BODY' ? getCss3offsetTop(e.parentNode) : 0;
	        return css3offsetTop;
	    }

	    function getCss3offsetLeft(e) {
	        var css3offset = getComputedStyle(e, null).webkitTransform,
	            css3offsetLeft;
	        if (css3offset === 'none') {
	            css3offsetLeft = 0;
	        } else { //存在CSS3属性
	            css3offsetLeft = parseInt(css3offset.split(',')[4], 10);
	        }
	        css3offsetLeft += e.parentNode.tagName !== 'BODY' ? getCss3offsetLeft(e.parentNode) : 0;
	        return css3offsetLeft;
	    }

	    function getNodeInfoById(e) {
	        var myNode = document.getElementById(e);
	        if (myNode) {
	            var pos = [getLeft(myNode) + getCss3offsetLeft(myNode), getTop(myNode) + getCss3offsetTop(myNode), myNode.offsetWidth, myNode.offsetHeight];
	            return (pos);
	        } else {
	            return '';
	        }
	    }

	    return out;
	}));

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;'use strict';
	var f = function () {
	    // 以下是微信源码，是this为window执行
	    !function(a,b){ true?!(__WEBPACK_AMD_DEFINE_RESULT__ = function(){return b(a)}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):b(a,!0)}(this,function(a,b){function c(b,c,d){a.WeixinJSBridge?WeixinJSBridge.invoke(b,e(c),function(a){g(b,a,d)}):j(b,d)}function d(b,c,d){a.WeixinJSBridge?WeixinJSBridge.on(b,function(a){d&&d.trigger&&d.trigger(a),g(b,a,c)}):d?j(b,d):j(b,c)}function e(a){return a=a||{},a.appId=E.appId,a.verifyAppId=E.appId,a.verifySignType="sha1",a.verifyTimestamp=E.timestamp+"",a.verifyNonceStr=E.nonceStr,a.verifySignature=E.signature,a}function f(a){return{timeStamp:a.timestamp+"",nonceStr:a.nonceStr,"package":a.package,paySign:a.paySign,signType:a.signType||"SHA1"}}function g(a,b,c){var d,e,f;switch(delete b.err_code,delete b.err_desc,delete b.err_detail,d=b.errMsg,d||(d=b.err_msg,delete b.err_msg,d=h(a,d),b.errMsg=d),c=c||{},c._complete&&(c._complete(b),delete c._complete),d=b.errMsg||"",E.debug&&!c.isInnerInvoke&&alert(JSON.stringify(b)),e=d.indexOf(":"),f=d.substring(e+1)){case"ok":c.success&&c.success(b);break;case"cancel":c.cancel&&c.cancel(b);break;default:c.fail&&c.fail(b)}c.complete&&c.complete(b)}function h(a,b){var e,f,c=a,d=p[c];return d&&(c=d),e="ok",b&&(f=b.indexOf(":"),e=b.substring(f+1),"confirm"==e&&(e="ok"),"failed"==e&&(e="fail"),-1!=e.indexOf("failed_")&&(e=e.substring(7)),-1!=e.indexOf("fail_")&&(e=e.substring(5)),e=e.replace(/_/g," "),e=e.toLowerCase(),("access denied"==e||"no permission to execute"==e)&&(e="permission denied"),"config"==c&&"function not exist"==e&&(e="ok"),""==e&&(e="fail")),b=c+":"+e}function i(a){var b,c,d,e;if(a){for(b=0,c=a.length;c>b;++b)d=a[b],e=o[d],e&&(a[b]=e);return a}}function j(a,b){if(!(!E.debug||b&&b.isInnerInvoke)){var c=p[a];c&&(a=c),b&&b._complete&&delete b._complete,console.log('"'+a+'",',b||"")}}function k(){0!=D.preVerifyState&&(u||v||E.debug||"6.0.2">z||D.systemType<0||A||(A=!0,D.appId=E.appId,D.initTime=C.initEndTime-C.initStartTime,D.preVerifyTime=C.preVerifyEndTime-C.preVerifyStartTime,H.getNetworkType({isInnerInvoke:!0,success:function(a){var b,c;D.networkType=a.networkType,b="http://open.weixin.qq.com/sdk/report?v="+D.version+"&o="+D.preVerifyState+"&s="+D.systemType+"&c="+D.clientVersion+"&a="+D.appId+"&n="+D.networkType+"&i="+D.initTime+"&p="+D.preVerifyTime+"&u="+D.url,c=new Image,c.src=b}})))}function l(){return(new Date).getTime()}function m(b){w&&(a.WeixinJSBridge?b():q.addEventListener&&q.addEventListener("WeixinJSBridgeReady",b,!1))}function n(){H.invoke||(H.invoke=function(b,c,d){a.WeixinJSBridge&&WeixinJSBridge.invoke(b,e(c),d)},H.on=function(b,c){a.WeixinJSBridge&&WeixinJSBridge.on(b,c)})}var o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H;if(!a.jWeixin)return o={config:"preVerifyJSAPI",onMenuShareTimeline:"menu:share:timeline",onMenuShareAppMessage:"menu:share:appmessage",onMenuShareQQ:"menu:share:qq",onMenuShareWeibo:"menu:share:weiboApp",onMenuShareQZone:"menu:share:QZone",previewImage:"imagePreview",getLocation:"geoLocation",openProductSpecificView:"openProductViewWithPid",addCard:"batchAddCard",openCard:"batchViewCard",chooseWXPay:"getBrandWCPayRequest"},p=function(){var b,a={};for(b in o)a[o[b]]=b;return a}(),q=a.document,r=q.title,s=navigator.userAgent.toLowerCase(),t=navigator.platform.toLowerCase(),u=!(!t.match("mac")&&!t.match("win")),v=-1!=s.indexOf("wxdebugger"),w=-1!=s.indexOf("micromessenger"),x=-1!=s.indexOf("android"),y=-1!=s.indexOf("iphone")||-1!=s.indexOf("ipad"),z=function(){var a=s.match(/micromessenger\/(\d+\.\d+\.\d+)/)||s.match(/micromessenger\/(\d+\.\d+)/);return a?a[1]:""}(),A=!1,B=!1,C={initStartTime:l(),initEndTime:0,preVerifyStartTime:0,preVerifyEndTime:0},D={version:1,appId:"",initTime:0,preVerifyTime:0,networkType:"",preVerifyState:1,systemType:y?1:x?2:-1,clientVersion:z,url:encodeURIComponent(location.href)},E={},F={_completes:[]},G={state:0,data:{}},m(function(){C.initEndTime=l()}),H={config:function(a){E=a,j("config",a);var b=E.check===!1?!1:!0;m(function(){var a,d,e;if(b)c(o.config,{verifyJsApiList:i(E.jsApiList)},function(){F._complete=function(a){C.preVerifyEndTime=l(),G.state=1,G.data=a},F.success=function(){D.preVerifyState=0},F.fail=function(a){F._fail?F._fail(a):G.state=-1};var a=F._completes;return a.push(function(){k()}),F.complete=function(){for(var c=0,d=a.length;d>c;++c)a[c]();F._completes=[]},F}()),C.preVerifyStartTime=l();else{for(G.state=1,a=F._completes,d=0,e=a.length;e>d;++d)a[d]();F._completes=[]}}),E.beta&&n()},ready:function(a){0!=G.state?a():(F._completes.push(a),!w&&E.debug&&a())},error:function(a){"6.0.2">z||B||(B=!0,-1==G.state?a(G.data):F._fail=a)},checkJsApi:function(a){var b=function(a){var c,d,b=a.checkResult;for(c in b)d=p[c],d&&(b[d]=b[c],delete b[c]);return a};c("checkJsApi",{jsApiList:i(a.jsApiList)},function(){return a._complete=function(a){if(x){var c=a.checkResult;c&&(a.checkResult=JSON.parse(c))}a=b(a)},a}())},onMenuShareTimeline:function(a){d(o.onMenuShareTimeline,{complete:function(){c("shareTimeline",{title:a.title||r,desc:a.title||r,img_url:a.imgUrl||"",link:a.link||location.href,type:a.type||"link",data_url:a.dataUrl||""},a)}},a)},onMenuShareAppMessage:function(a){d(o.onMenuShareAppMessage,{complete:function(){c("sendAppMessage",{title:a.title||r,desc:a.desc||"",link:a.link||location.href,img_url:a.imgUrl||"",type:a.type||"link",data_url:a.dataUrl||""},a)}},a)},onMenuShareQQ:function(a){d(o.onMenuShareQQ,{complete:function(){c("shareQQ",{title:a.title||r,desc:a.desc||"",img_url:a.imgUrl||"",link:a.link||location.href},a)}},a)},onMenuShareWeibo:function(a){d(o.onMenuShareWeibo,{complete:function(){c("shareWeiboApp",{title:a.title||r,desc:a.desc||"",img_url:a.imgUrl||"",link:a.link||location.href},a)}},a)},onMenuShareQZone:function(a){d(o.onMenuShareQZone,{complete:function(){c("shareQZone",{title:a.title||r,desc:a.desc||"",img_url:a.imgUrl||"",link:a.link||location.href},a)}},a)},startRecord:function(a){c("startRecord",{},a)},stopRecord:function(a){c("stopRecord",{},a)},onVoiceRecordEnd:function(a){d("onVoiceRecordEnd",a)},playVoice:function(a){c("playVoice",{localId:a.localId},a)},pauseVoice:function(a){c("pauseVoice",{localId:a.localId},a)},stopVoice:function(a){c("stopVoice",{localId:a.localId},a)},onVoicePlayEnd:function(a){d("onVoicePlayEnd",a)},uploadVoice:function(a){c("uploadVoice",{localId:a.localId,isShowProgressTips:0==a.isShowProgressTips?0:1},a)},downloadVoice:function(a){c("downloadVoice",{serverId:a.serverId,isShowProgressTips:0==a.isShowProgressTips?0:1},a)},translateVoice:function(a){c("translateVoice",{localId:a.localId,isShowProgressTips:0==a.isShowProgressTips?0:1},a)},chooseImage:function(a){c("chooseImage",{scene:"1|2",count:a.count||9,sizeType:a.sizeType||["original","compressed"],sourceType:a.sourceType||["album","camera"]},function(){return a._complete=function(a){if(x){var b=a.localIds;b&&(a.localIds=JSON.parse(b))}},a}())},previewImage:function(a){c(o.previewImage,{current:a.current,urls:a.urls},a)},uploadImage:function(a){c("uploadImage",{localId:a.localId,isShowProgressTips:0==a.isShowProgressTips?0:1},a)},downloadImage:function(a){c("downloadImage",{serverId:a.serverId,isShowProgressTips:0==a.isShowProgressTips?0:1},a)},getNetworkType:function(a){var b=function(a){var c,d,e,b=a.errMsg;if(a.errMsg="getNetworkType:ok",c=a.subtype,delete a.subtype,c)a.networkType=c;else switch(d=b.indexOf(":"),e=b.substring(d+1)){case"wifi":case"edge":case"wwan":a.networkType=e;break;default:a.errMsg="getNetworkType:fail"}return a};c("getNetworkType",{},function(){return a._complete=function(a){a=b(a)},a}())},openLocation:function(a){c("openLocation",{latitude:a.latitude,longitude:a.longitude,name:a.name||"",address:a.address||"",scale:a.scale||28,infoUrl:a.infoUrl||""},a)},getLocation:function(a){a=a||{},c(o.getLocation,{type:a.type||"wgs84"},function(){return a._complete=function(a){delete a.type},a}())},hideOptionMenu:function(a){c("hideOptionMenu",{},a)},showOptionMenu:function(a){c("showOptionMenu",{},a)},closeWindow:function(a){a=a||{},c("closeWindow",{},a)},hideMenuItems:function(a){c("hideMenuItems",{menuList:a.menuList},a)},showMenuItems:function(a){c("showMenuItems",{menuList:a.menuList},a)},hideAllNonBaseMenuItem:function(a){c("hideAllNonBaseMenuItem",{},a)},showAllNonBaseMenuItem:function(a){c("showAllNonBaseMenuItem",{},a)},scanQRCode:function(a){a=a||{},c("scanQRCode",{needResult:a.needResult||0,scanType:a.scanType||["qrCode","barCode"]},function(){return a._complete=function(a){var b,c;y&&(b=a.resultStr,b&&(c=JSON.parse(b),a.resultStr=c&&c.scan_code&&c.scan_code.scan_result))},a}())},openProductSpecificView:function(a){c(o.openProductSpecificView,{pid:a.productId,view_type:a.viewType||0,ext_info:a.extInfo},a)},addCard:function(a){var e,f,g,h,b=a.cardList,d=[];for(e=0,f=b.length;f>e;++e)g=b[e],h={card_id:g.cardId,card_ext:g.cardExt},d.push(h);c(o.addCard,{card_list:d},function(){return a._complete=function(a){var c,d,e,b=a.card_list;if(b){for(b=JSON.parse(b),c=0,d=b.length;d>c;++c)e=b[c],e.cardId=e.card_id,e.cardExt=e.card_ext,e.isSuccess=e.is_succ?!0:!1,delete e.card_id,delete e.card_ext,delete e.is_succ;a.cardList=b,delete a.card_list}},a}())},chooseCard:function(a){c("chooseCard",{app_id:E.appId,location_id:a.shopId||"",sign_type:a.signType||"SHA1",card_id:a.cardId||"",card_type:a.cardType||"",card_sign:a.cardSign,time_stamp:a.timestamp+"",nonce_str:a.nonceStr},function(){return a._complete=function(a){a.cardList=a.choose_card_info,delete a.choose_card_info},a}())},openCard:function(a){var e,f,g,h,b=a.cardList,d=[];for(e=0,f=b.length;f>e;++e)g=b[e],h={card_id:g.cardId,code:g.code},d.push(h);c(o.openCard,{card_list:d},a)},chooseWXPay:function(a){c(o.chooseWXPay,f(a),a)}},b&&(a.wx=a.jWeixin=H),H});
	}

	f.call(window);
	module.exports = window.wx;

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(38);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/sass-loader/index.js!./ShareButtonModel.scss", function() {
				var newContent = require("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/sass-loader/index.js!./ShareButtonModel.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, ".wrap-mask-image {\n  position: absolute;\n  right: 0;\n  top: 0;\n  font-size: 0; }\n", ""]);

	// exports


/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _query = __webpack_require__(13);

	var _query2 = _interopRequireDefault(_query);

	var _CommonModel2 = __webpack_require__(19);

	var _CommonModel3 = _interopRequireDefault(_CommonModel2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var SkipButtonModel = function (_CommonModel) {
	    _inherits(SkipButtonModel, _CommonModel);

	    function SkipButtonModel() {
	        _classCallCheck(this, SkipButtonModel);

	        return _possibleConstructorReturn(this, Object.getPrototypeOf(SkipButtonModel).apply(this, arguments));
	    }

	    _createClass(SkipButtonModel, [{
	        key: 'parseToHtmlString',
	        value: function parseToHtmlString(model, globalModel, afterRenderQueue, showJob, exitJob) {
	            this.__handleKeyframes(model, showJob, exitJob);
	            afterRenderQueue.push(function () {
	                (0, _query2.default)('#model' + model.id).on('touchstart', function () {
	                    wa.click('skip', {
	                        modelid: model.id,
	                        creationid: window.__creation__.id
	                    });
	                    window.__visualSlider__.move(model.skipPage - 1);
	                });
	            });
	            return '\n            <div id="model' + model.id + '" class="model-share-button model"\n                style="\n                    background: 0 0 url(' + model.btnImage + ') no-repeat;\n                    background-size: 100% 100%;\n                    ' + this.__parseToStyleString(model) + '\n                    ">\n            </div>\n        ';
	        }
	    }]);

	    return SkipButtonModel;
	}(_CommonModel3.default);

	exports.default = new SkipButtonModel();

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _CommonModel2 = __webpack_require__(19);

	var _CommonModel3 = _interopRequireDefault(_CommonModel2);

	var _visualSprite = __webpack_require__(18);

	var _visualSprite2 = _interopRequireDefault(_visualSprite);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var spriteModel = function (_CommonModel) {
	    _inherits(spriteModel, _CommonModel);

	    function spriteModel() {
	        _classCallCheck(this, spriteModel);

	        return _possibleConstructorReturn(this, Object.getPrototypeOf(spriteModel).apply(this, arguments));
	    }

	    _createClass(spriteModel, [{
	        key: 'parseToHtmlString',
	        value: function parseToHtmlString(model, globalModel, afterRenderQueue, showJob, exitJob) {
	            this.__handleKeyframes(model, showJob, exitJob);
	            var opt = this.__getInitOption(model);
	            var sprite = null;
	            afterRenderQueue.push(function () {
	                sprite = new _visualSprite2.default(opt);
	            });
	            showJob.push(function (page) {
	                try {
	                    sprite.start();
	                } catch (e) {}
	            });
	            exitJob.push(function (page) {
	                sprite.pause();
	            });
	            return '\n            <div id="model' + model.id + '" class="model-sprite model"style="\n                    ' + this.__parseToStyleString(model) + '\n                    ">\n            </div>\n        ';
	        }
	    }, {
	        key: '__getInitOption',
	        value: function __getInitOption(model) {
	            var opt = {};
	            opt.ele = '#model' + model.id;
	            opt.width = this.__calculateStyleWidth(model);
	            opt.height = this.__calculateStyleHeight(model);
	            opt.image = model.image;
	            opt.count = model.count;
	            opt.times = model.times;
	            opt.frames = [];
	            var framePairList = model.frames.split(',');
	            for (var framePairKey in framePairList) {
	                var framePair = framePairList[framePairKey];
	                framePair = framePair.split('|');
	                opt.frames.push({
	                    index: parseInt(framePair[0], 10),
	                    time: parseInt(framePair[1], 10)
	                });
	            }
	            return opt;
	        }
	    }]);

	    return spriteModel;
	}(_CommonModel3.default);

	exports.default = new spriteModel();

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	__webpack_require__(42);

	var _resource = __webpack_require__(44);

	var _resource2 = _interopRequireDefault(_resource);

	var _visualSprite = __webpack_require__(18);

	var _visualSprite2 = _interopRequireDefault(_visualSprite);

	var _query = __webpack_require__(13);

	var _query2 = _interopRequireDefault(_query);

	var _ModelType = __webpack_require__(14);

	var _adaptation = __webpack_require__(20);

	var _adaptation2 = _interopRequireDefault(_adaptation);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var LOADING_IMAGE = window.__creation__.id === 38 ? 'http://image.uc.cn/s/uae/g/01/visual/38/loading.gif' : 'http://image.uc.cn/s/uae/g/01/visual/18/loading.png';
	/**
	 * gif: 0
	 * sprite: 1
	 */
	var LOADIN_TYPE = LOADING_IMAGE.indexOf('.gif') !== -1 ? 0 : 1;

	var PageLoading = function () {
	    function PageLoading() {
	        _classCallCheck(this, PageLoading);

	        var $loadingPage = (0, _query2.default)('\n            <div id="page-loading">\n                <div id="wrap-loading">\n                    ' + (LOADIN_TYPE === 0 ? '<img class="loading-sprite" src="' + LOADING_IMAGE + '">' : '<div class="loading-sprite"></div>') + '\n                    <div id=\'loading-progress\'>\n                        <span>0</span>%\n                    </div>\n                </div>\n            </div>\n        ').style('top: ' + _adaptation2.default.calculateFactor() * 180 + 'px');
	        (0, _query2.default)('body').append($loadingPage);
	    }

	    _createClass(PageLoading, [{
	        key: 'waitToResourceArrive',
	        value: function waitToResourceArrive(creation, callback) {
	            var loadingSprite = null;
	            var resourceList = _resource2.default.loadEssentialResource(this.__calculateResourceList(creation), function () {
	                setTimeout(function () {
	                    (0, _query2.default)('#page-loading').style('opacity:0').delay(300).hide();
	                    if (LOADIN_TYPE === 1) {
	                        loadingSprite.pause();
	                    }
	                    callback();
	                }, 800);
	            }, function (percent) {
	                if (LOADIN_TYPE === 1) {
	                    var loadingImage = _resource2.default.getResource(LOADING_IMAGE);
	                    if (loadingImage && !loadingSprite) {
	                        var TIME = 100;
	                        loadingSprite = new _visualSprite2.default({
	                            ele: '#page-loading .loading-sprite',
	                            width: 58,
	                            height: 83,
	                            image: LOADING_IMAGE,
	                            count: 5,
	                            frames: [{
	                                index: 0,
	                                time: TIME
	                            }, {
	                                index: 1,
	                                time: TIME
	                            }, {
	                                index: 2,
	                                time: TIME
	                            }, {
	                                index: 3,
	                                time: TIME
	                            }, {
	                                index: 4,
	                                time: TIME
	                            }]
	                        });
	                        loadingSprite.init();
	                        loadingSprite.start();
	                    }
	                }
	                (0, _query2.default)('#loading-progress span').text(parseInt(percent * 100, 10));
	            });
	        }
	    }, {
	        key: '__calculateResourceList',
	        value: function __calculateResourceList(creation) {
	            var resourceList = [LOADING_IMAGE];
	            for (var i = 0; i < creation.pageList.length; ++i) {
	                var page = creation.pageList[i];
	                var modelList = page.modelList;
	                for (var _i = 0; _i < modelList.length; ++_i) {
	                    var model = modelList[_i];
	                    if (model.type === _ModelType.MODEL_IMAGE) {
	                        if (model.value && model.value.trim().length) resourceList.push(model.value);
	                    } else if (model.type === _ModelType.MODEL_SPRITE) {
	                        resourceList.push(model.image);
	                    } else if (model.type === _ModelType.MODEL_SHARE_BUTTON) {
	                        resourceList.push(model.btnImage);
	                        resourceList.push(model.wechatMaskImage);
	                    }
	                }
	            }
	            return resourceList;
	        }
	    }]);

	    return PageLoading;
	}();

	exports.default = new PageLoading();

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(43);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./pageLoading.scss", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./pageLoading.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, "#page-loading {\n  -webkit-transition: all 0.4s ease;\n  width: 100%;\n  height: 100%;\n  position: fixed; }\n  #page-loading #wrap-loading {\n    position: absolute;\n    width: 100%;\n    text-align: center;\n    font-size: 14px;\n    color: #282828;\n    font-weight: 700; }\n    #page-loading #wrap-loading .loading-sprite {\n      width: 70px;\n      margin: 10px auto; }\n", ""]);

	// exports


/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	(function (root, factory) {
	    'use strict';
	    if (true) {
	        // CommonJS
	        module.exports = factory();
	    }
	    if (root) {
	        // Global Variables
	        root.UEM = root.UEM || {};
	        root.UEM.resource = factory();
	    }
	}(this, function () {
	    'use strict';

	    var out = {},
	        LOADING_FPS = 15,
	        RESOURCE_SUFFIX = {
	            STYLE: ['css'],
	            SCRIPT: ['js'],
	            IMG: ['jpg', 'png', 'gif', 'webp'],
	            AUDIO: ['mp3', 'ogg', 'wav']
	        },
	        TRANSITION_STEP = 4,
	        DEFAULT_AVERAGE_SPEED = 0.2,
	        resourceRepository = {};

	    /**
	     * loading state for recoding loading status
	     */
	    function LoadingState() {
	        this.createTime = +new Date();
	        this.averageSpeed = DEFAULT_AVERAGE_SPEED;
	        this.resourceNum = 0;
	        this.waitingNum = 0;
	        this.lastWaitingNum = -1;
	        this.lastPercent = 0;
	        this.virtualFrame = 0;
	        this.lastLogicPercent = 0;
	        this.transitionPercent = 0;
	        this.percent = 0;
	    }

	    /**
	     * load essential resource
	     */
	    out.loadEssentialResource = function (srcList, finishedCallback, intervalCallback) {
	        var state = new LoadingState();
	        requestEssentialResources(state, srcList);
	        startLoadingJob(state, finishedCallback || function () {}, intervalCallback || function () {});
	    };

	    /**
	     * load content resource
	     */
	    out.loadContentResource = function (query, finishedCallback) {
	        nextContentResource(document.querySelectorAll(query + ' [data-src]'), 0, finishedCallback || function () {});
	    };

	    /**
	     * get resource
	     */
	    out.getResource = function (url) {
	        return resourceRepository[url];
	    };

	    /**
	     * load next content one by one
	     */
	    function nextContentResource(els, next, fcb) {
	        if (next < els.length) {
	            els[next].onload = function () {
	                nextContentResource(els, ++next, fcb);
	            };
	            els[next].setAttribute('src', els[next].getAttribute('data-src'));
	        } else {
	            fcb();
	        }
	    }

	    /**
	     * start images loading job
	     */
	    function startLoadingJob(state, fcb, icb) {
	        var percent = 0,
	            loadJob = setInterval(function () {
	                percent = getLoadingPercent(state);
	                icb(percent);
	                if (percent === 1) {
	                    clearInterval(loadJob);
	                    fcb(resourceRepository);
	                }
	            }, 1000 / LOADING_FPS);
	    }

	    /**
	     * get loading percent
	     */
	    function getLoadingPercent(state) {
	        if (state.resourceNum === 0) {
	            return 1;
	        }
	        var percent = (state.resourceNum - state.waitingNum) / state.resourceNum,
	            virtualPercent = getVirtualPercent(state),
	            nextPercent = getNextPercent(state),
	            logicPercent = 0;
	        updateVirtualFrame(state);
	        if (virtualPercent >= nextPercent) {
	            if (percent === nextPercent) {
	                logicPercent = percent;
	            } else {
	                logicPercent = state.lastPercent;
	            }
	        } else {
	            logicPercent = (state.lastPercent = virtualPercent);
	        }
	        return transitionPercent(state, logicPercent);
	    }

	    /**
	     * get a transition percent
	     */
	    function transitionPercent(state, logicPercent) {
	        if (state.logicPercent !== logicPercent) {
	            state.logicPercent = logicPercent;
	            state.transitionPercent = (state.logicPercent - state.percent) / TRANSITION_STEP;
	        }
	        state.percent += state.transitionPercent;
	        if (state.percent > state.logicPercent) {
	            state.percent = state.logicPercent;
	        }
	        return state.percent;
	    }

	    /**
	     * update virtual frame
	     */
	    function updateVirtualFrame(state) {
	        if (state.lastWaitingNum === state.waitingNum) {
	            ++state.virtualFrame;
	        } else {
	            state.lastWaitingNum = state.waitingNum;
	            state.virtualFrame = 0;
	        }
	    }

	    /**
	     * get virtual percent
	     */
	    function getVirtualPercent(state) {
	        var virtualPercent =
	            (state.resourceNum - state.waitingNum + (state.virtualFrame * state.averageSpeed)) / state.resourceNum;
	        if (state.lastPercent > virtualPercent) {
	            return state.lastPercent;
	        } else {
	            return virtualPercent;
	        }
	    }

	    /**
	     * get percent when next resource loaded
	     */
	    function getNextPercent(state) {
	        var nextNum = 0,
	            RESOURCE_CHANNEL_NUM = 4; // to reduce the initial waiting time
	        if (state.waitingNum >= RESOURCE_CHANNEL_NUM) {
	            nextNum = RESOURCE_CHANNEL_NUM;
	        } else {
	            nextNum = state.waitingNum;
	        }
	        return (state.resourceNum - state.waitingNum + nextNum) / state.resourceNum;
	    }

	    /**
	     * send essential resources request, non-ordered
	     */
	    function requestEssentialResources(state, srcList) {
	        var i = 0;
	        state.resourceNum = state.waitingNum = srcList.length;
	        while (i < srcList.length) {
	            var res = resourceRepository[srcList[i]];
	            if (res) {
	                resourceLoaded(state, res, srcList[i])();
	            } else {
	                switch (getResourceType(srcList[i])) {
	                case 'STYLE':
	                    res = loadStyleResource(srcList[i]);
	                    break;
	                case 'SCRIPT':
	                    res = loadScriptResource(srcList[i]);
	                    break;
	                case 'AUDIO':
	                    res = loadAudioResource(state, srcList[i]);
	                    break;
	                default:
	                    res = new Image();
	                    break;
	                }
	                if (!(res instanceof Audio)) {
	                    res.onload = resourceLoaded(state, res, srcList[i]);
	                }
	                if (res.type !== 'text/css') {
	                    res.src = srcList[i];
	                }
	            }
	            ++i;
	        }
	    }

	    /**
	     * load script resource
	     */
	    function loadScriptResource() {
	        var res = document.createElement('script');
	        window.document.body.appendChild(res);
	        return res;
	    }

	    /**
	     * load style resource
	     */
	    function loadStyleResource(src) {
	        var res = document.createElement('link');
	        res.rel = 'stylesheet';
	        res.type = 'text/css';
	        res.href = src;
	        window.document.getElementsByTagName('head')[0].appendChild(res);
	        return res;
	    }

	    /**
	     * load audio resource
	     */
	    function loadAudioResource(state, src) {
	        var res = new Audio();
	        res.autoplay = false;
	        res.preload = true;
	        resourceLoaded(state, res, src)();
	        return res;
	    }

	    /**
	     * get resouce type
	     */
	    function getResourceType(src) {
	        var i = 0,
	            p = '';
	        for (p in RESOURCE_SUFFIX) {
	            if (RESOURCE_SUFFIX.hasOwnProperty(p)) {
	                i = RESOURCE_SUFFIX[p].length;
	                while (i--) {
	                    if (src.indexOf('.' + RESOURCE_SUFFIX[p][i]) > 0) {
	                        return p;
	                    }
	                }
	            }
	        }
	    }

	    /**
	     * resource loaded callback
	     */
	    function resourceLoaded(state, res, src) {
	        return function () {
	            setTimeout(function () {
	                resourceRepository[src] = res;
	                --state.waitingNum;
	                state.averageSpeed = calculateAverageSpeed(state);
	            }, 50); // fix NaN bug, make time different
	        };
	    }

	    /**
	     * calculate average speed
	     */
	    function calculateAverageSpeed(state) {
	        return (state.resourceNum - state.waitingNum) /
	            ((+new Date() - state.createTime) / (1000 / LOADING_FPS));
	    }

	    return out;
	}));

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	(function (root, factory) {
	    'use strict';
	    // Global Variables
	    root.UEM = root.UEM || {};
	    root.UEM.adaptation = factory();
	    if (true) {
	        // CommonJS
	        module.exports = factory();
	    }
	}(window, function () {
	    'use strict';
	    var out = {},
	        resizeJob = window.UEM.resizeJob = window.UEM.resizeJob || [],
	        MIN_RESIZE_NEED_PIXEL = 50,
	        lastWindowWidth = window.innerWidth,
	        DESIGN_WIDTH = 640,
	        converFactor = DESIGN_WIDTH / 1000;

	    /**
	     * export resize job
	     */
	    out.resizeJob = resizeJob;

	    var banLandscapeOrientationMask = null;

	    function insertBanLandscapeOrientationMask() {
	        if (!banLandscapeOrientationMask) {
	            banLandscapeOrientationMask = document.createElement('div');
	            banLandscapeOrientationMask.style.position = 'fixed';
	            banLandscapeOrientationMask.style.top =
	                banLandscapeOrientationMask.style.left = 0;
	            banLandscapeOrientationMask.style.width =
	                banLandscapeOrientationMask.style.height = '100%';
	            banLandscapeOrientationMask.style.backgroundColor = '#000';
	            banLandscapeOrientationMask.style.zIndex = 99999;
	            banLandscapeOrientationMask.innerHTML = '' +
	                '<div style="font-size:16px;color:#fff;text-align:center;margin-top:' + (window.innerHeight * 0.5 - 20) + 'px">竖屏浏览体验更佳</div>';
	        }
	        document.body.appendChild(banLandscapeOrientationMask);
	    }

	    function removeBanLandscapeOrientationMask() {
	        try {
	            document.body.removeChild(banLandscapeOrientationMask);
	        } catch (e) {}
	    }

	    function checkLandscapeOrientation() {
	        if (window.innerWidth >= window.innerHeight) {
	            insertBanLandscapeOrientationMask();
	        } else {
	            removeBanLandscapeOrientationMask();
	        }
	    }

	    /**
	     * ban landscape orientation
	     */
	    out.banLandscapeOrientation = function () {
	        checkLandscapeOrientation();
	        resizeJob.push(checkLandscapeOrientation);
	    };

	    /**
	     * adapt window by using rem
	     */
	    function rem() {
	        calculateRootFontSize();
	        resizeJob.push(function () {
	            calculateRootFontSize();
	        });
	    }

	    /**
	     * calculate root font size for css rem
	     */
	    function calculateRootFontSize() {
	        setFontSizePixel();
	        setTimeout(function () {
	            setFontSizePixel();
	        }, 100); // safari浏览器 innerWidth 第一次获取为实际屏幕像素点
	    }

	    /**
	     * set html font size pixel
	     */
	    function setFontSizePixel() {
	        document.querySelector('html').style.fontSize = window.innerWidth / converFactor + 'px';
	        document.body.style.width = '0.64rem';
	    }

	    window.onresize = function () {
	        if (Math.abs(lastWindowWidth - window.innerWidth) > MIN_RESIZE_NEED_PIXEL) {
	            lastWindowWidth = window.innerWidth;
	            var i = resizeJob.length;
	            while (i--) {
	                resizeJob[i]();
	            }
	        }
	    };

	    /**
	     * convert rem value to pixel value
	     */
	    out.calculatePixel = function (remValue) {
	        return parseInt(remValue * window.innerWidth / converFactor, 10);
	    };

	    /**
	     * convert rem value to pixel value
	     */
	    out.calculateRem = function (pxValue) {
	        return pxValue * converFactor / window.innerWidth;
	    };

	    rem();

	    return out;
	}));

/***/ }
/******/ ]);