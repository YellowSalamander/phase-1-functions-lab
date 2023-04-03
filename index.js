// Code your solution in this file!
function distanceFromHqInBlocks(number1){
   let resultBlocks = number1 - 42
   return Math.abs(resultBlocks)
}

function distanceFromHqInFeet(number1){
    let resultFeet = Math.abs(number1-42) *264
    return resultFeet
}

function distanceTravelledInFeet (number1, number2){
    let result = Math.abs(number1 - number2) *264
    return result
}

function calculatesFarePrice(number1, number2){
    let result = Math.abs(number1 - number2) *264
    let distance = result
    
    if(distance <=400){ 
     let fare = 0
        return fare
        } else
    if(distance >401 && distance <2000) { 
        let fare = (distance - 400) * 0.02
        return fare

    }   else
    if(distance >2000 && distance <2499){
        let fare = 25
        return fare
    } else
    if(distance >=2500){
        let fare= 'cannot travel that far'
        return fare
    }

}
    

   
    // switch (number1){
    // case 43: 
    //     return 1
    // case 50:
    //     return 8
    // case 34:
    //     return 8
    // }
