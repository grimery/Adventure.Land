function mageSkills(target){
​
    //How much Mana should be kept in reserve
    let manaReserve = 0.8;
    
    //Energize Party Members
    //parent.party_list is an array with the names of PartyMembers
    //We iterate over it
    parent.party_list.forEach(function(otherPlayerName){ 
        // !!! IMPORTANT !!! parent.entities only holds OTHER players, not
        //the current player running this code!! Therefor....
        let partyMember = parent.entities[otherPlayerName];
        //...we have to check if party member holds something or is undefined!!!
        if(partyMember) {
            if(character.mp > (character.max_mp * manaReserve)
                && partyMember.mp < (partyMember.max_mp * manaReserve)
                && !partyMember.rip
                && distance(character, partyMember) < G.skills.energize.range
                && can_use("energize")){
                use_skill("energize", partyMember);
                game_log("Mage energized " + partyMember.name);
            }
        }
    });
​
    //Burst
    if(target
       && character.mp > (character.max_mp * manaReserve)
       && target.hp >= (character.mp * 0.5)
       && can_use("burst")){
        use_skill("burst"); 
        game_log("Mage bursting enemy");
    }
​
}