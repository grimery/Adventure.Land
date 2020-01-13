parent.party.Magos.x
​
//############# Load code from File System ############# 
​
const STARTUP = 'C:/projects/adventureCode/basicBot/startup.js';
const fs = require('fs');
const data = fs.readFileSync(STARTUP, 'utf8');
eval.apply( window, [data] );
​
//############# Hotkeys ############# 
​
map_key("5","snippet","loadCharacters()");
​
//############# All Monsters ############# 
​
//Coordinates where monsters sparn, their number etc
G.maps.main.monsters
​
//############# All Map Data! ############# 
​
G.maps
​
//############# TEXT ############# 
​
//############# TEXT ############# 
​
//############# TEXT ############# 
​
//############# TEXT ############# 
​
//############# TEXT ############# 
​
//############# TEXT ############# 
​
//############# TEXT ############# 
​
//############# TEXT ############# 
​
//############# TEXT ############# 
​
//############# TEXT ############# 
​
//############# TEXT ############# 
​
//############# TEXT ############# 
​
//############# TEXT ############# 
​
//############# Multiple Steam Windows ############# 
​
/new_window
​
//############# See Chat Functions ############# 
​
/help
​
//############# Open and Close Merchant Stand ############# 
​
parent.socket.emit("merchant",{num:}) and parent.socket.emit("merchant",{close:1})
num in the first one being whatever item spot you have your stand in
​
*/
​