let positions = 10;
let cpuCount = 0;
let cpuCost = 10;
let pps = 0;
let multiplier = 1;
let cpuRequires = 10;
function updateUI(){
    document.getElementById('positions').textContent = positions;
    document.getElementById('cpuCost').textContent = cpuCost;
    document.getElementById('cpuCount').textContent = cpuCount
    document.getElementById('pps').textContent=pps;
    document.getElementById('mult').textContent=multiplier;
    document.getElementById('cpuUpdtReq').textContent=cpuRequires;
}
function buyCPU(){
    if(positions >= cpuCost){
        positions -= cpuCost;
        pps+=1;
        cpuCount+=1;
    }
}
function upgrade(){
    if(cpuCount%cpuRequires==0&&cpuCount!=0){
        document.getElementById('upgradeBtn').classList.remove('unclickable');
        cpuCost=Math.round(cpuCost**1.25);
        positions=0;
        multiplier*=2;
        cpuRequires=Math.round(cpuRequires**1.1);
    }
    else{
        document.getElementById('upgradeBtn').classList.add('unclickable');
    }
}
function increment(){
    positions+=pps*multiplier;
}
function onclick(){
    document.getElementById('buycpu').addEventListener('click', buyCPU, false);
    document.getElementById('upgradeBtn').addEventListener('click', upgrade, false);
}
setInterval(function gameLoop(){
    updateUI();
    increment();
    onclick();
},1000)
