import {buttonBack,buttonMenu} from './buttons';
import initField from './initField';
//import startGame from './startGame';
import Cell from './Cell';
Cell;



export default function initGame( ): void
{
	initField();
	//startGame(arrayCell);
	buttonMenu.linkButton();
	buttonBack.linkButton();
}
