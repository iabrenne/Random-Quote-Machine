$(document).ready(function(){
   $.getJSON("https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?", function( data ) {
      $('#text').html('"' + data.quoteText+'"');
      $('#author').html('-' + data.quoteAuthor);
    });
}); 
/*
$('#new-quote').click(function() {
    $.getJSON("https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?", function( data ) {
      $('#text').html('"' + data.quoteText + '"');
      $('#author').html('-' + data.quoteAuthor );
    });
});
*/

function onNewQuoteClick() {
    $.getJSON("https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?", function( data ) {
      $('#text').html('"' + data.quoteText + '"');
      $('#author').html('-' + data.quoteAuthor );
    });
}

function onTweetClick(){
  $("#tweet-quote").attr("href","https://twitter.com/intent/tweet?text=" + $("#text").html() + $("#author").html() + " #quotes");
}