require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom drink frame suspect notice crime remind evil journey kitchen orange sword'; 
let testAccounts = [
"0x97b4b67fc36c9300c93f4b8986b3cc242fce7b4ab0cf575a535bd49158a0e8b7",
"0xbb130b86e94f2de0cb5b026ca199c1fb6ffae75cf215ae16aaec369a9bd5e6b9",
"0xde97ca2f926be450a557442446dc0c728ac0dd6c6f2428e8875f37414e85e034",
"0xb5b2569652609a9ce856432a102fa16d9888520289745aee936d786de4d24a31",
"0xf87958001e6ac7a827b840dff201991b1f0bca3f0c622a91566941bcf7b32c15",
"0x52cb62cfed8162f206029f9bc4bae0b5804a62dc9a10e83951315d95dd4636dc",
"0x73d350241814b6db9a48a61beb781086417e7454b58588fd4781961d06928930",
"0x756cef2e59eab723b40315cdc2142496aadca4319ccf041e4a89d049483c577e",
"0x7f2ec6e7ac8faf5ffd3ad8c1c5341a976892dc51cc3a92f2e46893822f43265b",
"0x545f3a5b5cd205cc62112f8aab0c2fd866b73c9eba7b24c6bad93947032a045c"
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
            version: '^0.5.11'
        }
    }
};
