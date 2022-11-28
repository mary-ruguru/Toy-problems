// Enter your code
// it calculates the speed of a vehicle and giives an output
function speedCalculator(){
    const speedLimit = 70;//assigning the speed limit
    let speed = 0; //input the speed of the vehicle
    if(speed < speedLimit){
        return("OK")
    }

    else if(speed > speedLimit){
        let speedDifference = speed - speedLimit; //calculating the difference of the speed limit and the speed of the vehicle
        let demeritPoints = (speedDifference / 5); //dividing the speed difference by 5 because demerit points are added every 5km/h

        return(`This drivers total demerit points are = ${demeritPoints}`)

    }
}
console.log(speedCalculator())
