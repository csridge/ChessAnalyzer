// Also called analysis.js but yeah idk
let player = {
    analysis: 10,
    aps: 0,
    computers: 0,
    computerCost : 10,
    ai : 0,
    aiCost : 100
};
const buyComputerButton = document.getElementById('buy-computer-button');
const buyAIButton = document.getElementById('buy-ai-button');
let analysisCount = document.getElementById('analysis-count');
let apsDiv = document.getElementById('analysis-per-sec');
function updateDisplay() {
        analysisCount.textContent = `You have ${player.analysis.toFixed(2)} Analysis`;
        apsDiv.textContent = `You are making ${player.aps.toFixed(2)} Analysis per second`;
        buyComputerButton.textContent = `Buy a computer (Cost: ${player.computerCost.toFixed(2)} Analysis)`;
        buyAIButton.textContent = `Buy an AI (Cost: ${player.aiCost.toFixed(2)} Analysis)`
        if (player.analysis < player.computerCost){
            buyComputerButton.classList.add('locked')
        } else {
            buyComputerButton.classList.remove('locked')
        }
        if (player.analysis < player.aiCost){
            buyAIButton.classList.add('locked')
        } else {
            buyComputerButton.classList.remove('locked')
        }
}

function updateButtonStates() {
    const buyComputerButton = document.getElementById('buyComputerButton');
    const buyAIButton = document.getElementById('buyAIButton');

    buyComputerButton.classList.toggle('locked', player.analysis < player.computerCost);
    buyAIButton.classList.toggle('locked', player.analysis < player.aiCost);

    buyComputerButton.disabled = player.analysis < player.computerCost;
    buyAIButton.disabled = player.analysis < player.aiCost;
}
function buy(type) {
    let cost;
    let increment;
    
    switch (type) {
        case "computer":
            cost = player.computerCost;
            increment = () => {
                player.computers++;
                player.aps = player.aps <= 0 ? player.aps + 1 : player.aps * 1.08;
                player.computerCost *= 1.16;
            };
            break;
        case "ai":
            cost = player.aiCost;
            increment = () => {
                player.ai++;
                player.aps *= 1.5;
                player.aiCost *= 1.1;
            };
            break;
        default:
            console.log("Unknown purchase type");
            return;
    }

    if (player.analysis >= cost) {
        player.analysis -= cost;
        increment();
        updateDisplay();
        updateButtonStates();
    } else {
        console.log(`Not enough analysis to buy ${type}`);
    }
}
function matteric(){
    if (player.analysis){}
}
setInterval(() => {
    player.analysis += (player.aps)/33;
    updateDisplay();
    updateButtonStates();
}, 33);

let buyButton = document.getElementById('buy-computer-button');
document.getElementById('buy-computer-button').addEventListener('click', () => buy("computer"));
document.getElementById('buy-ai-button').addEventListener('click', () => buy("ai"));
updateDisplay();
updateButtonStates();