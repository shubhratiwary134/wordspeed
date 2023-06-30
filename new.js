let alphabets = ["nice","through",
    "love",
    "all",
    "also",
    "and",
    "as",
    "at",
    "be",
    "because",
    "but",
    "can",
    "come",
    "could",
    "day",
    "do",
    "even",
    "find",
    "first",
    "for",
    "from",
    "get",
    "give",
    "go",
    "have",
    "he",
    "her",
    "here",
    "him",
    "his",
    "how",
    "I",
    "if",
    "in",
    "into",
    "it",
    "its",
    "just",
    "know",
    "like",
    "look",
    "make",
    "man",
    "many",
    "me",
    "more",
    "my",
    "new",
    "no",
    "not",
    "now",
    "of",
    "on",
    "one",
    "only",
    "or",
    "other",
    "our",
    "out",
    "people",
    "say",
    "see",
    "she",
    "so",
    "some",
    "take",
    "tell",
    "than",
    "that",
    "the",
    "their",
    "them",
    "then",
    "there",
    "these",
    "they",
    "thing",
    "think",
    "this",
    "those",
    "time",
    "to",
    "two",
    "up",
    "use",
    "very",
    "want",
    "way",
    "we",
    "well",
    "what",
    "when",
    "which",
    "who",
    "will",
    "with",
    "would",
    "year",
    "you",
    "your"]

let start = document.getElementById("startBtn")
let next = document.getElementById("nextBtn")
let input = document.getElementById("inputForWordSpeed")
let generate = document.getElementById("generator")
let statistics = document.getElementById("statistics")
let elementstat = document.getElementById("elementForStatistics")
let random = 0
let generateComplete = false
let booleanForStatistics = false
let arrayForWords = []
let countSpace = 0
let minutes = 0
let seconds = 59
let miliseconds = 100
let interval
let varForAccuracy = 0

function timer() {
    // let Fortimer = setInterval(timer1(),1000)
    miliseconds -= 1
    if (miliseconds == 0) {
        seconds -= 1
        miliseconds = 100

        if (seconds < 0) {
            seconds = 0
            minutes = 0
            miliseconds = 0
            document.getElementById("displayTimer").textContent = `${minutes}0:${seconds}0 :${miliseconds}0`
            // minutes -= 1
            // seconds=60
            clearInterval(interval)
            booleanForStatistics = true
            document.getElementById("inputForWordSpeed").addEventListener("keypress", (e) => {
                e.preventDefault()

            })

            let finalAccuracy = Math.floor((varForAccuracy / countSpace) * 100)
            let stringForstats = `<div>words per minutes: ${countSpace}(WPM)</div>
                                     <div>accuracy: ${finalAccuracy}%</div>
                                     <div>right words: ${varForAccuracy}</div>
                                     <div> wrong words: ${countSpace - varForAccuracy}</div>`
            document.getElementById("elementForStatistics").style.display = "flex";
            document.getElementById("elementForStatistics").style.justifyContent = "center";
            document.getElementById("elementForStatistics").style.alignItems = "center";
            elementstat.innerHTML = stringForstats

            document.getElementById("displayTimer").style.opacity = "0";



        }
    }


    document.getElementById("displayTimer").textContent = `${minutes}:${seconds} :${miliseconds}`

}

start.addEventListener("click", () => {
    if (generateComplete == false) {
        for (let i = 0; i <= 99; i++) {
            random = Math.floor(Math.random() * alphabets.length)
            arrayForWords.push(alphabets[random])
            generate.innerHTML += `<div class="letters" id="${i}">${alphabets[random]}</div> `

            generateComplete = true
        }
        interval = setInterval(timer, 10)
        seconds = 59
        miliseconds = 100
        countSpace = 0
    }

    document.getElementById("displayTimer").style.display = "flex";
    document.getElementById("displayTimer").style.justifyContent = "center";
    document.getElementById("displayTimer").style.alignItems = "center";
    document.getElementById("displayTimer").style.opacity = "1";


})


document.body.addEventListener("keydown", (e) => {

    if (e.code == "Space" && seconds!=0) {

        if (arrayForWords[countSpace] == input.value || input.value == ` ${arrayForWords[countSpace]}`) {
            document.getElementById(countSpace).style.color = "white"
            varForAccuracy += 1
        }
        else {
            document.getElementById(countSpace).style.color = "red"
        }



        countSpace += 1

        input.value = ""
    }

})
/*next.addEventListener("click", () => {
    
    input.value = ""
    generateComplete = false
})*/


next.addEventListener("click", () => {

    generate.textContent = ""
    input.value = ""
    generateComplete = false
    minutes = 0
    seconds = 59
    miliseconds = 100
    clearInterval(interval)
    elementstat.textContent = `STATISTICS`


}
)









