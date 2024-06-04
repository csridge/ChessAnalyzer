let positions = 0;
let cpuCount = 0
let cpuCost = 0
const positionsDisplay = document.getElementById('positions')
const ppsDsiplay = document.getElementById('pps')
let pps = 0
const buyCPUBtn = document.getElementById('buycpu')
function updateUI(){
    positionsDisplay.textContent = positions;
    document.getElementById('cpuCost').textContent = cpuCost;
    document.getElementById('cpuCount').textContent = cpuCount
    document.getElementById('pps').textContent = pps;
}
function buyCPU(){
    if (positions >= cpuCost){
        positions - cpuCost;
        cpuCost = Math.round(0.5*(cpuCost**1.15)+15)
        pps+=Math.round(0.5*(pps**1.5)+4);
        cpuCount+=1;
    }
}
setInterval(function gameLoop(){
    updateUI();
    positions += pps
    buyCPUBtn.addEventListener('click', buyCPU, false);
},1000)
