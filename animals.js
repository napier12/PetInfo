const petsData = [
    {
        petName: "Stella",
        age: 7,
        weightInKilos: 24,
        breed: "Dalmation"
    },
    {
        petName: "Cody",
        age: 8,
        weightInKilos: 22,
        breed: "Corgi"
    },
    {
        petName: "Mango",
        age: 2,
        weightInKilos: 11,
        breed: "Persian"
    },
    {
        petName: "Lucy",
        age: 4,
        weightInKilos: 35,
        breed: "Ball Python"
    },
    {
        petName: "Buhmie",
        age: 1,
        weightInKilos: 28,
        breed: "Bull-dog"
    }
];
let userInput = document.getElementById('petNum');
function showInfo(){
    if(parseInt(userInput.value) > 0 && parseInt(userInput.value) <= petsData.length){
        index = parseInt(userInput.value) - 1;
        document.querySelector('.selectedPetInfo').innerHTML = `<br>${petsData[index].petName} the cat is ${petsData[index].age} years old. This cat weights ${petsData[index].weightInKilos} kilos and is a ${petsData[index].breed} breed.`
    }
    else{
        alert("Invalid option");
        document.querySelector('.selectedPetInfo').innerHTML = "";
    }
    }
