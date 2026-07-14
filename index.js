let homeCount = 0
let guestCount = 0
let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")

function oneHomePoint(){
    homeCount += 1
    homeScore.textContent = homeCount
}

function twoHomePoints(){
    homeCount += 2
    homeScore.textContent = homeCount
}

function threeHomePoints(){
    homeCount += 3
    homeScore.textContent = homeCount
}

function oneGuestPoint(){
    guestCount += 1
    guestScore.textContent = guestCount
}

function twoGuestPoints(){
    guestCount += 2
    guestScore.textContent = guestCount
}

function threeGuestPoints(){
    guestCount += 3
    guestScore.textContent = guestCount
}