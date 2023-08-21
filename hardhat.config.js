// 
require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity:'0.8.4',
  networks: {
    rinkeby:{
      url:'https://eth-rinkeby.alchemyapi.io/v2/hKB46-klSEUqVGmwb_GEW6J44bPufoV0',
      accounts: ['ad51b9b11efb774d2273e952810d15804316db16d5b4ae86b521202f2ed2d61f']
    }
  }
}