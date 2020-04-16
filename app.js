
function greetings(){
    alert("Hello"); 
}

function today(){
    var today = new Date ();
    var hourNow = today.getHours ();
    document.write(today);
}

function favorite(){
    var city = prompt("Who is your favorite city in EU?");
    if (city == "Boston") {
    alert("You are correct.");
    } else{
    alert("Wrong"); 
    }
}

greetings();
today();
favorite();

