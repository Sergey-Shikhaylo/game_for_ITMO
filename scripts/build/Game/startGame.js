define(["require", "exports", "./Gem", "./count_info"], function (require, exports, Gem_1, count_info_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    Gem_1.default;
    function startGame(arrayCell) {
        var _loop_1 = function (i) {
            var _div = arrayCell[i].getDiv(arrayCell[i]);
            var _gem = arrayCell[i].getGem(arrayCell[i]);
            _div.addEventListener("click", function () {
                var _rate = _gem.getRate(_gem);
                if (_rate > 0) {
                    count_info_1.default(_rate);
                    _gem.getImage(_gem).style.visibility = "visible";
                }
                else {
                    count_info_1.default(-100);
                }
                _div.style.background = "#837187";
            });
        };
        for (var i = 0; i < arrayCell.length; i++) {
            _loop_1(i);
        }
    }
    exports.default = startGame;
});
