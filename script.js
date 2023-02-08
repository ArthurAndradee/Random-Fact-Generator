function random() {    
    const facts = 
    [
        "a",
        "b",
        "c",
        "d",
        "e",
    ]
    const selNumber = Math.floor(Math.random() * 5);
    const randomFact = facts[selNumber];
    
    const generateRandomFact = () => {
        return randomFact;
    };
    
    console.log(generateRandomFact());
}