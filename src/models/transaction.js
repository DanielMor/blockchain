
export default class Transation {
  constructor(source, target, value) {
    this.source = source;
    this.target = target;
    this.value = value;
  }

  toString() {
    return this.source + '->' + this.target + ':' + this.value;
  }
}