
var content = document.getElementById("content");
var author = document.getElementById("author");

async function getQuotes(){

    let url = "https://type.fit/api/quotes";

    try{
        let query = await fetch(url);

       return await query.json();

    }catch(e){
        console.log(e);
    }
}
 async function renderQuote(){

    let quotes = await getQuotes();

    let quote = quotes[Math.floor(Math.random() * quotes.length)];

    author.innerHTML = `<a href='https://www.google.com/search?q=${quote.author.split(' ').join('+')}' target='_blank' >${quote.author}<a/>`;

    content.innerHTML = quote.text;

   
 }
setInterval(renderQuote, 5000);

