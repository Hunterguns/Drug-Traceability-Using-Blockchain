//SPDX-Licence-Identifier:MIT

pragma solidity ^0.8.0;
̥
import "hardhat/console.sol";

contract Manufacturer {
    address public owner;

    constructor() {
        owner = msg.sender;
    }

    uint256 noOfDrugs;
    string brandName;
    string drugName;
    string dateOfManufacture;
    string expiryDate;
    uint256 price;
    uint256 public drugcode;

    struct drug {
        string brandName;
        string drugName;
        string dateOfManufacture;
        string expiryDate;
        address manufacturerAddress;
        uint256 price;
    }

    mapping(uint256 => drug) public drugInfo;
    mapping(uint256 => address) public drugManufacturer;

    function createDrug(
        string memory _brandName,
        string memory _drugName,
        string memory _dateOfManufacture,
        string memory _expiryDate,
        uint256 _price
    ) external returns (uint256, address) {
        drugcode = randMod(1000000);
        drugInfo[drugcode] = drug(
            _brandName,
            _drugName,
            _dateOfManufacture,
            _expiryDate,
            msg.sender,
            _price
        );
        drugManufacturer[drugcode] = msg.sender;
        console.log("log 1");
        console.log(drugcode);
        return (drugcode, msg.sender);
    }

    function showDrugCode() public view returns (uint256) {
        return drugcode;
    }

    function doesDrugExist(uint256 _drugCode) public view returns (bool) {
        if (drugManufacturer[_drugCode] == address(0)) return false;
        else return true;
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

    function retrieveDrug(
        uint256 _drugcode
    )
        public
        view
        returns (
            string memory,
            string memory,
            string memory,
            string memory,
            address,
            uint256
        )
    {
        return (
            drugInfo[_drugcode].brandName,
            drugInfo[_drugcode].drugName,
            drugInfo[_drugcode].dateOfManufacture,
            drugInfo[_drugcode].expiryDate,
            drugInfo[_drugcode].manufacturerAddress,
            drugInfo[_drugcode].price
        );
    }

    function contractAddress() public view returns (address) {
        return address(this);
    }
}

//string memory,string memory,string memory,string memory,address,uint256
