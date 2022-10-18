
var word;
var people;
var world;
var winHeight = $(window).height();
var docHeight = $(document).height();

$(document).ready(function(){

	word = getWord("water", function(d){ //On ready, the script will call the getWord function in the dictionary script and contain a word
     console.log("data: " + d);
     word = d;
     console.log("word: " + word);
    });

    people = getWord("people", function(c){
     console.log("data: " + c);
     people = c;
     console.log("word: " + people);
    });

    world = getWord("world", function(e){
     console.log("data: " + e);
     world = e;
     console.log("word: " + world);
    });


});

function amountScrolled(){ 
	//This function was adapted from http://www.javascriptkit.com/javatutors/detect-user-scroll-amount.shtml
	//Function that determins the amount scrolled within a page
	//It then uses that number and decides when to replace keywords within the page.
	//Issue with the funtion is that users can scroll before the getWord function in dictionary.js can return a value, thus giving an undefined result
	//Please wait 2 seconds before scrolling
	//If the result of getWord has the key word within it, it will continue calling the function each time the user scrolls past the designated point on the screen
getWord("water", function(d){});
getWord("people", function(c){});
getWord("world", function(d){});
var winheight = $(window).height();
var docHeight = $(document).height();
var scrollTop = $(window).scrollTop();
var trackLength = docHeight-winHeight;
var pctScrolled = Math.floor(scrollTop/trackLength * 100);


if (pctScrolled % 10 == 0){ //When the page has scrolled 10%, it wil find all a tags with the word water in them and change it

$("a:contains('water')").text(function(){



//console.log(word);

return $(this).text().replace("water", word ); //replacing the word water with the returned value of getWord

})

$("a:contains('Water')").text(function(){

return $(this).text().replace("Water", word);

})

$("a:contains('WATER')").text(function(){

return $(this).text().replace("WATER", word);

})

$("a:contains('world')").text(function(){

return $(this).text().replace("world", world);

})

$("a:contains('"+word+"')").css("font-style","italic"); //Changing the font style and weight of the changed word
$("a:contains('"+word+"')").css("font-weight","bold");

$("a:contains('"+world+"')").css("font-style","italic");
$("a:contains('"+world+"')").css("font-weight","bold");



}

if (pctScrolled % 50 == 0){ //When the user has scrolled 50%, the function will change all a tags with the word people 

$("a:contains('people')").text(function(){

return $(this).text().replace("people", people);

})

$("a:contains('People')").text(function(){

return $(this).text().replace("People", people);

})

$("a:contains('"+people+"')").css("font-style","italic");
$("a:contains('"+people+"')").css("font-weight","bold");

}



}



$(window).on("scroll", function(){ //Calling amount scrolled

amountScrolled();


});



function openNav(){ //This function was adapted from https://www.w3schools.com/howto/howto_js_fullscreen_overlay.asp

document.getElementById("myNav").style.width = "30%"; //Determins how much the sidebar navigation will fill the page


}

function closeNav(){

document.getElementById("myNav").style.width = "0%"; 


}




