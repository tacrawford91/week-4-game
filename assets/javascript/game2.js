
var houses = {
    family: ["lannister", "stark", "bar", "targ"],
    flag:[ "./../week-4-game/assets/images/lannister.png", "./../week-4-game/assets/images/stark.png", "./../week-4-game/assets/images/bar.png","./../week-4-game/assets/images/targ.png"],
    armies:[100,150,180,120]
};

var attacker;
var defender;
var sigilDiv;
var familySelected;
var houses;

//Row1
for (var i = 0; i < houses.family.length; i++) {
    var sigilDiv = $("<div>");
    sigilDiv.addClass("sigil sigil1")
    sigilDiv.attr("family", houses.family[i]);
    sigilDiv.html("<img src ='" + houses.flag[i] +"'>");
    sigilDiv.append($("<h3>").text("Armies: "+ houses.armies[i]));
    $(".house"+ i).append(sigilDiv);
}

$(".sigil1").on("click", function() {
    familySelected = $(this)
    console.log(familySelected);
    $(".sigil1").hide();
    familySelected.show();
    var selectedFamilyName = $(this).attr("family")
    console.log(selectedFamilyName);
    for (var i = 0; i < houses.family.length; i++) {
            console.log(houses.family[i])
            if (houses.family[i] === selectedFamilyName) {
                var indexToRemove = jQuery.inArray(selectedFamilyName, houses.family);
                console.log("itme: " + indexToRemove);
                houses.family.splice(indexToRemove,1);
                houses.flag.splice(indexToRemove,1);
                houses.armies.splice(indexToRemove,1);
            } else {
                console.log("no dice");
            }
        }
    rivalHouses = houses;
    console.log("rivals" + rivalHouses.family);

            //  gernerate row 3
        for (var i = 0; i < rivalHouses.family.length; i++) {
            var sigilDiv = $("<div>");
            console.log("rival house : " + rivalHouses.family)
            sigilDiv.addClass("sigil sigil2")
            sigilDiv.attr("family", rivalHouses.family[i]);
            sigilDiv.html("<img src ='" + rivalHouses.flag[i] +"'>");
            sigilDiv.append($("<h3>").text("Armies: "+ rivalHouses.armies[i]));
            $(".rival"+ i).append(sigilDiv);
    }
})