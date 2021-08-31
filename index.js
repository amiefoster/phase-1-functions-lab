// Code your solution in this file!
//distance in blocks
let blocks
let location = 43
function distanceFromHqInBlocks(location) {
    if (location >= 42) {
    return blocks = location - 42 
    } 
    else {
        return blocks = 42 - location
    }
}

//distance in feet

function distanceFromHqInFeet(location){
   return distanceFromHqInBlocks(location) * 264
}

//distance traveeld in feet

// let startingPoint
// let endingPoint

function distanceTravelledInFeet(startingPoint, endingPoint){
    return (Math.abs(startingPoint - endingPoint) * 264)
}

//fare price

function calculatesFarePrice(startingPoint, endingPoint){
    if (distanceTravelledInFeet => 400 && distanceTravelledInFeet <= 2000) {
        return price = 2 * distanceTravelledInFeet
    }
    else if (distanceTravelledInFeet => 2001 && distanceTravelledInFeet <= 2500) {
        return 25
    }
    else (distanceTravelledInFeet => 2501) {
        return 'cannot travel that far'
    } ;
}