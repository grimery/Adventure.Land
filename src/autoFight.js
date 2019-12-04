function autoFight(target){
​
    if(!in_attack_range(target)){
        smart_move(
            character.x + (target.x - character.x) * 0.3,
            character.y + (target.y - character.y) * 0.3
        );
    }
    else if (can_attack(target)){
        attack(target).then((message) => {
            reduce_cooldown("attack", character.ping);
        }).catch((message) => {
            log(character.name + " attack failed: " + message.reason);
        });
    }
}