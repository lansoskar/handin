// opg 1 What to Wear // make a function where based on the number logs out different text
/*
const clotheToWear = (degrees) => {
    if (degrees < 0) {
        console.log("ski-underbukser og vinterjakke");
    }
    else if (degrees > 0 && degrees < 12) {
        console.log("bukser og trøje");
    } else if (degrees >= 12) {
        console.log("t-shirt og shorts");
    } else {
        console.log('fejl');
    }
}

clotheToWear(11)
*/

/*
// opg 2 Dice game // make a variable that gives a random whole number between 1 - 6 throw in loop based on amount of rolls
// add auto increment whenever a 6 is hit and if sixes value hits 2 log out jackpot
const diceRoller = (rolls) => {
    let sixes = 0
    for (i = 0; i < rolls; i++) {
        let randomNumber = Math.floor(Math.random() * 6) + 1    //mdn web docs
        if (randomNumber === 6) {
            sixes++;                                        //datamatiker ven, før brugte jeg sixes += 1
            console.log('rolled a 6');
        } else {
            console.log('alle gamblere stopper lige før de vinder!');
        }
    } if (sixes === 2) {
        console.log('JACKPOT');
    }
}

diceRoller(2)
*/

//opg 3 sentiment analyzer
// codelab tid gg kan ikke finde ud af det //
// make object arrays with the words and a score value - function should convert key strings into score value and add it up??
/*
const moodAnalyzer = (sentence) => {
    const p = {
        positiveWords: [
            {
                word: "love",
                score: 3,
            },
            {
                word: "happy",
                score: 2,
            },
            {
                word: "glad",
                score: 1
            },
        ]
    }

    const n = {
        negativeWords: [
            {
                word: "hate",
                score: -3,
            },
            {
                word: "sad",
                score: -2,
            },
            {
                word: "dislike",
                score: -1
            },
        ]
    }
     if (sentence.includes(p.positiveWords)) {
        //replace??
        //reduce??
}
moodAnalyzer();
*/





