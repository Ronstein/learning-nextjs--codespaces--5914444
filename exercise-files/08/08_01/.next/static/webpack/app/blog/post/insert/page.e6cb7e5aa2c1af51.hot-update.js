"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/blog/post/insert/page",{

/***/ "(app-pages-browser)/./src/app/blog/post/insert/page.tsx":
/*!*******************************************!*\
  !*** ./src/app/blog/post/insert/page.tsx ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Page; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! uuid */ \"(app-pages-browser)/./node_modules/uuid/dist/esm-browser/v4.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-auth/react */ \"(app-pages-browser)/./node_modules/next-auth/react.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nfunction Page() {\n    _s();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const PROMPT = \"You are a creative blog writer. write a 50-word blog post about the title below. You can write anything you want, but it must be at least 50 words long. The title is: \";\n    const [generating, setGenerating] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [content, setContent] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [formData, setFormData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        id: \"\",\n        title: \"\",\n        content: \"\",\n        date: new Date().toISOString().slice(0, 10)\n    });\n    const handleChange = (e)=>{\n        const { name, value } = e.target;\n        setFormData((prevData)=>({\n                ...prevData,\n                [name]: value\n            }));\n    };\n    const handleSubmit = (e)=>{\n        e.preventDefault();\n        const uuid = (0,uuid__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n        fetch(\"/api/posts?id=\".concat(uuid, \"&title=\").concat(formData.title, \"&author=\").concat(user === null || user === void 0 ? void 0 : user.name, \"&content=\").concat(formData.content, \"&date=\").concat(formData.date), {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify({\n                ...formData,\n                id: uuid\n            })\n        }).then(()=>{\n            // Clear form fields\n            setFormData({\n                id: \"\",\n                title: \"\",\n                content: \"\",\n                date: \"\"\n            });\n            router.push(\"/blog/posts\");\n        }).catch(console.error);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        console.log(\"API KEY\", \"sk-proj-YQ8G1bIx5Oh0Lx53gTZUT3BlbkFJpDvCHsWUfSrVYdmhySto\");\n        (0,next_auth_react__WEBPACK_IMPORTED_MODULE_3__.getSession)().then((session)=>{\n            setUser((session === null || session === void 0 ? void 0 : session.user) || null);\n            if (!(session === null || session === void 0 ? void 0 : session.user)) {\n                router.push(\"/blog/posts\");\n            }\n        });\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-white p-8 rounded shadow\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"text-2xl mb-4 text-purple-700\",\n                children: \"New Blog Post\"\n            }, void 0, false, {\n                fileName: \"/Users/sandramada/Desktop/learning-nextjs--codespaces--5914444/exercise-files/08/08_01/src/app/blog/post/insert/page.tsx\",\n                lineNumber: 62,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: handleSubmit,\n                className: \"space-y-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"title\",\n                                className: \"block font-medium\",\n                                children: \"Title:\"\n                            }, void 0, false, {\n                                fileName: \"/Users/sandramada/Desktop/learning-nextjs--codespaces--5914444/exercise-files/08/08_01/src/app/blog/post/insert/page.tsx\",\n                                lineNumber: 66,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                id: \"title\",\n                                name: \"title\",\n                                value: formData.title,\n                                onChange: handleChange,\n                                className: \"w-full border-2 border-purple-100 p-2 rounded-md focus:border-purple-200 focus:outline-none\"\n                            }, void 0, false, {\n                                fileName: \"/Users/sandramada/Desktop/learning-nextjs--codespaces--5914444/exercise-files/08/08_01/src/app/blog/post/insert/page.tsx\",\n                                lineNumber: 67,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/sandramada/Desktop/learning-nextjs--codespaces--5914444/exercise-files/08/08_01/src/app/blog/post/insert/page.tsx\",\n                        lineNumber: 65,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"content\",\n                                className: \"block font-medium\",\n                                children: \"Content:\"\n                            }, void 0, false, {\n                                fileName: \"/Users/sandramada/Desktop/learning-nextjs--codespaces--5914444/exercise-files/08/08_01/src/app/blog/post/insert/page.tsx\",\n                                lineNumber: 70,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                                id: \"content\",\n                                name: \"content\",\n                                rows: \"4\",\n                                value: formData.content,\n                                onChange: handleChange,\n                                className: \"w-full border-2 border-purple-100 p-2 rounded-md focus:border-purple-200 focus:outline-none\"\n                            }, void 0, false, {\n                                fileName: \"/Users/sandramada/Desktop/learning-nextjs--codespaces--5914444/exercise-files/08/08_01/src/app/blog/post/insert/page.tsx\",\n                                lineNumber: 71,\n                                columnNumber: 11\n                            }, this),\n                            generating && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-purple-700 my-1\",\n                                children: \"Generating content...\"\n                            }, void 0, false, {\n                                fileName: \"/Users/sandramada/Desktop/learning-nextjs--codespaces--5914444/exercise-files/08/08_01/src/app/blog/post/insert/page.tsx\",\n                                lineNumber: 72,\n                                columnNumber: 26\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/sandramada/Desktop/learning-nextjs--codespaces--5914444/exercise-files/08/08_01/src/app/blog/post/insert/page.tsx\",\n                        lineNumber: 69,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"date\",\n                                className: \"block font-medium\",\n                                children: \"Date:\"\n                            }, void 0, false, {\n                                fileName: \"/Users/sandramada/Desktop/learning-nextjs--codespaces--5914444/exercise-files/08/08_01/src/app/blog/post/insert/page.tsx\",\n                                lineNumber: 75,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                id: \"date\",\n                                name: \"date\",\n                                value: formData.date,\n                                readOnly: true,\n                                className: \"w-full border-2 border-purple-100 p-2 rounded-md focus:border-purple-200 focus:outline-none\"\n                            }, void 0, false, {\n                                fileName: \"/Users/sandramada/Desktop/learning-nextjs--codespaces--5914444/exercise-files/08/08_01/src/app/blog/post/insert/page.tsx\",\n                                lineNumber: 76,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/sandramada/Desktop/learning-nextjs--codespaces--5914444/exercise-files/08/08_01/src/app/blog/post/insert/page.tsx\",\n                        lineNumber: 74,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            type: \"submit\",\n                            className: \"bg-blue-400 text-white px-4 py-2 rounded-md bg-purple-600  hover:bg-purple-700\",\n                            children: \"Submit\"\n                        }, void 0, false, {\n                            fileName: \"/Users/sandramada/Desktop/learning-nextjs--codespaces--5914444/exercise-files/08/08_01/src/app/blog/post/insert/page.tsx\",\n                            lineNumber: 80,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/sandramada/Desktop/learning-nextjs--codespaces--5914444/exercise-files/08/08_01/src/app/blog/post/insert/page.tsx\",\n                        lineNumber: 79,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/sandramada/Desktop/learning-nextjs--codespaces--5914444/exercise-files/08/08_01/src/app/blog/post/insert/page.tsx\",\n                lineNumber: 63,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/sandramada/Desktop/learning-nextjs--codespaces--5914444/exercise-files/08/08_01/src/app/blog/post/insert/page.tsx\",\n        lineNumber: 61,\n        columnNumber: 5\n    }, this);\n}\n_s(Page, \"QKP61KikVaGkHoZMxBBtfdd5MwY=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Page;\nvar _c;\n$RefreshReg$(_c, \"Page\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvYmxvZy9wb3N0L2luc2VydC9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFDb0M7QUFDYTtBQUNOO0FBRUU7QUFFOUIsU0FBU007O0lBQ3RCLE1BQU1DLFNBQVNILDBEQUFTQTtJQUN4QixNQUFNSSxTQUFTO0lBQ2YsTUFBTSxDQUFDQyxZQUFZQyxjQUFjLEdBQUdSLCtDQUFRQSxDQUFDO0lBQzdDLE1BQU0sQ0FBQ1MsU0FBU0MsV0FBVyxHQUFHViwrQ0FBUUEsQ0FBQztJQUN2QyxNQUFNLENBQUNXLE1BQU1DLFFBQVEsR0FBR1osK0NBQVFBLENBQWM7SUFDOUMsTUFBTSxDQUFDYSxVQUFVQyxZQUFZLEdBQUdkLCtDQUFRQSxDQUFDO1FBQ3ZDZSxJQUFJO1FBQ0pDLE9BQU87UUFDUFAsU0FBUztRQUNUUSxNQUFNLElBQUlDLE9BQU9DLFdBQVcsR0FBR0MsS0FBSyxDQUFDLEdBQUc7SUFDMUM7SUFFQSxNQUFNQyxlQUFlLENBQUNDO1FBQ3BCLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxLQUFLLEVBQUUsR0FBR0YsRUFBRUcsTUFBTTtRQUNoQ1gsWUFBWVksQ0FBQUEsV0FBYTtnQkFDdkIsR0FBR0EsUUFBUTtnQkFDWCxDQUFDSCxLQUFLLEVBQUVDO1lBQ1Y7SUFDRjtJQUVBLE1BQU1HLGVBQWUsQ0FBQ0w7UUFDcEJBLEVBQUVNLGNBQWM7UUFDaEIsTUFBTUMsT0FBTzlCLGdEQUFNQTtRQUNuQitCLE1BQU0saUJBQStCakIsT0FBZGdCLE1BQUssa0JBQVNoQixTQUFTRyxLQUFLLEVBQUMsWUFBZ0NILE9BQXRCRixpQkFBQUEsMkJBQUFBLEtBQU1ZLElBQUksRUFBQyxhQUFvQ1YsT0FBekJBLFNBQVNKLE9BQU8sRUFBQyxVQUFzQixPQUFkSSxTQUFTSSxJQUFJLEdBQUk7WUFDNUhjLFFBQVE7WUFDUkMsU0FBUztnQkFDUCxnQkFBZ0I7WUFDbEI7WUFDQUMsTUFBTUMsS0FBS0MsU0FBUyxDQUFDO2dCQUFFLEdBQUd0QixRQUFRO2dCQUFFRSxJQUFJYztZQUFLO1FBQy9DLEdBQUdPLElBQUksQ0FBQztZQUNOLG9CQUFvQjtZQUNwQnRCLFlBQVk7Z0JBQ1ZDLElBQUk7Z0JBQ0pDLE9BQU87Z0JBQ1BQLFNBQVM7Z0JBQ1RRLE1BQU07WUFDUjtZQUNBWixPQUFPZ0MsSUFBSSxDQUFDO1FBQ2QsR0FBR0MsS0FBSyxDQUFDQyxRQUFRQyxLQUFLO0lBQ3hCO0lBRUF2QyxnREFBU0EsQ0FBQztRQUNSc0MsUUFBUUUsR0FBRyxDQUFDLFdBQVdDLDBEQUEwQjtRQUNqRHZDLDJEQUFVQSxHQUFHaUMsSUFBSSxDQUFDLENBQUNTO1lBQ2pCakMsUUFBUWlDLENBQUFBLG9CQUFBQSw4QkFBQUEsUUFBU2xDLElBQUksS0FBSTtZQUN6QixJQUFJLEVBQUNrQyxvQkFBQUEsOEJBQUFBLFFBQVNsQyxJQUFJLEdBQUU7Z0JBQ2xCTixPQUFPZ0MsSUFBSSxDQUFDO1lBQ2Q7UUFDRjtJQUNGLEdBQUcsRUFBRTtJQUVMLHFCQUNFLDhEQUFDUztRQUFJQyxXQUFVOzswQkFDYiw4REFBQ0M7Z0JBQUdELFdBQVU7MEJBQWdDOzs7Ozs7MEJBQzlDLDhEQUFDRTtnQkFBS0MsVUFBVXZCO2dCQUFjb0IsV0FBVTs7a0NBRXRDLDhEQUFDRDs7MENBQ0MsOERBQUNLO2dDQUFNQyxTQUFRO2dDQUFRTCxXQUFVOzBDQUFvQjs7Ozs7OzBDQUNyRCw4REFBQ007Z0NBQU1DLE1BQUs7Z0NBQU92QyxJQUFHO2dDQUFRUSxNQUFLO2dDQUFRQyxPQUFPWCxTQUFTRyxLQUFLO2dDQUFFdUMsVUFBVWxDO2dDQUFjMEIsV0FBVTs7Ozs7Ozs7Ozs7O2tDQUV0Ryw4REFBQ0Q7OzBDQUNDLDhEQUFDSztnQ0FBTUMsU0FBUTtnQ0FBVUwsV0FBVTswQ0FBb0I7Ozs7OzswQ0FDdkQsOERBQUNTO2dDQUFTekMsSUFBRztnQ0FBVVEsTUFBSztnQ0FBVWtDLE1BQUs7Z0NBQUlqQyxPQUFPWCxTQUFTSixPQUFPO2dDQUFFOEMsVUFBVWxDO2dDQUFjMEIsV0FBVTs7Ozs7OzRCQUN6R3hDLDRCQUFjLDhEQUFDbUQ7Z0NBQUVYLFdBQVU7MENBQXVCOzs7Ozs7Ozs7Ozs7a0NBRXJELDhEQUFDRDs7MENBQ0MsOERBQUNLO2dDQUFNQyxTQUFRO2dDQUFPTCxXQUFVOzBDQUFvQjs7Ozs7OzBDQUNwRCw4REFBQ007Z0NBQU1DLE1BQUs7Z0NBQU92QyxJQUFHO2dDQUFPUSxNQUFLO2dDQUFPQyxPQUFPWCxTQUFTSSxJQUFJO2dDQUFFMEMsUUFBUTtnQ0FBQ1osV0FBVTs7Ozs7Ozs7Ozs7O2tDQUdwRiw4REFBQ0Q7a0NBQ0MsNEVBQUNjOzRCQUFPTixNQUFLOzRCQUFTUCxXQUFVO3NDQUFpRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLM0g7R0E3RXdCM0M7O1FBQ1BGLHNEQUFTQTs7O0tBREZFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvYmxvZy9wb3N0L2luc2VydC9wYWdlLnRzeD82YmRlIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuaW1wb3J0IHsgdjQgYXMgdXVpZHY0IH0gZnJvbSAndXVpZCc7XG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2UgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L25hdmlnYXRpb24nXG5pbXBvcnQgeyBVc2VyIH0gZnJvbSBcIkAvYXBwL2xpYi9kZWZpbml0aW9uXCJcbmltcG9ydCB7IGdldFNlc3Npb24gfSBmcm9tICduZXh0LWF1dGgvcmVhY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQYWdlKCkge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuICBjb25zdCBQUk9NUFQgPSBcIllvdSBhcmUgYSBjcmVhdGl2ZSBibG9nIHdyaXRlci4gd3JpdGUgYSA1MC13b3JkIGJsb2cgcG9zdCBhYm91dCB0aGUgdGl0bGUgYmVsb3cuIFlvdSBjYW4gd3JpdGUgYW55dGhpbmcgeW91IHdhbnQsIGJ1dCBpdCBtdXN0IGJlIGF0IGxlYXN0IDUwIHdvcmRzIGxvbmcuIFRoZSB0aXRsZSBpczogXCJcbiAgY29uc3QgW2dlbmVyYXRpbmcsIHNldEdlbmVyYXRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbY29udGVudCwgc2V0Q29udGVudF0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlPFVzZXIgfCBudWxsPihudWxsKTtcbiAgY29uc3QgW2Zvcm1EYXRhLCBzZXRGb3JtRGF0YV0gPSB1c2VTdGF0ZSh7XG4gICAgaWQ6ICcnLFxuICAgIHRpdGxlOiAnJyxcbiAgICBjb250ZW50OiAnJyxcbiAgICBkYXRlOiBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCkuc2xpY2UoMCwgMTApXG4gIH0pO1xuXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChlOiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xuICAgIGNvbnN0IHsgbmFtZSwgdmFsdWUgfSA9IGUudGFyZ2V0O1xuICAgIHNldEZvcm1EYXRhKHByZXZEYXRhID0+ICh7XG4gICAgICAuLi5wcmV2RGF0YSxcbiAgICAgIFtuYW1lXTogdmFsdWVcbiAgICB9KSlcbiAgfTtcblxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoZTogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgdXVpZCA9IHV1aWR2NCgpO1xuICAgIGZldGNoKGAvYXBpL3Bvc3RzP2lkPSR7dXVpZH0mdGl0bGU9JHtmb3JtRGF0YS50aXRsZX0mYXV0aG9yPSR7dXNlcj8ubmFtZX0mY29udGVudD0ke2Zvcm1EYXRhLmNvbnRlbnR9JmRhdGU9JHtmb3JtRGF0YS5kYXRlfWAsIHtcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICB9LFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyAuLi5mb3JtRGF0YSwgaWQ6IHV1aWQgfSlcbiAgICB9KS50aGVuKCgpID0+IHtcbiAgICAgIC8vIENsZWFyIGZvcm0gZmllbGRzXG4gICAgICBzZXRGb3JtRGF0YSh7XG4gICAgICAgIGlkOiAnJyxcbiAgICAgICAgdGl0bGU6ICcnLFxuICAgICAgICBjb250ZW50OiAnJyxcbiAgICAgICAgZGF0ZTogJydcbiAgICAgIH0pO1xuICAgICAgcm91dGVyLnB1c2goJy9ibG9nL3Bvc3RzJyk7XG4gICAgfSkuY2F0Y2goY29uc29sZS5lcnJvcilcbiAgfVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJBUEkgS0VZXCIsIHByb2Nlc3MuZW52Lk9QRU5BSV9BUElfS0VZKVxuICAgIGdldFNlc3Npb24oKS50aGVuKChzZXNzaW9uKSA9PiB7XG4gICAgICBzZXRVc2VyKHNlc3Npb24/LnVzZXIgfHwgbnVsbCk7XG4gICAgICBpZiAoIXNlc3Npb24/LnVzZXIpIHtcbiAgICAgICAgcm91dGVyLnB1c2goJy9ibG9nL3Bvc3RzJyk7XG4gICAgICB9XG4gICAgfSlcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJiZy13aGl0ZSBwLTggcm91bmRlZCBzaGFkb3dcIj5cbiAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBtYi00IHRleHQtcHVycGxlLTcwMFwiPk5ldyBCbG9nIFBvc3Q8L2gyPlxuICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0gY2xhc3NOYW1lPVwic3BhY2UteS00XCI+XG5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInRpdGxlXCIgY2xhc3NOYW1lPVwiYmxvY2sgZm9udC1tZWRpdW1cIj5UaXRsZTo8L2xhYmVsPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwidGl0bGVcIiBuYW1lPVwidGl0bGVcIiB2YWx1ZT17Zm9ybURhdGEudGl0bGV9IG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9IGNsYXNzTmFtZT1cInctZnVsbCBib3JkZXItMiBib3JkZXItcHVycGxlLTEwMCBwLTIgcm91bmRlZC1tZCBmb2N1czpib3JkZXItcHVycGxlLTIwMCBmb2N1czpvdXRsaW5lLW5vbmVcIiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImNvbnRlbnRcIiBjbGFzc05hbWU9XCJibG9jayBmb250LW1lZGl1bVwiPkNvbnRlbnQ6PC9sYWJlbD5cbiAgICAgICAgICA8dGV4dGFyZWEgaWQ9XCJjb250ZW50XCIgbmFtZT1cImNvbnRlbnRcIiByb3dzPVwiNFwiIHZhbHVlPXtmb3JtRGF0YS5jb250ZW50fSBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfSBjbGFzc05hbWU9XCJ3LWZ1bGwgYm9yZGVyLTIgYm9yZGVyLXB1cnBsZS0xMDAgcC0yIHJvdW5kZWQtbWQgZm9jdXM6Ym9yZGVyLXB1cnBsZS0yMDAgZm9jdXM6b3V0bGluZS1ub25lXCI+PC90ZXh0YXJlYT5cbiAgICAgICAgICB7Z2VuZXJhdGluZyAmJiA8cCBjbGFzc05hbWU9J3RleHQtcHVycGxlLTcwMCBteS0xJz5HZW5lcmF0aW5nIGNvbnRlbnQuLi48L3A+fVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImRhdGVcIiBjbGFzc05hbWU9XCJibG9jayBmb250LW1lZGl1bVwiPkRhdGU6PC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cImRhdGVcIiBuYW1lPVwiZGF0ZVwiIHZhbHVlPXtmb3JtRGF0YS5kYXRlfSByZWFkT25seSBjbGFzc05hbWU9XCJ3LWZ1bGwgYm9yZGVyLTIgYm9yZGVyLXB1cnBsZS0xMDAgcC0yIHJvdW5kZWQtbWQgZm9jdXM6Ym9yZGVyLXB1cnBsZS0yMDAgZm9jdXM6b3V0bGluZS1ub25lXCIgLz5cblxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9XCJiZy1ibHVlLTQwMCB0ZXh0LXdoaXRlIHB4LTQgcHktMiByb3VuZGVkLW1kIGJnLXB1cnBsZS02MDAgIGhvdmVyOmJnLXB1cnBsZS03MDBcIj5TdWJtaXQ8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Zvcm0+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsidjQiLCJ1dWlkdjQiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVJvdXRlciIsImdldFNlc3Npb24iLCJQYWdlIiwicm91dGVyIiwiUFJPTVBUIiwiZ2VuZXJhdGluZyIsInNldEdlbmVyYXRpbmciLCJjb250ZW50Iiwic2V0Q29udGVudCIsInVzZXIiLCJzZXRVc2VyIiwiZm9ybURhdGEiLCJzZXRGb3JtRGF0YSIsImlkIiwidGl0bGUiLCJkYXRlIiwiRGF0ZSIsInRvSVNPU3RyaW5nIiwic2xpY2UiLCJoYW5kbGVDaGFuZ2UiLCJlIiwibmFtZSIsInZhbHVlIiwidGFyZ2V0IiwicHJldkRhdGEiLCJoYW5kbGVTdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsInV1aWQiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInRoZW4iLCJwdXNoIiwiY2F0Y2giLCJjb25zb2xlIiwiZXJyb3IiLCJsb2ciLCJwcm9jZXNzIiwiZW52IiwiT1BFTkFJX0FQSV9LRVkiLCJzZXNzaW9uIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDIiLCJmb3JtIiwib25TdWJtaXQiLCJsYWJlbCIsImh0bWxGb3IiLCJpbnB1dCIsInR5cGUiLCJvbkNoYW5nZSIsInRleHRhcmVhIiwicm93cyIsInAiLCJyZWFkT25seSIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/blog/post/insert/page.tsx\n"));

/***/ })

});