import Cell from './Cell';
import {COUNT_IMAGE_GEM} from './Gem';

export default function initField(): Cell[]{
    let arrayCell:Cell[] = new Array(36);
    addRandomGem(arrayCell);
    for (let i = 0; i < arrayCell.length; i++) {
        if (!arrayCell[i]) {
            createNewCell(arrayCell[i], i);
        }
    }
    return arrayCell;
} 

function createNewCell(arrayCellElement:Cell, number_Element: number) {
    arrayCellElement = new Cell(number_Element, -1, false);
    arrayCellElement;
}


//функция, которая для каждого Gem генерирует рандомный Cell
function addRandomGem(arrayCell:Cell[]){
    for (let i = 1; i <= COUNT_IMAGE_GEM; i++) {
        let _random_coord = getRandomInt(0 , 35);
        arrayCell[_random_coord] = new Cell(_random_coord, i, true);
    }
}

//рандомные координаты для Gem
function getRandomInt(min:number, max:number):number {
    return Math.floor(Math.random() * (max - min)) + min;
  }
  
