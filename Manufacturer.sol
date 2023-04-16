//SPDX-Licence-Identifier:MIT

pragma solidity ^0.8.0;

contract Manufacturer {
    uint256 noOfDrugs;
    string brandName;
    string drugName;
    string dateOfManufacture;
    string expiryDate;
    uint256 price;

    struct drug {
        string brandName;
        string drugName;
        string dateOfManufacture;
        string expiryDate;
        uint256 price;
    }

    mapping(uint256 => drug) public alldrugs;

    function createDrug(
        string memory _brandName,
        string memory _drugName,
        string memory _dateOfManufacture,
        string memory _expiryDate,
        uint256 _price
    ) external returns (uint256) {
        uint256 drugcode = randMod(100);
        alldrugs[drugcode] = drug(
            _brandName,
            _drugName,
            _dateOfManufacture,
            _expiryDate,
            _price
        );
        return drugcode;
    }

    function randMod(uint256 _number) internal view returns (uint256) {
        return
            uint256(
                keccak256(
                    abi.encodePacked(
                        block.timestamp,
                        block.difficulty,
                        msg.sender
                    )
                )
            ) % _number;
    }
}
