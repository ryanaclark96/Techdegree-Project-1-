/******************************************
Treehouse Techdegree:
FSJS project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing


/***
This is the array created to hold the quotes.
***/
var quotes =   [
    { quote : "If you just work on stuff that you like and you're passionate about, you dont have to have a master plan about how things will work out.", source : "Mark Zuckerberg", citation : "Facebook", year : 2016 },
    { quote : "I'm convinced that about half of what seperates he successful entrepreneurs from the non successful ones is pure perserverance", source : "Steve Jobs" },
    { quote : "I choose a lazy person to do a hard job, because a lazy person will find an easy way to do it", source : "Bill Gates", citation : "Goal Cast", year : 2014 },
    { quote : "Be the change you want to see in the world", source : "Ghandi" },
    { quote : "Don't cry because its over. Smile because it happened", source : "Dr Seuss" }
  ];



/***
This function will retunr a random number and return it for later use.
It is then called after the function is made on the quotes array.
***/
function getRandomQuote(quoutes) {
    var randomNumber = quoutes[Math.floor(Math.random() * quotes.length)];
    return randomNumber;
};


/***
The printQuote function will use the getRandomQuote function and assign is to a new variable.
With the Blank mesaage string it is updated to provide the quote picked and displayed to the page.
The if statement will check to see if there is a citation & year to display it if needed or will leave it blank otherwise.
***/

function printQuote() {
  var random = getRandomQuote(quotes);
  var message = "";
  message += '<p class="quoute">' + random.quote + '</p>';
  message += '<p class="source">' + random.source + '</p>';
  if (random.citation) {
    message += '<span class="citation">' + random.citation + '</span>';
  };
  if (random.year){
    message += '<span class="year">' + random.year + '</span>';
  };
  document.getElementById("quote-box").innerHTML = message;
};
printQuote();

/***
When the show another quote button is pressed it will generate another quote and display it to the page.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);


// Remember to delete the comments that came with this file, and replace them with your own code comments.
