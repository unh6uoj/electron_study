const axios = require("axios");
const cheerio = require("cheerio");

function delay(ms: number): Promise<void> {
    return new Promise<void>(function(resolve, reject) {
        setTimeout(function(){
            resolve();
        },ms);
    });
}

export function getHTML(url: String): Promise<string> {
    return new Promise((resolve, reject) => {
        delay(300).then(function() {
            axios.get(url).then(function(data: Promise<string>) {
                resolve(data);
            }
            );
        });
    })
}