export const COUNT_IMAGE_GEM = Number(6);
export default class Gem {
    /*private fields*/
    private link_image: HTMLImageElement;//изображение драгоценности
    private rate: number;//ее стоимость

    constructor(parent_div_:HTMLDivElement, number_image_: number) {
        
        this.link_image = document.createElement("img");
        parent_div_.appendChild(this.link_image);
        
        this.link_image.src = "image" + "/" + "gem_" + number_image_ + ".png";
        this.link_image.id = "img" + number_image_;
        //this.link_image.style.visibility = "hidden";
        this.updateRate();
        this.rate;
    }

    //обновление стоимости драгоценности
    private updateRate(){
        this.rate = +(this.link_image.id[4]) * 50;
    }

    getRate(needGem:Gem): number{
        return needGem.rate;
    }

    getImage(needGem:Gem): HTMLImageElement{
        return needGem.link_image;
    }
}