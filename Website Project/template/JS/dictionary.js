//API is taken from at https://developer.wordnik.com/
var url = "https://api.wordnik.com/v4/word.json/";
var url2= "/relatedWords?useCanonical=false&limitPerRelationshipType=10&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5";
var returnValue;
var returnString;
var ran1;
var ran2;



function getWord(word1, callback){ 
	//Function calls api that will return an array of categories within the definition
	//These categories range from words that are related to synonyms
	//Within each category there is another array which contains a list of words
	//This function uses a random number generator for the search within the array

	ran1 = 1 + Math.floor(Math.random() * 5); 
	ran2 = 1 + Math.floor(Math.random() * 3);
    $.getJSON(url+word1+url2,
        function(data){
           returnValue = data[ran1];
           returnString = returnValue.words[ran2];

           callback(returnString);
    });
}




