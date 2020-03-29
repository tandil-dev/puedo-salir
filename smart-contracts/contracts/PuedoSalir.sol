pragma solidity 0.6.4;

import "./Ownable.sol";

contract PuedoSalir is Ownable {
    bool public status;
    string public message;

    event NewStatus(bool status);
    event NewMessage(string message);

    constructor(string memory _message, bool _status) public {
        status = _status;
        message = _message;
        emit NewMessage(_message);
        emit NewStatus(_status);
    }

    function setStatus(bool _status) external onlyOwner {
        status = _status;
        emit NewStatus(_status);
    }

    function setMessage(string memory _message) public {
        message = _message;
        emit NewMessage(_message);
    }

}
