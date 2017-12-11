// create objects
 var lannister = {
     family: "lannister",
     flag: "./../week-4-game/assets/images/lannister.png",
     armies: 100
 };
 var stark = {
    family: "stark",
    flag: "./../week-4-game/assets/images/stark.png",
    armies: 150
};
var bar = {
    family: "bar",
    flag: "./../week-4-game/assets/images/bar.png",
    armies: 180
};
var targ = {
    family: "targ",
    flag: "./../week-4-game/assets/images/targ.png",
    armies: 120
};var houses = [lannister,stark,bar,targ];

var attacker;
var defender;
var sigilDiv;
// ROW 1
// diplay house HP

$(".lannisterSigil").append($("<h3>").addClass("armies").text("Armies: "+ lannister.armies));
$(".starkSigil").append($("<h3>").text("Armies: "+ stark.armies));
$(".barSigil").append($("<h3>").text("Armies: "+ bar.armies));
$(".targSigil").append($("<h3>").text("Armies: "+ targ.armies));

//Hide Row 2
// $(".sigil2").hide();
// listen for click,
// $(".sigil").on("click", function(){
//     attacker = $(this);

//     console.log(attacker)
//     attacker.removeClass("sigil2")
//     //Hide other Choices
//     $(".sigil").hide();
//     //keep showing attack
//     attacker.show();
//     //Display Row Two - Rival Enemies
//     $(".sigil2").show();
//     row2();

// })


function attack() {
    var damage = Math.floor(Math.random()*30);
    console.log(damage)
    return damage
}
function defend() {
    var harm = Math.floor(Math.random()*30);
    console.log(harm)
    return harm
}

$("#lannister").on("click", function(){
    attacker = $(this);
    attacker.removeClass("notChosen");
    houses.splice(0,1);
    console.log(attacker);
    //Hide other Choices
    $(".notChosen").hide();
    row3();
    $(".sigil2").on("click", function(){
        var defender = $(this);
        $(".enemy").append(defender);
        console.log(defender);
    })
    $(".button").on("click", function (){
        houses[0].armies = houses[0].armies - attack();
        $(".armies").text("Armies: "+ houses[0].armies);
    })
    
})
$("#stark").on("click", function(){
    attacker = $(this);
    houses.splice(1,1);
    //Hide other Choices
    $(".sigil").hide();
    //keep showing attack
    attacker.show();
    row3();
})
$("#bar").on("click", function(){
    attacker = $(this);
    houses.splice(2,1);
    //Hide other Choices
    $(".sigil").hide();
    //keep showing attack
    attacker.show();
    row3();
})
$("#targ").on("click", function(){
    attacker = $(this);
    houses.splice(3,1);
    //Hide other Choices
    $(".sigil").hide();
    //keep showing attack
    attacker.show();
    row3();
})

$(".sigil2").on("click", function(){
    var defender = $(this);
    defender.hide();
    $(".enemy").append(defender);
    console.log(defender);
})


// create row two
function row3() {
    for (var i = 0; i < houses.length; i++) {
        var sigilDiv = $("<div>");
        sigilDiv.addClass("sigil sigil2 " + houses[i].family )
        sigilDiv.html("<img src ='" + houses[i].flag +"'>");
        sigilDiv.append($("<h3>").text("Armies: "+ houses[i].armies));
        $("."+ i).append(sigilDiv);
        // $(".row2").append($("<div>").addClass("col-md-3 col-lg-3 text-center sigil" + houses[i].toString() + "sigil").append($("<h3>").text("Armies: "+ houses[i].armies)));
    }
}

// if not selected hide / Display in Row 2
//if clicked in row two - hide - display in row three

//Attack
//add class attacker and defender
// generate random numbers


// $(".button").on("click", function (){
//     function attacker() {
//         var damage = Math.floor(Math.random()*30);
//         console.log(damage)
//         return damage
//     }
//     attacker();
//     function defender() {
//         var harm = Math.floor(Math.random()*30);
//         console.log(harm)
//         return harm
//     }
    
//     defender();
//     //subtract from armies
//     attacker().
//     //display
// });
// subtract from armies what is lost
//once armies = 0 for either, game over
