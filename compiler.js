const path = require('path')
const fs = require('fs')
const solc = require('solc')

const contractPath = path.resolve(__dirname, 'contract','Nft.sol')
const source = fs.readFileSync(contractPath, 'utf8')

// console.log(contractPath)
 console.log(solc.compile(source, 1).contracts[':FirstNFT'])