import Block from './block';

export default class Blockchain {
  constructor() {
    this.blocks = [];
    this.addGenesisBlock();
  }

  addGenesisBlock() {
    let genesisBlock = new Block(0, []);
    genesisBlock.mine();
    this.blocks.push(genesisBlock);
  }

  addBlock(block) {
    block.mine();
    this.blocks.push(block);
  }

  getPreviousHash() {
    return this.blocks[this.blocks.length - 1].hash;
  }
}