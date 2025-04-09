$("h1").text("Bye");
$("button").text("Don't click me")
$("h1").css("color","red");
$("a").attr("href","https://www.yahoo.com/");

// Adding event listener in jQuery
// $("h1").click(function(){
//     $("h1").css("color","purple");
// });


$("button").click(function(){
    $("h1").css("color","green");
});


$("body").keypress(function(event){
    // console.log(event.key);
    $("h1").text(event.key);
});

$("h1").on("mouseover", function(){
    $("h1").css("color","purple");
});


// Adding and removing elements

$("h1").before("<button>Click me</button>");
$("h1").after("<button>Click me</button>");
$("h1").prepend("<button>New</button>");
$("h1").append("<button>New</button>");
// $("button").remove() //Removes all buttons

// WEBSITE ANIMATIONS USING jQuery
$("button").on("click", function(){
    $("h1").fadeToggle();
});












