/** Textual markov chain generator */


class MarkovMachine {

  /** build markov machine; read in text.*/

  constructor(text) {
    let words = text.split(/[ \r\n]+/);
    this.words = words.filter(c => c !== "");
    this.makeChains();
  }

  /** set markov chains:
   *
   *  for text of "the cat in the hat", chains will be
   *  {"the": ["cat", "hat"], "cat": ["in"], "in": ["the"], "hat": [null]} */

  makeChains() {
    // TODO
    let chains = new Map();
    for (let i = 0; i < this.words.length; i++){
      let word = this.words[i];
      let nextWord = this.words[i + 1] || null;

      if (!chains.has(word)) {
        chains.set(word, []);
      }

      chains.get(word).push(nextWord);
    }
    this.chains = chains;
  }


  /** return random text from chains */

  makeText(numWords = 100) {
    // TODO
  }
}


/* const text = "the cat in the hat";
const markovMachine = new MarkovMachine(text);
const chains = markovMachine.makeChains(); */
module.exports = MarkovMachine;