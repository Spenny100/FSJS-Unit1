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



//Body Colors Array holding objects with the bcolor property and it's color value

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

//The quotes array which holds 5 different objects which contain 4 different properties and values
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


// The get random quote functions holds a variable called randomizer. Assigned to that variable is the code that selects a random object from the quotes array using Math objects.
//The function then returns the value stored in the randomizer variable. quoteParam is the parameter that will take in the quotes array.
function getRandomQuote(quoteParam) {
    let randomizer = quoteParam[Math.floor(Math.random() * quoteParam.length)];
    return randomizer;
 }

//The getRandomColor function mimics the getRandomQuote function. But instead, it pulls from the colors array with the colorParam parameter.
 function getRandomColor(colorParam) {
     let colorRandomizer = colorParam[Math.floor(Math.random() * colorParam.length)];
     return colorRandomizer;
 }




/***
 * `printQuote` function
***/

//Stored inside the printQuote function are the getRandom functions from above. Each is assigned to the variables randomQuote and randomColor. Additonaly, each functions takes in the arrays //for parameters

// The HTMLbuild variable holds the html inside of a template literal which will end up in the which will end up in the div element with the ID of quote-box. The BGCcolor variable holds the
// color gradient that will be applied to the background of the page.
// Since only one value can be returned in a return statement, the I stored both lines using the HTMLbuild and BGCcolor variables in empty brackets, separated by a comma (an empty array).
// document.getElementById('quote-box').innerHTML = HTMLbuild <<< This posts the random quote to the page
// document.body.style.background = BGCcolor <<< This changes the background color on the page
function printQuote(){
    const randomQuote =  getRandomQuote(quotes);
    const randomColor = getRandomColor(colors);
    let HTMLbuild = `<p class="quote"> ${randomQuote.quote}</p><p class="source">${randomQuote.source}<span class="citation">${randomQuote.citation}</span><span class="year">${randomQuote.year}</span></p>`;
    let BGCcolor = randomColor.bcolor;

    return [document.getElementById('quote-box').innerHTML = HTMLbuild, document.body.style.background = BGCcolor];
}

//This calls the printQuote and runs its contents. At this point, the Show Another Quote button can be pressed, and a random color background + random quote appear
printQuote();

//The setInterval method below then runs the printQuote function continuously, changing every 10 milliseconds (10 seconds).
setInterval(() => {
    printQuote();
}, 10000)

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);