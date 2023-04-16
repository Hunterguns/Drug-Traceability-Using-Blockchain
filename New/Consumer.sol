//SPDX-Identifier-License: MIT

pragma solidity ^0.8.0;

import "./Manufacturer.sol";

contract Consumer {
    Manufacturer man;

    constructor(address addr) {
        man = Manufacturer(addr);
    }

    struct drug {
        string brandName;
        string drugName;
        string dateOfManufacture;
        string expiryDate;
        address manufacturerAddress;
        uint256 price;
    }

    function checkCredibility(uint256 _drugCode)
        public
        returns (
            string memory,
            string memory,
            string memory,
            string memory,
            address,
            uint256
        )
    {
        // return (man.retrieveDrug(_drugCode).brandName, man.retrieveDrug(_drugCode).drugName,man.retrieveDrug(_drugCode).dateOfManufacture,man.retrieveDrug(_drugCode).expiryDate,man.retrieveDrug(_drugCode).manufacturerAddress,man.retrieveDrug(_drugCode).price);
        //         (string memory brandName,
        // string memory drugName,
        // string memory dateOfManufacture,
        // string memory expiryDate,
        // address manufacturerAddress,
        // uint256 price)=man.retrieveDrug(_drugCode);
        // return (brandName, drugName,dateOfManufacture,expiryDate,manufacturerAddress,price);
        // drug memory currDrug=drug(man.retrieveDrug(_drugCode));
        // drug memory currDrug=man.retrieveDrug(_drugCode);
        // var(a,b,c,d,e,f)=man.retrieveDrug(_drugcode);
        (
            string memory a,
            string memory b,
            string memory c,
            string memory d,
            address e,
            uint256 f
        ) = man.retrieveDrug(_drugCode);

        // return (currDrug.brandName, currDrug.drugName,currDrug.dateOfManufacture,currDrug.expiryDate,currDrug.manufacturerAddress,currDrug.price);
        return (a, b, c, d, e, f);
    }
}
