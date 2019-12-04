function goToTown(farmTarget){
    
    //Threshold when to deposit Gold / Mana Potion Threshold
    let goldThreshold = 50000;
    let mPotionThreshold = 100;
    let hPotionThreshold = 50;
    
    if(character.gold > goldThreshold){
        
        let mPotions = quantity("mpot0");
        let hPotions = quantity("hpot0");
        
        if(mPotions < mPotionThreshold || hPotions < hPotionThreshold){
            smart_move({to:"fancypots"}, () => {
                if(mPotions < mPotionThreshold) buy_with_gold("mpot0", mPotionThreshold - mPotions);
                if(hPotions < hPotionThreshold )buy_with_gold("hpot0", hPotionThreshold - hPotions);
                depositMoney(farmTarget);
            });
        }else{
            depositMoney(farmTarget);
        }
    }
}
​
function depositMoney(farmTarget){
    smart_move({to:"bank"}, () => {
        bank_deposit(character.gold)
        smart_move({to:farmTarget});
    });
}
​
​
​