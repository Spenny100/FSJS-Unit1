/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/***
 * Colors for changing the background
***/

// background: linear-gradient(to right, #43cea2, #185a9d)
// background: linear-gradient(to right, #ff416c, #ff4b2b);
// background: linear-gradient(to right, #396afc, #2948ff);
// background: linear-gradient(to right, #3494e6, #ec6ead);
// background: linear-gradient(to right, #8e0e00, #1f1c18);

//Body Colors Array:

colors = [
    {
        bcolor: "linear-gradient(to right, #43cea2, #185a9d)"
    },
    {
        bcolor: "linear-gradient(to right, #833ab4, #fd1d1d, #fcb045)"
    },
    {
        bcolor: "linear-gradient(to right, #00c6ff, #0072ff)"
    },
    {
        bcolor: "linear-gradient(to right, #3494e6, #ec6ead)"
    },
    {
        bcolor: "linear-gradient(to right, #c21500, #ffc500)"
    }


];



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
        quote: '"This is Pretzel Day."',
        source: 'Stanley Hudson',
        citation: 'The Office',
        year: '2006'
    },
    {
        quote: '"I got six numbers. One more and it would have been a complete phone number."',
        source: 'Kevin Malone',
        citation: 'The Office',
        year: '2009'
    },
];


/***
 * `getRandomQuote` function
***/



function getRandomQuote(quoteParam) {
    let randomizer = quoteParam[Math.floor(Math.random() * quoteParam.length)];
    return randomizer;
 }


 function getRandomColor(colorParam) {
     let colorRandomizer = colorParam[Math.floor(Math.random() * colorParam.length)];
     return colorRandomizer;
 }




/***
 * `printQuote` function
***/


function printQuote(){
    const randomQuote =  getRandomQuote(quotes);
    const randomColor = getRandomColor(colors);
    HTMLbuild = `<p class="quote"> ${randomQuote.quote}</p><p class="source">${randomQuote.source}<span class="citation">${randomQuote.citation}</span><span class="year">${randomQuote.year}</span></p>`;
    let BGCcolor = randomColor.bcolor;

    return [document.getElementById('quote-box').innerHTML = HTMLbuild, document.body.style.background = BGCcolor];


}

 printQuote();


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);