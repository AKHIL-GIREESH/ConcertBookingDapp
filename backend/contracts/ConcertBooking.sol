// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract concertBooking{

    uint8 public maxNumberOfSeats;

    mapping( address => bool) public bookedAlready;

    uint8 public numberOfSeatsFilled;

    constructor(uint8 _maxNumberOfSeats){
        maxNumberOfSeats = _maxNumberOfSeats;
    }

    function bookASeat() public {
        require(!bookedAlready[msg.sender],"You have already booked a seat");
        require(numberOfSeatsFilled<maxNumberOfSeats,"Bookings Closed");
        bookedAlready[msg.sender] = true;
        numberOfSeatsFilled+=1;
    }
}