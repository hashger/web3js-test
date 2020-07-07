const Web3 = require('web3');
const url = 'https://mainnet.infura.io/v3/3fece7f41eef4ec3a6df8be272f03848';
const web3 = new Web3(url)

web3.eth.getGasPrice().then((gasInWei)=>{
    console.log(web3.utils.fromWei(gasInWei,'gwei'), 'gweis')
})

//console.log(web3.utils.keccak256('obo'))
const myPrivateKey2 = '0xf4b099457326d229a6cf723e2679e6484cbc0adf16d3d11a48e3457ba3b0ce23';



//console.log(web3.eth.accounts.privateKeyToAccount(myPrivateKey2))

//console.log('accouns',web3.eth.getAccounts((err, r)=>console.log(r)))


web3.eth.estimateGas({
    to: "0xB6f1e6Ef4bbaE398E5Cd39caCb009137F4Ee4e99",
    value:  web3.utils.toHex(web3.utils.toWei('100', 'ether')),

}).then((lel)=>console.log(lel))