// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract ColorGrid{
    
 mapping(uint => mapping(uint => uint)) cells;

 uint randNonce = 0;

 function setColors() public {
     uint seed = uint(keccak256(abi.encodePacked(block.timestamp,msg.sender,randNonce))) % 4;
     for(uint x = 1; x < 6; x++){
         for(uint y = 1; y < 8; y++){
             randNonce++;
             if(( x % 2 == 0 ) && ( y % 2 == 0 )){
                 cells[x][y] = seed;
             }
             if(( x % 2 == 0 ) && ( y % 2 == 1 )){
                 cells[x][y] = seed;
             }
             if(( x % 2 == 1 ) && ( y % 2 == 0 )){
                 cells[x][y] = seed;
             }
             if(( x % 2 == 1 ) && ( y % 2 == 1 )){
                 cells[x][y] = seed;
             }
         }  
     }
     
 }

 function getColor(uint x, uint y) public view returns (uint){
     require((x < 7) && (y < 5));
     return cells[x][y];
 }

}