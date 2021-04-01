function getQuote(){
    fetch('https://animechan.vercel.app/api/random')
        .then(response => response.json())
        .then(quot => {displayQuote(quot.quote);})
        .catch(err => console.log(err))
}
function displayQuote(Quo)
{
    document.getElementById("Quote").innerHTML =Quo;
}
