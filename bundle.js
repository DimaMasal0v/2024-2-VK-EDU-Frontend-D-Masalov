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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var messageList = document.getElementById('messageList');\nvar messageInput = document.getElementById('messageInput');\nvar sendMessageButton = document.getElementById('sendMessageButton');\nvar moreIcon = document.querySelector('.more-icon');\nvar dropdownMenu = document.getElementById('dropdownMenu');\n\n// Загружаем сообщения из localStorage\nvar loadMessages = function loadMessages() {\n  var messages = JSON.parse(localStorage.getItem('messages') || '[]');\n  messages.forEach(addMessageToList);\n};\n\n// Сохраненяем сообщение в localStorage\nvar saveMessage = function saveMessage(text, type) {\n  var messages = JSON.parse(localStorage.getItem('messages') || '[]');\n  messages.push({\n    text: text,\n    type: type,\n    time: new Date().toLocaleTimeString()\n  });\n  localStorage.setItem('messages', JSON.stringify(messages));\n};\n\n// Добавляем сообщение в список\nvar addMessageToList = function addMessageToList(_ref) {\n  var text = _ref.text,\n    type = _ref.type,\n    time = _ref.time;\n  var messageItem = document.createElement('div');\n  messageItem.className = \"message-item \".concat(type);\n  messageItem.textContent = \"[\".concat(time, \"] \").concat(text);\n  messageList.appendChild(messageItem);\n  messageList.scrollTop = messageList.scrollHeight; // Прокрутка вниз\n};\n\n// Обработчик отправки сообщения\nvar sendMessage = function sendMessage() {\n  var messageText = messageInput.value.trim();\n  if (messageText) {\n    var messageType = 'sent';\n    addMessageToList({\n      text: messageText,\n      type: messageType,\n      time: new Date().toLocaleTimeString()\n    });\n    saveMessage(messageText, messageType);\n    messageInput.value = '';\n  }\n};\n\n// Показ/скрытие выпадающего меню\nmoreIcon.addEventListener('click', function () {\n  dropdownMenu.classList.toggle('show');\n});\n\n// Закрытие выпадающего меню при клике вне его\nwindow.addEventListener('click', function (e) {\n  if (!e.target.closest('.more-icon') && !e.target.closest('.dropdown-menu')) {\n    dropdownMenu.classList.remove('show');\n  }\n});\n\n// События\nsendMessageButton.addEventListener('click', sendMessage);\nmessageInput.addEventListener('keypress', function (e) {\n  if (e.key === 'Enter') {\n    sendMessage();\n  }\n});\n\n// Инициализация\nloadMessages();\n\n//# sourceURL=webpack:///./index.js?");

/***/ })

/******/ });