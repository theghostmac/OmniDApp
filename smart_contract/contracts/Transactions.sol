// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

// contract name is conventionally the same as file name
contract Transactions {
    //transactionCounter holds the number of our transactions
    uint256 transactionCounter;
    // we  will call the event later on
    event Transfer(address from, address receiver, uint amount, string message, uint256 timestamp, string keyword);

    // struct will hold all 
    struct TransferStructure {
        address sender;
        address receiver;
        uint amount;
        string message;
        uint256 timestamp;
        string keyword;
    }

    // create an array to store the above objects.
    TransferStructure[] transactions;

    function addToBlockchain() public {

    }

    function getAllTransactions() public view returns (TransferStructure[] memory) {

    }

    function getTransactionCount() public {

    }


}