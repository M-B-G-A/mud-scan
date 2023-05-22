// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0;

import { System } from "@latticexyz/world/src/System.sol";
import { Achievements } from "../codegen/Tables.sol";
import { addressToEntityKey } from "../addressToEntityKey.sol";

contract AchievementSystem is System {
  event GetAchievement(bytes32 indexed player, uint32 stage, uint32 score);

  function setAchievement (address playerAddress, uint32 score, uint32 stage) public {
    // TODO:check callee is system's owner or allow list
    // console.log(_msgSender());
    bytes32 player = addressToEntityKey(address(playerAddress));
    uint32 prevScore = Achievements.getTotal(player);
    uint256 mask = Achievements.getMask(player);
    Achievements.set(player, prevScore + score, stage == 0 ? 0 : (mask | (uint256)(1 << stage)));
    // emit GetAchievement(player, stage, score);
  }
}
