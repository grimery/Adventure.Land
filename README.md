# Adventure.Land

This is my code for Adventure.Land], an epic indie MMO RPG, where you have to write JavaScript code to fully automate everything that happens. You can check out [Adventure.Land here.](https://adventure.land/) This is the [Youtube Trailer of the game](
https://www.youtube.com/watch?v=HJAj9u2TEZc).
The most forbidden thing in any game is to write a bot for it. Here, this IS the game! :)

(This is not my first coding game, I also played [Screeps](https://screeps.com/), and you can [check out my source here](https://github.com/johnnyawesome/Screeps)).

## Getting started

Here are two great guides that will give you an overview over the game:

- [Sin's Guide to life in Adventure Land](https://steamcommunity.com/sharedfiles/filedetails/?id=1636142608)
- [FAQ's by Trexnamedtom](https://steamcommunity.com/sharedfiles/filedetails/?id=1640326394)

## Code overview

The game lets you create multiple modules, which I did, to keep things organized.

## The Characters

You can use four characters at the same time, I opted for:

- Mage
- Priest
- Ranger
- Merchant

The merchant is the most capable character so far. Most people only use it to sell things on the marketplace.
Mine acts as s support-character for the party, so they don't get interrupted and can keep farming 100% of the time.

## What the code does

This is a work in progress, and things might change. I don't have a high level yet, and can only farm low level enemies.
Once I can go for harder enemies, the code might change.

Here's a list of wha tthe code is capable of so far:

## General

- Hotkeys: To load characters / create a party / stop characters
- Auto-move to the designated farming spot.
- Auto-Farm designated mob's
- Auto-use potions (Heal & mana)
- Auto-Kite enemies. (All characters (Mage, Priest, Ranger) are ranged characters.)
- Characters can go to town, buy potions and bring gold to the bank (Module "goToTown"), but it's deactivated by default, because the merchant takes care of this now.

## Individual characters

- The mage can: auto-attack enemies (farming), energize partymembers, burst enemies
- The Ranger is also capable to auto-attack enemies (farming), he can use the "hunters mark" and he uses the supertshots (higher dps) skill on enemies
- The priest also can farm on it's own, heal partymembers and heal the whole party at once if needed. He can also debuff (curse) enemies

### The merchant

The merchant can sell your loot on the marketplace. You can just drop your loot inside his store, set a price and he'll sell it.

I decided that because the merchant cannot farm / generate gold on his own, he should act as a support characters for the "productive" characters.

So he takes care of a lot of things for you!

Every 15 minutes, he does a round:

- Close the merchant stand
- Buys potions for all characters
- Walks to the current farming spot
- Delivers the potions to all characters
- Gets all their items...
- ...and all their gold
- Buys scrolls if needed to upgrade the items he got
- Exchanges any gems / chests he got
- Deposits all gold above a certain limit in the bank. (Remember, to auto-buy things, he cannot deposit all gold, he needs to keep some)
- Goes back to town and opens up his little stand

Once the stand is open, he continue shos work:

- He auto-crafts (compound) multiple items to a higher level item
- He then puts these higher level items in his stand for sale
- He can sell "trash", so your inventory doesn't fill up. You can designate what is considered "trash" depending on what your current enemies drop.
- He tidies his inventory so there are no gaps (from crafting / selling things)
- He gives other players the "merchant's luck"-buff, with a chance to duplicate an item from them
- He also auto-buys cheap items from other merchants. If they sell an item under it's value, he'll buy it automatically. 

## General functions

There's a  module called "helperFunctions": It holds functions that are useful to all characters in one pplace (not to waste module-slots). They are quite helpful and take car eof a lot of things:

- Starting / stopping characters and creating a party
- Finding a target to attack
- Auto-Transfer loot (to the merchant)
- Relocate potions to slots that are not tansferred to the merchant
- handle party-invitations

## To do's

- At the moment, I do not have all skills unlocked. Therefor, I have not written code for them yet.
- Also, I farm weak enemies. There is no party-coordination going on atm. I chose to farm weak mob's to be able to 1-shot them  (which ideally gives me 3 mob kills per tick). Coordinating the party would interfere with maximum farming efficiency. (If the characters would follow a leader for example, they could miss out on farming a few tics, because they're walking). Once I start farming harder npc's, the good (and complex) part of the game starts. Character coordination, placing them in a certain fashion etc.
- The npc's I farm don't drop weapons or armor. So upgrading is not implemented yet
- The merchant should bring the really good stuff to the bank on it's own. But these drops are so rare, I haven't implemented that yet
- A ton of other things I don't even know about yet is also not done yet. :)

## Recap

The code can run on it's own several days if you tweak tha values correctly. The merchant's inventory requires attention from time to time, because I don't want to auto-sell good items, so they keep piling up (intentionally). You can tweak that of course, the code is there.

Enjoy!
