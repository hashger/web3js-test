const Web3 = require('web3');
const url = 'https://mainnet.infura.io/v3/3fece7f41eef4ec3a6df8be272f03848';
const web3 = new Web3(url)

web3.eth.getGasPrice().then((gasInWei)=>{
    console.log(web3.utils.fromWei(gasInWei, 'gwei'))
})

console.log(web3.utils.keccak256('obo'))