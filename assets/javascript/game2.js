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
var familySelected;

//Row1
for (var i = 0; i < houses.length; i++) {
    var sigilDiv = $("<div>");
    sigilDiv.addClass("sigil sigil1")
    sigilDiv.attr("family", houses[i].family);
    sigilDiv.html("<img src ='" + houses[i].flag +"'>");
    sigilDiv.append($("<h3>").text("Armies: "+ houses[i].armies));
    $(".house"+ i).append(sigilDiv);
}

$(".sigil1").on("click", function() {
    familySelected = $(this)
    console.log(familySelected);
    $(".sigil1").hide();
    familySelected.show();
    var selectedFamilyName = $(this).attr("family")
    console.log(selectedFamilyName);
    for (var i = 0; i < houses.length; i++) {
        if(houses[i].family === selectedFamilyName) {
            // console.log(houses[i].toString());
            // var splicedIndex = $.inArray(selectedFamilyName, houses);
            // console.log("spliced index: " + splicedIndex);
            // if (splicedIndex > 0){
            // houses.splice(splicedIndex,1);
            // }
        // } else {
        //     console.log("NADABA")
        // }
        houses[i].remove();
    }
    console.log(houses);    
    }
})