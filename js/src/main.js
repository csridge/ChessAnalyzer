let player = {
    analysis: 5,
    production: 0,
    gpt: [0, 0, 0, 0],
    accuracy: 0.5,
    stockfish: 0
};

const analysis_display = document.querySelector('.game-header_analysis')
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
let lastTime = performance.now();

function gameLoop(currentTime) {
    const delta = (currentTime - lastTime) / 1000;
    lastTime = currentTime;

    // GPT tiers produce lower-tier GPTs smoothly
    for (let tier = player.gpt.length - 1; tier > 0; tier--) {
        player.gpt[tier - 1] += player.gpt[tier] * player.accuracy * delta;
    }

    // GPT-1 produces analysis
    player.analysis += player.gpt[0] * player.accuracy * delta;

    updateUI();
    requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);

function updateUI() {
    // Update Analysis (smooth)
    document.querySelector('.game-header_analysis').textContent = player.analysis.toFixed(2);

    // Update Production
    player.production = player.gpt[0] * player.accuracy;
    document.querySelector('.game-header_production').textContent = player.production.toFixed(2);

    // Update each GPT tier
    player.gpt.forEach((amount, tier) => {
        const row = document.querySelector(`.gpt${tier + 1}`);
        const buyAmountSpan = row.querySelector('.chatgpt_amount');
        const buyButtonSpan = row.querySelector('.button-content div:nth-child(1) span');

        if (buyAmountSpan) buyAmountSpan.textContent = amount;
        if (buyButtonSpan) buyButtonSpan.textContent = amount;

        // Update GPT row (cost, visibility, and disabled state)
        updateGPTRow(tier, amount);
    });
}


document.querySelectorAll('.buy-button').forEach(button => {
    button.addEventListener('click', () => {
        const gptClass = Array.from(button.classList).find(c => c.startsWith('gpt'));
        const tier = parseInt(gptClass.replace('gpt', '')) - 1;
        buyGPT(tier);
    });
});
// Updates production: higher GPT tiers produce lower GPT tiers,
// and GPT-1 produces analysis.

function updateGPTRow(tier, amount) {
    // Get the cost for this tier.
    const cost = getCost(tier);
    
    // Get the button element for the current GPT tier.
    const btnSelector = `.buy-button.gpt${tier + 1}`;
    const btn = document.querySelector(btnSelector);
    
    if (btn) {
        if (player.analysis < cost) {
            btn.classList.add('disabled');
        } else {
            btn.classList.remove('disabled');
        }
    }
    
    
    // Get the GPT row element.
    const rowSelector = `.gpt${tier + 1}`;
    const row = document.querySelector(rowSelector);
    
    // If amount is 10 or more, try to unlock the next GPT row.
    const rows = document.querySelectorAll('.chatgpt-row');
    const nextRow = rows[tier + 1];
    if (amount >= 10 && nextRow) {
        nextRow.style.display = 'flex';
    }
    
    // Update the cost display within the row.
    const costEl = row ? row.querySelector('.button-content div:nth-child(2) span') : null;
    if (costEl) {
        costEl.textContent = cost;
    }
}

window.onload = updateUI;
setInterval(() => {
    for (let i = 0; i < player.gpt.length; i++) {
        updateGPTRow(i, player.gpt[i]);
    }
    updateUI();
}, 1000);