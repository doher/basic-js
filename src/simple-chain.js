const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    this.chain.push(`( ${value} )`);

    return this;
  },
  removeLink(position) {
    if (position <= 0 || position > this.getLength()) {
      this.chain = [];
      throw Error;
    }

    if (!(typeof position === 'number')) {
      this.chain = [];
      throw Error;
    }

    this.getLength() && this.chain.splice(position - 1, 1);

    return this;
  },
  reverseChain() {
    this.chain.reverse();

    return this;
  },
  finishChain() {
    const arr = [...this.chain];
    this.chain = [];
    return arr.join('~~');
  }
};

module.exports = chainMaker;
