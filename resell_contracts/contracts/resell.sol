// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";

contract resell {

    uint public id;
    uint public countSold;

    struct token {
        address contract_address;
        uint token_id;
        uint price;
        string token_type;
        string metadata;
        address payable owner;
        bool sold;
    }

    mapping ( uint => token) tokensByid;

    function resellToken721(address contract_address,uint _id,uint price) public {
        ERC721 nftContract = ERC721(contract_address);
        require(nftContract.ownerOf(_id)==msg.sender,"You are not the owner of this token");
        id=id+1;
        string memory metadata = nftContract.tokenURI(_id);
        tokensByid[id]=token(contract_address,_id,price,"ERC721",metadata,payable(msg.sender),false);
    }

    function resellToken1155(address contract_address,uint _id,uint price) public {
        ERC1155 nftContract = ERC1155(contract_address);
        require(nftContract.balanceOf(msg.sender,_id)>0,"You don't have any tokens");
        id=id+1;
        string memory metadata = nftContract.uri(_id);
        tokensByid[id]=token(contract_address,_id,price,"ERC1155",metadata,payable(msg.sender),false);
    }

    function buyToken(uint _id) public payable {
        require(tokensByid[_id].price==msg.value,"You are not paying the right amount");
        require(tokensByid[_id].sold==false,"This token is already sold");
        if(keccak256(abi.encodePacked((tokensByid[_id].token_type))) == keccak256(abi.encodePacked(("ERC721")))) {
            ERC721 nftContract = ERC721(tokensByid[_id].contract_address);
            nftContract.transferFrom(tokensByid[_id].owner,msg.sender,tokensByid[_id].token_id);
        }
        else if(keccak256(abi.encodePacked((tokensByid[_id].token_type))) == keccak256(abi.encodePacked(("ERC1155")))) {
            ERC1155 nftContract = ERC1155(tokensByid[_id].contract_address);
            nftContract.safeTransferFrom(tokensByid[_id].owner,msg.sender,tokensByid[_id].token_id,1,"");
        }
        tokensByid[_id].owner.transfer(msg.value);
        tokensByid[_id].owner=payable(msg.sender);
        tokensByid[_id].sold=true;
        countSold=countSold+1;
    }

    function getTokensByid(uint _id) public view returns (token memory) {
        return tokensByid[_id];
    }

    function fetchTokensListed() public view returns (token[] memory) {
        uint count = id-countSold;
        token[] memory tokensListed = new token[](count);
        for(uint i=1;i<=count;i++) {
            if(tokensByid[i].sold==false) {
                tokensListed[i-1]=tokensByid[i];
            }
        }
        return tokensListed;
    }
}