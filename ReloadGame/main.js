// Thanks to Save to File for the original code!
// https://steamcommunity.com/sharedfiles/filedetails/?id=2787207893

Game.registerMod("ReloadGame", {
	init:function(){
		var menu = Game.UpdateMenu;
		Game.UpdateMenu = function(){
			menu();
			if(Game.onMenu == 'prefs'){
				// create button
				var reloadBtn = document.createElement("div");
				reloadBtn.classList.add("listing");
				reloadBtn.innerHTML = "<a class='option smallFancyButton' onclick='Game.toSave=true;Game.toReload=true;'>Save & Reload</a><label>Reload the game without closing it</label>";

				// add button to menu
				var topBtns = document.querySelector("#menu").querySelector(".subsection").querySelectorAll(".listing");
				var saveQuitBtn = topBtns[1];
				saveQuitBtn.after(reloadBtn);
			}
		}

		Game.Notify('Reload Game','Reload button added to Options menu!',[16,5],5);
	}
});
