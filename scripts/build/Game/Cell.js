define(["require", "exports", "./Gem"], function (require, exports, Gem_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Cell_coord;
    (function (Cell_coord) {
        Cell_coord[Cell_coord["Elem_1"] = 15] = "Elem_1";
        Cell_coord[Cell_coord["Elem_2"] = 75] = "Elem_2";
        Cell_coord[Cell_coord["Elem_3"] = 135] = "Elem_3";
        Cell_coord[Cell_coord["Elem_4"] = 195] = "Elem_4";
        Cell_coord[Cell_coord["Elem_5"] = 255] = "Elem_5";
        Cell_coord[Cell_coord["Elem_6"] = 315] = "Elem_6";
    })(Cell_coord || (Cell_coord = {}));
    var Cell = (function () {
        function Cell(number_Element, number_image, flag_isGem) {
            this.link_div = this.createDiv(number_Element);
            if (flag_isGem) {
                this.link_Gem = new Gem_1.default(this.link_div, number_image);
                this.link_Gem;
            }
        }
        Cell.prototype.createDiv = function (number_Element) {
            var _div = document.createElement("div");
            var _field = document.getElementById("main_field");
            _field.appendChild(_div);
            _div.id = 'Cell_' + (number_Element + 1);
            _div.style.top = this.top_left_calculation(number_Element, true) + "px";
            _div.style.left = this.top_left_calculation(number_Element, false) + "px";
            _div.style.position = "absolute";
            _div.style.width = "50px";
            _div.style.height = "50px";
            _div.style.background = "#f7c1e3";
            _div.style.margin = "10px";
            return _div;
        };
        Cell.prototype.top_left_calculation = function (i_count_, flag) {
            var _x = Math.floor(i_count_ / 6);
            var _y = i_count_ - 6 * _x;
            if (flag) {
                switch (_x) {
                    case 0:
                        return Cell_coord.Elem_1;
                    case 1:
                        return Cell_coord.Elem_2;
                    case 2:
                        return Cell_coord.Elem_3;
                    case 3:
                        return Cell_coord.Elem_4;
                    case 4:
                        return Cell_coord.Elem_5;
                    case 5:
                        return Cell_coord.Elem_6;
                    default:
                        return 0;
                }
            }
            switch (_y) {
                case 0:
                    return Cell_coord.Elem_1;
                case 1:
                    return Cell_coord.Elem_2;
                case 2:
                    return Cell_coord.Elem_3;
                case 3:
                    return Cell_coord.Elem_4;
                case 4:
                    return Cell_coord.Elem_5;
                case 5:
                    return Cell_coord.Elem_6;
                default:
                    return 0;
            }
        };
        Cell.prototype.getGem = function (needCell) {
            return needCell.link_Gem;
        };
        Cell.prototype.getDiv = function (needCell) {
            return needCell.link_div;
        };
        return Cell;
    }());
    exports.default = Cell;
});
