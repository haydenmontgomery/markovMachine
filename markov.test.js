const MarkovMachine = require('./markov.js');

describe("cat in the hat", function() {
    let mm = new MarkovMachine("the cat in the hat");
    test("always ends in hat", function() {
        let output = mm.makeText();
        expect(output.endsWith("hat")).toBe(true);
    })
})