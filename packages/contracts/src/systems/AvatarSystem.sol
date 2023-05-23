// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0;

import { System } from "@latticexyz/world/src/System.sol";
import { Avatar } from "../codegen/Tables.sol";
import { addressToEntityKey } from "../addressToEntityKey.sol";

contract AvatarSystem is System {

  function setAvatar (string memory url) public {
    // TODO:check callee is system's owner or allow list
    // console.log(_msgSender());
    bytes32 player = addressToEntityKey(_msgSender());
    Avatar.set(player, url);
    // emit GetAchievement(player, stage, score);
  }
}
