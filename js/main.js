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
        positions - cpuCost;
        cpuCost = Math.round(0.5*(cpuCost**1.15)+15)
        pps+=Math.round(0.5*(pps**1.06)+4);
        cpuCount+=1;
    }
    if(cpuCount%10==0&&cpuCount!=0){
        document.getElementById('upgradeBtn').style.display="block";
    }
}
function upgrade(){
        cpuCost=Math.round(cpuCost**1.25);
        positions=0;
        multiplier*=2;
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
    positions += pps;
    buyCPUBtn.addEventListener('click', buyCPU, false);
},1000)
