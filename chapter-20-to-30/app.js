
// // // -------Q-No-1------

var number = (3.45214);

document.write("Number" + " " + number, "<br>");

number = Math.round(3.45214);

document.write("round off value :", number, "<br>");

number = Math.floor(3.45214);

document.write("floor value :", number, "<br>");

number = Math.ceil(3.45214);

document.write("celi value :", number, "<br>");

// -------Q-No-2-----

var number = (-2.673);

document.write("Number" + " " + number, "<br>");

number = Math.round(-2.673);

document.write("round off value :", number, "<br>");

number = Math.floor(-2.673);

document.write("floor value :", number, "<br>");

number = Math.ceil(-2.673);

document.write("celi value :", number, "<br>");

// ------Q-no-3------

var random = Math.ceil(Math.random() *6)

document.write("Random dice value :", random,)

// // // -----Q-no-4----


var random = Math.floor(Math.random() * 2) +1;

if(random == 1){

    document.write(random, "<br>");
    document.write("random coin value : Heads");

}else{
    document.write(random, "<br>")
    document.write("random coin value : Tails");
}

// ------Q-No-5-----

var rendnum = Math.floor(Math.random() *100) +1 

document.write(rendnum)

// // ------Q-no-6----

var userdate = prompt("Enter your weigth");

var weigth = "";

for(var i = 0; i < userdate.length; i++){

    if(! isNaN(userdate [i])|| userdate[i] === "."){
        weigth += userdate[i];
    }
}

if(weigth !== ""){
    document.write("integer part:" + weigth)
}else{
    alert("Integer part not found")
}


// // ----------Q-NO-7-------

var scrtnum = 5;
var guesnum = Number(prompt("Enter your lucky number between 01 to 10"));

if( scrtnum ===  guesnum){

    alert("Congratulate");

}else{
    alert("Sorry Wrong Number Please Try Again Leter !!!");
}

// ---------Q-no- 8-------


var age = Number(prompt("Enter your age"));

var d = new Date();

var crnt = d.getFullYear();

birthyear = crnt - age;

document.write("your age is :" , age,"<br>");
document.write("your birth year is :", birthyear)

// // -------Q-no-9-----

var num = Number(prompt("Enter your Today Date"));

if(num <= 15){
    document.write("Frist fifteen days of the month");
}else{
    document.write("Last days of the month");
}



