printMenu();
printRules();
fillArray();
checkArrayForMatches();

let bankroll = 500;

function printMenu(){
    console.log("Welcome to the MESUMBE Casino!");
    console.log("Get ready to play slots!");
}

function printRules(){
    console.log("Every spin is worth $5");
    console.log("Must get 3 $'s to win");
    console.log("Every win is worth $15");
    console.log("Goodluck!");
}

function fillArray(bankroll){
    //let vars = new Array(3);
    //vars.fill().map(function(){return Math.random() * 3});
    //console.log(vars);

    let vars = [];

    for (let i = 0; i < 3; i++) {
    vars.push(Math.floor(Math.random() * 3));
    }

    console.log(vars);

}

function checkArrayForMatches(vars){
    // if (vars[1] && vars [2] && vars[3] == 2){
    //     console.log("YOU WIN!!!");
    // } else {
    //     console.log("YOU LOSE");
    // }

    let allMatch = vars.every(function(element) {
        return element === 2;
      });
      
      console.log(allMatch);
}

function decreaseBankroll(bankroll){
    bankroll -= 5;
}

function increaseBankroll(bankroll){
    bankroll += 15;
}

// ### @@@ $$$
