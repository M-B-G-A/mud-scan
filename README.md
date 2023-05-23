# MUD-scan

working game example code at [here](https://github.com/M-B-G-A/emojimon)

## how to connect MUD Scan AND GAME

1. `git clone https://github.com/M-B-G-A/mud-scan.git`
2. change namespace in `mud.config.ts`
3. deploy it
4. `git clone https://github.com/M-B-G-A/emojimon.git`
5. add some code to your game system. 
```
// add below line on top of contract code.
abstract contract IMudScanWorld {
    function EmojiMon_AchievementSyste_setAchievement (address playerAddress, uint32 score, uint32 stage) virtual public;
}

// add like this line where you want to log score
IMudScanWorld(mudscanWorldAddress).EmojiMon_AchievementSyste_setAchievement(_msgSender(), 100 * mt, mt);
```
6. done

## first Game Stat Site developed with MUD

[![mudscan demo](https://github.com/M-B-G-A/mud-scan/assets/7679722/972e5b9e-1efb-4ab0-b361-c4a2b92ab08b)](https://mudscan.buidl.day/?chainId=4242)


## first game with connected with MUD-scan

[![emojimon demo](https://github.com/M-B-G-A/mud-scan/assets/7679722/0b692817-58b5-46ab-88bf-856f8eb84da3)](https://emojimon.buidl.day/?chainId=4242)

