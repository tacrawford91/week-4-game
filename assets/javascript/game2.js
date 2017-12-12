
var houses = {
    family: ["lannister", "stark", "bar", "targ"],
    flag:[ "./../week-4-game/assets/images/lannister.png", "./../week-4-game/assets/images/stark.png", "./../week-4-game/assets/images/bar.png","./../week-4-game/assets/images/targ.png"],
    armies:[100,150,180,120]
};

var attacker = null;
var defender = null;
var sigilDiv;
var houses;
var attackerArmies;
var familyName;
var indexOfFamily;

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
//Row1
for (var i = 0; i < houses.family.length; i++) {
    var sigilDiv = $("<div>");
    sigilDiv.addClass("sigil sigil1")
    sigilDiv.attr("family", houses.family[i]);
    sigilDiv.html("<img src ='" + houses.flag[i] +"'>");
    sigilDiv.append($("<h3>").text("Armies: "+ houses.armies[i]));
    $(".house"+ i).append(sigilDiv);
}



//find family using attribute
// function findFamily() {
//     familyName = $(this).attr("family")
//     for (var i = 0; i < houses.family.length; i++) {
//         // console.log(houses.family[i])
//         if (houses.family[i] === familyName) {
//             indexOfFamily = jQuery.inArray(familyName, houses.family);
//         }        
//     }
//     return indexOfFamily 
//     return familyName
// }

// $(".sigil1").on("click", function() {
//     houses.findFamily()
//     console.log(familyName)
//     console.log(indexOfFamily)


})
// $(".sigil1").on("click", function() {
//     attacker = $(this)
//     console.log(attacker);
//     $(".sigil1").hide();
//     attacker.show();
//     var attackerFamilyName = $(this).attr("family")
//     console.log(attackerFamilyName);
//     for (var i = 0; i < houses.family.length; i++) {
//             console.log(houses.family[i])
//             if (houses.family[i] === attackerFamilyName) {
//                 var indexToRemove = jQuery.inArray(attackerFamilyName, houses.family);
//                 console.log("itme: " + indexToRemove);
//                 houses.family.splice(indexToRemove,1);
//                 houses.flag.splice(indexToRemove,1);
//                 attackerArmies = houses.armies[indexToRemove];
//                 houses.armies.splice(indexToRemove,1);
//             } else {
//                 console.log("no dice");
//             }
//         }
//     rivalHouses = houses;
//     console.log("rivals" + rivalHouses.family);

//             //  gernerate row 3
//         for (var i = 0; i < rivalHouses.family.length; i++) {
//             var sigilDiv = $("<div>");
//             console.log("rival house : " + rivalHouses.family)
//             sigilDiv.addClass("sigil sigil2")
//             sigilDiv.attr("family", rivalHouses.family[i]);
//             sigilDiv.html("<img src ='" + rivalHouses.flag[i] +"'>");
//             sigilDiv.append($("<h3>").text("Armies: "+ rivalHouses.armies[i]));
//             $(".rival"+ i).append(sigilDiv);
//     }
//     //LISTEN FOR CLICK IN 3rd row
//     $(".sigil2").on("click", function(){
//         if (defender === null) {
//             defender = $(this);
//             console.log("rival: "+ defender);
//             $(".enemy").append(defender);
//             var rivalFamilyName = $(this).attr("family") 
//         }

//     $("button").on("click", function(){
//         if ((attacker !== null) && (defender !==null)) {
//             console.log("ITS WARRRRRR")
//             console.log("attackHP: " + attackerArmies)
//             //subtract defend() from attacker armies and display it
//             attackerArmies = attackerArmies - defend();
//             console.log("attackHP2222: " + attackerArmies)
//             sigilDiv.append($("<h3>").text("Armies: "+ attackerArmies));
//             //subtract attack() from defender armies and display it 

//         }
//     })
// });

// $(".sigil2").on("click", function(){
//     rivalSelected = $(this)
//     console.log("rival selected: "+ rivalSelected);
//     $(".enemy").append(rivalSelected);
//     var rivalFamilyName = $(this).attr("family")



// })