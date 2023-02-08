const body = document.getElementsByClassName("body")
const factHere = document.getElementById("factHere")

let facts = 
[
    "a",
    "b",
    "c",
    "d",
    "e",
]
let selNumber = Math.floor(Math.random() * 5);
let randomFact = facts[selNumber];

const generateRandomFact = () => {
    return randomFact;
};

factHere.textContent=generateRandomFact()