define(["require", "exports", "./Cell", "./Gem"], function (require, exports, Cell_1, Gem_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function initField() {
        var arrayCell = new Array(36);
        addRandomGem(arrayCell);
        for (var i = 0; i < arrayCell.length; i++) {
            if (!arrayCell[i]) {
                createNewCell(arrayCell[i], i);
            }
        }
        return arrayCell;
    }
    exports.default = initField;
    function createNewCell(arrayCellElement, number_Element) {
        arrayCellElement = new Cell_1.default(number_Element, -1, false);
        arrayCellElement;
    }
    function addRandomGem(arrayCell) {
        for (var i = 1; i <= Gem_1.COUNT_IMAGE_GEM; i++) {
            var _random_coord = getRandomInt(0, 35);
            arrayCell[_random_coord] = new Cell_1.default(_random_coord, i, true);
        }
    }
    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }
});
