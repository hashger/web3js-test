let Web3 = require('web3');

let url = 'https://mainnet.infura.io/v3/3fece7f41eef4ec3a6df8be272f03848';
let web3 = new Web3(url);

let address = '0x742d35Cc6634C0532925a3b844Bc454e4438f44e';
/*
console.log(web3.eth.getBalance(address,(err, bal)=> {balance = bal})); */
web3.eth.getBalance(address,(err, bal)=>{
    {balance = bal};
    console.log('Wei',balance);
    etherBalance = web3.utils.fromWei(balance, 'ether');
    console.log(typeof balance)
    console.log('Ethers: ',etherBalance);
});

console.log(web3.utils.unitMap);