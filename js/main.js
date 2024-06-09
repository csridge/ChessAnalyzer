let positions = 10;
let cpuCount = 0;
let cpuCost = 10;
let pps = 0;
let multiplier = 1;
function updateUI(){
    document.getElementById('positions').textContent = positions;
    document.getElementById('cpuCost').textContent = cpuCost;
    document.getElementById('cpuCount').textContent = cpuCount
    document.getElementById('pps').textContent=pps;
    document.getElementById('mult').textContent=multiplier;
}
function buyCPU(){
    if (positions >= cpuCost){
        positions -= cpuCost;
        pps+=1;cpuCount+=1
        if(cpuCount%10==0&&cpuCount!=0){cpuCost*=10}
    }
}
setInterval(function gameLoop(){
    updateUI();
    positions+=pps*multiplier;
    document.getElementById('buycpu').addEventListener('click', buyCPU, false);
},1000)
