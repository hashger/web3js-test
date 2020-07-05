const Web3 = require('web3');
const url = 'https://mainnet.infura.io/v3/3fece7f41eef4ec3a6df8be272f03848';
const web3 = new Web3(url)

//blockheight
web3.eth.getBlockNumber().then(console.log);

//exact block
web3.eth.getBlock('latest').then((block)=>{
    console.log({
        blockHash: block.hash,
        blockNumber: block.number
    });
});

web3.eth.getBlockNumber().then((latest)=>{
    for(let i=0; i < 10; i++){
        web3.eth.getBlock(latest - i).then((block)=>{
            console.log(block.number); 
        })
    }
});

web3.eth.getBlockTransactionCount('latest').then(console.log);


let hash = '0x0ae64787c40804b4a1d4edbdfb4e5eef14e84baeb053ffa78c86fe7870ecc8c7';
web3.eth.getTransactionFromBlock(hash,2).then(console.log)