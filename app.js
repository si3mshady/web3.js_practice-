const Web3 = require('web3')
// ganache local server 

let url_ganache = "http://127.0.0.1:9545"

let web3 = new Web3(url_ganache)


let url_infura_ropsten = "https://ropsten.infura.io/v3/8f1d8783d38e46f484d5c9f026f5ac95"

let web3Infura = new Web3(url_infura_ropsten)


let url_geth_eth = "http://127.0.0.1:8545"
let resWeb3Geth = new Web3(url_geth_eth)
console.log(resWeb3Geth)


// infura 
// connets to etherum network 
// endpoint to connect blockchain 
