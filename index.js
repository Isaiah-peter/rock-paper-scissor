let home_page = document.getElementById("home");
let choose_page = document.getElementById("choose_page")
let user_choose = document.getElementById("user-choose")
let computer_choose = document.getElementById("computer-choose")
let user_choose_img = document.getElementById("user-choose-img")
let computer_choose_img = document.getElementById("computer-choose-img")
let score = document.getElementById("score")
let win_lost = document.getElementById("win-lost")

let random_item = ["rock", "paper", "scissors"]

score.innerHTML = "0"

choose_page.style.display = "none"

const play_again = () => {  
    home_page.style.display = "flex"
    choose_page.style.display = "none"
}

const select_choose = (choose) => {
    home_page.style.display = "none"
    choose_page.style.display = "flex"

    let computer = computerchoose()

    select_choose_design(user_choose, choose, user_choose_img)
    select_choose_design(computer_choose, computer, computer_choose_img) 
    console.log(choose, computer)
    game_rule(computer, choose)
}

const game_rule = (computer, user) => {
    if (computer == "scissors")
    {
        if (user == "paper") {
            win_lost.innerHTML = "YOU LOSE"
        } else if (user == "rock") {
            win_lost.innerHTML = "YOU WIN"
            let result = Number(score.innerHTML) + 1
            score.innerHTML = result.toString()
        } else {
            win_lost.innerHTML = "YOU TIE"
        }
    }else if (computer == "paper")
    {
        if (user == "rock") {
            win_lost.innerHTML = "YOU LOSE"
        } else if (user == "scissors") {
            win_lost.innerHTML = "YOU WIN"
            let result = Number(score.innerHTML) + 1
            score.innerHTML = result.toString()
        } else {
            win_lost.innerHTML = "YOU TIE"
        }
    } else if (computer == "rock")
    {
        if (user == "scissors") {
            win_lost.innerHTML = "YOU LOSE"
        } else if (user == "paper") {
            win_lost.innerHTML = "YOU WIN"
            let result = Number(score.innerHTML) + 1
            score.innerHTML = result.toString()
        } else {
            win_lost.innerHTML = "YOU TIE"
        }
    }
}

const select_choose_design = (player, choose, choose_img) => {
    if (choose == "scissors") {
        player.classList.remove("paper")
        player.classList.remove("rock")
        player.classList.add(choose)
        choose_img.src = "./images/icon-scissors.svg"
    } else if (choose == "rock") {
        player.classList.remove("scissors")
        player.classList.remove("paper")
        player.classList.add(choose)
        choose_img.src = "./images/icon-rock.svg"
    } else if (choose == "paper") {
        player.classList.remove("rock")
        player.classList.remove("scissors")
        player.classList.add(choose)
        choose_img.src = "./images/icon-paper.svg"
    }
} 

const computerchoose = () => {
    let id = Math.floor(Math.random() * random_item.length)
    return random_item[id]
}