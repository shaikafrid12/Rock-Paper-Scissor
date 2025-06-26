window.alert("Game start")
let [computer_score, user_score] = [0, 0];
let result = document.getElementById("result");
let choice = {
    'rock': {
        'rock': 'draw',
        'scissor': 'win',
        'paper': 'lose'
    },
    'scissor': {
        'rock': 'lose',
        'scissor': 'draw',
        'paper': 'win'
    },
    'paper': {
        'rock': 'win',
        'scissor': 'lose',
        'paper': 'draw'
    }
};

function checker(input) {
    var choices = ['rock', 'paper', 'scissor'];
    var num = Math.floor(Math.random() * 3);

    document.getElementById("comp_choice").innerHTML = `Computer choose <span> ${choices[num]}</span>`;
    document.getElementById("user_choice").innerHTML = `You choose <span> ${input.toUpperCase()}</span>`;
    let computer_choice = choices[num];
    switch (choice[input][computer_choice]) {
        case 'win':
            result.style.cssText = "background-color:#cefdce; color:#689f38";
            result.innerHTML = "You Win";
            user_score++;
            break;
        case 'lose':
            result.style.cssText = "background-color: #ffdde0; color: #d32f2f";
            result.innerHTML = "You Lose";
            computer_score++;
            break;
        default:
            result.style.cssText = "background-color: #e5e5e5; color: #808080";
            result.innerHTML = "DRAW";
            break;
    }

    document.getElementById("computer_score").innerHTML = computer_score;
    document.getElementById("user_score").innerHTML = user_score;
}

// Add event listeners to buttons
const buttons = document.querySelectorAll('.weapons button');
const moves = ['rock', 'paper', 'scissor'];
buttons.forEach((btn, idx) => {
    btn.onclick = () => checker(moves[idx]);
});
