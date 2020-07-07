const Web3=require('web3')
const BC = require('bignumber.js');
const web3 = new Web3('https://mainnet.infura.io/v3/3fece7f41eef4ec3a6df8be272f03848');

async function fee() {
    const gasPrice = await web3.eth.getGasPrice();
    const lastBlock = await web3.eth.getBlock('latest');
    //const gasLimit = lastBlock.gasLimit/lastBlock.transactions.length;
    //const txSample = { to: 0x${'0'.repeat(40)}, value: 1${'0'.repeat(24)}};
    const txSample = { 
    data: `0x${'0'.repeat(80)}`,
    from: `0x${'0'.repeat(40)}`, 
    to: `0x${'0'.repeat(40)}`, 
    value: `1${'0'.repeat(24)}`};
    console.log(txSample);
    //const gasLimit = await web3.eth.estimateGas({ to: "0x11f4d0A3c12e86B4b5F39B213F7E19D048276DAe", data: "0xc6888fa10000000000000000000000000000000000000000000000000000000000000003", value: '1000000000000000'});
    const gasLimit = await web3.eth.estimateGas(txSample);
    console.log('gasPrice: ',gasPrice, 'gasLimit:', gasLimit, BC.BigNumber(gasPrice).times(gasLimit).shiftedBy(-18).toString());
    //const eg = await web3.eth.estimateGas({
    //to: "0x11f4d0A3c12e86B4b5F39B213F7E19D048276DAe",
    //data: "0xc6888fa10000000000000000000000000000000000000000000000000000000000000003"});
    //console.log('eg', eg);
}

fee();