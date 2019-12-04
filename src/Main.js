load_code("helperFunctions");
load_code("kiteTarget");
load_code("autoFight");
load_code("goToTown");
load_code("merchantSkills");
load_code("mageSkills");
load_code("priestSkills");
load_code("rangerSkills");

//Hotkeys!
map_key("5","snippet","loadCharacters()")
map_key("6","snippet","initParty()")
map_key("7","snippet","stopCharacters()")

//Custom Settings
let farmTarget = "crab";
let merchant = get_player("MerchieMerch");

setInterval(main, 1000 / 4); // Loops every 1/4 seconds.
setInterval(tier2Actions, 3000); // Loops every 3 seconds.

function main(){

	//If character is moving, do nothing
	if(is_moving(character) || smart.moving) return;
	//Replenish Health and Mana
	if(!character.rip) use_hp_or_mp();
	//Loot everything
	loot();
	//If Character is dead, respawn
	if (character.rip) setTimeout(respawn, 15000);	
	
	//Merchant Skills are Tier 2 actions
	if(character.ctype === "merchant") return;

	//Finds a suitable target and attacks it. Also returns the target!
	let target = getTarget(farmTarget);
	if(target){
		//Kites the target
		//kiteTarget(target);
		//Uses available skills
		if(character.ctype === "mage") mageSkills(target);
		if(character.ctype === "priest") priestSkills(target);
		if(character.ctype === "ranger") rangerSkills(target);
		//Attacks the target
		autoFight(target);
	}else{
		smart_move({to:farmTarget});
	}
}

function tier2Actions(){
	
	//If character is moving, do nothing
	if(is_moving(character) || smart.moving) return;
	
	//Puts potions on Slots not transferred to merchant
	relocatePotions();
	//Transfer loot to merchant
	transferLoot(merchant);
	//When money limit reached buy potions & deposit money
	//goToTown(farmTarget);
	
	//Run Merchant Skills
	if(character.ctype === "merchant"){
		merchantSkills(farmTarget);
		return;
	}
}








