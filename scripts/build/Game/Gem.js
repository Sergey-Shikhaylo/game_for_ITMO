define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.COUNT_IMAGE_GEM = Number(6);
    var Gem = (function () {
        function Gem(parent_div_, number_image_) {
            this.link_image = document.createElement("img");
            parent_div_.appendChild(this.link_image);
            this.link_image.src = "image" + "/" + "gem_" + number_image_ + ".png";
            this.link_image.id = "img" + number_image_;
            this.updateRate();
            this.rate;
        }
        Gem.prototype.updateRate = function () {
            this.rate = +(this.link_image.id[4]) * 50;
        };
        Gem.prototype.getRate = function (needGem) {
            return needGem.rate;
        };
        Gem.prototype.getImage = function (needGem) {
            return needGem.link_image;
        };
        return Gem;
    }());
    exports.default = Gem;
});
