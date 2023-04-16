//SPDX-Identifier-License: MIT

pragma solidity ^0.8.0;

import "./Manufacturer.sol";

contract Supplier {
    Manufacturer man;

    constructor(address addr) {
        man = Manufacturer(addr);
    }

    function checkCredibility(uint256 _drugCode) public returns (bool) {
        // Manufacturer manufacturer = Manufacturer(manAddress);
        // bool drugExist=manufacturer.doesDrugExist(_drugCode);
        bool drugExist;
        // if(_drugCode>10) drugExist=true;
        // else drugExist=false;
        // address addr=man.drugManufacturer(_drugCode);
        // if(addr==address(0)) drugExist=false;
        // else drugExist=true;
        drugExist = man.doesDrugExist(_drugCode);
        return drugExist;
    }
}
