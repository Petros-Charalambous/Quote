const quoteContainer =document.getElementById('quote-container');
const quoteText =document.getElementById('quote');
const authorText =document.getElementById('author');
const twitterBtn =document.getElementById('twitter');
const newQuoteBtn =document.getElementById('new-quote');
const loader = document.getElementById('loader');

let apiQuotes = [];

// show loader
function loading(){
    loader.hidden =false;
    quoteContainer.hidden =true;
}

// hide loading
function complete(){
    quoteContainer.hidden =false;
    loader.hidden =true;
}

function newQuote(){
    loading();
    //pick random api 
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
    // check author
    if (!quote.author){
        author.textContent="Unknown";
    }else{
        author.textContent = quote.author;
    }
    // check quote length
    if (quote.text/length>120){
        quoteText.classList.add('long-quote')
    }else{
        quoteText.classList.remove('long-quote')
    }
    // kanei dinamikh ekxorish hide load
    quoteText.textContent = quote.text;
    complete();
}

// Get quote from Api

async function getQuotes(){
    loading();
    const apiUrl = 'https://jacintodesign.github.io/quotes-api/data/quotes.json';
    try {
        const response = await fetch(apiUrl);
        apiQuotes = await response.json();
        newQuote();
    } catch (error){
        alert("Error")
        //Catch Error here
    }
}


//twitter
function tweetQuote(){
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
    window.open(twitterUrl, '_blank');
}

// event listenrs
newQuoteBtn.addEventListener('click', newQuote);
twitterBtn.addEventListener('click', tweetQuote);

//on load

getQuotes();

