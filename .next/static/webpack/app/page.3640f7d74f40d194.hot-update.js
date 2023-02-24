"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-client)/./app/page.tsx":
/*!**********************!*\
  !*** ./app/page.tsx ***!
  \**********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nfunction Home() {\n    _s();\n    const startGame = ()=>{\n        setGameStarted(true);\n        console.log(\"Game Started\");\n    };\n    const stopGame = ()=>{\n        setGameStarted(false);\n        console.log(\"Game Stopped\");\n    };\n    const [gameStarted, setGameStarted] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [selectedNumber, setSelectedNumber] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [dicedNumber, setDicedNumber] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [score, setScore] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const selectNumberHandler = (v)=>{\n        setSelectedNumber(v);\n        console.log(v);\n    };\n    const genRandomNumber = ()=>{\n        if (selectedNumber) {\n            const rNum = Math.ceil(Math.random() * 6);\n            console.log(rNum);\n            setDicedNumber(rNum);\n            if (rNum === selectedNumber) {\n                setScore(score + 10);\n            } else {\n                setScore(score - 2);\n            }\n        } else {\n            setError(\"Please Select a Number\");\n        }\n    };\n    const numbers = [\n        1,\n        2,\n        3,\n        4,\n        5,\n        6\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: gameStarted ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex justify-center text-green-900 text-6xl font-bold mt-5\",\n                    children: \"Select Number\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\NEXT\\\\DiceGame\\\\gameapp\\\\app\\\\page.tsx\",\n                    lineNumber: 54,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex justify-center gap-12 mt-14\",\n                    children: numbers.map((value)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            onClick: ()=>selectNumberHandler(value),\n                            className: \" cursor-pointer flex justify-center items-center w-12 h-12 \".concat(selectedNumber === value ? \"bg-blue-900\" : \"bg-black\", \" text-white text-center rounded-lg\"),\n                            children: value\n                        }, value, false, {\n                            fileName: \"C:\\\\NEXT\\\\DiceGame\\\\gameapp\\\\app\\\\page.tsx\",\n                            lineNumber: 58,\n                            columnNumber: 15\n                        }, this))\n                }, void 0, false, {\n                    fileName: \"C:\\\\NEXT\\\\DiceGame\\\\gameapp\\\\app\\\\page.tsx\",\n                    lineNumber: 55,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex justify-center cursor-pointer mt-10\",\n                    onClick: genRandomNumber,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        className: \"w-[100px] h-[100px]\",\n                        src: \"dice/dice\".concat(dicedNumber, \".png\")\n                    }, void 0, false, {\n                        fileName: \"C:\\\\NEXT\\\\DiceGame\\\\gameapp\\\\app\\\\page.tsx\",\n                        lineNumber: 62,\n                        columnNumber: 96\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\NEXT\\\\DiceGame\\\\gameapp\\\\app\\\\page.tsx\",\n                    lineNumber: 62,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex justify-center\",\n                    children: \"Click on Dice to Roll\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\NEXT\\\\DiceGame\\\\gameapp\\\\app\\\\page.tsx\",\n                    lineNumber: 63,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"text-red-900 font-bold text-9xl flex justify-center\",\n                    children: score\n                }, void 0, false, {\n                    fileName: \"C:\\\\NEXT\\\\DiceGame\\\\gameapp\\\\app\\\\page.tsx\",\n                    lineNumber: 64,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mt-5 text-5xl font-bold flex justify-center\",\n                    children: \"Total Score\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\NEXT\\\\DiceGame\\\\gameapp\\\\app\\\\page.tsx\",\n                    lineNumber: 65,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex justify-center\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"mt-9 text-3xl font-bold bg-blue-900 text-white rounded-lg p-4\",\n                        onClick: ()=>setScore(0),\n                        children: \"Reset Score\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\NEXT\\\\DiceGame\\\\gameapp\\\\app\\\\page.tsx\",\n                        lineNumber: 67,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\NEXT\\\\DiceGame\\\\gameapp\\\\app\\\\page.tsx\",\n                    lineNumber: 66,\n                    columnNumber: 11\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\NEXT\\\\DiceGame\\\\gameapp\\\\app\\\\page.tsx\",\n            lineNumber: 53,\n            columnNumber: 7\n        }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex flex-col\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: \"dice/dices.png\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\NEXT\\\\DiceGame\\\\gameapp\\\\app\\\\page.tsx\",\n                        lineNumber: 74,\n                        columnNumber: 13\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\NEXT\\\\DiceGame\\\\gameapp\\\\app\\\\page.tsx\",\n                    lineNumber: 73,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-col justify-center \",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: \"text-[60px] font-bold\",\n                                children: \"The Dice Game\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\NEXT\\\\DiceGame\\\\gameapp\\\\app\\\\page.tsx\",\n                                lineNumber: 77,\n                                columnNumber: 19\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\NEXT\\\\DiceGame\\\\gameapp\\\\app\\\\page.tsx\",\n                            lineNumber: 77,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"bg-blue-800 p-2 text-white rounded-lg\",\n                                onClick: startGame,\n                                children: \"Start Game\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\NEXT\\\\DiceGame\\\\gameapp\\\\app\\\\page.tsx\",\n                                lineNumber: 78,\n                                columnNumber: 18\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\NEXT\\\\DiceGame\\\\gameapp\\\\app\\\\page.tsx\",\n                            lineNumber: 78,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\NEXT\\\\DiceGame\\\\gameapp\\\\app\\\\page.tsx\",\n                    lineNumber: 76,\n                    columnNumber: 11\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\NEXT\\\\DiceGame\\\\gameapp\\\\app\\\\page.tsx\",\n            lineNumber: 72,\n            columnNumber: 8\n        }, this)\n    }, void 0, false);\n}\n_s(Home, \"Iy/yCOrQ+YTnUW6exHyaN1cD3z8=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vYXBwL3BhZ2UudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNxQztBQUd0QixTQUFTQyxPQUFPOztJQUM3QixNQUFNQyxZQUFZLElBQUk7UUFDbEJDLGVBQWUsSUFBSTtRQUNuQkMsUUFBUUMsR0FBRyxDQUFDO0lBQ2hCO0lBRUEsTUFBTUMsV0FBVyxJQUFJO1FBQ25CSCxlQUFlLEtBQUs7UUFDcEJDLFFBQVFDLEdBQUcsQ0FBQztJQUNkO0lBRUEsTUFBTSxDQUFDRSxhQUFhSixlQUFlLEdBQUdILCtDQUFRQSxDQUFDLEtBQUs7SUFDcEQsTUFBTSxDQUFDUSxnQkFBZ0JDLGtCQUFrQixHQUFHVCwrQ0FBUUEsQ0FBQztJQUNyRCxNQUFNLENBQUNVLGFBQWFDLGVBQWUsR0FBR1gsK0NBQVFBLENBQUM7SUFDL0MsTUFBTSxDQUFDWSxPQUFPQyxTQUFTLEdBQUdiLCtDQUFRQSxDQUFDO0lBQ25DLE1BQU0sQ0FBQ2MsT0FBT0MsU0FBUyxHQUFHZiwrQ0FBUUEsQ0FBQztJQUluQyxNQUFNZ0Isc0JBQXNCLENBQUNDLElBQVc7UUFDdENSLGtCQUFrQlE7UUFDbEJiLFFBQVFDLEdBQUcsQ0FBQ1k7SUFDZDtJQUVBLE1BQU1DLGtCQUFrQixJQUFJO1FBQzFCLElBQUlWLGdCQUFlO1lBQ25CLE1BQU1XLE9BQU9DLEtBQUtDLElBQUksQ0FBQ0QsS0FBS0UsTUFBTSxLQUFLO1lBQ3ZDbEIsUUFBUUMsR0FBRyxDQUFDYztZQUNaUixlQUFlUTtZQUNmLElBQUlBLFNBQVNYLGdCQUNiO2dCQUNFTyxTQUFTRCxRQUFRO1lBQ25CLE9BQ0E7Z0JBQ0VDLFNBQVNELFFBQVE7WUFDbkIsQ0FBQztRQUNILE9BQ0U7WUFDRUQsU0FBUztRQUNYLENBQUM7SUFDSDtJQUdBLE1BQU1VLFVBQVU7UUFBQztRQUFFO1FBQUU7UUFBRTtRQUFFO1FBQUU7S0FBRTtJQUM3QixxQkFDSTtrQkFDRWhCLDRCQUVGLDhEQUFDaUI7OzhCQUNHLDhEQUFDQTtvQkFBSUMsV0FBVTs4QkFBNkQ7Ozs7Ozs4QkFDNUUsOERBQUNEO29CQUFJQyxXQUFVOzhCQUNaRixRQUFRRyxHQUFHLENBQUNDLENBQUFBLHNCQUVYLDhEQUFDSDs0QkFBS0ksU0FBUyxJQUFJWixvQkFBb0JXOzRCQUFvQkYsV0FBVyw4REFBaUgsT0FBbkRqQixtQkFBaUJtQixRQUFRLGdCQUFlLFVBQVUsRUFBQztzQ0FBdUNBOzJCQUExS0E7Ozs7Ozs7Ozs7OEJBSXhELDhEQUFDSDtvQkFBSUMsV0FBVTtvQkFBNENHLFNBQVNWOzhCQUFpQiw0RUFBQ1c7d0JBQUlKLFdBQVU7d0JBQXNCSyxLQUFLLFlBQXdCLE9BQVpwQixhQUFZOzs7Ozs7Ozs7Ozs4QkFDdkosOERBQUNjO29CQUFJQyxXQUFVOzhCQUFzQjs7Ozs7OzhCQUNyQyw4REFBQ0Q7b0JBQUlDLFdBQVU7OEJBQXVEWDs7Ozs7OzhCQUN0RSw4REFBQ1U7b0JBQUlDLFdBQVU7OEJBQThDOzs7Ozs7OEJBQzdELDhEQUFDRDtvQkFBSUMsV0FBVTs4QkFDZiw0RUFBQ007d0JBQU9OLFdBQVU7d0JBQWdFRyxTQUFTLElBQUliLFNBQVM7a0NBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7aUNBSy9HLDhEQUFDUztZQUFJQyxXQUFVOzs4QkFDWiw4REFBQ0Q7b0JBQUlDLFdBQVU7OEJBQ2IsNEVBQUNJO3dCQUFJQyxLQUFJOzs7Ozs7Ozs7Ozs4QkFFWCw4REFBQ047b0JBQUlDLFdBQVU7O3NDQUNiLDhEQUFDRDtzQ0FBSyw0RUFBQ1E7Z0NBQUdQLFdBQVU7MENBQXdCOzs7Ozs7Ozs7OztzQ0FDNUMsOERBQUNEO3NDQUFJLDRFQUFDTztnQ0FBUU4sV0FBVTtnQ0FBd0NHLFNBQVMxQjswQ0FBVzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztnQkFFakY7O0FBTWYsQ0FBQztHQWpGdUJEO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9wYWdlLnRzeD83NjAzIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xuaW1wb3J0IHsgdXNlLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IHN0YXJ0R2FtZSA9ICgpPT57XG4gICAgICBzZXRHYW1lU3RhcnRlZCh0cnVlKVxuICAgICAgY29uc29sZS5sb2coXCJHYW1lIFN0YXJ0ZWRcIilcbiAgfVxuXG4gIGNvbnN0IHN0b3BHYW1lID0gKCk9PntcbiAgICBzZXRHYW1lU3RhcnRlZChmYWxzZSlcbiAgICBjb25zb2xlLmxvZyhcIkdhbWUgU3RvcHBlZFwiKVxuICB9XG5cbiAgY29uc3QgW2dhbWVTdGFydGVkLCBzZXRHYW1lU3RhcnRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtzZWxlY3RlZE51bWJlciwgc2V0U2VsZWN0ZWROdW1iZXJdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFtkaWNlZE51bWJlciwgc2V0RGljZWROdW1iZXJdID0gdXNlU3RhdGUoMSk7XG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbc2NvcmUsIHNldFNjb3JlXSA9IHVzZVN0YXRlKDApO1xuXG4gIFxuXG4gIGNvbnN0IHNlbGVjdE51bWJlckhhbmRsZXIgPSAodjpudW1iZXIpPT57XG4gICAgc2V0U2VsZWN0ZWROdW1iZXIodik7XG4gICAgY29uc29sZS5sb2codik7XG4gIH1cblxuICBjb25zdCBnZW5SYW5kb21OdW1iZXIgPSAoKT0+e1xuICAgIGlmIChzZWxlY3RlZE51bWJlcil7XG4gICAgY29uc3Qgck51bSA9IE1hdGguY2VpbChNYXRoLnJhbmRvbSgpICogNilcbiAgICBjb25zb2xlLmxvZyhyTnVtKTtcbiAgICBzZXREaWNlZE51bWJlcihyTnVtKTtcbiAgICBpZiAock51bSA9PT0gc2VsZWN0ZWROdW1iZXIpXG4gICAge1xuICAgICAgc2V0U2NvcmUoc2NvcmUgKyAxMClcbiAgICB9ZWxzZVxuICAgIHtcbiAgICAgIHNldFNjb3JlKHNjb3JlIC0gMilcbiAgICB9XG4gIH1lbHNlXG4gICAge1xuICAgICAgc2V0RXJyb3IoXCJQbGVhc2UgU2VsZWN0IGEgTnVtYmVyXCIpXG4gICAgfVxuICB9XG5cblxuICBjb25zdCBudW1iZXJzID0gWzEsMiwzLDQsNSw2XVxuICByZXR1cm4gKFxuICAgICAgPD5cbiAgICAgIHsgZ2FtZVN0YXJ0ZWQgPyBcbiAgICAgIChcbiAgICAgIDxkaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXgganVzdGlmeS1jZW50ZXIgdGV4dC1ncmVlbi05MDAgdGV4dC02eGwgZm9udC1ib2xkIG10LTUnPlNlbGVjdCBOdW1iZXI8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBqdXN0aWZ5LWNlbnRlciBnYXAtMTIgbXQtMTQnPlxuICAgICAgICAgICAge251bWJlcnMubWFwKHZhbHVlPT4oICAgICAgICAgICAgXG5cbiAgICAgICAgICAgICAgPGRpdiAgb25DbGljaz17KCk9PnNlbGVjdE51bWJlckhhbmRsZXIodmFsdWUpfSBrZXk9e3ZhbHVlfSBjbGFzc05hbWU9e2AgY3Vyc29yLXBvaW50ZXIgZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgdy0xMiBoLTEyICR7c2VsZWN0ZWROdW1iZXI9PT12YWx1ZSA/ICdiZy1ibHVlLTkwMCc6ICdiZy1ibGFjayd9IHRleHQtd2hpdGUgdGV4dC1jZW50ZXIgcm91bmRlZC1sZ2B9ID57dmFsdWV9PC9kaXY+XG4gICAgICAgICAgICApKVxuICAgICAgICAgIH1cbiAgICAgICAgICA8L2Rpdj4gXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXgganVzdGlmeS1jZW50ZXIgY3Vyc29yLXBvaW50ZXIgIG10LTEwJyBvbkNsaWNrPXtnZW5SYW5kb21OdW1iZXJ9PjxpbWcgY2xhc3NOYW1lPSd3LVsxMDBweF0gaC1bMTAwcHhdJyBzcmM9e2BkaWNlL2RpY2Uke2RpY2VkTnVtYmVyfS5wbmdgfS8+PC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXgganVzdGlmeS1jZW50ZXInPkNsaWNrIG9uIERpY2UgdG8gUm9sbDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1yZWQtOTAwIGZvbnQtYm9sZCB0ZXh0LTl4bCBmbGV4IGp1c3RpZnktY2VudGVyXCI+e3Njb3JlfTwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtdC01IHRleHQtNXhsIGZvbnQtYm9sZCBmbGV4IGp1c3RpZnktY2VudGVyJz5Ub3RhbCBTY29yZTwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGp1c3RpZnktY2VudGVyJz5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nbXQtOSB0ZXh0LTN4bCBmb250LWJvbGQgYmctYmx1ZS05MDAgdGV4dC13aGl0ZSByb3VuZGVkLWxnIHAtNCcgb25DbGljaz17KCk9PnNldFNjb3JlKDApfT5SZXNldCBTY29yZTwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+ICBcbiAgICAgICkgXG4gICAgICA6IFxuICAgICAgKDxkaXYgY2xhc3NOYW1lPSdmbGV4IGZsZXgtY29sJz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nJyA+XG4gICAgICAgICAgICA8aW1nIHNyYz0nZGljZS9kaWNlcy5wbmcnPjwvaW1nPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyICc+XG4gICAgICAgICAgICA8ZGl2ID48aDEgY2xhc3NOYW1lPSd0ZXh0LVs2MHB4XSBmb250LWJvbGQnPlRoZSBEaWNlIEdhbWU8L2gxPjwvZGl2PlxuICAgICAgICAgICAgPGRpdj48YnV0dG9uICBjbGFzc05hbWU9J2JnLWJsdWUtODAwIHAtMiB0ZXh0LXdoaXRlIHJvdW5kZWQtbGcnIG9uQ2xpY2s9e3N0YXJ0R2FtZX0+U3RhcnQgR2FtZTwvYnV0dG9uPjwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj4pXG4gICAgICAgIFxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgPC8+XG4gIClcbn1cbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIkhvbWUiLCJzdGFydEdhbWUiLCJzZXRHYW1lU3RhcnRlZCIsImNvbnNvbGUiLCJsb2ciLCJzdG9wR2FtZSIsImdhbWVTdGFydGVkIiwic2VsZWN0ZWROdW1iZXIiLCJzZXRTZWxlY3RlZE51bWJlciIsImRpY2VkTnVtYmVyIiwic2V0RGljZWROdW1iZXIiLCJlcnJvciIsInNldEVycm9yIiwic2NvcmUiLCJzZXRTY29yZSIsInNlbGVjdE51bWJlckhhbmRsZXIiLCJ2IiwiZ2VuUmFuZG9tTnVtYmVyIiwick51bSIsIk1hdGgiLCJjZWlsIiwicmFuZG9tIiwibnVtYmVycyIsImRpdiIsImNsYXNzTmFtZSIsIm1hcCIsInZhbHVlIiwib25DbGljayIsImltZyIsInNyYyIsImJ1dHRvbiIsImgxIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./app/page.tsx\n"));

/***/ })

});