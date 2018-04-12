import Blockchain from './models/blockchain';
import Block from './models/block';
import Transaction from './models/transaction';

import { randomBytes } from 'crypto';
import secp256k1 from 'secp256k1';
/*
const msg = randomBytes(32);
let privKey
do {
  privKey = randomBytes(32);
  console.log('privKey', privKey);
} while (!secp256k1.privateKeyVerify(privKey))
 
const pubKey = secp256k1.publicKeyCreate(privKey)
 
console.log('Private key', privKey.toString('hex'));
console.log('Public key', pubKey.toString('hex'));

const sigObj = secp256k1.sign(msg, privKey.toString('hex'))
console.log(sigObj);
console.log(secp256k1.verify(msg, sigObj.signature, pubKey.toString('hex')))*/

const blockchain = new Blockchain();

blockchain.addBlock(new Block(blockchain.getPreviousHash(), new Transaction('daniel', 'vitor', 10)));
blockchain.addBlock(new Block(blockchain.getPreviousHash(), new Transaction('daniel', 'vitor', 10)));
blockchain.addBlock(new Block(blockchain.getPreviousHash(), new Transaction('daniel', 'vitor', 10)));
blockchain.addBlock(new Block(blockchain.getPreviousHash(), new Transaction('daniel', 'vitor', 10)));
blockchain.addBlock(new Block(blockchain.getPreviousHash(), new Transaction('daniel', 'vitor', 10)));
blockchain.addBlock(new Block(blockchain.getPreviousHash(), new Transaction('daniel', 'vitor', 10)));

console.log(blockchain.blocks);