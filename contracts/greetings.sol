pragma solidity >=0.4.22 <0.7.0;

contract Greetings {
    string public message;

    constructor(string memory initialMessage) public {
        message = initialMessage;
    }

    function setMessage(string memory newMessage) public {
        message = newMessage;
    }
}
