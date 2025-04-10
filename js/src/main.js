let player = {
    analysis: 5,
    production: 0,
    gpt: [0, 0, 0, 0],
    accuracy: 0.5,
    stockfish: 0
};

const analysisDisp = document.querySelector('.game-header_analysis')
const buyBtn = document.querySelectorAll('.buy-button');
const rows = document.querySelectorAll('.chatgpt-row');
let costs = [5, 50, 500, 500000]
function getCost(tier) {
    const baseCost = costs[tier];
    const upgrades = Math.floor(player.gpt[tier] / 10);
    return baseCost * 8 ** upgrades;
}

function buyGPT(tier) {
    const cost = getCost(tier);
    if (player.analysis >= cost) {
        player.analysis -= cost;
        player.gpt[tier]++;
        updateUI();
    }
}


function updateUI() {
    // Update Analysis
    document.querySelector('.game-header_analysis').textContent = player.analysis;

    // Loop through each GPT tier and update UI
    player.gpt.forEach((amount, i) => {
        const tier = i;
        const nextRow = rows[tier + 1];
        document.querySelector(`.gpt${tier + 1} .chatgpt_amount`).textContent = amount;
        document.querySelector(`.gpt${tier + 1} .button-content div:nth-child(1) span`).textContent = amount;
        if (player.analysis < getCost(tier)) {
            document.querySelector(`.buy-button.gpt${tier + 1}`).classList.add('disabled')
        }        
        if (amount >= 10 && nextRow) {
            nextRow.style.display = 'flex';
        }
        const cost = getCost(tier);
        document.querySelector(`.gpt${tier + 1} .button-content div:nth-child(2) span`).textContent = cost;
    });
    player.production = player.gpt[0] * player.accuracy
    document.querySelector('.game-header_production').textContent = player.production

}


document.querySelectorAll('.buy-button').forEach(button => {
    button.addEventListener('click', () => {
        const gptClass = Array.from(button.classList).find(c => c.startsWith('gpt'));
        const tier = parseInt(gptClass.replace('gpt', '')) - 1;
        buyGPT(tier);
    });
});

window.onload = updateUI;
setInterval(() => {
    player.analysis += player.gpt.reduce((total, amount) => total + amount, 0) * player.accuracy; // Sum up all GPT productions
    updateUI();
}, 1000);
