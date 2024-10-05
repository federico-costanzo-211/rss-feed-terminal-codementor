const readline = require('node:readline');
const { stdin: input, stdout: output} = require('node:process');
const Parser = require('rss-parser');

const parser = new Parser();

async function showRSSInTerminal(link, post_number){
    let feed = await parser.parseURL(link);
    console.log(feed.title + "\n");

    let counter = 0;
    do {
        let item = feed.items[counter];
        console.log(item.title + "\n" + item.link + "\n" + item.author + "\n" + item.isoDate + "\n");
        counter += 1;
    } while (counter < post_number);
};