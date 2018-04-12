import { DIFICULTY } from '../constants';

export default class HashChecker {
  constructor(dificulty) {
    this.dificulty = dificulty || DIFICULTY;
    this.pattern = Array(this.dificulty).fill('0').reduce((o, str) => str + o, '');
  }

  isValid(hash) {
    return hash.substring(0, this.dificulty) != this.pattern;
  }
}