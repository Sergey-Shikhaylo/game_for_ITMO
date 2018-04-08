import Gem from './Gem';


enum Cell_coord {//отступы
    "Elem_1" = 15,
    "Elem_2" = 75,
    "Elem_3" = 135,
    "Elem_4" = 195,
    "Elem_5" = 255,
    "Elem_6" = 315,
} 

export default class Cell {
    private link_div: HTMLDivElement;//div элемент отведенный под ячейку
    private link_Gem: Gem;// драгоценность, если она есть

    constructor(number_Element: number, number_image:number, flag_isGem:boolean) {
        this.link_div = this.createDiv(number_Element);
        if (flag_isGem) {
            this.link_Gem = new Gem(this.link_div, number_image);
            this.link_Gem;
        }
    }
    
    //создание элемента div
    private createDiv(number_Element: number):HTMLDivElement{
        let _div = document.createElement("div");
		let _field = document.getElementById("main_field") as HTMLDivElement;
        _field.appendChild(_div);//присоединение к полю

            
        _div.id = 'Cell_' + (number_Element + 1);
        _div.style.top = this.top_left_calculation(number_Element, true) + "px";
        _div.style.left = this.top_left_calculation(number_Element, false) + "px";

        
        _div.style.position = "absolute";
        _div.style.width = "50px";
        _div.style.height = "50px";
        _div.style.background = "#f7c1e3";
        _div.style.margin = "10px";

        return _div;
    }

    
//на вход номер элемента, flag - 1: нужен top
//                               0: нужен left
//на выход - необходимый отступ
private top_left_calculation(i_count_:number, flag: boolean):number {
    let _x = Math.floor(i_count_ / 6);//расчет позиции элемента
    let _y = i_count_ - 6 * _x;//расчет позиции элемента
    if (flag){
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
}

getGem(needCell:Cell):Gem{
    return needCell.link_Gem;
}

getDiv(needCell:Cell):HTMLDivElement{
    return needCell.link_div;
}

}
