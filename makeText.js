/** Command-line tool to generate Markov text. */
const fs = require('fs');
const process = require('process');
const axios = require('axios');
const MarkovMachine = require('./markov.js');

function fileRead(path){
    fs.readFile(path, 'utf8', (err, data) => {
        if(err){
            console.log(`Error in reading ${path}: ${err}`);
            process.kill(1);
        }
        let mm = new MarkovMachine(data);
        console.log(mm.makeText());
    })
}

async function webRead(url){
    try{
        let res = await axios.get(url);
        let mm = new MarkovMachine(res.data);
        console.log(mm.makeText());
    } catch (err) {
        console.log(`Error fetching ${url}: ${err}`);
        process.exit(1);
    }
}

let path;
if (process.argv[2] === 'file') {
    path = process.argv[3];
    fileRead(path);
} else if (process.argv[2] === 'url') {
    path = process.argv[3];
    webRead(path);
} else {
    console.log("Please provide what type of reading, file or url")
}