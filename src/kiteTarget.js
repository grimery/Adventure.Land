function kiteTarget(target){

	if(target){
		let minTargetDist = target.range * 3; 
		let kiteFlip = target.range * 1.1;
		let targetDistance = distance(character, target);
		
		if(targetDistance < minTargetDist && targetDistance > kiteFlip){
			move(
				character.real_x + (character.real_x - target.x),
				character.real_y + (character.real_y - target.y)
			);
		}
		if(distance(character, target) < kiteFlip){
			move(
				character.real_x - (character.real_x - target.x) + minTargetDist,
				character.real_y - (character.real_y - target.y) + minTargetDist
			);
		}
	}
}


