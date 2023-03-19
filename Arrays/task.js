let compareArrays = (arr1, arr2) => arr1.length === arr2.length && arr1.every((i, n) => i === arr2[n])
function getUsersNamesInAgeRange(users, genders){
    return Number(((users.filter( costumer => costumer.gender === genders).map(Agegenders =>Agegenders.age).reduce((a, b) => a +b)) /(users.filter( costumer => costumer.gender === genders).map(Agegenders =>Agegenders.age).length)).toFixed(2)) 
 
}