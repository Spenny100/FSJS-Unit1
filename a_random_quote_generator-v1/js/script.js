/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/

quotes = [
    {
        quote: '"I love inside jokes. I hope to be a part of one someday."',
        source: 'Michael Scott',
        citation: 'The Office',
        year: '2006'
    },
    {
        quote: '"You couldn\'t handle my undivided attention."',
        source: 'Dwight Schrute',
        citation: 'The Office',
        year: '2010'
    },
    {
        quote: '"Andy Bernard does not lose contests. He wins them. Or he quits them. Because they\'re unfair."',
        source: 'Andy Bernard',
        citation: 'The Office',
        year: '2009'
    },
    {
        quote: '"This is Pretzel Day"',
        source: 'Stanley Hudson',
        citation: 'The Office',
        year: '2006'
    },
    {
        quote: '"I got six numbers. One more and it would have been a complete phone number"',
        source: 'Kevin Malone',
        citation: 'The Office',
        year: '2009'
    },
]


/***
 * `getRandomQuote` function
***/

function getRandomQuote(quoteParam) {
    let HTMLbuild = '<h1>';
    for (let i = 0; i < quoteParam.length; i++ ) {
        HTMLbuild += `<h2> ${quoteParam[i].quote} </h2> <br /> <h3> - ${quoteParam[i].source} ${quoteParam[i].citation} <i> ${quoteParam[i].year}</i></h3> </h1>`;
        console.log(HTMLbuild);
    }
}

getRandomQuote(quotes);

/***
 * `printQuote` function
***/


function printQuote(){

}


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);