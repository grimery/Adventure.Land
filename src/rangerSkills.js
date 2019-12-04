function rangerSkills(target){
​
    //How much Mana should be kept in reserve
    let manaReserve = 0.8;
​
    //Use Ranger Skills
    if(character.mp > (character.max_mp * manaReserve)){
        if(character.mp > G.skills.supershot.mp
            && can_use("supershot")){
            use_skill("supershot");
            game_log("Ranger used Supershot");
        }
        if(character.mp > G.skills.huntersmark.mp
           && can_use("huntersmark")){
            use_skill("huntersmark");
            game_log("Ranger used Hunters Mark");
        }
    }
}
​
​