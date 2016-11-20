/*
index.js
*/
$(document).ready(function(){
"use strict";

/*var msg = "Hello JavaScript";
console.log(msg);

var resultsDiv = document.getElementById("results");
resultsDiv.innerHTML = "<p>This is form JavaScript</p>"*/

var resultList = $("#resultList");
resultList.text("This is from jQuery");

var toggleButton = $("#toggleButton");
toggleButton.on("click", function(){
resultList.toggle(500);

if(toggleButton.text() == "Hide") toggleButton.text("Show");
else toggleButton.text("Hide");
});

var listItems = $("header nav li");
listItems.css("font-weight", "bold");
listItems.filter(":first").css("font-size", "18px");

/*var result = {
	name: "jQuery",
	language: "JavaScript",
	score: 4.5,
	showLog: function(){

	},
	owner : {
		login: "shawnwildermuth",
		id: 123456
	}
};

result.phoneNumber = "123-456-7890";

console.log(result.phoneNumber);*/

var gitHubSearch = "https://api.github.com/search/repositories?q=jquery+language:javascript&sort=stars";

$.get(gitHubSearch)
.success(function(r){
	//console.log(r.items.length);
	displayResults(r.items);
})
.fail(function(err){
	console.log("Failed to query Gothub");
})
.done(function(){
//
});

var results = [{
	name: "jQuery",
	language: "JavaScript",
	score: 4.5,
	showLog: function(){

	},
	owner : {
		login: "shawnwildermuth",
		id: 123456
	}
}, {
	name: "jQuery UI",
	language: "JavaScript",
	score: 3.5,
	showLog: function(){

	},
	owner : {
		login: "shawnwildermuth",
		id: 123456
	}
}];

function displayResults(results){
resultList.empty();
$.each(results, function(i, item){

var newResult = $("<div class='result'>" + 
"<div class='title'>" + item.name + "</div>" +
"<div>Language: " + item.language + "</div>" + 
"<div>Owner: " + item.owner.login + "</div>"+
"</div>");

newResult.hover(function(){
//make it darker
$(this).css("background-color", "lightgray");
}, function(){
//reverse
$(this).css("background-color", "transparent");
});

resultList.append(newResult);

});
}

// for(var x = 0; x < results.length; x++){
// 	var result = results[x];
// 	if(result.score < 4) continue;
// 	console.log(result.name);
// }

/*result.push(result);
result.push({
	name: "dummy project",
});*/

/*console.log("msg is " + typeof(msg));
console.log("resultsDiv is " + typeof(resultsDiv));

var none;
console.log("none is " + typeof(none));

var aNumber = 10;
console.log("aNumber is " + typeof(aNumber));

var trueFalse = true;
console.log("trueFalse is " + typeof(trueFalse));

//msgs = "That shouldn't work";

if(none == undefined){
	console.log("none is undefined");
} 

if(aNumber === "10"){
	console.log("10 is 10");
}

/*function showMsg(msg){
	console.log("showMsg: " + msg);
}

function showMsg(msg, more){
	if(more){
	console.log("showMsg + " + msg + more);
	} else{
		console.log("showMsg: " + msg);
	}
}

showMsg("some information");
showMsg("some information", " and even more");

var showIt = function(msg){
	console.log(msg);
}

showIt("Some message");

function showItThen(msg, callback){
	showIt(msg);
	callback();
}

showItThen("showItThen called", function(){
console.log("callback called");
});

console.log("==================");
var inGlobal = true;

function testMe(){
	console.log("testMe(): " + inGlobal);

	var someMsg = "some Message";
	console.log("testMe(): " + someMsg);

	showItThen("with Closure", function(){
	showIt("testMe With Closure(): " + someMsg);
	});
}

testMe();*/
});