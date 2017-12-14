//PLay audio
window.onload = function() {
    document.getElementById("my_audio").play();

var houses = {
    family: ["lannister", "stark", "bar", "targ"],
    flag:[ "./../week-4-game/assets/images/lannister.png", "./../week-4-game/assets/images/stark.png", "./../week-4-game/assets/images/bar.png","./../week-4-game/assets/images/targ.png"],
    armies:[120,150,165,140],
    title: ["Lannister", "Stark", "Baratheon", "Targaryen"],
};

var attacker = null; //player
var defender = {
    family:"",
    flag:"",
    armies:"",
    title:""
};
var numberOfClicks = 0;
var sigilDiv;
var enemyDiv;
var houses;
var attackerArmies;
var familyName;
var indexOfFamily;
var rivalFamilyName;
var chosen = 0;
var attackPoints;
//functions 
function attack() { //attack
    var damage = numberOfClicks + (Math.round(Math.random()*30));
    console.log("damage is "+damage)
    return damage
}

function defend() { //counter attack
    var harm = Math.floor(Math.random()*20);
    console.log(harm)
    return harm
}
//making character stronger over time
$("body").on("click", function(){
    numberOfClicks = numberOfClicks + 4;
    console.log(numberOfClicks)
})
// Generate Row1 by creating html with the houses object
for (var i = 0; i < houses.family.length; i++) {
    sigilDiv = $("<div>");
    sigilDiv.addClass("sigil sigil1 " + houses.title[i]);
    sigilDiv.attr("family", houses.family[i]);
    sigilDiv.html("<h3> House </h3> <h2> " + houses.title[i] + "</h2> <img src ='" + houses.flag[i] +"'>");
    sigilDiv.append($("<h3>").addClass("armies").text("Armies: "+ houses.armies[i]));
    $(".house"+ i).append(sigilDiv);
}

//Choose play, listen for click in first row - hide non-selected
$(".sigil1").on("click", function() {
    //do not run code if player has been selected
        if (chosen === 0) {
        chosen = 1;
        attacker = $(this)
        attacker.addClass("selected");
        // hide all row one divs
        $(".sigil1").hide();
        //show selected/click on/this 
        attacker.show();
        //add this to second row
        $(".attacker").append(attacker);
        // retrive atribute of family name to know what family was picked
        var attackerFamilyName = $(this).attr("family")
        //loop over houses to find family selected
        for (var i = 0; i < houses.family.length; i++) {
                //match the added attiribute to houses[i]
                if (houses.family[i] === attackerFamilyName) {
                    //find index to extract information
                    var indexToRemove = jQuery.inArray(attackerFamilyName, houses.family);
                    // remove selected index from houses object;
                    houses.family.splice(indexToRemove,1);
                    houses.flag.splice(indexToRemove,1);
                    //save Army (health points) to varible to access laer
                    attackerArmies = houses.armies[indexToRemove];
                    houses.armies.splice(indexToRemove,1);
                    houses.title.splice(indexToRemove,1);
                 } //else {
                //     console.log("no dice");
                // }
            }   
            //save adjusted object in new varible for clarity
        rivalHouses = houses;
        console.log("rivals" + rivalHouses.family);

                //  gernerate row 3 - create required html
            for (var j = 0; j < rivalHouses.family.length; j++) {
                var sigilDiv = $("<div>");
                // console.log("rival house : " + rivalHouses.family)
                sigilDiv.addClass("sigil sigil2 sigil3 " + rivalHouses.title[j])
                sigilDiv.attr("family", rivalHouses.family[j]);
                sigilDiv.html("<h3> House </h3> <h2> " + houses.title[j] + "</h2> <img src ='" + houses.flag[j] +"'>");
                sigilDiv.append($("<h3>").text("Armies: "+ rivalHouses.armies[j]));
                $(".rival"+ j).append(sigilDiv);
            }
        }
        //LISTEN FOR CLICK IN 3rd row
    $(".sigil2").on("click", function(){
        //create defender if none chosen, if one chosen do not run code
        if (houses.family.length <= 3 && defender.family === ""){ 
            $(".sigil3").removeClass("sigil2 sigil1");
            $(this).hide();
            rivalFamilyName = $(this).attr("family")
            if (defender.family === "") {
                $(".nextOpp").remove();
                //fill in defender properties with selected defender
                for (var k = 0; k< houses.family.length; k++){
                    if (houses.family[k] === rivalFamilyName) {
                        defender.family = houses.family[k];
                        defender.flag = houses.flag[k];
                        defender.armies = houses.armies[k];
                        defender.title = houses.title[k];
                        defenderSelected = $(this);
                        //create html and move defender to second row
                        enemyDiv = $("<div>");
                        enemyDiv.addClass("sigil sigil1 defeated versus " + houses.title[k])
                        enemyDiv.attr("family", defender.family);
                        enemyDiv.html("<h3> House </h3> <h2> " + defender.title + "</h2> <img src ='" + defender.flag +"'>");
                        enemyDiv.append($("<h3>").addClass("enemyArmies enemies").text("Armies: "+ defender.armies));
                        $(".enemy").append(enemyDiv);
                        rivalFamilyName = $(this).attr("family")
                        // console.log("rival Family Name: " + rivalFamilyName);
                        } //else {
                //     console.log("Double No Dice");
                //     }
                }
            }
        }
    $("button").on("click", function(){
        //if there is an attach, defender, and both have armies, go to battle!
        if ((attacker !== null) && (defender !==null) && (attackerArmies > 0) && (defender.armies > 0)) {
            //subtract defend() from attacker armies and display it
            attackerArmies = attackerArmies - defend();
            $(".armies ").text();
            $(".armies").text("Armies: "+ attackerArmies)
            //subtract attack() from defender armies and display it 
            defender.armies = defender.armies - attack();
            $(".enemyArmies").text();
            $(".enemyArmies").text("Armies: "+ defender.armies)
                if (attackerArmies <= 0) {
                    console.log("You Lose")
                    $(".armies ").text();
                    $(".armies").text("Armies: DEAD")
                    $(".row1").append($("<div>").addClass("loser").html("<h1>You were defeated. Refresh the page to try again </h1>"));
                } //remove defender and set object back to empty 
                if (defender.armies <= 0){
                    $(".defeated").remove();
                    $(".enemy").append($("<h2>").addClass("nextOpp").text("Victory. Click next opponent to battle"));
                    defender = {
                        family:"",
                        flag:"",
                        armies:"",
                        title:""
                    };
                }
            } else {
                console.log("gameOVERRRR")
            }
        })
    });
})
}