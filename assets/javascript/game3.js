var houses = {
    family: ["lannister", "stark", "bar", "targ"],
    flag:[ "./../week-4-game/assets/images/lannister.png", "./../week-4-game/assets/images/stark.png", "./../week-4-game/assets/images/bar.png","./../week-4-game/assets/images/targ.png"],
    armies:[100,150,180,120],
    title: ["Lannister", "Stark", "Baratheon", "Targaryen"],
};

var attacker = null;
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

//functions 
function attack() {
    var damage = numberOfClicks + (Math.floor(Math.random()*30));
    console.log(damage)
    return damage
}

function defend() {
    var harm = Math.floor(Math.random()*30);
    console.log(harm)
    return harm
}
$("body").on("click", function(){
    numberOfClicks = numberOfClicks + 3;
})
//Row1
for (var i = 0; i < houses.family.length; i++) {
    sigilDiv = $("<div>");
    sigilDiv.addClass("sigil sigil1")
    sigilDiv.attr("family", houses.family[i]);
    sigilDiv.html("<h3> House </h3> <h2> " + houses.title[i] + "</h2> <img src ='" + houses.flag[i] +"'>");
    sigilDiv.append($("<h3>").addClass("armies").text("Armies: "+ houses.armies[i]));
    $(".house"+ i).append(sigilDiv);
}

$(".sigil1").on("click", function() {
    attacker = $(this)
    attacker.addClass("selected");
    // console.log(attacker);
    $(".sigil1").hide();
    attacker.show();
    var attackerFamilyName = $(this).attr("family")
    // console.log(attackerFamilyName);
    for (var i = 0; i < houses.family.length; i++) {
            // console.log(houses.family[i])
            if (houses.family[i] === attackerFamilyName) {
                var indexToRemove = jQuery.inArray(attackerFamilyName, houses.family);
                // console.log("indextoremove: " + indexToRemove);
                houses.family.splice(indexToRemove,1);
                houses.flag.splice(indexToRemove,1);
                attackerArmies = houses.armies[indexToRemove];
                houses.armies.splice(indexToRemove,1);
                houses.title.splice(indexToRemove,1);
            } else {
                console.log("no dice");
            }
        }
    rivalHouses = houses;
    console.log("rivals" + rivalHouses.family);

            //  gernerate row 3
        for (var j = 0; j < rivalHouses.family.length; j++) {
            var sigilDiv = $("<div>");
            // console.log("rival house : " + rivalHouses.family)
            sigilDiv.addClass("sigil sigil2")
            sigilDiv.attr("family", rivalHouses.family[j]);
            sigilDiv.html("<h3> House </h3> <h2> " + houses.title[j] + "</h2> <img src ='" + houses.flag[j] +"'>");
            sigilDiv.append($("<h3>").text("Armies: "+ rivalHouses.armies[j]));
            $(".rival"+ j).append(sigilDiv);
        }
    //LISTEN FOR CLICK IN 3rd row
    $(".sigil2").on("click", function(){
        $(this).hide();
        rivalFamilyName = $(this).attr("family")
        if (defender.family === "") {
            $(".nextOpp").remove();
            for (var k = 0; k< houses.family.length; k++){
                if (houses.family[k] === rivalFamilyName) {
                    defender.family = houses.family[k];
                    defender.flag = houses.flag[k];
                    defender.armies = houses.armies[k];
                    defender.title = houses.title[k];
                    defenderSelected = $(this);
                    // console.log("Defender Goods: "+ defender.family + defender.flag + defender.armies);
                    // $(".enemy").append(defender);
                    // $(".enemy>h3").text();
                    enemyDiv = $("<div>");
                    enemyDiv.addClass("sigil sigil1 defeated versus")
                    enemyDiv.attr("family", defender.family);
                    enemyDiv.html("<h3> House </h3> <h2> " + defender.title + "</h2> <img src ='" + defender.flag +"'>");
                    enemyDiv.append($("<h3>").addClass("enemyArmies enemies").text("Armies: "+ defender.armies));
                    $(".enemy").append(enemyDiv);
                    rivalFamilyName = $(this).attr("family")
                    // console.log("rival Family Name: " + rivalFamilyName);
                } else {
                    console.log("Double No Dice");
                }
            }
        }

    $("button").on("click", function(){
        if ((attacker !== null) && (defender !==null) && (attackerArmies > 0) && (defender.armies > 0)) {
            console.log("ITS WARRRRRR")
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
                }
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