//SPDX-Identifier-License: MIT

pragma solidity ^0.8.0;

import "./Manufacturer.sol";

contract Supplier {
    function checkCredibility(uint256 _drugCode) public view returns (bool) {
        Manufacturer manufacturer = Manufacturer(msg.sender);
        bool drugExist = manufacturer.doesDrugExist(_drugCode);
    }
}
