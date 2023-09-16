// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract ColorGrid{

 mapping (uint => mapping (uint => uint)) cells;

 uint randNonce = 0;

 constructor(){
    uint seed = uint(keccak256(abi.encodePacked(block.timestamp,msg.sender,randNonce)));
     for(uint x = 1; x < 6; x++){
         for(uint y = 1; y < 8; y++){
             randNonce++;
             cells[x][y] = seed % 4;
             seed = uint(keccak256(abi.encodePacked(block.timestamp,msg.sender,randNonce)));
         }  
     }
 }

 function getColor(uint x, uint y) public view returns (uint){
    require((x != 0) && (y != 0),"Zero numbers not allowed");
     require((x < 6) && (y < 8),"x or y out of bound");
     return cells[x][y];
 }
}