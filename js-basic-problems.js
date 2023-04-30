/* feetToMile
Converts feet to mile using function.
*/
function feetToMile(feet) {
    if (feet < 0) {
        return "Not a valid number"
    }
    var mile = feet / 5280;
    return mile;
}
var result = feetToMile(20000);
console.log(result, " Miles");


/* woodCalculator
Tells total number of cubic feet wood required to make furnitures. Takes number of furniture as input  = chair(1cuF), table(3cuF), bed(5cuF). 
*/
function woodCalculator(chair, table, bed) {
    var chairCuF = chair * 1;
    var tableCuF = table * 3;
    var bedCuF = bed * 5;
    total = chairCuF + tableCuF + bedCuF;
    return total;
}
var resultWood = woodCalculator(12, 3, 1);
console.log(resultWood, "Cubic Feet of Wood");

/* brickCalculator
Tells total number of bricks required to build nth number of floor building. Takes number of floor as input  = 1 -  10 floor(15 feet), 11 -  20 floor(12 feet), 21 to infinity floor(10 feet). Per feet 1000 bricks.
*/
function brickCalculator(floor) {
    var bricks = 0;
    var totalBricks = 0;
    if (floor <= 10 && floor > 0) {
        bricks = floor * 15 * 1000;
        return bricks;
    }
    else if (floor <= 20 && floor > 0) {
        bricks = (floor - 10) * 12 * 1000;
        totalBricks = bricks + 150000;
        return totalBricks;
    }
    else {
        bricks = (floor - 20) * 10 * 1000;
        totalBricks = bricks + 270000;
        return totalBricks;
    }
}
var bricksRequired = brickCalculator(35);
console.log("Total Bricks required = ", bricksRequired);

/* tinyFriend
Finds the smallest Word from an array 
*/
function tinyFriend(name) {
    var tinyName = name[0];
    for (var i = 1; i < name.length; i++) {
        if (tinyName.length > name[i].length) {
            tinyName = name[i];
        }
    }
    return tinyName;
}
var friends = ['Rahim', 'Fi', 'Tushar', 'Bob', 'Tashfique'];
var smallName = tinyFriend(friends);
console.log("Shortest Name: ", smallName);