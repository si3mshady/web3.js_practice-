pragma solidity >=0.4.17;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

// import 'https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC721/ERC721.sol';

contract FirstNFT is ERC721 {
    uint256 public tokenCounter;

    mapping(address => string) public _tokenURIs;

    constructor() public ERC721("Rar3Coll3ctabl3", "Rar3") {
        tokenCounter = 0;
    }

    function _setTokenURI(uint256 tokenId, string memory _tokenURI)
        internal
        virtual
    {
        require(
            _exists(tokenId),
            "ERC721Metadata: URI set of nonexistent token"
        );
        _tokenURIs[tokenId] = _tokenURI;
    }

    function createCollectable(string memory tokenURI)
        public
        returns (uint256)
    {
        uint256 newItemId = tokenCounter;
        //build in function use safe mint to
        _safeMint(msg.sender, newItemId);
        _setTokenURI(newItemId, tokenURI);
        tokenCounter = tokenCounter + 1;
        return newItemId;
    }
}
