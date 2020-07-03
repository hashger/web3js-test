const Tx= require('ethereumjs-tx').Transaction;
const util = require('ethereumjs-util');
const Web3 = require('web3');
const web3 = new Web3('https://ropsten.infura.io/v3/3fece7f41eef4ec3a6df8be272f03848');


const myPrivateKey1 = Buffer.from('2aa8c94b2c10ef20e588f1b03412967f7e7393ea80f0ebf15ccf548ce25e110f', 'hex');
const myAddress1 = '0x1190b47793C750C4fE6d6e51250E5351602EBb03';
const myPrivateKey2 = Buffer.from('f4b099457326d229a6cf723e2679e6484cbc0adf16d3d11a48e3457ba3b0ce23', 'hex');
const myAddress2 = '0xB6f1e6Ef4bbaE398E5Cd39caCb009137F4Ee4e99';

/*
web3.eth.getTransactionCount(myAddress2,(err,txCount)=>{

    const data = '0x608060405234801561001057600080fd5b50336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506102dd806100606000396000f3fe60806040526004361061002d5760003560e01c80632e1a7d4d1461008757806383197ef0146100c257610082565b36610082573373ffffffffffffffffffffffffffffffffffffffff167fe1fffcc4923d04b559f4d29a8bfc6cda04eb5b0d3c460751c2402c5c5cc9109c346040518082815260200191505060405180910390a2005b600080fd5b34801561009357600080fd5b506100c0600480360360208110156100aa57600080fd5b81019080803590602001909291905050506100d9565b005b3480156100ce57600080fd5b506100d76101df565b005b67016345785d8a00008111156100ee57600080fd5b80471015610147576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260358152602001806102736035913960400191505060405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff166108fc829081150290604051600060405180830381858888f1935050505015801561018d573d6000803e3d6000fd5b503373ffffffffffffffffffffffffffffffffffffffff167f7fcf532c15f0a6db0bd6d0e038bea71d30d808c7d98cb3bf7268a95bf5081b65826040518082815260200191505060405180910390a250565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461023857600080fd5b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16fffe496e73756666696369656e742062616c616e636520696e2066617563657420666f72207769746864726177616c2072657175657374a26469706673582212203b7a7202cfeb00c0d6462f9ea36912089e1cbeec102c3cb01063c7ccd404402264736f6c634300060a0033'


    const txObject = {
        nonce: web3.utils.toHex(txCount),
        gasLimit:web3.utils.toHex(1000000),
        gasPrice:web3.utils.toHex(web3.utils.toWei('10', 'gwei')),
        data: data,
    }
    console.log(txObject);

    const TX = new Tx(txObject, {chain: 'ropsten'});
    TX.sign(myPrivateKey2);

    const serializedTx = TX.serialize();
    const raw = '0x' + serializedTx.toString('hex');

    //BROADCAST TX
    web3.eth.sendSignedTransaction(raw, (err, txHash)=>{
        console.log('txHash:', txHash);
    });
   
});
*/

const smartContract = '0xE0d89f72938675813D54cBFFf0b593239D40761d';
const ABI = [{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Withdrawal","type":"event"},{"inputs":[],"name":"destroy","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"withdraw_amount","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}];
let contract =  new web3.eth.Contract(ABI, smartContract);
console.log(contract.methods);