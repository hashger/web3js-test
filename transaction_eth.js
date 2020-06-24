const Tx= require('ethereumjs-tx').Transaction;
const util = require('ethereumjs-util');
const Web3 = require('web3');
const web3 = new Web3('https://ropsten.infura.io/v3/3fece7f41eef4ec3a6df8be272f03848');

/*console.log(web3.eth.accounts.create()) */

const myPrivateKey1 = Buffer.from('2aa8c94b2c10ef20e588f1b03412967f7e7393ea80f0ebf15ccf548ce25e110f', 'hex');
const myAddress1 = '0x1190b47793C750C4fE6d6e51250E5351602EBb03';

const myPrivateKey2 = Buffer.from('f4b099457326d229a6cf723e2679e6484cbc0adf16d3d11a48e3457ba3b0ce23', 'hex');
const myAddress2 = '0xB6f1e6Ef4bbaE398E5Cd39caCb009137F4Ee4e99';
/*
console.log(util.privateToAddress('0xf4b099457326d229a6cf723e2679e6484cbc0adf16d3d11a48e3457ba3b0ce23').toString('hex'));
console.log(util.privateToAddress('0x2aa8c94b2c10ef20e588f1b03412967f7e7393ea80f0ebf15ccf548ce25e110f').toString('hex'));

web3.eth.getBalance(myAddress1, (err, bal)=>{
    console.log('Account1 Balance',web3.utils.fromWei(bal, 'ether'))
    //console.log('Account1 Balance',bal);
});

web3.eth.getBalance(myAddress2, (err, bal)=>{
    console.log('Account2 Balance',web3.utils.fromWei(bal, 'ether'))
    //console.log('Account2 Balance',bal);
});

*/
web3.eth.getTransactionCount(myAddress2,(err,txCount)=>{
    const txObject = {
        nonce: web3.utils.toHex(txCount),
        to: myAddress1,
        value: web3.utils.toHex(web3.utils.toWei('1', 'ether')),
        gasLimit:web3.utils.toHex(21000),
        gasPrice:web3.utils.toHex(web3.utils.toWei('10', 'gwei')),
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
})


// BUILD TX




/*/ SIGN TX

})
*/