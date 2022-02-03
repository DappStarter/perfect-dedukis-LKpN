require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea clog office skull dance birth muscle prosper install forget fresh gate'; 
let testAccounts = [
"0xb907a0e04c385b866594f7f80c050b3dc92fa4ae58243d73496023fbe7526008",
"0x5342123884558992011b33af34078530e18f8ac27cb3cabfc69c4cc20674eff0",
"0x4d169f8dbdcfbe8e960675747b8b38edff4fc3b9e2bceda775948749f0b89395",
"0x5a6ee58483ec66b1361bd2c50c568086a42bb317d50fbec81a0f2ab54b845cdc",
"0xfaae161f9324f55ea65b16361d3e80d5780a60f7576d65751396f8c04d4f1779",
"0xb3cc7e9ed46b80737a0f584fde36c654d47ef19ef3b2eb4c0a53d08686c8c091",
"0x30fdd71275e019b49b670c46c1a990167c5049e537f2070878a698956200256d",
"0x500c2bd641e537ff10ecacab47e230865b3c93d576818e755720913557457d86",
"0x2c8dedd8c4f7880733ee056cc340fe85030b014573a59d44ebc79333cfc85886",
"0xe5700dfeba46a02b68c652cdeea04d44d8c95a8f6c3dfa79a0505cd0b30c8b2b"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

