define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.buttonMenu = {
        linkButton: function () {
            var _menu_button = document.getElementById("menu_button");
            var _window_menu = document.getElementById("menu_background");
            _menu_button.addEventListener("click", function () {
                _window_menu.style.visibility = 'visible';
            });
        }
    };
    exports.buttonBack = {
        linkButton: function () {
            var _menu_button = document.getElementById("windows_menu_back_button");
            var _window_menu = document.getElementById("menu_background");
            _menu_button.addEventListener("click", function () {
                _window_menu.style.visibility = 'hidden';
            });
        }
    };
});
