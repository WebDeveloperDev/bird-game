console.log("Hi there, we are in dino game")

let playsec = document.getElementById("playsec")
let playbtn = document.getElementById("playbtn")
let gameover = document.getElementById("gameover")
let cact = document.getElementsByClassName("cact")
let char = document.getElementById("char")
let opt1 = 1
Array.from(cact).forEach(element => {
    // element.style.animationName="cardanim"
    globalThis
    opt1 = element
});
function distance(a,b) {
    x1=a.offsetLeft
    x2=b.offsetLeft
    y1=a.offsetTop
    y2=b.offsetTop
    x=x2-x1
    y=y2-y1
    dict=Math.sqrt(x*x+y*y)
    return Math.floor(dict)
}
playbtn.addEventListener("click", function () {
    var gameaudio = new Audio('gameaudio.mp3');
    var gameoveraudio = new Audio('gameoveraudio.mp3');
    var jump = new Audio('jump.wav');
    gameaudio.play();
    const start = new Date()
    playbtn.style.display = "none"
    opt1.style.animationName = "cardanim"
    // console.log("clicked")
    const optinterval=setInterval(optchanger,5000)
    const myInterval = setInterval(myTimer, 1);
    function myTimer() {
        let dictelm=distance(char,opt1)
        // console.log(dictelm)
        var currentscore = new Date()
        var userscore = Math.floor((currentscore - start) / 100)
        let scoresec = document.getElementById("scoresec")
        scoresec.innerHTML = `
            <strong>Your score: </strong> ${userscore} 
        `
        if ( dictelm<70) {
            gameoveraudio.play()
            gameover.style.display = "block"
            gameover.style.animationName = "gameoveranim"
            gameaudio.pause()
            let end = new Date()
            console.log("out")
            opt1.style.animationName = "danim"
            clearInterval(optinterval)
            myStopFunction()
            setTimeout(() => {
                gameover.style.display = "none"
                playbtn.style.display = "block"
            }, 3000);
        }
    }
    function myStopFunction() {
        clearInterval(myInterval);
    }
    document.body.addEventListener("keyup", function () {
        // console.log("keyup")
        jump.play()
        char.style.animationName = "charanim"
        setTimeout(() => {
             // char.style.marginTop="256px"
             char.style.animationName = "char"
         }, 1500);
    })
})
function optchanger() {
    let opturl=["airplane.png","hot-air-balloon.png","storm.png","ufo.png"]
    let randomopt=opturl[ Math.floor(Math.random()*10/3)]
    opt1.innerHTML= `<img src="${randomopt}" alt="${randomopt}" srcset="">`
}