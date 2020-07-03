const Tx= require('ethereumjs-tx').Transaction;
const util = require('ethereumjs-util');
const Web3 = require('web3');
const web3 = new Web3('https://ropsten.infura.io/v3/3fece7f41eef4ec3a6df8be272f03848');

const myPrivateKey2 = Buffer.from('f4b099457326d229a6cf723e2679e6484cbc0adf16d3d11a48e3457ba3b0ce23', 'hex');
const myAddress2 = '0xB6f1e6Ef4bbaE398E5Cd39caCb009137F4Ee4e99';

web3.eth.getTransactionCount(myAddress2,(err,txCount)=>{

	const smartContract = '0xE0d89f72938675813D54cBFFf0b593239D40761d';
	const ABI = [{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Withdrawal","type":"event"},{"inputs":[],"name":"destroy","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"withdraw_amount","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}];
	let contract =  new web3.eth.Contract(ABI, smartContract);

	const data = contract.methods.withdraw(web3.utils.toWei('.1', 'ether')).encodeABI();
	
	const txObject = {
		to: smartContract,
        nonce: web3.utils.toHex(txCount),
        gasLimit:web3.utils.toHex(35000),
        gasPrice:web3.utils.toHex(web3.utils.toWei('5', 'gwei')),
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

