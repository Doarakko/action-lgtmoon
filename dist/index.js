require('./sourcemap-register.js');/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 846:
/***/ ((module) => {

module.exports = eval("require")("@actions/core");


/***/ }),

/***/ 696:
/***/ ((module) => {

module.exports = eval("require")("@actions/github");


/***/ }),

/***/ 802:
/***/ ((module) => {

module.exports = eval("require")("@octokit/core");


/***/ }),

/***/ 984:
/***/ ((module) => {

module.exports = eval("require")("node-fetch");


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __nccwpck_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			__webpack_modules__[moduleId](module, module.exports, __nccwpck_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete __webpack_module_cache__[moduleId];
/******/ 		}
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__nccwpck_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__nccwpck_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__nccwpck_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__nccwpck_require__.o(definition, key) && !__nccwpck_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__nccwpck_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__nccwpck_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat */
/******/ 	
/******/ 	if (typeof __nccwpck_require__ !== 'undefined') __nccwpck_require__.ab = __dirname + "/";
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
__nccwpck_require__.r(__webpack_exports__);
/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_0__ = __nccwpck_require__(984);
/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nccwpck_require__.n(node_fetch__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _actions_core__WEBPACK_IMPORTED_MODULE_1__ = __nccwpck_require__(846);
/* harmony import */ var _actions_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__nccwpck_require__.n(_actions_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _actions_github__WEBPACK_IMPORTED_MODULE_2__ = __nccwpck_require__(696);
/* harmony import */ var _actions_github__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__nccwpck_require__.n(_actions_github__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _octokit_core__WEBPACK_IMPORTED_MODULE_3__ = __nccwpck_require__(802);
/* harmony import */ var _octokit_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__nccwpck_require__.n(_octokit_core__WEBPACK_IMPORTED_MODULE_3__);






async function run() {
  try {
    const githubToken = (0,_actions_core__WEBPACK_IMPORTED_MODULE_1__.getInput)("github-token");
    const octokit = new _octokit_core__WEBPACK_IMPORTED_MODULE_3__.Octokit({ auth: githubToken });

    switch (_actions_github__WEBPACK_IMPORTED_MODULE_2__.context.eventName) {
      case "issue_comment":
        if(!(_actions_github__WEBPACK_IMPORTED_MODULE_2__.context.payload.comment.body || '').match(/lgtm/)){
          _actions_core__WEBPACK_IMPORTED_MODULE_1__.debug("nothing to do.");
          return;
        }
        break;
      case "pull_request_review":
        if(!(_actions_github__WEBPACK_IMPORTED_MODULE_2__.context.payload.review.body || '').match(/lgtm/) && _actions_github__WEBPACK_IMPORTED_MODULE_2__.context.payload.review.state !== "approved"){
          _actions_core__WEBPACK_IMPORTED_MODULE_1__.debug("nothing to do.");
          return;
        }
        break;
      case "pull_request_review_comment":
        if(!(_actions_github__WEBPACK_IMPORTED_MODULE_2__.context.payload.comment.body || '').match(/lgtm/)){
          _actions_core__WEBPACK_IMPORTED_MODULE_1__.debug("nothing to do.");
          return;
        }
        break;
      default:
        _actions_core__WEBPACK_IMPORTED_MODULE_1__.debug("nothing to do.");
        return;
    }

    node_fetch__WEBPACK_IMPORTED_MODULE_0___default()("https://lgtmoon.herokuapp.com/api/images/random")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const imageUrl = data.images[0].url;

        if (_actions_github__WEBPACK_IMPORTED_MODULE_2__.context.eventName === "issue_comment" || _actions_github__WEBPACK_IMPORTED_MODULE_2__.context.eventName === "pull_request_review") {
          octokit.request(
            "POST /repos/{owner}/{repo}/issues/{issue_number}/comments",
            {
              issue_number: _actions_github__WEBPACK_IMPORTED_MODULE_2__.context.issue.number,
              owner: _actions_github__WEBPACK_IMPORTED_MODULE_2__.context.repo.owner,
              repo: _actions_github__WEBPACK_IMPORTED_MODULE_2__.context.repo.repo,
              body: `![](${imageUrl})`,
            }
          );
        } else if (_actions_github__WEBPACK_IMPORTED_MODULE_2__.context.eventName === "pull_request_review_comment") {
          octokit.request(
            "POST /repos/{owner}/{repo}/pulls/{pull_number}/comments/{comment_id}/replies",
            {
              owner: _actions_github__WEBPACK_IMPORTED_MODULE_2__.context.repo.owner,
              repo: _actions_github__WEBPACK_IMPORTED_MODULE_2__.context.repo.repo,
              body: `![](${imageUrl})`,
              pull_number: _actions_github__WEBPACK_IMPORTED_MODULE_2__.context.payload.pull_request.number,
              comment_id: _actions_github__WEBPACK_IMPORTED_MODULE_2__.context.payload.comment.id,
            }
          );
        }
      });
  } catch (error) {
    (0,_actions_core__WEBPACK_IMPORTED_MODULE_1__.setFailed)(error.message);
  }
}

run();

})();

module.exports = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=index.js.map