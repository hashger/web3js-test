const fetch = require("node-fetch");
const Web3 = require("web3");
const web3 = new Web3(
  "https://mainnet.infura.io/v3/3fece7f41eef4ec3a6df8be272f03848"
);

const URL = "https://ethgasstation.info/api/ethgasAPI.json";


function ethTxSpeed(speedness) {
   fetch(URL)
    .then((response) => response.json())
    .then((data) => {
      switch (speedness) {
        case "fast":
          return data.fastest * 100_000_000;
          break;
        case "medium":
          return data.fast * 100_000_000;
          break;
        case "slow":
          return data.safeLow * 100_000_000;
          break;
      }
    });
}

console.log(ethTxSpeed("fast"));


/*
function ethTxSpeed_(speedness){
    switch (speedness) {
        case "fast":
          return  fetch(URL)
          .then((response) => response.json())
            .then((data) => data.fastest * 100_000_000);
          break;
        case "medium":
            return  fetch(URL)
            .then((response) => response.json())
              .then((data) => data.fast * 100_000_000);
            break;
        case "slow":
            return  fetch(URL)
            .then((response) => response.json())
              .then((data) => data.safeLow * 100_000_000);
            break;
      }
    return 'fast';
}

console.log(ethTxSpeed_('fast');)
*/