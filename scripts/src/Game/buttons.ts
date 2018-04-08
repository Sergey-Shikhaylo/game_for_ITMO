import gameButton from './button_interface';



export let buttonMenu: gameButton = {
    linkButton : function () : void{
		let _menu_button = document.getElementById("menu_button") as HTMLButtonElement;
		let _window_menu = document.getElementById("menu_background") as HTMLDivElement;
		_menu_button.addEventListener("click", function()
		{
			_window_menu.style.visibility = 'visible';
		});
    }
}

export let buttonBack: gameButton = {
    linkButton : function () : void{
		let _menu_button = document.getElementById("windows_menu_back_button") as HTMLButtonElement;
		let _window_menu = document.getElementById("menu_background") as HTMLDivElement;
		_menu_button.addEventListener("click", function()
		{
			_window_menu.style.visibility = 'hidden';
		});
    }
}