
const Web3 = require('web3')


let url_main_net = "https://mainnet.infura.io/v3/b6fa80f417494b8e845c66a6ada5c760"
let ropsen_url = "https://ropsten.infura.io/v3/8f1d8783d38e46f484d5c9f026f5ac95"

addr =  '0xd1e0ba55189e71dF2DfAc7c6Cdee2f4E730D528D'

let web3 = new Web3(ropsen_url)

web3.eth.getBalance(addr, (err, balance) => {
    if (!err) {
        console.log(balance)
        console.log(web3.utils.fromWei(balance, 'ether'))
        // balance will be returned in Wei by defaults
        // use utility method to convert to ether 
    } else {
        console.log(err)
    }
})

// let wallet = web3.eth.accounts.wallet.create(2,'creating 2 accts')
// let account = web3.eth.accounts.create()

// // accessing wallet 
// wallet.add(account.privateKey)

// console.log(wallet)
// ////////////

// // get current block Number
// web3.eth.getBlockNumber().then(res => {
//     console.log(res)

//     ///12273680
//     // 12273684
// })


// web3.eth.getBlock(12273680).then(res => {
//     console.log(res)
// })



