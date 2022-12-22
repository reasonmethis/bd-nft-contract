// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract NFKeeTees is ERC721, ERC721URIStorage, Ownable {
    using Strings for uint;
    
    constructor() ERC721("NFKeeTees", "NFKT") {}

    function _baseURI() internal pure override returns (string memory) {
        return "ipfs://bafybeibl7guejya2dldrsqpsug7osxix32qyr2t7ggxrzt6ihbkirwhkrq/";
    }

    function safeMint(uint256 tokenId, string memory password)
        public
    {
        require(_ownerOf(tokenId) == address(0), "already minted");
        require(tokenId > 0 && tokenId < 13, "no nft with this id");
        require(uint(keccak256(abi.encodePacked(password))) == 5371197818538708431964693887267777397450524156586665902680764130938474625560, "wrong password");
        _safeMint(msg.sender, tokenId);
        _setTokenURI(tokenId, string(abi.encodePacked(tokenId.toString(), ".json")));
    }

    // The following functions are overrides required by Solidity.

    function _burn(uint256 tokenId) internal override(ERC721, ERC721URIStorage) {
        super._burn(tokenId);
    }

    function tokenURI(uint256 tokenId)
        public
        view
        override(ERC721, ERC721URIStorage)
        returns (string memory)
    {
        return super.tokenURI(tokenId);
    }
}
