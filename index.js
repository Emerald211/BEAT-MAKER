
function kick() {
    const kick = document.querySelector("#kick")
    console.log(kick)

    kick.play()
}

function snare() {
    const snare = document.querySelector("#snare");
    snare.play()
}

function firstTom() {
    const firstTom = document.querySelector("#firstTom");
    firstTom.play();
}

function secondTom() {
    const secondTom = document.querySelector("#secondTom");
    secondTom.play();
}

function hihat() {
    const hihat = document.querySelector("#hihat");
    hihat.play()
}

function cymbals() {
    const cymbals = document.querySelector("#cymbals");
    if(cymbals.paused) {
        cymbals.play()
    } else {
        cymbals.paused
    } 
    
}

function playMusic() {
    const playMusic = document.querySelector("#playMusic");
    if(playMusic.paused){
        playMusic.play();
    } else {
        playMusic.pause()
    }
    
}