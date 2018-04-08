import Cell from './Cell';
import Gem from './Gem';
Gem;
import updateCount from './count_info';

export default function startGame(arrayCell:Cell[]){
        for (let i = 0; i < arrayCell.length; i++) {
            let _div = arrayCell[i].getDiv(arrayCell[i]);
            let _gem = arrayCell[i].getGem(arrayCell[i]);
            _div.addEventListener("click", function(){
                let _rate = _gem.getRate(_gem);
                if (_rate > 0) {
                    updateCount(_rate);
                    _gem.getImage(_gem).style.visibility = "visible";
                }
                else{
                    updateCount(-100);
                }
            _div.style.background = "#837187";
           // _div.removeEventListener("click", function(){});
        });
    }

}