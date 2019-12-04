function loadCharacters(){
	start_character("MagieMage", "MainLoop");
	start_character("PriestiePriest", "MainLoop");
	start_character("RangieRange", "MainLoop");
	log("Loading Characters...");
	setTimeout(initParty, 10000);
}

function initParty(){
	send_party_invite("MagieMage");
	send_party_invite("PriestiePriest");
	send_party_invite("RangieRange");
	log("Party Invites sent!");
}

function stopCharacters(){
	stop_character("MagieMage");
	stop_character("PriestiePriest");
	stop_character("RangieRange");
	log("Characters stopped!");
}

function getTarget(farmTarget){

	let target = get_targeted_monster();
	if(target) return target;
	if(!target){
		target = get_nearest_monster({
			min_xp:100,
			max_att:150,
			type:farmTarget,
			no_target:true
		});
		change_target(target);
		return target;
	}
}

function transferLoot(merchant){
	if(character.ctype === "merchant") return;
	if(character.ctype !== "merchant"
	   && merchant
	   && merchant.owner === character.owner
	   && distance(character, merchant) < 400){
		//Transfer Gold
		if(character.gold > 1000) send_gold(merchant, character.gold)
		//Transfer Items
		if(character.items.filter(element => element).length > 4){
			for(let i = 0; i <= 34; i++){
				send_item(merchant, i, 9999);
			}
			log(character.name + " sent items to merchant.");
		}
	}	
}

function relocatePotions(){
	
	if(locate_item("hpot1") !== -1 
	   && locate_item("hpot1") !== 35)	swap(locate_item("hpot1"),35);
	if(locate_item("mpot1") !== -1 
	   && locate_item("mpot1") !== 36) swap(locate_item("mpot1"),36);
	if(locate_item("hpot0") !== -1 
	   && locate_item("hpot0") !== 37) swap(locate_item("hpot0"),37);
	if(locate_item("mpot0") !== -1 
	   && locate_item("mpot0") !== 38)swap(locate_item("mpot0"),38);
}


//on_party_invite gets called _automatically_ by the game on an invite 
function on_party_invite(name) {

	if (get_player(name).owner != character.owner) return;
	accept_party_invite(name);
}