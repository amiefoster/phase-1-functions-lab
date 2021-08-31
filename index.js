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


let startingPoint
let endingPoint

function distanceTravelledInFeet(startingPoint, endingPoint){
    return (Math.abs(startingPoint - endingPoint) * 264)
}

//fare price

function calculatesFarePrice(startingPoint, endingPoint){
      let feetTravelled = distanceTravelledInFeet(startingPoint, endingPoint);

    if (feetTravelled <= 400) {
        return 0
    }
    
    else if (feetTravelled > 400 && feetTravelled <= 2000) {
        return (feetTravelled - 400) * 0.02
    }

    else if (feetTravelled > 2000 && feetTravelled <= 2500) {
        return 25
    }

    else {
         return 'cannot travel that far'
        } 
    }
