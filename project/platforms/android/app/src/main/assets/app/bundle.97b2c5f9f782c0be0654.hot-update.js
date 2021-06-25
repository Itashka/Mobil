webpackHotUpdate("bundle",{

/***/ "../node_modules/@nativescript/webpack/helpers/style-hot-loader.js!../node_modules/@nativescript/webpack/helpers/apply-css-loader.js!../node_modules/css-loader/dist/cjs.js?!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/vue-loader/lib/index.js?!./components/App.vue?vue&type=style&index=0&lang=css&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "\nActionBar {\n    background-color: #d1fccf;\n    color: black;\n    text-align: center;\n    font-size: 250px;\n    height: 80xp;\n}\nPage {\n    background-color: #d1fccf;\n}\n.button {\n    vertical-align: center;\n    text-align: center;\n    color:rgb(166, 0, 216);\n    background-color: #beffbb;\n    font-size: 25px;\n    width: 100%;\n    height: 100xp;\n    border-radius: 200%;\n    border: #d1fccf;\n}\n.button:active{\n    background-color: rgb(234, 253, 127);\n}\n", "",{"version":3,"sources":["webpack://../components/App.vue"],"names":[],"mappings":";AAuDA;IACA,yBAAA;IACA,YAAA;IACA,kBAAA;IACA,gBAAA;IACA,YAAA;AACA;AACA;IACA,yBAAA;AACA;AACA;IACA,sBAAA;IACA,kBAAA;IACA,sBAAA;IACA,yBAAA;IACA,eAAA;IACA,WAAA;IACA,aAAA;IACA,mBAAA;IACA,eAAA;AAEA;AACA;IACA,oCAAA;AACA","sourcesContent":["<template>\n    <Page>\n        <ActionBar title=\"Бесполезный органайзер\"/>\n            <StackLayout>\n                <Button class=\"button\" @tap=\"calCul()\" text=\"Калькулейтед\"/>\n                <Button class=\"button\" @tap=\"toDo()\" text=\"Тудушка :)\"/>\n                <Button class=\"button\" @tap=\"Animeshka()\" text=\"Анимешка\"/>\n                <Button class=\"button\" @tap=\"about()\" text=\"Автор\"/>\n                <Button class=\"button\" @tap=\"closeApp()\" text=\"Покинуть этот мир\"/>\n            </StackLayout>\n    </Page>\n</template>\n\n<script >\nimport CalCul from './CalCul';\nimport ToDO from './ToDo';\nimport Animeshka from './Animeshka';\nimport * as application from \"@nativescript/core/application\";\n\n  export default {\n    methods:{\n      calCul: function(event){\n        this.$showModal(CalCul, {\n          fullscreen: true,\n        })\n      },\n      toDo: function(event){\n        this.$showModal(ToDO, {\n          fullscreen: true,\n        })\n      },\n      Animeshka: function(event){\n        this.$showModal(Animeshka, {\n          fullscreen: true,\n        })\n      },\n      about() {\n        alert(({\n          title: \"Потратил на это время:\",\n          message: \"Проскуряков Богдан - 1192б\",\n          okButtonText: \"Press F to Pay Respects\"\n        }));\n      },\n      closeApp() {\n        if (application.android) {\n          application.android.foregroundActivity.finish();\n        } else {\n          exit(0);\n        }\n      }\n    }\n  }\n</script>\n\n<style>\n  ActionBar {\n      background-color: #d1fccf;\n      color: black;\n      text-align: center;\n      font-size: 250px;\n      height: 80xp;\n  }\n  Page {\n      background-color: #d1fccf;\n  }\n  .button {\n      vertical-align: center;\n      text-align: center;\n      color:rgb(166, 0, 216);\n      background-color: #beffbb;\n      font-size: 25px;\n      width: 100%;\n      height: 100xp;\n      border-radius: 200%;\n      border: #d1fccf;\n      \n  }\n  .button:active{\n      background-color: rgb(234, 253, 127);\n  }\n</style>"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);

    const { Application } = __webpack_require__("../node_modules/@nativescript/core/index.js");
    __webpack_require__("../node_modules/@nativescript/core/ui/styling/style-scope.js");

    if (___CSS_LOADER_EXPORT___ && typeof ___CSS_LOADER_EXPORT___.forEach === "function") {
        ___CSS_LOADER_EXPORT___.forEach(cssExport => {
            if (cssExport.length > 1 && cssExport[1]) {
                // applying the second item of the export as it contains the css contents
                Application.addCss(cssExport[1]);
            }
        });
    }
;
    if (true) {
        module.hot.accept();
        module.hot.dispose(() => {
            global.hmrRefresh({ type: 'style', path: './components/App.vue' });
        })
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/App.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CalCul__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/CalCul.vue");
/* harmony import */ var _ToDo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/ToDo.vue");
/* harmony import */ var _Animeshka__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./components/Animeshka.vue");
/* harmony import */ var _nativescript_core_application__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/@nativescript/core/application/index.js");
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
  methods: {
    calCul: function calCul(event) {
      this.$showModal(_CalCul__WEBPACK_IMPORTED_MODULE_0__["default"], {
        fullscreen: true
      });
    },
    toDo: function toDo(event) {
      this.$showModal(_ToDo__WEBPACK_IMPORTED_MODULE_1__["default"], {
        fullscreen: true
      });
    },
    Animeshka: function Animeshka(event) {
      this.$showModal(_Animeshka__WEBPACK_IMPORTED_MODULE_2__["default"], {
        fullscreen: true
      });
    },

    about() {
      alert({
        title: "Потратил на это время:",
        message: "Проскуряков Богдан - 1192б",
        okButtonText: "Press F to Pay Respects"
      });
    },

    closeApp() {
      if (_nativescript_core_application__WEBPACK_IMPORTED_MODULE_3__["android"]) {
        _nativescript_core_application__WEBPACK_IMPORTED_MODULE_3__["android"].foregroundActivity.finish();
      } else {
        exit(0);
      }
    }

  }
});

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0FwcC52dWU/MTlmNiIsIndlYnBhY2s6Ly8vY29tcG9uZW50cy9BcHAudnVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQzRGO0FBQzVGLDhCQUE4QixtRkFBMkI7QUFDekQ7QUFDQSw4QkFBOEIsUUFBUyxnQkFBZ0IsZ0NBQWdDLG1CQUFtQix5QkFBeUIsdUJBQXVCLG1CQUFtQixHQUFHLFFBQVEsZ0NBQWdDLEdBQUcsV0FBVyw2QkFBNkIseUJBQXlCLDZCQUE2QixnQ0FBZ0Msc0JBQXNCLGtCQUFrQixvQkFBb0IsMEJBQTBCLHNCQUFzQixHQUFHLGlCQUFpQiwyQ0FBMkMsR0FBRyxTQUFTLGtGQUFrRixNQUFNLFdBQVcsVUFBVSxXQUFXLFdBQVcsVUFBVSxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsVUFBVSxXQUFXLFVBQVUsS0FBSyxLQUFLLFdBQVcsa29CQUFrb0IsNEJBQTRCLHNDQUFzQyxrRUFBa0Usc0JBQXNCLGVBQWUsZ0NBQWdDLG1DQUFtQyx3Q0FBd0MsVUFBVSwrQkFBK0IsaUNBQWlDLHdDQUF3QyxVQUFVLG9DQUFvQyxzQ0FBc0Msd0NBQXdDLFVBQVUsa0JBQWtCLGtCQUFrQixrS0FBa0ssR0FBRyxTQUFTLHFCQUFxQixvQ0FBb0MsNERBQTRELFdBQVcsT0FBTyxvQkFBb0IsV0FBVyxTQUFTLE9BQU8sS0FBSyxxQ0FBcUMsa0NBQWtDLHFCQUFxQiwyQkFBMkIseUJBQXlCLHFCQUFxQixLQUFLLFVBQVUsa0NBQWtDLEtBQUssYUFBYSwrQkFBK0IsMkJBQTJCLCtCQUErQixrQ0FBa0Msd0JBQXdCLG9CQUFvQixzQkFBc0IsNEJBQTRCLHdCQUF3QixhQUFhLG1CQUFtQiw2Q0FBNkMsS0FBSyw2QkFBNkI7QUFDbjVGO0FBQ2Usc0ZBQXVCLEVBQUM7O0FBRXZDLFdBQVcsY0FBYyxHQUFHLG1CQUFPLENBQUMsNkNBQW9CO0FBQ3hELElBQUksbUJBQU8sQ0FBQyw4REFBMkM7O0FBRXZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsUUFBUSxJQUFVO0FBQ2xCO0FBQ0E7QUFDQSwrQkFBK0IsOENBQThDO0FBQzdFLFNBQVM7QUFDVDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1hBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0EsS0FMQTtBQU1BO0FBQ0E7QUFDQTtBQURBO0FBR0EsS0FWQTtBQVdBO0FBQ0E7QUFDQTtBQURBO0FBR0EsS0FmQTs7QUFnQkE7QUFDQTtBQUNBLHVDQURBO0FBRUEsNkNBRkE7QUFHQTtBQUhBO0FBS0EsS0F0QkE7O0FBdUJBO0FBQ0E7QUFDQTtBQUNBLE9BRkEsTUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUE3QkE7QUFEQSxHIiwiZmlsZSI6ImJ1bmRsZS45N2IyYzVmOWY3ODJjMGJlMDY1NC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuQWN0aW9uQmFyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2QxZmNjZjtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMjUwcHg7XFxuICAgIGhlaWdodDogODB4cDtcXG59XFxuUGFnZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkMWZjY2Y7XFxufVxcbi5idXR0b24ge1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogY2VudGVyO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGNvbG9yOnJnYigxNjYsIDAsIDIxNik7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNiZWZmYmI7XFxuICAgIGZvbnQtc2l6ZTogMjVweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAweHA7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwMCU7XFxuICAgIGJvcmRlcjogI2QxZmNjZjtcXG59XFxuLmJ1dHRvbjphY3RpdmV7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzQsIDI1MywgMTI3KTtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4uL2NvbXBvbmVudHMvQXBwLnZ1ZVwiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiO0FBdURBO0lBQ0EseUJBQUE7SUFDQSxZQUFBO0lBQ0Esa0JBQUE7SUFDQSxnQkFBQTtJQUNBLFlBQUE7QUFDQTtBQUNBO0lBQ0EseUJBQUE7QUFDQTtBQUNBO0lBQ0Esc0JBQUE7SUFDQSxrQkFBQTtJQUNBLHNCQUFBO0lBQ0EseUJBQUE7SUFDQSxlQUFBO0lBQ0EsV0FBQTtJQUNBLGFBQUE7SUFDQSxtQkFBQTtJQUNBLGVBQUE7QUFFQTtBQUNBO0lBQ0Esb0NBQUE7QUFDQVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI8dGVtcGxhdGU+XFxuICAgIDxQYWdlPlxcbiAgICAgICAgPEFjdGlvbkJhciB0aXRsZT1cXFwi0JHQtdGB0L/QvtC70LXQt9C90YvQuSDQvtGA0LPQsNC90LDQudC30LXRgFxcXCIvPlxcbiAgICAgICAgICAgIDxTdGFja0xheW91dD5cXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBjbGFzcz1cXFwiYnV0dG9uXFxcIiBAdGFwPVxcXCJjYWxDdWwoKVxcXCIgdGV4dD1cXFwi0JrQsNC70YzQutGD0LvQtdC50YLQtdC0XFxcIi8+XFxuICAgICAgICAgICAgICAgIDxCdXR0b24gY2xhc3M9XFxcImJ1dHRvblxcXCIgQHRhcD1cXFwidG9EbygpXFxcIiB0ZXh0PVxcXCLQotGD0LTRg9GI0LrQsCA6KVxcXCIvPlxcbiAgICAgICAgICAgICAgICA8QnV0dG9uIGNsYXNzPVxcXCJidXR0b25cXFwiIEB0YXA9XFxcIkFuaW1lc2hrYSgpXFxcIiB0ZXh0PVxcXCLQkNC90LjQvNC10YjQutCwXFxcIi8+XFxuICAgICAgICAgICAgICAgIDxCdXR0b24gY2xhc3M9XFxcImJ1dHRvblxcXCIgQHRhcD1cXFwiYWJvdXQoKVxcXCIgdGV4dD1cXFwi0JDQstGC0L7RgFxcXCIvPlxcbiAgICAgICAgICAgICAgICA8QnV0dG9uIGNsYXNzPVxcXCJidXR0b25cXFwiIEB0YXA9XFxcImNsb3NlQXBwKClcXFwiIHRleHQ9XFxcItCf0L7QutC40L3Rg9GC0Ywg0Y3RgtC+0YIg0LzQuNGAXFxcIi8+XFxuICAgICAgICAgICAgPC9TdGFja0xheW91dD5cXG4gICAgPC9QYWdlPlxcbjwvdGVtcGxhdGU+XFxuXFxuPHNjcmlwdCA+XFxuaW1wb3J0IENhbEN1bCBmcm9tICcuL0NhbEN1bCc7XFxuaW1wb3J0IFRvRE8gZnJvbSAnLi9Ub0RvJztcXG5pbXBvcnQgQW5pbWVzaGthIGZyb20gJy4vQW5pbWVzaGthJztcXG5pbXBvcnQgKiBhcyBhcHBsaWNhdGlvbiBmcm9tIFxcXCJAbmF0aXZlc2NyaXB0L2NvcmUvYXBwbGljYXRpb25cXFwiO1xcblxcbiAgZXhwb3J0IGRlZmF1bHQge1xcbiAgICBtZXRob2RzOntcXG4gICAgICBjYWxDdWw6IGZ1bmN0aW9uKGV2ZW50KXtcXG4gICAgICAgIHRoaXMuJHNob3dNb2RhbChDYWxDdWwsIHtcXG4gICAgICAgICAgZnVsbHNjcmVlbjogdHJ1ZSxcXG4gICAgICAgIH0pXFxuICAgICAgfSxcXG4gICAgICB0b0RvOiBmdW5jdGlvbihldmVudCl7XFxuICAgICAgICB0aGlzLiRzaG93TW9kYWwoVG9ETywge1xcbiAgICAgICAgICBmdWxsc2NyZWVuOiB0cnVlLFxcbiAgICAgICAgfSlcXG4gICAgICB9LFxcbiAgICAgIEFuaW1lc2hrYTogZnVuY3Rpb24oZXZlbnQpe1xcbiAgICAgICAgdGhpcy4kc2hvd01vZGFsKEFuaW1lc2hrYSwge1xcbiAgICAgICAgICBmdWxsc2NyZWVuOiB0cnVlLFxcbiAgICAgICAgfSlcXG4gICAgICB9LFxcbiAgICAgIGFib3V0KCkge1xcbiAgICAgICAgYWxlcnQoKHtcXG4gICAgICAgICAgdGl0bGU6IFxcXCLQn9C+0YLRgNCw0YLQuNC7INC90LAg0Y3RgtC+INCy0YDQtdC80Y86XFxcIixcXG4gICAgICAgICAgbWVzc2FnZTogXFxcItCf0YDQvtGB0LrRg9GA0Y/QutC+0LIg0JHQvtCz0LTQsNC9IC0gMTE5MtCxXFxcIixcXG4gICAgICAgICAgb2tCdXR0b25UZXh0OiBcXFwiUHJlc3MgRiB0byBQYXkgUmVzcGVjdHNcXFwiXFxuICAgICAgICB9KSk7XFxuICAgICAgfSxcXG4gICAgICBjbG9zZUFwcCgpIHtcXG4gICAgICAgIGlmIChhcHBsaWNhdGlvbi5hbmRyb2lkKSB7XFxuICAgICAgICAgIGFwcGxpY2F0aW9uLmFuZHJvaWQuZm9yZWdyb3VuZEFjdGl2aXR5LmZpbmlzaCgpO1xcbiAgICAgICAgfSBlbHNlIHtcXG4gICAgICAgICAgZXhpdCgwKTtcXG4gICAgICAgIH1cXG4gICAgICB9XFxuICAgIH1cXG4gIH1cXG48L3NjcmlwdD5cXG5cXG48c3R5bGU+XFxuICBBY3Rpb25CYXIge1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNkMWZjY2Y7XFxuICAgICAgY29sb3I6IGJsYWNrO1xcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICBmb250LXNpemU6IDI1MHB4O1xcbiAgICAgIGhlaWdodDogODB4cDtcXG4gIH1cXG4gIFBhZ2Uge1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNkMWZjY2Y7XFxuICB9XFxuICAuYnV0dG9uIHtcXG4gICAgICB2ZXJ0aWNhbC1hbGlnbjogY2VudGVyO1xcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICBjb2xvcjpyZ2IoMTY2LCAwLCAyMTYpO1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNiZWZmYmI7XFxuICAgICAgZm9udC1zaXplOiAyNXB4O1xcbiAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgIGhlaWdodDogMTAweHA7XFxuICAgICAgYm9yZGVyLXJhZGl1czogMjAwJTtcXG4gICAgICBib3JkZXI6ICNkMWZjY2Y7XFxuICAgICAgXFxuICB9XFxuICAuYnV0dG9uOmFjdGl2ZXtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjM0LCAyNTMsIDEyNyk7XFxuICB9XFxuPC9zdHlsZT5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuXG4gICAgY29uc3QgeyBBcHBsaWNhdGlvbiB9ID0gcmVxdWlyZShcIkBuYXRpdmVzY3JpcHQvY29yZVwiKTtcbiAgICByZXF1aXJlKFwiQG5hdGl2ZXNjcmlwdC9jb3JlL3VpL3N0eWxpbmcvc3R5bGUtc2NvcGVcIik7XG5cbiAgICBpZiAoX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gJiYgdHlwZW9mIF9fX0NTU19MT0FERVJfRVhQT1JUX19fLmZvckVhY2ggPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICBfX19DU1NfTE9BREVSX0VYUE9SVF9fXy5mb3JFYWNoKGNzc0V4cG9ydCA9PiB7XG4gICAgICAgICAgICBpZiAoY3NzRXhwb3J0Lmxlbmd0aCA+IDEgJiYgY3NzRXhwb3J0WzFdKSB7XG4gICAgICAgICAgICAgICAgLy8gYXBwbHlpbmcgdGhlIHNlY29uZCBpdGVtIG9mIHRoZSBleHBvcnQgYXMgaXQgY29udGFpbnMgdGhlIGNzcyBjb250ZW50c1xuICAgICAgICAgICAgICAgIEFwcGxpY2F0aW9uLmFkZENzcyhjc3NFeHBvcnRbMV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG47XG4gICAgaWYgKG1vZHVsZS5ob3QpIHtcbiAgICAgICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbiAgICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKCgpID0+IHtcbiAgICAgICAgICAgIGdsb2JhbC5obXJSZWZyZXNoKHsgdHlwZTogJ3N0eWxlJywgcGF0aDogJy4vY29tcG9uZW50cy9BcHAudnVlJyB9KTtcbiAgICAgICAgfSlcbiAgICB9XG4iLCI8dGVtcGxhdGU+XG4gICAgPFBhZ2U+XG4gICAgICAgIDxBY3Rpb25CYXIgdGl0bGU9XCLQkdC10YHQv9C+0LvQtdC30L3Ri9C5INC+0YDQs9Cw0L3QsNC50LfQtdGAXCIvPlxuICAgICAgICAgICAgPFN0YWNrTGF5b3V0PlxuICAgICAgICAgICAgICAgIDxCdXR0b24gY2xhc3M9XCJidXR0b25cIiBAdGFwPVwiY2FsQ3VsKClcIiB0ZXh0PVwi0JrQsNC70YzQutGD0LvQtdC50YLQtdC0XCIvPlxuICAgICAgICAgICAgICAgIDxCdXR0b24gY2xhc3M9XCJidXR0b25cIiBAdGFwPVwidG9EbygpXCIgdGV4dD1cItCi0YPQtNGD0YjQutCwIDopXCIvPlxuICAgICAgICAgICAgICAgIDxCdXR0b24gY2xhc3M9XCJidXR0b25cIiBAdGFwPVwiQW5pbWVzaGthKClcIiB0ZXh0PVwi0JDQvdC40LzQtdGI0LrQsFwiLz5cbiAgICAgICAgICAgICAgICA8QnV0dG9uIGNsYXNzPVwiYnV0dG9uXCIgQHRhcD1cImFib3V0KClcIiB0ZXh0PVwi0JDQstGC0L7RgFwiLz5cbiAgICAgICAgICAgICAgICA8QnV0dG9uIGNsYXNzPVwiYnV0dG9uXCIgQHRhcD1cImNsb3NlQXBwKClcIiB0ZXh0PVwi0J/QvtC60LjQvdGD0YLRjCDRjdGC0L7RgiDQvNC40YBcIi8+XG4gICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxuICAgIDwvUGFnZT5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQgPlxuaW1wb3J0IENhbEN1bCBmcm9tICcuL0NhbEN1bCc7XG5pbXBvcnQgVG9ETyBmcm9tICcuL1RvRG8nO1xuaW1wb3J0IEFuaW1lc2hrYSBmcm9tICcuL0FuaW1lc2hrYSc7XG5pbXBvcnQgKiBhcyBhcHBsaWNhdGlvbiBmcm9tIFwiQG5hdGl2ZXNjcmlwdC9jb3JlL2FwcGxpY2F0aW9uXCI7XG5cbiAgZXhwb3J0IGRlZmF1bHQge1xuICAgIG1ldGhvZHM6e1xuICAgICAgY2FsQ3VsOiBmdW5jdGlvbihldmVudCl7XG4gICAgICAgIHRoaXMuJHNob3dNb2RhbChDYWxDdWwsIHtcbiAgICAgICAgICBmdWxsc2NyZWVuOiB0cnVlLFxuICAgICAgICB9KVxuICAgICAgfSxcbiAgICAgIHRvRG86IGZ1bmN0aW9uKGV2ZW50KXtcbiAgICAgICAgdGhpcy4kc2hvd01vZGFsKFRvRE8sIHtcbiAgICAgICAgICBmdWxsc2NyZWVuOiB0cnVlLFxuICAgICAgICB9KVxuICAgICAgfSxcbiAgICAgIEFuaW1lc2hrYTogZnVuY3Rpb24oZXZlbnQpe1xuICAgICAgICB0aGlzLiRzaG93TW9kYWwoQW5pbWVzaGthLCB7XG4gICAgICAgICAgZnVsbHNjcmVlbjogdHJ1ZSxcbiAgICAgICAgfSlcbiAgICAgIH0sXG4gICAgICBhYm91dCgpIHtcbiAgICAgICAgYWxlcnQoKHtcbiAgICAgICAgICB0aXRsZTogXCLQn9C+0YLRgNCw0YLQuNC7INC90LAg0Y3RgtC+INCy0YDQtdC80Y86XCIsXG4gICAgICAgICAgbWVzc2FnZTogXCLQn9GA0L7RgdC60YPRgNGP0LrQvtCyINCR0L7Qs9C00LDQvSAtIDExOTLQsVwiLFxuICAgICAgICAgIG9rQnV0dG9uVGV4dDogXCJQcmVzcyBGIHRvIFBheSBSZXNwZWN0c1wiXG4gICAgICAgIH0pKTtcbiAgICAgIH0sXG4gICAgICBjbG9zZUFwcCgpIHtcbiAgICAgICAgaWYgKGFwcGxpY2F0aW9uLmFuZHJvaWQpIHtcbiAgICAgICAgICBhcHBsaWNhdGlvbi5hbmRyb2lkLmZvcmVncm91bmRBY3Rpdml0eS5maW5pc2goKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBleGl0KDApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG48L3NjcmlwdD5cblxuPHN0eWxlPlxuICBBY3Rpb25CYXIge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2QxZmNjZjtcbiAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIGZvbnQtc2l6ZTogMjUwcHg7XG4gICAgICBoZWlnaHQ6IDgweHA7XG4gIH1cbiAgUGFnZSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDFmY2NmO1xuICB9XG4gIC5idXR0b24ge1xuICAgICAgdmVydGljYWwtYWxpZ246IGNlbnRlcjtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIGNvbG9yOnJnYigxNjYsIDAsIDIxNik7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmVmZmJiO1xuICAgICAgZm9udC1zaXplOiAyNXB4O1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBoZWlnaHQ6IDEwMHhwO1xuICAgICAgYm9yZGVyLXJhZGl1czogMjAwJTtcbiAgICAgIGJvcmRlcjogI2QxZmNjZjtcbiAgICAgIFxuICB9XG4gIC5idXR0b246YWN0aXZle1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzNCwgMjUzLCAxMjcpO1xuICB9XG48L3N0eWxlPiJdLCJzb3VyY2VSb290IjoiIn0=