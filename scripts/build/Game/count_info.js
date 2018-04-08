define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function updateCount(count_) {
        var _h2 = document.getElementById("count");
        if (_h2.textContent != null) {
            var _h2_count = +_h2.textContent.substr(14);
            _h2_count += count_;
            _h2.textContent = "Заработано: $" + _h2_count;
        }
    }
    exports.default = updateCount;
});
