define(["require", "exports", "./buttons", "./initField", "./Cell"], function (require, exports, buttons_1, initField_1, Cell_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    Cell_1.default;
    function initGame() {
        initField_1.default();
        buttons_1.buttonMenu.linkButton();
        buttons_1.buttonBack.linkButton();
    }
    exports.default = initGame;
});
