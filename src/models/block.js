import Transation from './transaction';
import sha256 from 'js-sha256';
import HashChecker from '../helpers/hash-checker';

const hashChecker = new HashChecker();

export default class Block {
  constructor(previousHash, transaction) {
    this.previousHash = previousHash;
    this.timestamp = Date.now();
    this.hash = '';
    this.transaction = transaction;
    this.nonce = 0;
  }

  toString() {
    return this.previousHash  + this.timestamp + this.transaction.toString() + this.nonce;
  }

  mine() {
    this.hash = sha256(this.toString());

    while(hashChecker.isValid(this.hash)) {
      this.nonce++;
      this.hash = sha256(this.toString());
      //console.log(this.hash);
    }

    console.log('New Block');
    console.log(this.hash);
    console.log(this.nonce);
  }
}