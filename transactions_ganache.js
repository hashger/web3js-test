const Web3 = require('web3');
const url = 'HTTP://127.0.0.1:7545';
const web3 = new Web3(url);

const account1 = '0x90d960A2bB22F116Ca0F5fc7f4160EA58a04eFb5';
const account2 = '0x058ab72a8738Ef8cAE478fc19F9576ec4597A6fC';


web3.eth.getBalance(account1,(err, result)=>{
    {balance = result}
    etherBalance = web3.utils.fromWei(balance, 'ether');
    console.log(etherBalance);
});

/*
web3.eth.sendTransaction({
    from: account1,
    to: account2,
    value: web3.utils.toWei('1', 'ether')

})
*/

web3.eth.getBalance(account2,(err, result)=>{
    {balance = result}
    etherBalance = web3.utils.fromWei(balance, 'ether');
    console.log(etherBalance);
});

console.log(web3.eth.personal.unlockAccount);
