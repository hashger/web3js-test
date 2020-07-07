const fetch = require("node-fetch");
const BC = require('bignumber.js');
const Web3 = require("web3");
const web3 = new Web3("https://mainnet.infura.io/v3/3fece7f41eef4ec3a6df8be272f03848");

const URL = "https://ethgasstation.info/api/ethgasAPI.json";



async function gasStation(speedness){
    let response = await fetch(URL);
    let data = await response.json();
    let gasPrice = await data[speedness];
    return gasPrice *  100_000_000;
}

async function fee(speedness) {

    const gasPrice = await gasStation(speedness);
    const txSample = { 
    data: `0x${'0'.repeat(80)}`,
    from: `0x${'0'.repeat(40)}`, 
    to: `0x${'0'.repeat(40)}`, 
    value: `1${'0'.repeat(24)}`};
    const gasLimit = await web3.eth.estimateGas(txSample);

    //console.log('gasPrice: ',gasPrice, 'gasLimit:', gasLimit );

    return BC.BigNumber(gasPrice).times(gasLimit).shiftedBy(-18).toString()
}

fee('fastest').then((feeInEther)=> console.log('fastest', feeInEther));
fee('fast').then((feeInEther)=> console.log('fast', feeInEther));
fee('safeLow').then((feeInEther)=> console.log('safeLow', feeInEther));

 